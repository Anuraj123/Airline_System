const express=require("express")
const bodyParser=require("body-parser")

const apiValues=require("./routes/index")
const cors = require('cors');

const setupAndStartServer=async()=>{
    
    const app=express();
    app.use(cors());
    
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    const PORT=3003;
    app.use("/api",apiValues);
    app.listen(PORT,()=>{
        console.log("Server started at ",PORT);
    })
}

setupAndStartServer();