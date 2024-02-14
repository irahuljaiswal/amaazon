const express = require("express")
const router = new express.Router()
const Products = require("../models/productsSchema")
const USER = require("../models/userSchema")
const bcrypt = require("bcryptjs")

//get productsdata api

router.get("/getproducts", async(req,res)=>{
    try{
        const productsdata = await Products.find();
        // console.log("console the data" + productsdata);
        res.status(201).json(productsdata)
    }
    catch(err){
        console.log("error->" + err.message);
    }
})

//Registering data

router.post("/register", async(req,res)=>{
    const {name, number, email, password, confirmpass} = req.body;

    if(!name || !number || !email || !password || !confirmpass){
        res.status(422).json({error:"fill all the data"})
        console.log("no data available");
    }

    try{
        const preuser = await USER.findOne({email:email});

        if(preuser){
            res.status(422).json({error:"this user is already present"})
        }
        else if(password!==confirmpass){
            res.status(422).json({error:"both passwords do not match"})
        }
        else{
            const finalUser = new USER({
                name, number, email, password, confirmpass
            })

            const storedata = await finalUser.save();
            console.log(storedata);

            res.status(201).json(storedata)
        }
    }
    catch(error){
        console.error("Error is-> ", error.message)
        res.status(500).json({error:"internal server error"})
    }
})

// login user API

router.post("/login", async(req, res)=>{
    const {email, password} = req.body;
    
    if(!email || !password){
        res.status(400).json({error:"Fill all the data"})
    }

    try{
        const userlogin = await USER.findOne({email:email})
        console.log(userlogin);

        if(userlogin){
            const isMatch = await bcrypt.compare(password, userlogin.password)
            console.log(isMatch+"pass match")

            // token generation
            const token = await userlogin.generateAuthtoken();
            console.log(token);

            res.cookie("Amazonweb", token,{
                expires:new Date(Date.now() + 900000),
                httpOnly:true
            })
 
            if(!isMatch){
                res.status(400).json({error:"invalid details"})
            }
            else{
                res.status(201).json(userlogin)
            }
        }
        else{
             res.status(400).json({error:"invalid details"})
        }
    }
    catch(error){
        res.status(400).json({error:"invalid details"})
    }
})

module.exports = router