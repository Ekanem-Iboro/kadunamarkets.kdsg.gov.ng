import React from 'react'
import { useRouter } from 'next/router'

type Props = {}

function confirmation({}: Props) {

  const router = useRouter()
  return (
    <section className="flex justify-center items-center text-gray-600 body-font h-screen">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="/tradefairBanner.jpeg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Thank you for registering!
            <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">You may proceed to make a payment of N15,000 to the account provided below to secure your stall. Upon successful transfer, kindly send proof of payment to +234 810 317 9578 or +234 802 376 0999 on WhatsApp to verify your registration.</p>
      <p>Account Number: <b>1210217697</b></p>
      <p>Account Name: <b>Kaduna Markets Development and Management Company</b></p>
      <p>Bank: <b>Zenith Bank</b></p>

      <div className="flex justify-center">
        <button 
        onClick={()=> router.push('/')}
        className="inline-flex text-white bg-indigo-500 mt-3 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">KMDMC Home</button>
      </div>
        {/* <p className='text-base'>Our team would be in touch</p> */}
    </div>
  </div>
</section>
  )
}

export default confirmation