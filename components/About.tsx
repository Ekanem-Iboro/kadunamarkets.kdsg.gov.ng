import React from 'react'
import Footer from './Footer'
import Image from "next/image"
import Link from 'next/link'
import { motion, HTMLMotionProps } from 'framer-motion'
import Team from './Team'

function About() {
  return (
    <>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto my-20 flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <motion.div 
                        initial={{
                            y: -80,
                            opacity: 0.2
                        }}
                        transition={{ duration: 0.8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-lg h-84 overflow-hidden p-10 flex justify-center"
                    >
                        <Image 
                            width={1200} 
                            height={500} 
                            priority 
                            alt="content" 
                            className="object-start h-full w-full rounded-lg" 
                            src="/img/about_index.jpg" 
                        />
                    </motion.div>
                    <motion.div 
                        initial={{
                            x: -80,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='ml-10'
                    >
                        <h3 className='font-bold text-lg md:text-lg lg:text-xl'>Tamar Nandul</h3>
                        <p className='text-sm'>Managing Director / Chief Executive Officer</p>
                    </motion.div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-12 h-12 p-2 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <Image alt='' src="/logo.png" width={50} height={50} className="cursor-pointer sm:w-5 sm:h-5"/>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Kaduna Markets Development and Management Company</h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p className="text-base">We are currently managing over thirty(30) projects across the state, these projects cut across Commercial, Recreation and Hospitality.</p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">
                                We are currently managing over thirty(30) projects across the state, eight (8) of which are state owned and twenty (22) are Public Private Partnership. These projects cut across Commercial, Recreation and Hospitality.

                                We are profoundly committed to putting the State as the top destination for Business, Leisure and Recreation in line with the Urban Renewal Agenda of His Excellency.

                                We are working with an array of competent and quality driven contractors/developers even through the Covid-19 pandemic, albeit following strict health and safety guidelines to bring these projects to fruition in a timely manner.

                                One of these projects such as remodelling and conversion of Yar'adua Hall has the potential to become the most coveted event centre in Northern Nigeria. At completion, the hall will be a convergence point with more than enough grandeur to rival its international counterparts.

                                The development of Commercial Hubs in Kajuru, Sabon Gari, Kaduna North/South, and Giwa, as an attempt to diversify the company's portfolio have averaged about 50% completion, a few of which is scheduled to be opened before the end of 2022.
                            </p>
                                
                            <Link href={"/about_details"}>
                                <p className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Team />
        <div className='w-screen h-[10vh]'></div>
        <Footer />
    </>
  )
}

export default About