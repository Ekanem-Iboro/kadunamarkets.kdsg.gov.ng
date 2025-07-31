import React, { useEffect, useState } from 'react'
import NewHead from './NewHead';
// import {olarmImages} from "../data/olarmImages"

function Gallery({ olarmImages: [] }) {
  const [olarmImages, setOlarmImages] = useState<any>(null);


  useEffect(() => {
    // setOlarmImages()
    // setInterval(() => setFlag(!flag), 9000)
  }, [olarmImages])
  console.log(olarmImages)
  return (
    <>
       <NewHead />
      <ul>
       
      </ul>
    </>
  )
}

export default Gallery 