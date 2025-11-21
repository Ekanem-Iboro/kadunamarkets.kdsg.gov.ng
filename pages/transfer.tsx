'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  CheckCircle2,
  Copy,
  ArrowLeft,
  Building2,
  CreditCard,
  Hash,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Separator } from '../components/ui/separator'
import { formatCurrency } from '../components/lib/format-currency'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { useBookingStore, useConfirmStore } from '@/store/store'
import moment from 'moment'

export default function TransferPage() {
  const router = useRouter()
  const { setConfirmData } = useConfirmStore()
  const { bookingData, clearBookingData } = useBookingStore()

  const [timer, setTimer] = useState(120)
  const [copied, setCopied] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [isCheckingPayment, setIsCheckingPayment] = useState(false)
  const [navigationInProgress, setNavigationInProgress] = useState(false)

  // Fixed: Properly parse localStorage values
  const customerEmail =
    typeof window !== 'undefined'
      ? (() => {
          const email = localStorage.getItem('customerEmail')
          return email ? JSON.parse(email) : ''
        })()
      : ''

  const customerFullname =
    typeof window !== 'undefined'
      ? (() => {
          const name = localStorage.getItem('customerFullname')
          return name ? JSON.parse(name) : ''
        })()
      : ''

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000)
      return () => clearTimeout(countdown)
    }
  }, [timer])

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setCopiedField(field)
    setTimeout(() => {
      setCopied(false)
      setCopiedField(null)
    }, 2000)
  }

  const navigateToConfirm = (confirmData: any) => {
    if (navigationInProgress) return

    setNavigationInProgress(true)
    // Set the confirm data BEFORE navigating
    setConfirmData(confirmData)

    // Use a small delay to ensure store is updated before navigation
    setTimeout(() => {
      clearBookingData()
      // Clean up localStorage
      localStorage.removeItem('customerEmail')
      localStorage.removeItem('customerFullname')
      router.push('/confirm-payment')
    }, 100)
  }

  const handlePaymentConfirm = async () => {
    if (!bookingData || navigationInProgress) return

    setIsCheckingPayment(true)

    try {
      // Create the payload object with properly formatted data
      const confirmPayload = {
        transactionRef: bookingData.transactionReference || `TREF${Date.now()}`,
        selectedDateRange: [bookingData.fromDate, bookingData.toDate],
        customerEmail: customerEmail, // Now properly parsed
        customerFullname: customerFullname, // Now properly parsed
        hallName: bookingData.hallName,
        numberOfDays: bookingData.days,
        baseBookingFee: bookingData.baseAmount,
        finalBookingAmount: bookingData.total,
      }

      console.log('Sending payload:', confirmPayload) // Debug log

      // Make the API request with JSON.stringify()
      const response = await fetch(
        'https://kadunamarkets.kdsg.gov.ng/hall/confirm_status.php',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(confirmPayload),
        }
      )

      if (response.ok) {
        const result = await response.json()

        // Prepare the confirm data with all necessary information
        const confirmData = {
          transactionReference: confirmPayload.transactionRef,
          hallName: confirmPayload.hallName,
          numberOfDays: confirmPayload.numberOfDays,
          days: confirmPayload.numberOfDays,
          baseAmount: confirmPayload.baseBookingFee,
          total: confirmPayload.finalBookingAmount,
          discount: bookingData.discount || 0,
          charges: bookingData.charges || 0,
          fromDate: bookingData.fromDate,
          toDate: bookingData.toDate,
          status: result.transactionStatusApi || '',
          message: result.message || 'Payment confirmed successfully',
          customerEmail: customerEmail,
          customerFullname: customerFullname,
        }

        navigateToConfirm(confirmData)
      } else {
        console.error('Payment confirmation failed:', response.statusText)
        setIsCheckingPayment(false)
      }
    } catch (error) {
      console.error('Payment confirmation error:', error)
      setIsCheckingPayment(false)
    }
  }

  const handleCancel = () => {
    if (navigationInProgress) return

    clearBookingData()
    // Clean up localStorage
    localStorage.removeItem('customerEmail')
    localStorage.removeItem('customerFullname')
    router.push('/hall')
  }

  useEffect(() => {
    if (!bookingData && !navigationInProgress) {
      router.push('/hall')
    }
  }, [bookingData, router, navigationInProgress])

  if (!bookingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No booking data found. Redirecting...</p>
        </div>
      </div>
    )
  }

  const progress = ((30 - timer) / 30) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={handleCancel}
            className="mb-6 text-[#2980B9] hover:text-[#5DADE2]"
            disabled={isCheckingPayment || navigationInProgress}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Halls
          </Button>

          <Card className="shadow-2xl border-none overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#2980B9] to-[#5DADE2] text-white pb-8">
              <CardTitle className="text-3xl">Complete Your Payment</CardTitle>
              <CardDescription className="text-white/90 text-base">
                Transfer to the account below and confirm your payment
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8 space-y-8">
              {/* Booking Summary */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-[#2C3E50] mb-4">
                  Booking Summary
                </h3>
                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hall:</span>
                    <span className="font-semibold text-[#2C3E50]">
                      {bookingData.hallName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Days Booked:</span>
                    <span className="font-semibold text-[#2C3E50]">
                      {bookingData.days}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per Day:</span>
                    <span className="font-semibold text-[#2C3E50]">
                      {formatCurrency(bookingData.pricePerDay || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Amount:</span>
                    <span className="font-semibold text-[#2C3E50]">
                      {formatCurrency(bookingData.baseAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">From Date:</span>
                    <span className="font-semibold text-[#2C3E50]">
                      {moment(bookingData.fromDate).format('MMM DD, YYYY')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">To Date:</span>
                    <span className="font-semibold text-[#2C3E50]">
                      {moment(bookingData.toDate).format('MMM DD, YYYY')}
                    </span>
                  </div>
                  {bookingData.discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span className="text-gray-600">Discount:</span>
                      <span className="font-semibold">
                        -{formatCurrency(bookingData.discount)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Booking Charges:</span>
                    <span className="font-semibold text-[#2C3E50]">
                      {formatCurrency(bookingData.charges || 0)}
                    </span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-[#2C3E50]">
                      Total Amount:
                    </span>
                    <span className="font-bold text-[#2980B9] text-2xl">
                      {formatCurrency(bookingData.total)}
                    </span>
                  </div>
                  {bookingData.bookingId && (
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-gray-500">Booking ID:</span>
                      <span className="font-mono text-gray-600">
                        {bookingData.bookingId}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Transfer Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-[#2C3E50] mb-4">
                  Transfer Details
                </h3>
                <div className="border-2 border-[#2980B9] rounded-lg p-6 space-y-4 bg-white">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-[#2980B9] mt-1" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-500">Account Name</p>
                        <div className="flex items-center gap-2">
                          <p className="text-lg font-semibold text-[#2C3E50]">
                            {bookingData.accountName}
                          </p>
                          {/* <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleCopy(bookingData.accountName, 'accountName')
                            }
                            className="h-8 text-[#2980B9]"
                          >
                            {copied && copiedField === 'accountName' ? (
                              'Copied!'
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button> */}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Hash className="h-5 w-5 text-[#2980B9] mt-1" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-500">Account Number</p>
                        <div className="flex items-center gap-2">
                          <p className="text-xl font-bold text-[#2C3E50]">
                            {bookingData.accountNumber}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleCopy(
                                bookingData.accountNumber,
                                'accountNumber'
                              )
                            }
                            className="h-8 text-[#2980B9]"
                          >
                            {copied && copiedField === 'accountNumber' ? (
                              'Copied!'
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CreditCard className="h-5 w-5 text-[#2980B9] mt-1" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-500">Bank Name</p>
                        <div className="flex items-center gap-2">
                          <p className="text-lg font-semibold text-[#2C3E50]">
                            {bookingData.bankName}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleCopy(bookingData.bankName, 'bankName')
                            }
                            className="h-8 text-[#2980B9]"
                          >
                            {copied && copiedField === 'bankName' ? (
                              'Copied!'
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                      <p className="text-sm text-yellow-800">
                        <strong>Reference:</strong> Use your transaction
                        reference as the transfer memo
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Timer and Confirmation Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="mb-6">
                  <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#2980B9"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${
                          2 * Math.PI * 56 * (1 - progress / 100)
                        }`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-4xl font-bold text-[#2980B9]">
                          {timer}
                        </p>
                        <p className="text-xs text-gray-500">seconds</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    {timer > 0
                      ? 'Please wait to confirm payment...'
                      : 'You can now confirm your payment'}
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={handleCancel}
                    className="flex-1 h-12 text-base border-2"
                    disabled={isCheckingPayment || navigationInProgress}
                  >
                    Cancel Booking
                  </Button>
                  <Button
                    disabled={
                      timer > 0 || isCheckingPayment || navigationInProgress
                    }
                    onClick={handlePaymentConfirm}
                    className={`flex-1 h-12 text-base font-semibold ${
                      timer > 0 || isCheckingPayment || navigationInProgress
                        ? 'bg-gray-500 cursor-not-allowed'
                        : 'bg-[#2980B9] hover:bg-[#5DADE2]'
                    }`}
                  >
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    {isCheckingPayment
                      ? 'Checking...'
                      : navigationInProgress
                      ? 'Redirecting...'
                      : 'I Have Paid'}
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
