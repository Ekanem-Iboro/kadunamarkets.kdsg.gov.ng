'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, MapPin, Users, Check, ChevronDown } from 'lucide-react'
import Footer from '../components/Footer'
import NewHead from '../components/NewHead'
import { useQuery } from '@tanstack/react-query'
import { Hall } from '../components/lib/types'
import { BookingPage } from '@/components/booking-modal'
import { LoadingAnimation } from '@/components/LoadingAnimation'

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(amount)
}

export default function SingleHallBooking() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [closeNav, setCloseNav] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY || window.pageYOffset || 0
      setCloseNav(scrolled < 100)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Use query to fetch hall data
  const {
    data: hallData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['hall'],
    queryFn: async (): Promise<Hall> => {
      const response = await fetch(
        'https://kadunamarkets.kdsg.gov.ng/hall/get_hall.php',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (!response.ok) {
        throw new Error('Failed to fetch hall data')
      }
      const data = await response.json()

      // Transform the API data to match our Hall interface
      return {
        id: data.data?.hall_id,
        name: data.data?.hall_name,
        image: data.data?.image_url,
        description: data.data?.description,
        pricePerDay: data.data?.base_booking_fee,
        chargesFee: data.data?.booking_charges,
      }
    },
  })

  const features = [
    { icon: Users, text: 'Capacity: 1000 guests' },
    { icon: Building2, text: 'State-of-the-art facilities' },
    { icon: Check, text: 'Professional lighting system' },
    { icon: Check, text: 'Well-equipped media room' },
    { icon: Check, text: 'VIP rooms available' },
    { icon: Check, text: 'Ample parking space' },
  ]

  const handleConfirmBooking = (bookingData: any) => {
    console.log('Booking confirmed:', bookingData)
    // Handle the booking confirmation logic here
    setIsFormOpen(false)
  }

  // Show loading animation
  if (isLoading) {
    return <LoadingAnimation />
  }

  // Show error state
  if (error || !hallData) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {closeNav && <NewHead />}
        <div className="flex items-center justify-center h-96">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center"
          >
            <div className="text-6xl mb-4">⚠️</div>
            <div className="text-2xl font-bold text-red-600 mb-2">
              Error Loading Hall Data
            </div>
            <p className="text-gray-600">Please try refreshing the page</p>
          </motion.div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {closeNav && <NewHead />}

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[1000px] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://kadunamarkets.kdsg.gov.ng/hall/img/hall_1.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2980B9]/40 to-[#2C3E50]/30" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-12 w-12" />
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Premium Venue
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {hallData.name}
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl opacity-90">
              Experience excellence in event hosting at Kaduna's premier
              conference center
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setIsFormOpen(true)
                  setTimeout(() => {
                    document
                      .getElementById('booking-form')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }, 100)
                }}
                className="bg-white text-[#2980B9] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Book This Venue
              </button>
              <a
                href="#details"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Details
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Pricing Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#2980B9] to-[#5DADE2] p-8 rounded-2xl text-white shadow-xl"
            >
              <p className="text-sm font-medium mb-2 opacity-90">
                Price per day
              </p>
              <p className="text-4xl font-bold mb-2">
                {formatCurrency(hallData.pricePerDay)}
              </p>
              <p className="text-sm opacity-75">Professional venue rental</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] p-8 rounded-2xl text-white shadow-xl"
            >
              <p className="text-sm font-medium mb-2 opacity-90">Booking fee</p>
              <p className="text-4xl font-bold mb-2">
                {formatCurrency(hallData.chargesFee)}
              </p>
              <p className="text-sm opacity-75">One-time processing fee</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        id="details"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for a successful event in one premium location
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#2980B9]/10 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-[#2980B9]" />
                  </div>
                  <p className="text-lg font-medium text-[#2C3E50]">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-[#2C3E50] mb-6">
            About the Venue
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {hallData.description}
          </p>

          <div className="flex items-center gap-3 text-[#2980B9]">
            <MapPin className="h-5 w-5" />
            <span className="font-medium">
              Located at Muritala Muhammad Race Course, Kaduna, Nigeria
            </span>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#2980B9] to-[#5DADE2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Book Your Event?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Secure your date at Kaduna's premier conference center today
            </p>
            <button
              onClick={() => {
                setIsFormOpen(true)
                setTimeout(() => {
                  document
                    .getElementById('booking-form')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="bg-white text-[#2980B9] px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center gap-2 mx-auto"
            >
              Book Now
              <ChevronDown className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Booking Form Section - Hidden by default, slides down when opened */}
      <motion.div
        id="booking-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="overflow-hidden bg-gray-50"
      >
        <BookingPage hall={hallData} onConfirm={handleConfirmBooking} />
      </motion.div>

      {/* Contact Section */}
      <Footer />
    </main>
  )
}
