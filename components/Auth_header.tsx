import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import BasicMenu from './BasicMenu'


type Props = {}

function Tradefair_header({}: Props) {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if( window.scrollY > 0) {
            setIsScrolled(true)
        } else {
           setIsScrolled(false)
        }
      }
  
      window.addEventListener("scroll", handleScroll)
  
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    },[])
  return (
    <header className="text-gray-600 body-font">
    
    <div className="relative container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     
      {/* <BasicMenu /> */}
      <nav className="hidden md:ml-auto lg:flex flex-wrap items-center text-base justify-center bg-slate-800 bg-opacity-40 rounded-lg">
           
      
      </nav>
      <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <motion.div
            initial= {{
              y: -80,
              opacity: .2
              }}
              transition= {{duration: .4}}
              whileInView= {{ opacity: 1, y: 0}}
              viewport= {{ once: true}}
            className="bg-white rounded-xl hover:bg-slate-400 transition duration-[.4s] sm:p-0">
              <Link href={"/"}>
                <Image alt={''} src="/tradefairLogo.png" width={200} height={70} className="cursor-pointer sm:w-5 sm:h-5 "/>
              </Link>
            </motion.div>
      </div>
    
    </div>
  </header>
  )
}

export default Tradefair_header