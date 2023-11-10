import axios from 'axios';
const base_url='https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

const fetchRequest=async(url)=>{
    try{
    let {data}=await axios.get(`${base_url}/${url}`,options)
    return data;
    }catch(err){
        console.log(`Error: ${err}`);

    }  
}
export default fetchRequest;