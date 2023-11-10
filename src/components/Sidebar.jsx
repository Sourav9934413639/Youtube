import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/utilItems'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
    
  return (
    <Stack direction='row' sx={{overflowY:'auto',height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}>
        {
            categories.map((category)=>{
                return <button key={category.name} className='category_btn' style={{backgroundColor:category.name===selectedCategory?'red':'',color:'white'}} onClick={()=>setSelectedCategory(category.name)}>
                    <span style={{color:category.name===selectedCategory?'white':'red',marginRight:'15px'}}>{category.icon}</span>
                    <span style={{opacity:category.name===selectedCategory?'1':'0.8'}}>{category.name}</span>

                    </button>
            })
        }
    </Stack>
  )
}

export default Sidebar
