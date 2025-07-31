import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="lg:!hidden bg-slate-800 bg-opacity-40 rounded-lg">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="!capitalize !text-white"
      >
        <FaBars className='w-5 h-5 mt-5' />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href={"/"}>
            <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link href={"https://kadunamarkets.kdsg.gov.ng"}  target={"_blank"}>
            <MenuItem onClick={handleClose}>Book Now</MenuItem>
        </Link>
        <Link href={"/about"}>
            <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
        <Link href={"/news"}>
            <MenuItem onClick={handleClose}>News</MenuItem>
        </Link>
        <Link href={"/publications"}>
            <MenuItem onClick={handleClose}>Publications</MenuItem>
        </Link>
        <Link href={"/projects"}>
            <MenuItem onClick={handleClose}>Projects</MenuItem>  
        </Link>
        <Link href={"/gallery"}>
            <MenuItem onClick={handleClose}>Gallery</MenuItem>  
        </Link>
        <Link href={"/https://kadunamarketjobs.roundstone.solutions"}>
            <MenuItem onClick={handleClose}>Careers</MenuItem>  
        </Link>
        <Link href={"/contact"}>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Link>
      </Menu>
    </div>
  )
}
// Footer
// © 2022 GitHub, Inc.