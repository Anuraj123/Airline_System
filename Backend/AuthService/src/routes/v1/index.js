const express=require("express")
const userController=require('../../controllers/user-controller')

const router=express.Router();
router.post("/register",userController.register)
router.get("/signIn",userController.signIn);
router.get("/isAuth",userController.isAuthenticated)
router.get("/getUser",userController.getUser)
module.exports=router;