

import React, { useState } from 'react';
import  axios  from 'axios';
import './Login.css'
import swal from 'sweetalert'
import {useNavigate} from 'react-router-dom'


const Register = () => {
  const navigation = useNavigate();
const[name,setname] = useState('')
const[email,setemail] = useState('')
const[password,setpassword] = useState('')
const[cpassword,setcpassowrd] = useState('')

  const handleLogin = async(e) =>{
    e.preventDefault();

    await axios.post('http://localhost:8000/register',{
        name:name,
        email:email,
        password:password,
        cpassword:cpassword
    }).then((res) =>{
      console.log(res.data)
       if(res.data == 'Registration is successfull')
       {
        localStorage.setItem('email',email)
          navigation('/login')
       }
       else if(res.data == 'password error')
       {
        swal({
          title: "password not match",
          text: "more than 8 characters required",
          icon: "warning",
          dangerMode: true,
        })
       }
       else if(res.data == 'email already exists')
       {
        swal({
          title: "email already exists",
          text: "",
          icon: "warning",
          dangerMode: true,
        })
       }
     }).catch((err) =>{
        console.log(err)
    })
 
     setname('')
     setemail('')
     setpassword('')
     setcpassowrd('')

  }

  return (
    < div className='LoginContainer'>
      <form className='LoginForm' >
        <h2>Register</h2>
        < input className='LoginInput' type="text" placeholder="Username" value={name}  onChange={(e) =>{setname(e.target.value)}} required />
        < input className='LoginInput' type="email" placeholder="email" value={email} onChange={(e) =>{setemail(e.target.value)}} required />
        <input className='LoginInput' type="password" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}} required />
        <input className='LoginInput' type="password" placeholder="confirm Password" value={cpassword} onChange={(e)=>{setcpassowrd(e.target.value)}} required />
        <button className='LoginButton'onClick={handleLogin} type="submit">Login</button>
      </form>
      </div>
  );
};

export default Register;

