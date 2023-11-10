import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/utilItems'
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <>
    <Stack direction='row' width='100%' p={2} alignItems='center' sx={{position:'sticky',top:0,backgroundColor:'black',justifyContent:'space-between',zIndex:'5'}}>
      <Link to='/' style={{display:'flex',alignItems:'center'}}><img src={logo} alt='logo' style={{height:'2rem'}}/></Link>
      <SearchBar/>
    </Stack>
    
    </>
  )
}

export default Navbar
