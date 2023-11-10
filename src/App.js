
import { Box } from '@mui/material';
import Navbar from './components/Navbar';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Box sx={{backgroundColor:'black'}}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Feed/>}/>
            <Route path='/video/:id' element={<VideoDetail/>}/>
            <Route path='/channel/:id' element={<ChannelDetail/>}/>
            <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
