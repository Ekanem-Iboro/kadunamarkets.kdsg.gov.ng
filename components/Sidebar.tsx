import { Box } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Box bgcolor={"blue"} flex={1} p={2} sx={{ display: { xs: "none", sm: "block"}}}>News</Box>
  )
}

export default Sidebar