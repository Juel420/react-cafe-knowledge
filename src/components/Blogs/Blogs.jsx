import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

export default function Blogs() {
  const[blogs,setblogs] = useState([]);
  useEffect(() =>{
    fetch('/blogs.json')
    .then(res => res.json())
    .then(data => setblogs(data))
  },[])
  return (
    <div>
      
    </div>
  )
}
