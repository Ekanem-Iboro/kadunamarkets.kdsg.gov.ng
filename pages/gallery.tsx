import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '../components/Footer'
import NewHead from '../components/NewHead'
// import { olarmImages } from "../data/olarmImages.json
// import { olarmImgs } from '../data/olarmImages'


interface Props {
  // olarmImages: Array<any>
}

function gallery() {

  // const imageRef = useRef(null)


  
   return (
    <>
      <Head>
        <title>Gallery &nbsp;|&nbsp; KMDMC</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <NewHead />
      <div className="h-80 lg:h-60"></div>
      <div className='flex flex-col md:space-y-20 lg:space-y-80 '>
       <section className="text-gray-600 body-font">
        <div className="container h-screen px-5 mx-auto">
          <motion.div 
          initial= {{
            x: -80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}}
          className="flex w-full mb-10 lg:mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3">Illumination of NEPA Roundabout</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">In spirit of the holiday season, NEPA Roundabout has been lit up courtesy of Kaduna Markets</p>
          </motion.div>
          <motion.div 
          initial= {{
            x: 80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}}
          className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/nepa/4.jpg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/nepa/3.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image src="/img/gallery/nepa/2.jpg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image src="/img/gallery/nepa/1.jpg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/nepa/5.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/nepa/6.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
       <section className="text-gray-600 body-font">
        <div className="container h-screen px-5 mx-auto">
          <motion.div 
          initial= {{
            x: -80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}}
          className="flex w-full mb-10 lg:mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3">Tradefair 3.0</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">The third edition of the #KadunaMarketsTradeFair held on the 10th & 11th December 2022 at Murtala Square.
The event hosted over 5000 visitors who had the opportunity to shop, network & play. The event was graced by dignitaries include the APC Senatorial Flag bearer, Hon Muhammad Sani Dattijo who patronised a lot of businesses generously. We are very grateful to our sponsors for this edition @altfinanceng @zenithbankplc Woodmould Ventures @ubagroup @kpgroupkd @milcopal</p>
          </motion.div>
          <motion.div 
          initial= {{
            x: 80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}}
          className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/tradefair3.0/1.jpg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/tradefair3.0/7.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image src="/img/gallery/tradefair3.0/3.jpg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image src="/img/gallery/tradefair3.0/4.jpg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/tradefair3.0/5.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/tradefair3.0/2.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
       {/* <section className="text-gray-600 body-font">
        <div className="container h-screen px-5 mx-auto">
          <motion.div 
          initial= {{
            x: -80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}}
          className="flex w-full mb-10 lg:mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3">COMMISSIONING OF GALAXY MALL </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"> His Excellency Governor Nasir Ahmad El-Rufai commissioned Galaxy Mall which is a significant project in the Kaduna Urban Renewal Agenda. Alongside the MD KMDMC,Tamar Nandul were many diginitaries including HRH Muhammadu Sanusi II, Senator Uba Sani, the Administrator KCTA Hafiz Bayero, HC Ministry of Business Innovation & Technology Prof Kabir Mato, ES KADIPA, Khalil Nur Khalil & other senior KDSG officials. Also present were our development partners including the Chairman AMSALCO, MD CCECC and Mar and Mor, among others.</p>
          </motion.div>
          <motion.div 
          initial= {{
            x: 80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}}
          className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/commision/1.jpeg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/commision/2.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image src="/img/gallery/commision/3.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image src="/img/gallery/commision/4.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/commision/5.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/commision/2.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
       <section className="text-gray-600 body-font">
        <div className="container h-screen px-5 mx-auto">
          <motion.div 
          initial= {{
            x: -80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}}
          className="flex w-full mb-10 lg:mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3">COMMISSIONING OF COMPLETED PROJECTS </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">President Muhammadu Buhari during a working visit to Kaduna state in January 2022 commissioned the newly remodeled Murtala Muhammed Square and Sabon Gari Modern Market in Zaria</p>
          </motion.div>
          <motion.div 
          initial= {{
            x: 80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}}
          className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/commision/1.jpeg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/commision/2.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image src="/img/gallery/commision/3.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image src="/img/gallery/commision/4.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/commision/5.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/commision/2.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="text-gray-600 body-font h-screen -mt-40">
        <div className="container h-screen px-5 mx-auto ">
          <motion.div 
          initial= {{
            x: -80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}}
          className="flex w-full mb-10 lg:mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3">TRADE FAIR 2.0</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">KMDMC organized a Trade Fair on 1st and 2nd July 2022 at Murtala Muhammed Square in line with our commitment to provide safe and conducive environment for trading activities to thrive in Kaduna state.</p>
          </motion.div>
          <motion.div 
          initial= {{
            x: 80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}}
          className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/tradefair/1.jpeg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/tradefair/2.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image src="/img/gallery/tradefair/3.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image src="/img/gallery/tradefair/4.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/tradefair/5.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image src="/img/gallery/tradefair/6.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="text-gray-600 body-font h-screen -mt-40">
  <div className="container h-screen px-5 mx-auto">
  <motion.div 
          initial= {{
            x: -80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}}
          className="flex w-full mb-10 lg:mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3">SITE INSPECTION</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">KMDMC’s team (comprising of the Managing Director, General Manager and principal Projects Department staff) inspecting various market development projects across Kaduna, Zaria and Kafanchan.</p>
          </motion.div>
    <motion.div 
    initial= {{
      x: 80,
      opacity: 0
       }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
    className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/inspection/1.jpg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/inspection/2.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/inspection/3.jpg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/inspection/4.jpg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/inspection/5.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/inspection/6.jpg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
      </div>
    </motion.div>
  </div>
</section>

<section className="text-gray-600 body-font h-screen -mt-40">
  <div className="container h-screen px-5 mx-auto">
    <motion.div 
          initial= {{
            x: -80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}}
          className="flex w-full mb-10 lg:mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3">KADUNA AT 55 Children’s Day March Past</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">KMDMC hosted the annual Children’s Day March Past at Murtala Muhammed Square which also coincided with the KADUNA AT 55 celebrations. His Excellency, Mallam Nasir Ahmad El-Rufai alongside other senior KDSG officials were in attendance.</p>
      </motion.div>
    <motion.div 
    initial= {{
      x: 80,
      opacity: 0
       }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
    className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/matchpast/1.jpeg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/matchpast/2.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/matchpast/3.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/matchpast/4.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/matchpast/5.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/matchpast/6.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
      </div>
    </motion.div>
  </div>
</section>


<section className="text-gray-600 body-font h-screen -mt-40">
  <div className="container h-screen px-5 mx-auto">
  <motion.div 
          initial= {{
            x: -80,
            opacity: 0
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, x: 0}}
            viewport= {{ once: true}}
          className="flex w-full mb-10 lg:mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 lg:w-1/3">STAKEHOLDER ENGAGEMENT</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">In line with our stakeholder relations approach, KMDMC regularly engages relevant stakeholders such as market unions, religious and traditional title holders to foster developments in our communities.</p>
      </motion.div>
    <motion.div 
    initial= {{
      x: 80,
      opacity: 0
       }}
      transition= {{duration: 1}}
      whileInView= {{ opacity: 1, x: 0}}
      viewport= {{ once: true}}
    className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/stakeholders/1.jpeg" width={500} height={300} alt="gallery" className="materialboxed responsive-img w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/stakeholders/2.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/stakeholders/5.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image src="/img/gallery/stakeholders/6.jpeg" width={900} height={600}  alt="gallery" className="w-full h-full object-cover object-center block"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/stakeholders/3.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image src="/img/gallery/stakeholders/4.jpeg" width={501} height={301}  alt="gallery" className="w-full object-cover h-full object-center block" />
        </div>
      </div>
    </motion.div>
  </div>
</section>

</div>

<div className='h-40'></div>
<Footer />
    </>
  )
}

export default gallery