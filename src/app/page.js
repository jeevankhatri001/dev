"use client"
import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const page = () => {
  const notify = ()=>{
    toast.warn('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    
      });
  }
const [image, setimage] = useState([])

const getImgae = async ()=>{
  const res = await axios.get("https://picsum.photos/v2/list");
  const data = res.data;
  console.log(data)
  setimage(data)
}

  
  return (
    <div>
      <button onClick={notify} className='bg-gray-500 rounded m-10'>Click</button>
      <ToastContainer/>
      <button onClick={getImgae} className='bg-gray-500 rounded m-10'>Images</button>
      <div>
        {image.map((data,i)=>{
         return <img key={i} src={data} />
        })}
      </div>
    </div>
  )
}

export default page