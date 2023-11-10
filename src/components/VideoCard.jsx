import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl,demoChannelUrl,demoChannelTitle,demoVideoTitle,demoVideoUrl } from '../utils/utilItems'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
const VideoCard = ({video:{id:{videoId},snippet}}) => {


    return (
    <Card id='vcard' sx={{width:{xs:'100%',sm:'350px',md:'300px'},boxShadow:'none',borderRadius:0,height:'260px'}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <CardMedia id='vmedia' image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} sx={{width:{xs:'100%',sm:'350px',md:'300px'},height:'154px'}}  />
        </Link>
        <CardContent sx={{backgroundColor:'#393939',height:'106px'}}>
            <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="white">
                {
                    snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)
                }
            </Typography>
            </Link>
            <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="grey" >
                {
                    snippet?.channelTitle||demoChannelTitle
                    
                }
                <CheckCircle sx={{fontSize:12,color:'grey',ml:'5px'}} />
            </Typography>
            </Link>
        </CardContent>
        
    </Card>
  )
}

export default VideoCard
