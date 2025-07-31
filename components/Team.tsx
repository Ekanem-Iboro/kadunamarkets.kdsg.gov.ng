import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
// import Team from '../components/Team'

function Team() {
  return (

    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-24 mx-auto">
        <motion.div
        initial= {{
          x: -80,
          opacity: .2
          }}
          transition= {{duration: .4}}
          whileInView= {{ opacity: 1, x: 0}}
          viewport= {{ once: true}}
        className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">MANAGEMENT TEAM</h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
        </motion.div>
        <div className="flex flex-wrap -m-4">
          <motion.div 
           initial= {{
            y: -80,
            opacity: .2
            }}
            transition= {{duration: .6}}
            whileInView= {{ opacity: 1, y: 0}}
            viewport= {{ once: true}}
          className="p-4 mx-auto lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image src="/img/md2.jpg" width={500} height={240} alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"/>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Tamar Nandul</h2>
                {/* <h3 className="text-gray-500 mb-3">MD / CEO</h3> */}
                <p className="mb-4">Managing Director / Chief Executive Officer</p>
                <span className="inline-flex ml-2 text-gray-500 hover:cursor-pointer hover:text-slate-200 transition">
                  {/* <Link href={"https://twitter.com/tnandul"}>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </Link> */}
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial= {{
            y: -80,
            opacity: .2
            }}
            transition= {{duration: 1}}
            whileInView= {{ opacity: 1, y: 0}}
            viewport= {{ once: true}}
          className="p-4 mx-auto lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image src="/img/cs.jpg" width={500} height={240} alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"/>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Muhammed Sani Suleiman</h2>
                {/* <h3 className="text-gray-500 mb-3">CS</h3> */}
                <p className="mb-4">Company Secretary / Legal Adviser</p>
                <span className="inline-flex ml-2 text-gray-500 hover:cursor-pointer hover:text-slate-200 transition">
                  {/* <Link href={"https://twitter.com/sanisuleimanu"}>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </Link> */}
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div 
          initial= {{
            y: -80,
            opacity: 0
            }}
            transition= {{duration: 1.4}}
            whileInView= {{ opacity: 1, y: 0}}
            viewport= {{ once: true}}
          className="p-4 mx-auto lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <Image src="/img/gm.jpg" width={500} height={240} alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"/>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Yemi Bakare</h2>
                <p className="mb-4">General Manager, Operations</p>
                <span className="inline-flex ml-2 text-gray-500 hover:cursor-pointer hover:text-slate-200 transition">
                  {/* <Link href={"https://twitter.com/YemieBakare"}>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </Link> */}
                </span>
              </div>
            </div>
          </motion.div>          
        </div>
      </div>
    </section>
  )
}

export default Team