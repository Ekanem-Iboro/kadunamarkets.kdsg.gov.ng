import React from 'react'
import { FaGoogle } from 'react-icons/fa'

type Props = {}

function Tradefair_form({}: Props) {
  return (
    <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
        <h1 className='text-3xl font-semibold'>Kaduna Markets Traid fair</h1>
        <p className='font-medium text-lg text-gray-500 mt-4'>Welcome! Please ender your details</p>

        <div className='mt-8'>
            <div>
                <label htmlFor="email" className='text-lg font-medium'>Full Name</label>
                <input type="text" id='firstname' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your full name'/>
            </div> 
            <div>
                <label htmlFor="email" className='text-lg font-medium'>Email</label>
                <input type="text" className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your email'/>
            </div> 
            <div>
                <label htmlFor="email" className='text-lg font-medium'>Password</label>
                <input type="password" className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 outline-none bg-transparent' placeholder='Enter your password'/>
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                <button className='hover:scale-[1.01] active:scale-[.9] active:duration-75 ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-bold text-lg font-bold'>Sign up</button>
                <button className='flex border-2 p-3 rounded-3xl border-gray-100 items-center justify-center gap-2 hover:scale-[1.01] active:scale-[.98] active:duration-75 ease-in-out transition-all'>
                    <FaGoogle className="w-8 h-8"/>
                    Sign up with Google
                </button>
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium text-base'>Already have an account?</p>
                <button className='text-violet-500 font-medium ml-2'>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Tradefair_form