import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer'
import NewHead from '../../components/NewHead'

function jere() {
  return (
    <>
    <NewHead />

      <section className="text-gray-600 body-font mt-20">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">

          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Jere Market</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">We are excited to announce the launch of a new project, Jere market and trailer park. This state-of-the-art market has been designed and constructed by our team of experts to provide our customers with the best shopping experience possible.</p>
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2 hover:cursor-pointer" >
                <Image width={500} height={300} alt="gallery" className="w-full object-cover h-full object-center block" src="/img/jere/1.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={501} height={301} alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer" src="/img/jere/2.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image width={800} height={390} alt="gallery" className="w-full h-full object-cover object-center block hover:cursor-pointer" src="/img/jere/3.jpg"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image width={800} height={390} alt="gallery" className="w-full h-full object-cover object-center block hover:cursor-pointer" src="/img/jere/4.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={502} height={302} alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer" src="/img/jere/5.jpg"/>
              </div>
              {/* <div className="md:p-2 p-1 w-1/2">
                <Image width={503} height={303} alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer" src="/img/kabala/6.jpg"/>
              </div> */}
            </div>
          </div>

          {/* <div className="flex w-full mb-20 flex-wrap"> */}
            {/* <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Welcome to Gallaxy Mall</h1> */}
            {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p> */}
          {/* </div> */}

          {/* <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2 hover:cursor-pointer">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="/img/kabala/6.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer" src="/img/kabala/7.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block hover:cursor-pointer" src="/img/kabala/8.jpg"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block hover:cursor-pointer" src="/img/kabala/9.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer" src="/img/kabala/10.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block hover:cursor-pointer" src="/img/kabala/11.jpg"/>
              </div>
            </div>
          </div> */}

        </div>
  </section>
  <Footer />
</>
  )
}

export default jere