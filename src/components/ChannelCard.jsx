import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/utilItems'
import { CheckCircle } from '@mui/icons-material'
const ChannelCard = ({channelDetail,marginTop}) => {
    console.log(channelDetail)
  return (
    <Box sx={{boxShadow:'none',borderRadius:'1.5rem',display:'flex',justifyContent:'center',alignItems:'center',width:{xs:'356px',md:'320px'},height:'326px',margin:'auto',marginTop}}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'white'}}>
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{borderRadius:'50%',height:'8rem',width:'8rem',mb:'1rem',mx:'auto'}} />
                <Typography variant="h6">
                    {
                        channelDetail?.snippet?.title
                    }
                <CheckCircle sx={{fontSize:14,color:'grey',ml:'5px'}} />

                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {
                            parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()
                        } Subscribers
                        
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard
