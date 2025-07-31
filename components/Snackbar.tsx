// import { type } from 'os'
import React, { useState, forwardRef } from 'react'

interface Props {
    message: string,
    type: string
}

const Snackbar = forwardRef(({message, type}: Props) => {
    const [showSnackBar, setShowSnackBar] = useState(false)

  return (
    // style={background: type === 'success' ? 'white' : 'red'}
    <div className= {type === 'success' ? 'goodSnak' : 'badSnak'} id={showSnackBar ? 'show' : 'hide'}>
        <p className='flex-[10%]'> {type === 'sucess' ? <span>&#x2613;</span> : <span>&#x2713;</span>} </p>
        <p className='flex-[90%]'> { message } </p>
    </div>
  )
})

export default Snackbar