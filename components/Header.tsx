import Image from 'next/image'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaBars, FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
import BasicMenu from './BasicMenu'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'scrolledHeader'}`}>
      <div className="relative flex space-x-12 bg-black/40 rounded-xl md:mr-6">
        <motion.div
          initial={{
            x: -80,
            opacity: 0.2,
          }}
          transition={{ duration: 0.4 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl hover:bg-slate-400 transition duration-[.4s] sm:p-0"
        >
          <Link href={'/'}>
            <Image
              alt=""
              src="/logo.png"
              width={60}
              height={70}
              className="cursor-pointer sm:w-5 sm:h-5 "
            />
          </Link>
        </motion.div>
        <BasicMenu />
        <motion.ul
          initial={{
            x: -80,
            opacity: 0.2,
          }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden md:flex space-x-5 item-center"
        >
          <li className="headerLink">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="headerLink">
            <Link href={'/about'}>About</Link>
          </li>
          <li className="headerLink">
            <Link href={'/news'}>News</Link>
          </li>
          <li className="headerLink">
            <Link href={'/publications'}>Publications</Link>
          </li>
          <li className="headerLink">
            <Link href={'/projects'}>Projects</Link>
          </li>
          <li className="headerLink">
            <Link href={'/gallery'}>Gallery</Link>
          </li>
          <li className="headerLink">
            <a href={'/hall'}>Book Hall</a>
          </li>
          <li className="headerLink">
            <Link href={'/contact'}>Contact</Link>
          </li>
        </motion.ul>
      </div>

      <motion.div
        initial={{
          x: 80,
          opacity: 0.2,
        }}
        transition={{ duration: 0.4 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex item-center p-6 space-x-4 mr-6 bg-slate-800 bg-opacity-40 rounded-lg">
          <a href={'https://twitter.com/KadunaMarkets'} target={'_blank'}>
            <FaTwitter className="socialLink" />
          </a>

          <a
            href={'https://www.instagram.com/kadunamarkets/?hl=en'}
            target={'_blank'}
          >
            <FaInstagram className="socialLink" />
          </a>

          <a href={'https://web.facebook.com/kmdmc'} target={'_blank'}>
            <FaFacebook className="socialLink" />
          </a>
        </div>
      </motion.div>
    </header>
  )
}

export default Header
