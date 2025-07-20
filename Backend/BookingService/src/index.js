const express=require('express')
const bodyParser=require('body-parser')

const cors = require('cors');
const apiRouter=require("./routers/index")

const setupAndStartServer=async()=>{
    
    const app=express();
    
    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    app.use(bodyParser.json());

app.use("/api",apiRouter)
const PORT=3001;

app.listen(PORT,()=>{
console.log("Server started at Port", PORT);
})
}

setupAndStartServer();