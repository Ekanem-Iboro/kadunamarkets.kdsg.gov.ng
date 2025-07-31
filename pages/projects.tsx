import Image from 'next/image'
import Link from 'next/link'
import NewHead from '../components/NewHead'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function projects() {
  return (
    <>
         <NewHead />
        <div className='w-screen h-[10vh] sm:h-[5vh]'> </div>
        {/* <motion.div variants={projects}> */}
          <section className="text-gray-600 body-font" >
            <motion.div 
            // transition= {{staggerChildren: .75}}
            className="container px-5 py-24 mx-auto mt-20">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="text-3xl font-bold tracking-[8px] uppercase mb-4 text-gray-600">KMDMC Projects</h1>
                {/* <h3 className='font-semibold tracking-[3px] uppercase text-gray-900 mb-5'>Hover project images to view details</h3> */}
                <hr className='bg-gray-700'/>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-3">KMDMC has continued to show its capacity to be the foremost facilitator in commercial real estate development and management in Kaduna. From no capital project in 2019 to 30 projects across Kaduna and over $71 million in assets in 2023. We have diversified the company's overreliance on Sheik Abubakar Mahmud Gumi market by building more modern markets in Kaduna with combined lettable space for over 10,000 residents.</p>
              </div>
            <div className="flex flex-wrap -m-4">

            <Link href={"/projects/msquare"}>
            <motion.div
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .1}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/msquare/gate.jpeg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Murtala Muhammad Square</h1>
                  <p className="leading-relaxed">The improvement of sports development amonge our youths and providecondisive avenue for residents to exercise.</p>
                </div>
              </div>
            </motion.div>
            </Link>
              <Link href={"/projects/galaxymall"}>
                <motion.div 
                 initial= {{
                  opacity: 0,
                  scale: 0
                 }}
                transition= {{duration: .13}}
                whileInView= {{ opacity: 1, scale: 1 }}
                viewport= {{ once: true}}
                className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                    <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/galaxymall/2.jpeg"/>
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Galaxy Mall</h1>
                        <p className="leading-relaxed">A mall consisting of 3 cinemas, 6 restaurants. 48 line shops. With approximatly 8,834 square meters of gross lettable area.</p>
                    </div>
                    </div>
                </motion.div>
              </Link>
              <Link href={"/projects/ugwanrimi"}>
                <motion.div 
                 initial= {{
                  opacity: 0,
                  scale: 0
                 }}
                transition= {{duration: .16}}
                whileInView= {{ opacity: 1, scale: 1 }}
                viewport= {{ once: true}}
                className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                    <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/ugwanrimi/1.jpg"/>
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Ungwanrimi Market</h1>
                        <p className="leading-relaxed">Commercial hub that is in line with KDSG's urban renewal agenda. It contains 1340 shops of different sqm sizes, warehouses, restrooms and car parking space.</p>
                    </div>
                    </div>
                </motion.div>
              </Link>

              <Link href={"/projects/damau"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .1}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/damau/14.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Damau Household Milk Farm Project</h1>
                  <p className="leading-relaxed">The Kaduna State Government, in collaboration with Aria Foods and Miyetti Allah Cattle Breeders Association of Nigeria present to you the Damau Housing Milk Farm</p>
                </div>
              </div>
            </motion.div>
            </Link>
 
          <Link href={"/projects/olarm"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .13}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/olarm/2.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">CHIKUN LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Olam Trailer Park and Grains Market</h1>
                  <p className="leading-relaxed">Construction of Parking Bays for 120 trailers, Grains Market, Travelers Inn, Food Court, Warehouses and Mechanic Workshops.</p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link href={"/projects/kasuwanmagaji"}>  
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .16}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/kasuwanmagaji/10.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">ZARIA LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Dan Magaji</h1>
                  <p className="leading-relaxed">Construction of 2024 shops, stalls, abattoirs, warehouses, banks, toilets, police station and parking lots. All of which will be available for the recidents.</p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link href={"/projects/coldroom"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .1}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="img/coldroom/5.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Cold room</h1>
                  <p className="leading-relaxed">Construction of 208 shops, 126 market stalls and parking lots.</p>
                </div>
              </div>
            </motion.div>
          </Link>
          
          <Link href={"/projects/kasuwanmagani"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .13}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/kasuwanmagani/7.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KAJURU LGA KADUNA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kasuwan Magani</h1>
                  <p className="leading-relaxed">Construction of 2024 shops, stalls, abattoirs, warehouses, banks, toilets, police station and parking lots.</p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link href={"/projects/sabomarket"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .16}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/sabomarket/7.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA SOUTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Sabon Gari Market</h1>
                  <p className="leading-relaxed">Construction of 3338 shops, open market stalls, warehouses and parking lots. Phased construction.</p>
                </div>
              </div>
            </motion.div>
            </Link>

          <Link href={"/projects/barnawamarket"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .1}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/barnawamarket/1.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA SOUTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Barnawa Modern Market</h1>
                  <p className="leading-relaxed">Construction of 208 shops, 126 market stalls and parking lots. </p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link href={"/projects/kawomarket"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .13}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/kawomarket/7.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kawo Market</h1>
                  <p className="leading-relaxed">Construction of 2700 shops, open market stalls, warehouses and parking lots.</p>
                </div>
              </div>
            </motion.div>
            </Link>

          <Link href={"/projects/kabala"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .16}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/gsmvillage/1.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kabala Market</h1>
                  <p className="leading-relaxed">Construction of mordern market</p>
                </div>
              </div>
            </motion.div>
            </Link>

            
          <Link href={"/projects/kwoi"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .16}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/kwoi/2.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kwoi Market</h1>
                  <p className="leading-relaxed">Construction of mordern market</p>
                </div>
              </div>
            </motion.div>
            </Link>

            
          <Link href={"/projects/69"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .16}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/69/1.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shops 69</h1>
                  <p className="leading-relaxed">Construction of shopping plaza.</p>
                </div>
              </div>
            </motion.div>
            </Link>

            
          <Link href={"/projects/54&56"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .16}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/54&56/1.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shops 54 & 56 Complex</h1>
                  <p className="leading-relaxed">Construction of shopping plaza.</p>
                </div>
              </div>
            </motion.div>
            </Link>

            
          <Link href={"/projects/kafanchan"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .16}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/kafanchan/3.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">JEMA'A LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kafanchan Market</h1>
                  <p className="leading-relaxed">Development of mordern market</p>
                </div>
              </div>
            </motion.div>
            </Link>

            
          <Link href={"/projects/kabala"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .16}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/kabala/1.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">KADUNA NORTH LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kabala Market</h1>
                  <p className="leading-relaxed">Construction of modern market</p>
                </div>
              </div>
            </motion.div>
            </Link>


          <Link href={"/projects/jere"}>
            <motion.div 
            initial= {{
              opacity: 0,
              scale: 0
             }}
            transition= {{duration: .16}}
            whileInView= {{ opacity: 1, scale: 1 }}
            viewport= {{ once: true}}
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/jere/4.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Jere LGA</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Jere Market</h1>
                  <p className="leading-relaxed">Trailer park and mordern market development</p>
                </div>
              </div>
            </motion.div>
            </Link>

          
          </div>
        </motion.div>
        </section>
        {/* </motion.div> */}
      <div className='w-screen h-[20vh]'></div>
      <Footer />
    </>
  )
}

export default projects