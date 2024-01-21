const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://akhil6704mujam:aNJ3878b55zXNcpo@cluster0.caxypgq.mongodb.net/?retryWrites=true&w=majority').then(
    () =>{
        console.log('mongodb is connected')
    }
).catch((err) =>{
    console.log(err)
})