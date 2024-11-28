const express=require("express");
const axios=require("axios");
require("dotenv").config();
const app=express();
const apikey=process.env.API_KEY;
app.get("/api/weather",async(req,res)=>{
    const city=req.query.city;
    const responce= await axios.get('http://api.weatherstack.com/current',
        {
            params:{
                access_key:apikey,
                query:city
            }
        }
    )
    res.json(responce.data)
})
app.use(express.static("public"));
app.listen(8000,()=>{
    console.log('server started');
})