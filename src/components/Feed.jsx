import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import fetchRequest from '../utils/fetchRequest'
import Videos from './Videos'

const Feed = () => {
  const [videos,setVideos]=useState([]);
  const [selectedCategory,setSelectedCategory]=useState('New');
  useEffect(()=>{
    fetchRequest(`search?part=snippet&q=${selectedCategory}`)
    .then((res)=>{
      setVideos(res.items);
      console.log(res.items)
    })
    
  },[selectedCategory])
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},color:'white',borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'white'}}>
            @copyright 2023 social media
          </Typography>
      </Box>
      <Box className='showContent' p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          {selectedCategory} <span style={{color:'rgb(150,0,0)'}}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed

