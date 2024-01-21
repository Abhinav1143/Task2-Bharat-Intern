const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const saltrounds = process.env.saltRounds
const model = require('./Database/Model')
require('./Database/Connect')
const BlogSchema = require('./Database/BlogSchema')
require('dotenv').config()
const cors = require('cors')

app.use(cors({origin:'*'}))
app.use(express.json())


app.post('/blogpost',async(req,res) =>{

    const {email,domain,name,img,data} = req.body

     const blogs = new BlogSchema({
        email:email,
        domain:domain,
        name:name,
        img:img,
        data:data

     })

     await blogs.save()

     return res.send("Blog posted successfully")

})

app.get('/data',async(req,res)=>{
    const ex= await BlogSchema.find()

    return res.send(ex)
})

app.get('/viewblog/:id',async(req,res) =>{
    const id = req.params.id
    const blogdetail = await BlogSchema.findById(id);
        res.send(blogdetail)
})
app.post('/login',async(req,res) =>{
      

    const {email,password}  = req.body;
    const exist = await model.findOne({email:email})
    const comparePassword = async (plainPassword, hashedPassword) => {
        try {
          
          const match = await bcrypt.compare(plainPassword, hashedPassword);
          
          return match;
        } catch (error) {
         console.log("error")
        }
      };

    if(exist)
    {
        console.log(exist.password)
        const matching =  await comparePassword(password,exist.password);
        if(matching)
        {
                  return res.send("login successfull");
        }
        else{
            res.send("password not match");
        }
    }
    else{
        return res.send("no email is exist")
    }
})

app.post('/register',async(req,res) =>{


    const {name,email,password,cpassword} = req.body;
    
    const exist = await model.findOne({email:email})
    console.log(exist)
    if(!exist)
    {
    const generateHash = async (password) => {
        try {
        
          const salt = await bcrypt.genSalt(saltrounds);
          const hash = await bcrypt.hash(password, salt);
        
          return hash;
        } catch (error) {
            console.log("there is error")
          
        }
      };
      const ps = await generateHash(password)
      console.log(ps)
    if(password.length>=8 && password== cpassword)
    {
            const user = new model({
            name:name,
            email:email,
            password:ps
        })

       const data =  await user.save();

        return res.send("Registration is successfull")
    }
    else{
        return res.send("password error")
    }
   }
   else{
    console.log(exist.email)
    return res.send("email already exists")
   }
})



const port = 8000
app.listen(port,() =>{
    console.log(`port is listening ${port}`)
})