import Image from "next/image"
import { BellIcon, SearchIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaBars, FaFacebook } from  "react-icons/fa"
import { FaInstagram } from  "react-icons/fa"
import { FaTwitter } from  "react-icons/fa"
import { motion } from 'framer-motion'
import BasicMenu from "./BasicMenu"




function Header() {
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
    <header className={`${isScrolled && "scrolledHeader"}`}>
        <div className="relative flex space-x-12 bg-black/40 rounded-xl md:mr-6">
            <motion.div
            initial= {{
              x: -80,
              opacity: .2
              }}
              transition= {{duration: .4}}
              whileInView= {{ opacity: 1, x: 0}}
              viewport= {{ once: true}}
            className="bg-white rounded-xl hover:bg-slate-400 transition duration-[.4s] sm:p-0">
              <Link href={"/"}>
                <Image alt='' src="/logo.png" width={60} height={70} className="cursor-pointer sm:w-5 sm:h-5 "/>
              </Link>
            </motion.div>
            <BasicMenu />
            <motion.ul 
            initial= {{
              x: -80,
              opacity: .2
              }}
              transition= {{duration: .8}}
              whileInView= {{ opacity: 1, x: 0}}
              viewport= {{ once: true}}
            className="md:hidden space-x-5 md:flex item-center">
                <Link href={'/'}><li className="headerLink">Home</li></Link>
                <Link href={'/about'}><li className="headerLink">About</li></Link>
                <Link href={'/news'}><li className="headerLink">News</li></Link>
                <Link href={'/publications'}><li className="headerLink">Publications</li></Link>
                <Link href={'/projects'}><li className="headerLink">Projects</li></Link>
                <Link href={'/gallery'}><li className="headerLink">Gallery</li></Link>
                <a href={'https://kadunamarketjobs.roundstone.solutions'} target={"_blank"}><li className="headerLink">Careers</li></a>
                <Link href={'/contact'}><li className="headerLink">Contact</li></Link>
            </motion.ul>
        </div>    

        <motion.div 
        initial= {{
          x: 80,
          opacity: .2
          }}
          transition= {{duration: .4}}
          whileInView= {{ opacity: 1, x: 0}}
          viewport= {{ once: true}}
        >
          <div className="flex item-center p-6 space-x-4 mr-6 bg-slate-800 bg-opacity-40 rounded-lg">
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
          
        </motion.div>  
    </header>
  )
}

export default Header