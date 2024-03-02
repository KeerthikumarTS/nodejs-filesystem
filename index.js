import express from "express"
import timeStamprouter from "./src/routes/timeStamp.router.js"

const PORT=8000;

const app=express()


app.use('/',timeStamprouter)

app.get('/', (req,res) => {
    res.send("Welcome");
})

app.listen(PORT,()=>{
    console.log(`App is running on the port:${PORT}`)
})
