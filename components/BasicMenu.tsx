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
        <FaBars className="w-5 h-5 mt-5" />
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
        <MenuItem onClick={handleClose}>
          <Link href={'/'}>Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href={'/hall'}>Book Hall</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={'/about'}>About</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={'/news'}>News</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={'/publications'}>Publications</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={'/projects'}>Projects</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={'/gallery'}>Gallery</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            href={'https://kadunamarketjobs.roundstone.solutions'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Careers
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={'/contact'}>Contact</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}
// Footer
// © 2022 GitHub, Inc.
