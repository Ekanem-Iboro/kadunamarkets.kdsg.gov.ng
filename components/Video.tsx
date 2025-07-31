import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Video({}: Props) {
  return (
        <div className='aspect-w-16 aspect-h-9 mt-10 lg:mt-20'>
            <div className='w-full justify-items-center py-10'>
                {/* <iframe className='w-full h-[40vh] lg:h-[60vh]' src="https://www.youtube.com/embed/-sscEwLauyk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                <iframe className='w-full h-[40vh] lg:h-[60vh]' width="560" height="315" src="https://www.youtube.com/embed/1AtiNkMq4Wg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h1 className="text-xl font-medium text-center my-10 text-gray-900">KMDMC PROJECTS</h1>
            </div>
        </div>

  )
}

export default Video