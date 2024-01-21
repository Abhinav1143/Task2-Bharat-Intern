import React, { useEffect, useState } from 'react'
import  axios  from 'axios'
import './Comp.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Display = () => {
    
    const [data,setdata] = useState([])
     const[x,setx] = useState(3)
    const dis = async() =>{
        await axios.get('http://localhost:8000/data').then(
            (res)=>{
                console.log(res.data)
                setdata(res.data)

            }
         )  
    }

    const views = () =>{
        setx(x*2)
    }
    useEffect(() =>{
                dis();    
    },[])

  return (
    <div >
         <Navbar/>
    <div class="container-fluid pt-4">
       
    <h3 class="text-center">Recent Blogs on Road</h3>
    <br/><br/>
    <div class="row d-flex justify-content-around">
        {data.slice(0,x).map((item) => (
            

            <div className="card custom-card">
                <img src={item.img} className="card-img-top" alt="Card Image" width="40px" height="150px"/>
               <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <Link to={'/viewblog/' + item._id}><button class="btn btn-primary btx">Open</button></Link>
                
               </div>
               
            </div>
            
          ))}
    </div>
    <center><a class="btn btn-primary mt-5" onClick={views} >View More</a></center>
</div>
</div>
  )
}

export default Display
