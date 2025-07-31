import Image from 'next/image'
import React from 'react'

interface Props { 
  title: string
  location: string
  discription: string
  img_dir: string
  olarm: Array<any>
}

function Card( {img_dir, title, location, discription}: Props) {

  return (
  <div className="lg:w-1/3 sm:w-1/2 p-4 group">
    <div className="flex relative group-hover:cursor-pointer">
      <Image src= { img_dir } alt="gallery" width={20} height={30} className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{ title }</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{ location }</h1>
        <p className="leading-relaxed">{ discription }</p>
      </div>
    </div>
  </div>
  )
}

export default Card