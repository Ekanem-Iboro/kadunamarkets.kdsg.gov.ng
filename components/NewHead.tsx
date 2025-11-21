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
    <header className="text-gray-600 body-font">
      <div className="relative container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <motion.div
            initial={{
              y: -80,
              opacity: 0.2,
            }}
            transition={{ duration: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl hover:scale-110 transition duration-[.4s] sm:p-0"
          >
            <Link href={'/'}>
              <Image
                alt=""
                src="/logo.png"
                width={100}
                height={70}
                className="cursor-pointer"
              />
            </Link>
          </motion.div>
        </div>
        <BasicMenu />
        <nav className="hidden md:ml-auto lg:flex flex-wrap items-center text-base justify-center bg-slate-800 bg-opacity-40 rounded-lg">
          <motion.ul
            initial={{
              x: -80,
              opacity: 0.2,
            }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-x-4 flex item-center px-1"
          >
            <li className="headerLink">
              <Link href={'/'}>Home</Link>
            </li>
            <li className="headerLink">
              <a href={'/hall'}>Book Hall</a>
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
              <a
                href={'https://kadunamarketjobs.roundstone.solutions'}
                target={'_blank'}
                rel="noopener noreferrer"
              >
                Careers
              </a>
            </li>
            <li className="headerLink">
              <Link href={'/contact'}>Contact</Link>
            </li>
          </motion.ul>
          <div className="hidden lg:flex item-center p-6 space-x-4 mr-6">
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
        </nav>
      </div>
    </header>
  )
}

export default NewHead
