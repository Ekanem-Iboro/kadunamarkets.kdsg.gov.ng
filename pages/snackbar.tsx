import React, { useRef } from 'react'
import Snackbar from '../components/Snackbar'
// import Getmemo from ../components/Getmemo

const snakDetails = {
    message: 'Your message isn\'t sent',
    type: 'success'
}

export default function snackbar() {

    const snackRef = useRef(null)
  return (
      <div className='flex justify-center'>
        <Snackbar message={snakDetails.message} type={snakDetails.type} ref={snackRef}/>
        {/* <Getmemo /> */}
      </div>

  )
}
