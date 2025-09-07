import express from "express";
import { connectdb } from "./db/index.js";

const app = express();
const port = process.env.PORT || 3000


app.get('/', (req,res)=>{
    res.send('working')
})

connectdb()
.then(()=>{      
    app.listen(port, ()=>{
        console.log("Listening on PORT ", port);
    })
})
.catch((error)=>{
    console.log("Error from Server.js")
})