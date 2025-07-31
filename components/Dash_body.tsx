import { Stack } from '@mui/material'
import React from 'react'
import Feed from './Feed'
import Modal from './Modal'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'

function Dash_body() {
  return (
    <div>
        {/* {email && <p>`Logged in as: {email}`</p>} */}
        <Stack direction={"row"} spacing={2} justifyContent="space-between" className='mt-20 pt-6'>
            <Sidebar />
            <Feed />
            <Rightbar />
        </Stack>
        <Modal />
    </div>
  )
}

export default Dash_body