import { useState } from 'react'
import { motion } from 'framer-motion'
import Auth_header from '../../components/Auth_header'
import Head from 'next/head'
import Tradefair_annimation from '../../components/Tradefair_annimation'
import { toast } from 'react-toastify'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'
import { useRouter } from 'next/router'

type Props = {}

function sponsours({}: Props) {
      
    const [fullname, setFullname ] = useState("")
    const [phone, setPhone ] = useState("")
    const [email, setEmail ] = useState("")
    const [age, setAge ] = useState("")
    const [businessName, setBusinessName] = useState("")
    const [typeOfTrade, setTypeOfTrade] = useState("")
    const [residency, setResidency] = useState("")
    const [occupation, setOccupation] = useState("")
    const [numberOfStalls,  setNumberOfStalls ] = useState("")
    const [returningTrader,  setReturningTraders ] = useState(false)
    const timeStamp = serverTimestamp()
    const router = useRouter()

    const clearForm = () => {
      setFullname("")
      setPhone("")
      setEmail("")
      setAge("")
      setResidency("")
      setBusinessName("")
      setTypeOfTrade("")
      setNumberOfStalls("")
      setReturningTraders(false)
  }

    const handleSubmit = async (event: any) => {
      event.preventDefault();

    //   console.log(fullname, email,phone, businessName, typeOfTrade, numberOfStalls, returningTrader)

      if (fullname == "" || email == "" || phone == "" || age == "" || residency == "" || occupation == "" || businessName == "" ||  typeOfTrade == "" ) {
          clearForm()
          toast.error("All fields are required!")

      } else {
          // const dbCollection = db
          setFullname(fullname)
          setEmail(email)
          setPhone(phone)
          setAge(age)
          setBusinessName(businessName)
          setOccupation(occupation)
          setTypeOfTrade(typeOfTrade)
          setResidency(residency)
          setNumberOfStalls(numberOfStalls)
          setReturningTraders(returningTrader)

          const collectionRef = collection(db, "vendors")
          const payLoad = {fullname, email, phone, age, businessName, typeOfTrade, residency, occupation, numberOfStalls, returningTrader, timeStamp}
          await addDoc(collectionRef, payLoad)
          toast.success("Registration Successful")
          clearForm()
          router.push('/confirmation')
      }
  }

  return (
    <motion.div className="">
    <Head>
      <title>Vendor Registration</title>
      <link rel="icon" href="/tradefairLogo.png" />
    </Head>
    <Auth_header />
        <div className='h-20 md:hidden'/>
        <div className='tradefair_container'>
            <div className='w-full flex h-screen lg:w-1/2 bg-gray-200 items-center justify-center'>
              <div className='bg-gray-50 px-14 mt-20 h-screen rounded-3xl bottom-0 border-2 border-gray-200'>
                {/* <h1 className='text-3xl font-semibold mt-12'>Kaduna Markets Tradefair</h1> */}
                    <p className='font-medium text-lg text-gray-500 mt-4'>Welcome to Kaduna Markets Tradefair vendor registration portal, unfortunately registration has closed.</p>

                    <div className="flex justify-center my-10">
                        <button 
                        onClick={()=> router.push('/')}
                        className="inline-flex text-white bg-indigo-500 mt-3 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">KMDMC Home</button>
                    </div>
                    {/* <div className='mt-8'>
                        <form onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="fullname" className='vendorFormLabel'>Full Name</label>
                            <input type="text"  onChange={(e) => setFullname(e.target.value)} value={fullname} id='fullname' className='vendorFormInput' placeholder='Enter your full name'/>
                        </div> 
                        <div>
                            <label htmlFor="phone" className='vendorFormLabel'>Phone Number</label>
                            <input type="number"  onChange={(e) => setPhone(e.target.value)} value={phone} id='phone' className='vendorFormInput' placeholder='Enter your phone number'/>
                        </div> 
                        <div>
                            <label htmlFor="email" className='vendorFormLabel'>Email</label>
                            <input type="email"  onChange={(e) => setEmail(e.target.value)} value={email} id='email' className='vendorFormInput' placeholder='Enter your email'/>
                        </div> 
                        <div>
                            <label htmlFor="email" className='vendorFormLabel'>Age</label>
                            <input type="number"  onChange={(e) => setAge(e.target.value)} value={age} id='age' className='vendorFormInput' placeholder='Enter your age'/>
                        </div> 
                        <div>
                            <label htmlFor="password" className='vendorFormLabel'>Business Name</label>
                            <input type="text" onChange={(e) => setBusinessName(e.target.value)} value={businessName} id="password" className='vendorFormInput' placeholder='Enter your business name'/>
                        </div>
                        <div>
                            <label htmlFor="typeOfTrade" className='vendorFormLabel'>Type of trade</label>
                            <input type="text" onChange={(e) => setTypeOfTrade(e.target.value)} value={typeOfTrade} id="typeOfTrade" className='vendorFormInput' placeholder='Enter type of trade'/>
                        </div>
                        <div>
                            <label htmlFor="occupation" className='vendorFormLabel'>Occupation</label>
                            <input type="text" onChange={(e) => setOccupation(e.target.value)} value={occupation} id="occupation" className='vendorFormInput' placeholder='Enter occupation'/>
                        </div>
                        <div>
                            <label htmlFor="residency" className='vendorFormLabel'>Where is your state of residency?</label>
                            <input type="text" onChange={(e) => setResidency(e.target.value)} value={residency} id="numberOfStalls" className='vendorFormInput' placeholder='Enter state of residency'/>
                        </div>
                        <div>
                            <label htmlFor="numberOfStalls" className='vendorFormLabel'>How many stalls do you require?</label>
                            <input type="text" onChange={(e) => setNumberOfStalls(e.target.value)} value={numberOfStalls} id="numberOfStalls" className='vendorFormInput' placeholder='Enter number of stalls required'/>
                        </div>
                        <div className='mt-5 flex align-center '>
                            <label htmlFor="returningTrader" className='vendorFormLabel'>Are you a returning vendor? </label>
                            <input type="checkbox" 
                                id="returningTrader" 
                                checked={returningTrader}
                                onChange={(e) => setReturningTraders(e.target.checked)}
                                className='cursor-pointer h-4 w-[65px] md:h-6 md:w-[45px] rounded-full ml-12 appearance-none bg-gray-200 checked:bg-pink-300 bg-opacity-5 border-2 border-violet-700 transition duration-200 relative'/>
                        </div>
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button className='text-white font-medium ml-2 bg-violet-500 px-2 py-3 md:px-4 md:py-4 rounded-full'>
                                Register
                            </button>
                        </div> 
                        </form>
                    </div> */}

                <div className='h-20 lg:hidden'/>
            </div>
        </div>
        <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-100 mt-12'>
              <Tradefair_annimation />
        </div>
    </div>
    {/* <Footer /> */}
  </motion.div>
  )
}

export default sponsours