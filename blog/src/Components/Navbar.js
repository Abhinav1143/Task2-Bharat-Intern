import React from 'react'
import './Display.css'
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRO7baR1a-8zoES9mD-1fPN_21EbwMndWerQ&usqp=CAU' alt="" width="100px" height="80px" class="d-inline-block align-text-top pl-3" />
    </a>
    <form class="d-flex">
      <button class="btn btn-success" type="submit"><a href='/blog' className='text-decoration-none text-white'>Create Post</a></button>
      <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"  width="42px"  height="42px" alt="image" className='rounded-circle shadow' />
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar