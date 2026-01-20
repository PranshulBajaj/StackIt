import express from "express";
import { connectdb } from "./db/index.js";
import { app } from "./app.js";

app.get('/', (req,res)=>{
    res.send('working')
})

connectdb()
.then(()=>{      
    app.listen(process.env.PORT, ()=>{
        console.log("Listening on PORT ", process.env.PORT);
    })
})
.catch((error)=>{
    console.log("Error from Server.js")
})