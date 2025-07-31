// export const getStaticProps: GetStaticProps = async () => {

//     // make API request
//     const request = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await request.json()


//     return {
//         props: {
//             data
//         }
//     };
// }

import Link from 'next/link'
import React from 'react'
// import NotFoundFooter from '../components/NotFoundFooter'

function NotFound() {
  return (
    <div className='not-found-wrapper'>
        <div className='not-found'>
            <h1 className='text-[2em] text-red-500'>Oooops, </h1>
            <h2>That page doesn't exist</h2>
            <p>Go back to the <span className='text-blue-900'><Link href={"/"}>Homepage </Link></span> </p>
        </div>
        {/* <NotFoundFooter/> */}
    </div>   
  )
}

export default NotFound