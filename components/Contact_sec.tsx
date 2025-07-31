import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import Image from 'next/image'
import React, { FormEventHandler, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
// import { db } from '../firebase'

interface FormData {
    name: string,
    email: string,
    message: string
}

function Contact_sec() {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()


    const clearForm = () => {
        reset()
        // console.log("Document subbmitted")
        toast.success("Your message was successfully submitted")
    }

    const onFormSubmit = async (data: FormData) => {
        // e.preventDefault()
        // console.log("Data", data)
        setName(data.name)
        setEmail(data.email)
        setMessage(data.message)

        // console.log(name,email,message)
        // const collectionRef = collection(db , "comments")
        // const payLoad = {name, email, message}
        // const req = await addDoc(collectionRef, payLoad)
        
        // if (req) {
        //     clearForm()
        // }
    }
    
  return (
        <section className="text-gray-600 body-font my-10">
        <div className="container px-5 pt-24 pb-0 mx-auto flex sm:flex-nowrap flex-wrap">
            <motion.div 
            initial= {{
                opacity: 0,
                x: -100
            }}
            transition= {{duration: 1.2}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}} 
            className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            {/* <Image width="100%" height="100%" src="/map_image.PNG" className='absolute top-0 left-0 w-full h-full'/> */}
            {/* <iframe width="700" height="350" src="https://www.youtube.com/embed/-sscEwLauyk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}

                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                    <p className="mt-1">Namadi Sambo Complex First Floor - Former Investment House, 27 Ali Akilu Road, Kaduna.</p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a className="text-indigo-500 leading-relaxed">kaduna.markets@kdsg.gov.ng</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <p className="leading-relaxed">+234 701 164 0933</p>
                    </div>
                </div>
            </motion.div>
                <motion.form 
                 initial= {{
                    opacity: 0,
                    x: 100
                }}
                transition= {{duration: 1.4}}
                whileInView= {{ opacity: 1, x: 0}}
                viewport= {{ once: true}} 
                id='contact_form' 
                className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" onSubmit={handleSubmit(onFormSubmit)}>
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Leave us a comment below</p>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Name
                            <input type="text" {...register("name", {required: true})} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </label>
                        {errors.name?.type === "required" && (
                            <p>
                                This field is required
                            </p>
                        )}
                        {/* {errors.message?.type === "maxlength" && (
                            <p>
                                Maximum character length exceeded
                            </p>
                        )}
                            {errors.message?.type === "pattern" && (
                            <p>
                                Letters only please
                            </p>
                        )} */}
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Email
                            <input type="email" {...register("email", {required: true})} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.email?.type === "required" && (
                            <p>
                                This field is required
                            </p>
                        )}
                        {/* {errors.message?.type === "maxlength" && (
                            <p>
                                Maximum character length exceeded
                            </p>
                        )} */}
                        </label>
                        
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Message
                            <textarea {...register("message", {required: true})} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            {errors.message?.type === "required" && (
                            <p>
                                This field is required
                            </p>
                        )}
                            {/* {errors.message?.type === "maxlength" && (
                            <p>
                                Maximum character length exceeded
                            </p>
                        )}
                            {errors.message?.type === "pattern" && (
                            <p>
                                Letters only please
                            </p>
                        )} */}
                        </label>
                        
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                    <p className="text-xs text-gray-500 mt-3">Contact KMDMC, we are sure to give you the answer you require and more</p>
                </motion.form>
                
        </div>
    </section>
  )
}

export default Contact_sec
 