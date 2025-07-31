import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import BasicMenu from './BasicMenu'


type Props = {}

function NewHead({}: Props) {
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
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
                <Image alt='' src="/logo.png" width={60} height={70} className="cursor-pointer sm:w-5 sm:h-5 "/>
              </Link>
            </motion.div>
      </a>
      <BasicMenu />
      <nav className="hidden md:ml-auto lg:flex flex-wrap items-center text-base justify-center bg-slate-800 bg-opacity-40 rounded-lg">
            <motion.ul 
                initial= {{
                x: -80,
                opacity: .2
                }}
                transition= {{duration: .8}}
                whileInView= {{ opacity: 1, x: 0}}
                viewport= {{ once: true}}
                className="space-x-4 flex item-center px-1">
                    <Link href={'/'}><li className="headerLink">Home</li></Link>
                    <Link href={'https://kadunamarkets.kdsg.gov.ng'}  target={"_blank"}><li className="headerLink">Book Now</li></Link>
                    <Link href={'/about'}><li className="headerLink">About</li></Link>
                    <Link href={'/news'}><li className="headerLink">News</li></Link>
                    <Link href={'/publications'}><li className="headerLink">Publications</li></Link>
                    <Link href={'/projects'}><li className="headerLink">Projects</li></Link>
                    <Link href={'/gallery'}><li className="headerLink">Gallery</li></Link>
                    <a href={'https://kadunamarketjobs.roundstone.solutions'} target={"_blank"}><li className="headerLink">Careers</li></a>
                    <Link href={'/contact'}><li className="headerLink">Contact</li></Link>
            </motion.ul>
        <div className="hidden lg:flex item-center p-6 space-x-4 mr-6">
            <a href={"https://twitter.com/KadunaMarkets"} target={"_blank"}>
              <FaTwitter className= "socialLink" />
            </a>
            
            <a href={"https://www.instagram.com/kadunamarkets/?hl=en"} target={"_blank"}>
            
              <FaInstagram className= "socialLink" />
            </a>

            <a href={"https://web.facebook.com/kmdmc"} target={"_blank"}>
              <FaFacebook className="socialLink" />
            </a>
        </div>
      </nav>
      
    
    </div>
  </header>
  )
}

export default NewHead