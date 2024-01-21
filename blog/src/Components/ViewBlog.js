import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import  axios  from 'axios'
import './Login.css'
const ViewBlog = () => {

    let {id} = useParams();
  const[data,setdata] = useState([])
  
  const handler = async() =>{
    console.log(id)
    await axios.get(`http://localhost:8000/viewblog/${id}`).then((res) =>{
        console.log(res.data)
        setdata(res.data)
    }).catch((err) =>{
        console.log(err)
    })
  }
useEffect(()=>{
    handler()
},[])
   
  return (
    <div className='back '>
   
<br/><br/>
    
    <div class="container ">
        <div class="row mb-5">
             <h2 class="text-dark text-center text-capitalize text-decoration-underline">{data.name}</h2>
            <br/> <div class="userbox d-flex ">
                <span>Writer Profile:</span> <h5>{data.email}</h5>
             </div>
        </div>
        
        <b><h5>Key Topic</h5></b>
        
        <a href="#"  class="btn btn-primary">{data.domain}</a>
        <div class="row justify-content-center m-2">
            <div class="col-md-6">
                <img src={data.img} class="img-fluid " width="400px" height="400px" />
                
            </div>
            <h3 className='fs-italic m-5'>{data.data}</h3>
        </div>
    </div>

    
    
    
   

    <footer class="site-footer bg-dark mt-5">
  
  
</footer>
</div>
  )
}

export default ViewBlog
