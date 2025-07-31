import React from 'react'
import { FormEventHandler, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Auth_header from '../../components/Auth_header'
import Head from 'next/head'
import Tradefair_annimation from '../../components/Tradefair_annimation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'


interface FormData {
  name: string,
  phone: number,
  email: string,
  businessName: string
}

function vendor({}: FormData) {
  const [fullname, setFullname ] = useState("")
    const [phone, setPhone ] = useState("")
    const [email, setEmail ] = useState("")
    const [businessName, setBusinessName] = useState("")
    // const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

    const clearForm = () => {
      setFullname("")
      setPhone("")
      setEmail("")
      setBusinessName("")
  }

    const handleSubmit = async (event: any) => {
      event.preventDefault();

      if (fullname == '' || email == '' || phone == '' || businessName == '') {
          clearForm()
          toast.error("All fields are required!")

      } else {
          // const dbCollection = db
          setFullname(fullname)
          setEmail(email)
          setPhone(phone)
          setBusinessName(businessName)

          const collectionRef = collection(db, "sponsors")
          const payLoad = { fullname, email, phone, businessName }
          await addDoc(collectionRef, payLoad)
          toast.success("Registration Successful")
          clearForm()
      }
  }
  return (
    <>
    <motion.div className="">
    <Head>
      <title>Home &nbsp;|&nbsp; KMDMC</title>
      <link rel="icon" href="/logo.png" />
    </Head>
    <Auth_header />
  
        <div className='tradefair_container'>
              <div className='w-full flex h-screen lg:w-1/2 bg-gray-100 items-center justify-center'>
              <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
          <h1 className='text-3xl font-semibold'>Kaduna Markets Tradefair</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Sponsor registration</p>

          <div className='mt-8'>
            <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="fullname" className='text-lg font-medium'>Full Name</label>
                  <input type="text" id="fullname" name="fullname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={fullname} onChange={({ target }) => setFullname(target.value)} placeholder="Please ender your full name"/>
              </div> 
              <div>
                  <label htmlFor="email" className='text-lg font-medium'>Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Please ender your email address"/>
              </div> 
              <div>
                  <label htmlFor="phone" className='text-lg font-medium'>Phone Number</label>
                  <input type="text" id="phone" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={phone} onChange={({ target }) => setPhone(target.value)} placeholder="Please ender your phone number"/>
              </div> 
              <div>
                  <label htmlFor="businessName" className='text-lg font-medium'>Business name</label>
                  <input type="text" id="businessNmae" name="businessNmae" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={businessName} onChange={({ target }) => setBusinessName(target.value)} placeholder="Please ender your business name"/>
              </div>    
              <div className='mt-8 flex flex-col gap-y-4'>
              <button 
                    // onClick={() => setAuthState('login')}
                    className='text-white font-medium ml-2 bg-violet-500 px-4 py-6 rounded-full'>Register</button>
              </div> 
              </form>
          </div>
      </div>
          </div>
          <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-50'>
              <Tradefair_annimation />
          </div>
    </div>
    {/* <Footer /> */}
  </motion.div>
    </>
  )
}

export default vendor