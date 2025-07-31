import React from 'react'

type Props = {}

function video({}: Props) {
  return (
    <div className='flex flex-col px-24 py-24 w-[70%] mx-auto bg-green-400 justify-center overflow-hidden'>
        <h1>KMDMC MD's Address </h1>
        <iframe width="700" height="350" src="https://www.youtube.com/embed/-sscEwLauyk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default video