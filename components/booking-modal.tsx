'use client';

import { useState, useEffect } from 'react'; // Added useEffect
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar as CalendarIcon, User, Mail, Phone, AlertCircle, Gift, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import moment from 'moment';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { DateRange } from 'react-day-picker';
import { Hall } from '@/components/lib/types';
import { useRouter } from 'next/navigation';
import { useBookingStore } from '@/store/store';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  }).format(amount);
};

interface UnavailableDateRange {
  from: string;
  to: string;
}

interface BookingPageProps {
  hall: Hall;
  onConfirm: (bookingData: any) => void;
}

interface HallPayment {
  baseBookingFee: number;
  couponCode: string;
  customerEmail: string;
  customerFullname: string;
  customerPhone: string;
  discountAmount: number;
  endDate: string;
  frontendCalculatedAmount: number;
  hallId: number;
  numberOfDays: number;
  startDate: string;
}

export function BookingPage({ hall, onConfirm }: BookingPageProps) {
  type FormValues = {
    customerFullname: string;
    customerEmail: string;
    customerPhone: string;
    dateRange: DateRange | undefined;
  };

  const { register, handleSubmit, control, watch, reset, setError, clearErrors, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      customerFullname: '',
      customerEmail: '',
      customerPhone: '',
      dateRange: undefined
    }
  });

  const [calculation, setCalculation] = useState({ days: 0, totalPrice: 0 });
  const [dateError, setDateError] = useState<string>('');
  const [rangeError, setRangeError] = useState<string>('');
  const [couponCode, setCouponCode] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const router = useRouter();
  const { setBookingData } = useBookingStore();

  const dateRange = watch('dateRange');

  // Add this useEffect to calculate pricing when dates change
  useEffect(() => {
    calculatePricing();
  }, [dateRange, discountPercentage, hall]);

  // Add this function to calculate pricing
  const calculatePricing = () => {
    if (!dateRange?.from || !dateRange?.to) {
      setCalculation({ days: 0, totalPrice: 0 });
      setDiscountAmount(0);
      return;
    }

    // Clear previous errors
    setDateError('');
    setRangeError('');

    const start = moment(dateRange.from);
    const end = moment(dateRange.to);

    // Check if end date is before start date
    if (end.isBefore(start)) {
      setDateError('End date cannot be before start date');
      setCalculation({ days: 0, totalPrice: 0 });
      return;
    }

    // Calculate number of days (inclusive)
    const days = end.diff(start, 'days') + 1;

    if (days <= 0) {
      setDateError('Please select valid dates');
      setCalculation({ days: 0, totalPrice: 0 });
      return;
    }

    // Check for unavailable dates in range
    if (hasUnavailableDatesBetween(dateRange.from, dateRange.to)) {
      setRangeError('Selected date range contains unavailable dates. Please choose different dates.');
      setCalculation({ days: 0, totalPrice: 0 });
      return;
    }

    // Calculate base price
    const basePrice = days * hall.pricePerDay;
    const totalBeforeDiscount = Number(basePrice);

    // Calculate discount
    const newDiscountAmount = Number(discountPercentage) > 0 ?
      Math.round(totalBeforeDiscount * (discountPercentage / 100)) : 0;

    const finalPrice = totalBeforeDiscount - newDiscountAmount + Number(hall.chargesFee);

    setDiscountAmount(newDiscountAmount);
    setCalculation({
      days,
      totalPrice: finalPrice > 0 ? finalPrice : 0
    });
  };

  const couponMutation = useMutation({
    mutationKey: ['couponcode'],
    mutationFn: async (couponCode: string) => {
      const response = await fetch(
        `https://kadunamarkets.kdsg.gov.ng/hall/check_coupon.php`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ couponCode: couponCode })
        }
      );

      if (!response.ok) throw new Error('Failed to fetch coupon code');
      return response.json();
    },
    onSuccess: (data) => {
      if (data.valid && data.discount_percentage > 0) {
        setDiscountPercentage(data.discount_percentage);
      } else {
        setDiscountPercentage(0);
        setDiscountAmount(0);
        calculatePricing(); // Recalculate pricing when coupon is removed
      }
    },
    onError: () => {
      setDiscountPercentage(0);
      setDiscountAmount(0);
      calculatePricing(); // Recalculate pricing when coupon fails
    }
  });

  const hallPaymentMutation = useMutation({
    mutationKey: ['hallpayment'],
    mutationFn: async (paymentData: HallPayment) => {
      const response = await fetch(
        `https://kadunamarkets.kdsg.gov.ng/hall/book_hall_az.php`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(paymentData)
        }
      );

      if (!response.ok) throw new Error('Failed to process payment');
      return response.json();
    },
    onSuccess: (data, paymentData) => {
      const fromDate = moment(paymentData.startDate).format('YYYY-MM-DD');
      const toDate = moment(paymentData.endDate).format('YYYY-MM-DD');

      const bookingData = {
        hallName: hall?.name || '',
        days: paymentData.numberOfDays,
        pricePerDay: hall?.pricePerDay || 0,
        charges: hall?.chargesFee || 0,
        total: paymentData.frontendCalculatedAmount,
        name: paymentData.customerFullname,
        phone: paymentData.customerPhone,
        bookingId: data.bookingId || '',
        baseAmount: paymentData.baseBookingFee,
        discount: paymentData.discountAmount,
        accountNumber: data?.data?.accountNumber || '',
        bankName: data?.data?.bankName || '',
        accountName: data?.data?.accountName || '',
        fromDate: fromDate, // Add this
        toDate: toDate,
        transactionReference: data?.data?.transactionReference   // Add this
      };
      setBookingData(bookingData);
      router.push('/transfer');
    }
  });

  const { data: unavailableData } = useQuery({
    queryKey: ['unavailable_dates', hall?.id],
    queryFn: async () => {
      if (!hall?.id) return { unavailableDates: [] };

      const response = await fetch(
        `https://kadunamarkets.kdsg.gov.ng/hall/get_unavailable_datez.php?hallId=${hall.id}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok) throw new Error('Failed to fetch unavailable dates');
      return response.json();
    },
    enabled: !!hall?.id,
  });

  const unavailableDates: UnavailableDateRange[] = unavailableData?.unavailableDates || [];

  const disabledDates: Date[] = [];
  unavailableDates.forEach(range => {
    const start = moment(range.from);
    const end = moment(range.to);
    let current = start.clone();

    while (current.isSameOrBefore(end, 'day')) {
      disabledDates.push(current.toDate());
      current.add(1, 'day');
    }
  });

  const hasUnavailableDatesBetween = (start: Date, end: Date): boolean => {
    const startDate = moment(start);
    const endDate = moment(end);

    let currentDate = startDate.clone();
    while (currentDate.isSameOrBefore(endDate, 'day')) {
      const dateStr = currentDate.format('YYYY-MM-DD');
      const isDisabled = disabledDates.some(d =>
        moment(d).format('YYYY-MM-DD') === dateStr
      );
      if (isDisabled) return true;
      currentDate.add(1, 'day');
    }

    return false;
  };

  const disabledMatcher = (date: Date) => {
    if (moment(date).isBefore(moment(), 'day')) {
      return true;
    }

    const dateStr = moment(date).format('YYYY-MM-DD');
    return disabledDates.some(d => moment(d).format('YYYY-MM-DD') === dateStr);
  };

  const handleDateSelect = (newRange: DateRange | undefined) => {
    // Don't close calendar automatically - let user select both dates
    // The calendar will stay open until user manually closes it or selects both dates
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      couponMutation.mutate(couponCode);
    }
  };

  const onSubmit = (data: FormValues) => {
    if (!data.dateRange?.from || !data.dateRange?.to) {
      setError('dateRange', { type: 'required', message: 'Please select booking dates' });
      return;
    }

    if (calculation.days === 0) {
      setError('dateRange', { type: 'custom', message: 'Please select valid booking dates' });
      return;
    }

    const fromDate = moment(data.dateRange.from).format('YYYY-MM-DD');
    const toDate = moment(data.dateRange.to).format('YYYY-MM-DD');

    const hallPaymentData: HallPayment = {
      baseBookingFee: hall.pricePerDay * calculation.days,
      couponCode: couponCode || "",
      customerEmail: data.customerEmail,
      customerFullname: data.customerFullname,
      customerPhone: data.customerPhone,
      discountAmount: discountAmount,
      endDate: toDate,
      frontendCalculatedAmount: calculation.totalPrice,
      hallId: hall.id,
      numberOfDays: calculation.days,
      startDate: fromDate
    };
    localStorage.setItem('customerEmail', JSON.stringify(hallPaymentData.customerEmail));
    localStorage.setItem('customerFullname', JSON.stringify(hallPaymentData.customerFullname));
    hallPaymentMutation.mutate(hallPaymentData);

    // Update the booking data with dates
    const bookingData = {
      hallName: hall?.name || '',
      days: calculation.days,
      pricePerDay: hall?.pricePerDay || 0,
      charges: hall?.chargesFee || 0,
      total: calculation.totalPrice,
      name: data.customerFullname,
      phone: data.customerPhone,
      bookingId: '', // This will be set in the mutation response
      baseAmount: hall.pricePerDay * calculation.days,
      discount: discountAmount,
      accountNumber: '', // These will be set in mutation response
      bankName: '',
      accountName: '',
      fromDate: fromDate, // Add this
      toDate: toDate,  // Add this
      transactionReference: ''
    };

    setBookingData(bookingData);
    // Don't navigate here - let the mutation onSuccess handle navigation

    onConfirm({
      hall,
      customerFullname: data.customerFullname,
      customerEmail: data.customerEmail,
      customerPhone: data.customerPhone,
      fromDate: fromDate,
      toDate: toDate,
      days: calculation.days,
      totalPrice: calculation.totalPrice,
      couponCode: couponCode || undefined,
      discountPercentage: discountPercentage > 0 ? discountPercentage : undefined,
      discountAmount: discountAmount > 0 ? discountAmount : undefined
    });

    handleClear();
  };

  const handleClear = () => {
    reset();
    setCalculation({ days: 0, totalPrice: 0 });
    setDateError('');
    setRangeError('');
    setCouponCode('');
    setDiscountPercentage(0);
    setDiscountAmount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2980B9] to-[#5DADE2] rounded-t-2xl p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">Book {hall.name}</h1>
          <p className="text-white/90 text-lg">Complete the form below to reserve your venue</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-b-2xl shadow-2xl p-8 space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Alert Messages */}
            {dateError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{dateError}</p>
              </div>
            )}

            {rangeError && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-start gap-3 ">
                <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-orange-700 text-sm font-semibold">Unavailable Dates in Range</p>
                  <p className="text-orange-600 text-sm mt-1">{rangeError}</p>
                </div>
              </div>
            )}

            {couponMutation.isError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">Invalid coupon code</p>
              </div>
            )}

            {couponMutation.isSuccess && discountPercentage > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                <Gift className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-green-700 text-sm">Coupon applied! Discount: {discountPercentage}% OFF</p>
              </div>
            )}

            <div className="space-y-5">
              {/* Full Name */}
              <div>
                <Label htmlFor="customerFullname" className="text-[#2C3E50] font-medium text-sm mb-2 block">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="customerFullname"
                    {...register('customerFullname', { required: 'Name is required' })}
                    className="pl-10 h-12 border-gray-300 focus:border-[#2980B9] focus:ring-[#2980B9]"
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.customerFullname && <p className="text-red-500 text-sm mt-1.5">{errors.customerFullname.message}</p>}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="customerEmail" className="text-[#2C3E50] font-medium text-sm mb-2 block">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="customerEmail"
                    type="email"
                    {...register('customerEmail', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Email is invalid' } })}
                    className="pl-10 h-12 border-gray-300 focus:border-[#2980B9] focus:ring-[#2980B9]"
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.customerEmail && <p className="text-red-500 text-sm mt-1.5">{errors.customerEmail.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="customerPhone" className="text-[#2C3E50] font-medium text-sm mb-2 block">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="customerPhone"
                    {...register('customerPhone', {
                      required: 'Phone number is required',
                      validate: (v) => (/^[0-9]{11}$/.test(v.replace(/\s/g, '')) ? true : 'Phone number must be 11 digits')
                    })}
                    className="pl-10 h-12 border-gray-300 focus:border-[#2980B9] focus:ring-[#2980B9]"
                    placeholder="08012345678"
                  />
                </div>
                {errors.customerPhone && <p className="text-red-500 text-sm mt-1.5">{errors.customerPhone.message}</p>}
              </div>

              {/* Date Range Picker */}
              <div>
                <Label className="text-[#2C3E50] font-medium text-sm mb-2 block">
                  Select Booking Dates
                </Label>
                <Controller
                  control={control}
                  name="dateRange"
                  rules={{ required: 'Please select booking dates' }}
                  render={({ field }) => (
                    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full h-12 justify-start text-left font-normal border-gray-300 hover:border-[#2980B9]"
                        >
                          <CalendarIcon className="mr-2 h-5 w-5 text-gray-400" />
                          {field.value?.from ? (
                            field.value.to ? (
                              <span className="text-gray-800">
                                {moment(field.value.from).format('MMM DD, YYYY')} - {moment(field.value.to).format('MMM DD, YYYY')}
                              </span>
                            ) : (
                              <span className="text-orange-600 font-medium">
                                Select end date - {moment(field.value.from).format('MMM DD, YYYY')}
                              </span>
                            )
                          ) : (
                            <span className="text-gray-500">Pick your booking dates</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <div className="p-4 space-y-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-800 text-sm">
                              {field.value?.from && !field.value?.to ? 'Select end date' : 'Select date range'}
                            </h3>
                            <button
                              type="button"
                              onClick={() => setIsCalendarOpen(false)}
                              className="p-1 hover:bg-gray-100 rounded transition-colors"
                            >
                              <X className="h-5 w-5 text-gray-500" />
                            </button>
                          </div>

                          <Calendar
                            mode="range"
                            selected={field.value}
                            onSelect={(range) => {
                              field.onChange(range);
                              handleDateSelect(range);
                            }}
                            disabled={disabledMatcher}
                            numberOfMonths={1}
                          />

                          <div className="flex gap-2 border-t pt-4">
                            <Button
                              type="button"
                              onClick={() => setIsCalendarOpen(false)}
                              className="flex-1 bg-[#2980B9] hover:bg-[#1f5f8f] text-white"
                            >
                              Confirm Dates
                            </Button>
                            <Button
                              type="button"
                              onClick={() => {
                                field.onChange(undefined);
                                setRangeError('');
                                setDateError('');
                                setCalculation({ days: 0, totalPrice: 0 });
                              }}
                              variant="outline"
                              className="flex-1"
                            >
                              Clear
                            </Button>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.dateRange && <p className="text-red-500 text-sm mt-1.5">{errors.dateRange.message}</p>}
                <p className="text-gray-500 text-xs mt-1.5">
                  Disabled dates are unavailable. Select continuous available dates only.
                </p>
              </div>

              {/* Coupon Code */}
              <div>
                <Label htmlFor="couponCode" className="text-[#2C3E50] font-medium text-sm mb-2 block">
                  Coupon Code (Optional)
                </Label>
                <div className="relative">
                  <Gift className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="couponCode"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="pl-10 h-12 border-gray-300 focus:border-[#2980B9] focus:ring-[#2980B9] pr-32"
                    placeholder="Enter your coupon code"
                  />
                  <Button
                    type="button"
                    onClick={handleApplyCoupon}
                    disabled={couponMutation.isPending || !couponCode.trim()}
                    className="absolute right-1 top-1 h-10 text-[#2980B9] bg-transparent hover:bg-[#2980B9] hover:text-white transition-colors"
                  >
                    {couponMutation.isPending ? 'Applying...' : 'Apply'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <AnimatePresence>
              {calculation.days > 0 && !dateError && !rangeError && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gradient-to-r from-[#2980B9] to-[#5DADE2] rounded-xl p-6 text-white shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/90">Price Per Day</span>
                      <span className="font-semibold text-lg">{formatCurrency(hall.pricePerDay)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/90">{calculation.days} Day{calculation.days > 1 ? 's' : ''}</span>
                      <span className="font-semibold text-lg">{formatCurrency(calculation.days * hall.pricePerDay)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/90">Booking Fee</span>
                      <span className="font-semibold text-lg">{formatCurrency(hall.chargesFee)}</span>
                    </div>
                    {discountPercentage > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-white/90">Discount ({discountPercentage}% OFF)</span>
                        <span className="font-semibold text-lg text-green-300">-{formatCurrency(discountAmount)}</span>
                      </div>
                    )}
                    <div className="border-t border-white/30 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">Total</span>
                        <span className="text-2xl font-bold">{formatCurrency(calculation.totalPrice)}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleClear}
                className="flex-1 h-12 text-base border-gray-300 hover:bg-gray-50"
              >
                Clear
              </Button>
              <Button
                type="submit"
                disabled={calculation.days === 0 || !!dateError || !!rangeError || hallPaymentMutation.isPending}
                className="flex-1 h-12 bg-gradient-to-r from-[#2980B9] to-[#5DADE2] hover:opacity-90 text-white font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {hallPaymentMutation.isPending ? 'Processing...' : 'Confirm Booking'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}