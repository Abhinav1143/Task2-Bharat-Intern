import axios from 'axios';
import React,{ useState, useRef, useMemo } from 'react'
import { useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert'
// import './Comp.css'
const Blog = () => {

    
    const editor = useRef(null);
    const [loading,setloading] = useState(false);
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    // const [email,setemail] = useState('');
    const [domain,setdomain] = useState('');
    const [name,setname] = useState('');
    const [img,setimg] = useState('');
   

const email=localStorage.getItem('email');
    const subs = async(e) =>{
        e.preventDefault();

        await axios.post('http://localhost:8000/blogpost',{
             email:email,
             domain:domain,
             name:name,
             img:img,
             data:content
        }).then((res) =>{
            console.log(res.data)
        if(res.data=="Blog posted successfully")
            {
                swal({
                    title: "Posted Successfully",
                    text: "Congratulations on your post",
                    icon: "success",
                    button: "Ok!",
                  });
                  setloading(false);
                  navigate('/display')
                
            }
        }).catch((err) =>{
            console.log(err)
        })
    }
  return (
    <div>
        <div class="container-fluid text-center bg-success pt-3 pb-2">
            <h2>Share Your Knowledge/Ideas</h2>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6">
                    <img src="https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?b=1&s=170667a&w=0&k=20&c=VRggO_AVPRkQcC-wWKiBSSBfv4GJhrzKh00vlVY9O5w=" class="img-responsive img-fluid shadow p-3 mb-5 rounded" />
                </div>
                <div class="col-md-6 justify-content-end text-center">
                    <input type="text" class="form-control text-center fc" placeholder="Title of Blog" required onChange={(e)=>{setname(e.target.value)}}/><br/>
                    <input type="text" class="form-control text-center fc" placeholder="Domain" required onChange={(e)=>{setdomain(e.target.value)}}/><br/>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={newContent => setContent(newContent)} 
                        onChange={newContent => {}}
                    /><br/>
                    <input type="url" class="form-control fc text-center" placeholder="Home Image Link" required onChange={(e)=>{setimg(e.target.value)}}/><br/>
                   

                    <button className="btn btn-success" onClick={subs}>
                    {loading && (
                        <i
                        className="fa fa-spinner fa-spin"
                        style={{ marginRight: "5px" }}
                        />
                    )}
                    {loading && <span>Posting</span>}
                    {!loading && <span>Post</span>}
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Blog