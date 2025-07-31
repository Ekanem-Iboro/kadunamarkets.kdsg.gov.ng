// import React from 'react'

import { SearchIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/Atom"
// import { logOut } from "../firebase"


function Dash_header() {
  const router = useRouter()
  const [open, setOpen ] = useRecoilState(modalState)

//   async function handleLogout(){
//     // await logOut()
//     router.push('/login')
// }
  const handleLogout = () => {

    // logOut()

    router.push("/login")

  }

  return (
    <div className="flex justify-between p-4">
      <div className="bg-white px-1 rounded-2xl hover:bg-slate-400 transition duration-[.4s] sm:p-0">
        <Link href={"/"}>
          <Image alt="" src="/logo.png" width={70} height={80} className="cursor-pointer sm:w-5 sm:h-5"/>
        </Link>
      </div>
      <ul className="hidden space-x-5 md:flex item-center px-4 mr-10">
          <li className="headerLink text-black hover:bg-slate-100">Account</li>
          <li className="headerLink text-black hover:bg-slate-100" onClick={() => setOpen(true)}>Memo</li>
          <li className="headerLink text-black hover:bg-slate-100">Gallery</li>
          <li className="headerLink text-black hover:bg-slate-100" >Login</li>
          {/* <li className="headerLink text-black hover:bg-slate-100" onClick={handleLogout}>Logout</li> */}
      </ul>
</div> 
  )
}

export default Dash_header