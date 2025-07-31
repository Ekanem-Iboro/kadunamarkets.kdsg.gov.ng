import React, { useEffect } from 'react'
import Footer from './Footer'
import { useState } from 'react'
import { db } from '../firebase'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import NewHead from './NewHead'
// import { Firestore } from 'firebase/firestore'

interface newStuff {
    id: number,
    location: string,
    description: string
}
function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [olarmData, setOlarmData] = useState([])

    const clearForm = () => {
        setName("")
        setEmail("")
        setMessage("")
    }

    const handleSubmit = async (event: any) => {
        // prevent default
        event.preventDefault();

        if (name == '' || email == '' || message == '') {
            clearForm()
            toast.error("All fields are required!")

        } else {
            // const dbCollection = db
            setName(name)
            setEmail(email)
            setMessage(message)

            const collectionRef = collection(db, "comments")
            const payLoad = { name, email, message }
            await addDoc(collectionRef, payLoad)
            toast.success("Document submitted")
            clearForm()
        }

    }

    const renderOlarm = async () => {
        const responce = await fetch('/api/olarm')
        const data = await responce.json()
        setOlarmData(data)
    }

    useEffect(() => onSnapshot(collection(db, "comments"), (snapshot) => {
        console.log(snapshot.docs.map(doc => doc.data()))
    }),
        [])


    return (
        // <div>Contact</div>
        // <section className="text-gray-600 body-font relative">
        <>
             <NewHead />
            <div className='w-screen h-[10vh]'></div>

            <section className="text-gray-600 relative">
                <div className="container px-5 py-24 my-20 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please leave us a message</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Name
                                            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name} onChange={({ target }) => setName(target.value)} />
                                        </label>
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Email
                                            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={({ target }) => setEmail(target.value)} />
                                        </label>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Message
                                            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={message} onChange={({ target }) => setMessage(target.value)}></textarea>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                                </div>
                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                    <a className="text-indigo-500">kaduna.markets@kdsg.gov.ng</a>
                                    <p className="leading-normal my-5">First Floor, Investment House,
                                        <br />27 Ali Akilu Road, Kaduna.
                                    </p>
                                    <span className="inline-flex space-x-6">
                                        <a href={"https://web.facebook.com/kmdmc"} target={"_blank"}>
                                            <FaFacebook className="cursor-pointer" />
                                        </a>

                                        <a href={"https://twitter.com/KadunaMarkets"} target={"_blank"}>
                                            <FaTwitter className="cursor-pointer" />
                                        </a>

                                        <a href={"https://www.instagram.com/kadunamarkets/?hl=en"} target={"_blank"}>
                                            <FaInstagram className="cursor-pointer" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </section>
            <div className='w-screen h-[10vh]'></div>
            <Footer />
        </>
    )
}

export default Contact