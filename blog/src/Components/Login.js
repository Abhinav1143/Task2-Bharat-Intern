

import React, { useState } from 'react';
import './Login.css'
import axios from 'axios'
import swal from 'sweetalert'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigation = useNavigate();
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')

  const handleLogin = async(e) => {
    e.preventDefault();
     await axios.post('http://localhost:8000/login',{
          email:email,
          password:password
     }).then((res) =>{
      console.log(res.data)
       if(res.data == 'login successfull')
       {
        localStorage.setItem('email',email)
          navigation('/display')
       }
       else if(res.data == 'password not match')
       {
        swal({
          title: "password not match",
          text: "",
          icon: "warning",
          dangerMode: true,
        })
       }
       else if(res.data == 'no email is exist')
       {
        swal({
          title: "no email is exist",
          text: "",
          icon: "warning",
          dangerMode: true,
        })
       }
     }).catch((err)=>{
      console.log(err)
     })
  };

  return (
    < div className='LoginContainer'>
      <div className='LoginForm' >
        <h2>Login</h2>
        < input className='LoginInput' type="email" placeholder="Type your email"  onChange={(e)=>{setemail(e.target.value)}}required />
        <input className='LoginInput' type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} required />
        <button className='LoginButton' type="submit" onClick={handleLogin}>Login</button>
      </div>
      </div>
  );
};

export default Login;

