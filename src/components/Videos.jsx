import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import { Box, Stack } from '@mui/material'
import Loader from './Loader'

const Videos = ({videos,direction}) => {
  if(!videos?.length)return <Loader/>
  return (
   <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="flex-start" alignItems="flex-start" gap={2}>
        {
            videos.map((ele,idx)=>{
                return <Box key={idx}>
                    {ele.id.videoId && <VideoCard video={ele} />}
                    {ele.id.channelId && <ChannelCard channelDetail={ele} />}

                </Box>
            })
        }
   </Stack>
  )
}

export default Videos
