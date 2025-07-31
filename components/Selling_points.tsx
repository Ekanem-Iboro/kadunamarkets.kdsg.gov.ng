import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import { FaChartArea, FaHouseUser, FaMapMarkedAlt, FaStore } from 'react-icons/fa'
import { HiLightningBolt } from 'react-icons/hi'

function Selling_points() {
  return (
    <section className="text-gray-600 body-font my-20">
        <motion.div 
        initial= {{
            y: -20,
        opacity: .2
        }}
        transition= {{duration: 1.5}}
        whileInView= {{ opacity: 1, y: 0}}
        viewport= {{ once: true}}
        className="container px-5 py-2 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
                <FaHouseUser className='w-10 h-10 mx-auto my-5 text-gray-900 md:w-12 md:h-12 lg:w-18 lg:h-18 '/>
                <h2 className="title-font font-medium text-xl md:text-2xl lg:text-3xl text-gray-900">17</h2>
                <p className="leading-relaxed text-xl md:text-2xl lg:text-3xl">Markets</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
                <FaChartArea className='w-10 h-10 mx-auto my-5 text-gray-900 md:w-12 md:h-12 lg:w-18 lg:h-18' />
                <h2 className="title-font font-medium text-xl md:text-2xl lg:text-3xl text-gray-900">11</h2>
                <p className="leading-relaxed text-xl md:text-2xl lg:text-3xl">Local Government Areas</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
                <HiLightningBolt className='w-10 h-10 mx-auto my-5 text-gray-900 md:w-12 md:h-12 lg:w-18 lg:h-18 '/>
                <h2 className="title-font font-medium text-xl md:text-2xl lg:text-3xl text-gray-900">30</h2>
                <p className="leading-relaxed text-xl md:text-2xl lg:text-3xl">Projects</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
                <UserCircleIcon className='w-10 h-10 mx-auto my-5 text-gray-900 md:w-12 md:h-12 lg:w-18 lg:h-18 ' />
                <h2 className="title-font font-medium text-xl md:text-2xl lg:text-3xl text-gray-900">+21,000</h2>
                <p className="leading-relaxed text-md md:text-2xl lg:text-3xl">Verified Traders</p>
            </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Selling_points