import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm,setSearchTerm]=useState('');
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(searchTerm){
        navigate(`/search/${searchTerm}`);
        setSearchTerm('');
    }
  }
  return (
    <Paper component='form' sx={{borderRadius:20,pl:3,display:'flex',alignItems:'center',mr:{xs:'0',md:'40vw'}}} onSubmit={handleSubmit}>
       <input className='search_bar' placeholder='Search...' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
       <IconButton type='submit' sx={{color:'#393939',pr:1}}>
        <Search/>
       </IconButton>
    </Paper>

  )
}

export default SearchBar
