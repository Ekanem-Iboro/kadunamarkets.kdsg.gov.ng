import Link from 'next/link'
import React from 'react'
import { HiOutlineTrendingUp, HiPresentationChartLine, HiUsers } from "react-icons/hi"
import { motion } from 'framer-motion'

function Features() {
  return (
        <section className="text-gray-600 body-font ">
             <div className="container px-5 pt-20 mx-auto">
                <motion.div 
                 initial= {{
                    y: -80,
                opacity: .2
                }}
                transition= {{duration: .8}}
                whileInView= {{ opacity: 1, y: 0}}
                viewport= {{ once: true}}
                className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">KEY PERFOMANCE INDICATORS</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">The company has adopted a social enterprise business model as it provides a vantage position to perform its
                        fiducial responsibility to its shareholders, whilst advancing the poverty eradication, job creation and social
                        inclusion objectives of His Excellency's administration.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </motion.div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <motion.div 
                 initial= {{
                    x: -80,
                opacity: .2
                }}
                transition= {{duration: 1}}
                whileInView= {{ opacity: 1, x: 0}}
                viewport= {{ once: true}}
                className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                        <HiPresentationChartLine className='h-full w-14'/>
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Revenue Performance</h2>
                        <p className="leading-relaxed text-base">We have significantly surpassed revenue targets in
                            the past 2 years. This has been achieved by
                            deploying more effective ways of revenue collection
                            and improved customer relations.</p>
                    </div>
                </motion.div>
                <motion.div 
                 initial= {{
                    y: 80,
                opacity: .2
                }}
                transition= {{duration: 1}}
                whileInView= {{ opacity: 1, y: 0}}
                viewport= {{ once: true}}
                className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                    <HiOutlineTrendingUp className='w-10 h-10'/>
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Service Delivery</h2>
                        <p className="leading-relaxed text-base">A key objective for the company has been the improvement
                            of service delivery especially in Sheikh Abubakar Gumi
                            Market which was the only market under KMDMC’s
                            management. </p>
                    </div>
                </motion.div>
                <motion.div 
                 initial= {{
                    x: 80,
                opacity: .2
                }}
                transition= {{duration: 1}}
                whileInView= {{ opacity: 1, x: 0}}
                viewport= {{ once: true}}
                className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                        <HiUsers className='h-full w-10'/>
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Stakeholder Satisfaction</h2>
                        <p className="leading-relaxed text-base">Our ability to deliver quality
                            infrastructure development and facility
                            management services has superceeded
                            the expectations of our customers,
                            business partners, and other
                            stakeholders.</p>
                        {/* <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                    </div>
                </motion.div>
            </div>
            <Link href={"/about"}>
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">More</button>
            </Link>
        </div>
    </section>
  )
}

export default Features