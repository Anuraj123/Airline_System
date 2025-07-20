const express=require("express")

const router=express.Router();

const apiValues=require("./v1/index")

router.use("/v1",apiValues);
module.exports=router;

