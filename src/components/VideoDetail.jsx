// import { Box, Stack, Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import ReactPlayer from 'react-player'
// import { Link, useParams } from 'react-router-dom'
// import fetchRequest from '../utils/fetchRequest'
// import { CheckCircle } from '@mui/icons-material'
// import Videos from './Videos'

// const VideoDetail = () => {
//   const {id}=useParams();
//   const [videoDetail,setVideoDetail]=useState(null);
//   const [relatedVideos,setRelatedVideos]=useState([]);

//   useEffect(()=>{
//     fetchRequest(`videos?part=snippet,statistics&id=${id}`)
//     .then((res)=>setVideoDetail(res.items[0]))
//     fetchRequest(`search?part=snippet&relatedToVideoId=${id}&type=video`)
//     .then((res)=>setRelatedVideos(res.items))
//   },[id])
//   if(!videoDetail) return 'Loading...';
//   if(!relatedVideos) return 'Loading...';
//   const {snippet:{title,channelTitle,channelId},statistics:{viewCount,likeCount}}=videoDetail;

//   return (
//     <Box minHeight='95vh' sx={{border:'1px solid green'}}>
//         <Stack direction={{xs:'column',md:'row'}}>
//         <Box flex={1}>
//           <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
//             <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width='100%' height='75vh' />
//           </Box>
//           <Typography color="white" variant="subtitle1" fontWeight="bold" p={2}>
//               {title}
//           </Typography>
//           <Stack direction="row" justifyContent="space-between"  px="1rem">
//           <Link to={`/channel/${channelId}`}>
//           <Typography color="white" sx={{sm:'subtitle1',md:'h6'}}>
//             {channelTitle}
//             <CheckCircle sx={{fontSize:'12px',color:'grey',marginLeft:'0.5rem'}} />
//           </Typography>
//           </Link>
//           <Stack color='white' direction="row" gap={2} alignItems='center' sx={{sm:'subtitle1',md:'h6'}}>
//             <Typography>
//               {parseInt(viewCount).toLocaleString()} views
//             </Typography>
//             <Typography>
//               {parseInt(likeCount).toLocaleString()} likes
//             </Typography>

//           </Stack>
//           </Stack>
//         </Box>
//         <Box mx='auto'>
//            <Videos videos={relatedVideos} direction="column" height="auto"/>
//         </Box>
//         </Stack>
        
//     </Box>
//   )
// }

// export default VideoDetail

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// import { Videos, Loader } from "./";
import fetchRequest from "../utils/fetchRequest";
import Videos from "./Videos";
import Loader from "./Loader";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchRequest(`videos?part=snippet,statistics&id=${id}`)
      .then((res) => setVideoDetail(res.items[0]))

    fetchRequest(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((res) => setVideos(res.items))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;
  if(!videos) return <Loader />;
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box id='videoBox' flex={1} sx={{height:'75vh',marginTop:'8px',marginLeft:'2vw'}}>
          <Box component='div' id='player' sx={{position: "sticky", top: "86px",zIndex:'1'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react_player" width='100%' height='75vh' controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box id="relatedVideos" py={{ md: 1, xs: 5 }} display="flex" flexWrap='wrap' ml={2}>
          <Videos videos={videos}/>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;