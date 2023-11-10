import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchRequest from '../utils/fetchRequest';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = () => {
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos]=useState([])
  const {id}=useParams();
  useEffect(()=>{
    fetchRequest(`channels?part=snippet&id=${id}`)
    .then((res)=>{
      setChannelDetail(res?.items[0])
    })
    fetchRequest(`search?part=snippet&channelId=${id}&order=date`)
    .then((res)=>{
      setVideos(res?.items)
    })
  },[id])

  return (
    
    <Box minHeight='95vh'>
      <Box>
      <div style={{background:'linear-gradient(90deg,rgba(0,240,250,1),rgba(200,10,180,1),rgba(0,210,255,1)',height:'10rem'}}></div>
      <ChannelCard channelDetail={channelDetail} marginTop='-100px' />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}} />
        <Videos videos={videos} />
      </Box>
    </Box>
    
  )
}

export default ChannelDetail
