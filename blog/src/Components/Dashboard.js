import {React, useState, useEffect} from 'react'
import axios from 'axios'
import './Display.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './Login.css'


const Dashboard = () => {

 
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


 useEffect(() =>{
             dis();    
 },[])

  return (
    <div className='total'>
        <Navbar/>
        < div className='LoginContainer'>
        
      <div className='LoginForm'>
        <h2>Start Posting Blogs..</h2>
         <h3>Dive into different tech Things...</h3>
        <div className='d-flex justify-content-evenly'>
        <button className='btn-outline-success but' ><a href='/login' className='text-decoration-none text-black p-4 '>Login</a></button>
        <button className='btn-outline-success but' ><a href='/register' className='text-decoration-none text-black p-4 '>Sign Up</a></button>

        </div>
        
      </div>
      <br/><br/>
      <h1 class="text-left text-danger">Top Blogs </h1>
    <br/><br/>
    <div class="row d-flex justify-content-around">
        {data.slice(0,x).map((item) => (
            

            <div className="card custom-card ">
                <img src={item.img} className="card-img-top" alt="Card Image" width="40px" height="150px"/>
               <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <Link to={'/viewblog/' + item._id}><button class="btn btn-success btx">Open</button></Link>
                
               </div>
               
            </div>
            
          ))}
    </div>

      </div>
    </div>
  )
}

export default Dashboard
