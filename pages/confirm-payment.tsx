import { useConfirmStore } from '@/store/store'
import {
  CheckCircle,
  AlertCircle,
  Clock,
  XCircle,
  AlertTriangle,
} from 'lucide-react'
import { useRouter } from 'next/router'
import moment from 'moment'
import { useEffect } from 'react'

function SuccessPage() {
  const { confirmData } = useConfirmStore()
  const router = useRouter()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusDisplay = () => {
    const status = confirmData?.status

    if (status === 'SUCCESSFUL') {
      return {
        icon: CheckCircle,
        title: 'Payment Successful!',
        message:
          'Your payment has been confirmed and your booking is now active.',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        iconColor: 'text-green-600',
        titleColor: 'text-green-900',
        messageColor: 'text-green-800',
        badgeBg: 'bg-green-100',
        badgeText: 'text-green-700',
      }
    } else if (status === 'PENDING') {
      return {
        icon: Clock,
        title: 'Payment Pending',
        message:
          'Your payment is being processed. Please allow up to 10 minutes for confirmation.',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        iconColor: 'text-blue-600',
        titleColor: 'text-blue-900',
        messageColor: 'text-blue-800',
        badgeBg: 'bg-blue-100',
        badgeText: 'text-blue-700',
      }
    } else if (status === 'FAILED') {
      return {
        icon: XCircle,
        title: 'Payment Failed',
        message:
          'Your payment could not be processed. Please check your details and try again.',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        iconColor: 'text-red-600',
        titleColor: 'text-red-900',
        messageColor: 'text-red-800',
        badgeBg: 'bg-red-100',
        badgeText: 'text-red-700',
      }
    } else if (status === 'NETWORK_ERROR') {
      return {
        icon: AlertTriangle,
        title: 'Network Error',
        message:
          'We encountered a network error while processing your payment. Please check your email for updates.',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        iconColor: 'text-yellow-600',
        titleColor: 'text-yellow-900',
        messageColor: 'text-yellow-800',
        badgeBg: 'bg-yellow-100',
        badgeText: 'text-yellow-700',
      }
    }

    // Default
    return {
      icon: AlertCircle,
      title: 'Booking Submitted',
      message: 'Your booking has been submitted. We will contact you shortly.',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      iconColor: 'text-gray-600',
      titleColor: 'text-gray-900',
      messageColor: 'text-gray-800',
      badgeBg: 'bg-gray-100',
      badgeText: 'text-gray-700',
    }
  }

  useEffect(() => {
    if (!confirmData) {
      router.push('/hall')
    }
  }, [confirmData, router])

  if (!confirmData) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 p-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600">
            No confirmation data found. Redirecting...
          </p>
        </div>
      </section>
    )
  }

  const statusDisplay = getStatusDisplay()
  const StatusIcon = statusDisplay.icon

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 p-4">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-12">
          {/* Status Icon and Title */}
          <div
            className={`w-24 h-24 ${statusDisplay.badgeBg} rounded-full flex items-center justify-center mx-auto mb-6`}
          >
            <StatusIcon className={`w-16 h-16 ${statusDisplay.iconColor}`} />
          </div>

          <h2 className={`text-4xl font-bold mb-2 ${statusDisplay.titleColor}`}>
            {statusDisplay.title}
          </h2>

          <p className={`text-xl mb-8 ${statusDisplay.messageColor}`}>
            {statusDisplay.message}
          </p>

          {/* Status Badge */}
          <div className="flex justify-center mb-8">
            <span
              className={`${statusDisplay.badgeBg} ${statusDisplay.badgeText} px-6 py-2 rounded-full font-semibold text-sm`}
            >
              Status: {confirmData.status || 'UNKNOWN'}
            </span>
          </div>

          {/* Transaction Reference */}
          {confirmData.transactionReference && (
            <div
              className={`${statusDisplay.bgColor} border-2 ${statusDisplay.borderColor} rounded-lg p-4 mb-8`}
            >
              <p className="text-sm text-gray-600">Transaction Reference</p>
              <p className="font-mono text-lg font-bold text-[#2C3E50] break-all">
                {confirmData.transactionReference}
              </p>
            </div>
          )}

          {/* Booking Details Card */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left space-y-4">
            <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
              Booking Details
            </h3>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Hall Name:</span>
              <span className="font-semibold text-[#2C3E50]">
                {confirmData.hallName}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Duration:</span>
              <span className="font-semibold text-[#2C3E50]">
                {confirmData.days} day(s)
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">From Date:</span>
              <span className="font-semibold text-[#2C3E50]">
                {moment(confirmData.fromDate).format('MMM DD, YYYY')}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">To Date:</span>
              <span className="font-semibold text-[#2C3E50]">
                {moment(confirmData.toDate).format('MMM DD, YYYY')}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Base Amount:</span>
              <span className="font-semibold text-[#2C3E50]">
                {formatCurrency(confirmData.baseAmount)}
              </span>
            </div>

            {confirmData.discount > 0 && (
              <div className="flex justify-between items-center text-green-600">
                <span className="text-gray-600">Discount:</span>
                <span className="font-semibold">
                  -{formatCurrency(confirmData.discount)}
                </span>
              </div>
            )}

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Charges:</span>
              <span className="font-semibold text-[#2C3E50]">
                {formatCurrency(confirmData.charges)}
              </span>
            </div>

            <div className="border-t pt-3 mt-2">
              <div className="flex justify-between items-center text-lg">
                <span className="font-bold text-[#2C3E50]">Total Amount:</span>
                <span className="font-bold text-[#2980B9] text-xl">
                  {formatCurrency(confirmData.total)}
                </span>
              </div>
            </div>
          </div>

          {/* Info Message */}
          <div
            className={`${statusDisplay.bgColor} border-2 ${statusDisplay.borderColor} rounded-lg p-6 mb-8`}
          >
            <p className={`${statusDisplay.messageColor}`}>
              A confirmation email has been sent to your email address with all
              the booking details and transaction information.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => {
                router.push('/hall')
                localStorage.clear()
              }}
              className="flex-1 px-8 py-4 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
              style={{ backgroundColor: '#2980B9' }}
              onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor =
                '#5DADE2')
              }
              onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor =
                '#2980B9')
              }
            >
              Back to Hall Listings
            </button>
          </div>

          {/* Additional Help Text for Pending/Failed Status */}
          {/* {(confirmData.status === 'PENDING' || confirmData.status === 'FAILED' || confirmData.status === 'NETWORK_ERROR') && (
                        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                            <p className="text-sm text-blue-800">
                                <strong>Need Help?</strong> If you have any questions about your booking, please contact our support team with your Transaction Reference above.
                            </p>
                        </div>
                    )} */}
        </div>
      </div>
    </section>
  )
}

export default SuccessPage
