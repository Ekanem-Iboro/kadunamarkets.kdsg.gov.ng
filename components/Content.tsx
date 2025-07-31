import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsLayout() {
  const projects = [
    {
      href: '/projects/galaxymall',
      image: '/img/galaxymall/1.jpeg',
      location: 'Kaduna North LGA',
      title: 'Galaxy Mall',
      description:
        'Newly constructed mall containing 3 cinemas, 6 restaurants. 48-line shop with parking facilities',
      delay: 0.1,
    },
    {
      href: '/projects/olarm',
      image: '/img/olarm/11.jpg',
      location: 'Chikun LGA',
      title: 'Olam Farms Trailer Park and Grain Market',
      description:
        'Parking Bays for 120 trailers, Grain Market, Travelers Inn, Food Court, Warehouses and Mechanic Workshops.',
      delay: 0.3,
    },
    {
      href: '/projects/kasuwanmagani',
      image: '/img/kasuwanmagani/10.jpg',
      location: 'Kajuru LGA',
      title: 'Kasuwan Magani',
      description:
        'Sales of Shops, Stalls, Warehouses and Restaurants totalling 6,546 units.',
      delay: 0.5,
    },
    {
      href: '/projects/ugwanrimi',
      image: '/img/ugwanrimi/1.jpg',
      location: 'Kaduna North LGA',
      title: 'Unguwar Rimi Market',
      description:
        "Commercial hub that is in line with KDSG's urban renewal agenda. It contains 1340 shops of different square meter sizes, warehouses, restrooms and car parking space.",
      delay: 0.7,
    },
  ]

 
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    scale: 0.75,
    opacity: 0,
    y: 20,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut', // or cubic-bezier string
    },
  },
}

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {projects.map((project, index) => (
          <Link key={index} href={project.href} className="block">
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group h-full cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  width={720}
                  height={400}
                  className="h-48 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  {project.location}
                </h3>
                <h2 className="line-clamp-2 mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                  {project.title}
                </h2>
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  )
}