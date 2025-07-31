// import React from 'react'
import {useState , useEffect} from 'react'
import Image from "next/image"
import { InformationCircleIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'


interface Props {
  bannerImages: Array<any>;
}

function Banner({bannerImages}: Props) {
  const [bannerImg, setBannerImg] = useState<any>(null);
  // const [flag, setFlag] = useState<boolean>(true)

  useEffect(() => {
    setBannerImg(bannerImages[Math.floor(Math.random() * bannerImages.length )])
    // setInterval(() => setFlag(!flag), 9000)
  }, [bannerImages])

  return (
    // <div className='max-w-4xl overflow-x-hidden flex flex-col over'>      
    <div className='max-w-4xl overflow-x-hidden flex flex-col cover'>      
      <div className='absolute top-0 left-0 -z-6 h-[95vh] w-full'>
        <Image
        alt ={''}
        priority 
        src= {`/${bannerImg ? bannerImg.img : ""}`}
        layout= 'fill'
        objectFit='cover'
        className="-z-8 lg:h-[600px]"
        /> 
      </div>

      {/* absolute top-[20vh] md:top-30 sm:top-20 */}
      <motion.div 
      initial= {{
        x: -80,
        opacity: .2
        }}
        transition= {{duration: .4}}
        whileInView= {{ opacity: 1, x: 0}}
        viewport= {{ once: true}}
      className="z-10 ml-8 pb-20 md:pb-10 h-[80vh] ">
        <div className='p-5 mt-[25vh] md:mt-80 bg-slate-800 w-[50%] md:w-[75%] lg:w-[76%] bg-opacity-40 rounded-lg'>
          <h1  className='font-bold text-shadow-md pt-10 pb-5 text-sm text-white md:text-lg lg:text-2xl opacity-100'>
            {`${bannerImg?.title }`}
          </h1>
          {/* relative top-[22vh] text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl */}
          <p className='text-shadow-md max-w-xs text-white text-[10px] md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl'>  
            {`${bannerImg?.overview}`}
          </p>
          <Link href={"/projects"}>
            <button className='bannerBtn '> <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8'/>
              More Info
            </button>
          </Link>
        </div>
      </motion.div>
 
    </div>

    
  )
}


export default Banner


