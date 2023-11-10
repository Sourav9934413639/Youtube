import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import fetchRequest from '../utils/fetchRequest'
import Videos from './Videos'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
  const [videos,setVideos]=useState([]);
  const {searchTerm}=useParams();
  useEffect(()=>{
    fetchRequest(`search?part=snippet&q=${searchTerm}`)
    .then((res)=>{
      setVideos(res.items);
    })
    
  },[searchTerm])
  return (
    <Box className='showContent' p={1} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          Search results for:  <span style={{color:'rgb(150,0,0)'}}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed

