const express=require('express');
const router=express.Router();
const path = require('path');
const passport=require('passport');
const User=require('../models/user');
const multer=require('multer');
router.use(express.static(__dirname+"./public"));

const Storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + '_' + Date.now() 
        + path.extname(file.originalname));
    }
})

const upload=multer({storage:Storage}).single('p-image');
//get the signup form
router.get('/signup',(req,res)=>{
    res.render('auth/signup');
})

//signup
router.post('/signup',upload,async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        const profile=req.file.filename;
        const user=await new User({username:username,email:email,profile:profile});
        await User.register(user,password);
        req.flash('success',`Welcome ${username}, You have successfully registered. Please Login!`);
        res.redirect('/products');
    }
    catch(e){
        req.flash('error',"OOPS, SOMETHING WENT WRONG");
        res.redirect('/signup');
    }
});

//form to login
router.get('/login',(req,res)=>{
    res.render('auth/login');
})

//login
router.post('/login',
    passport.authenticate('local',
        {
            failureRedirect: '/login',
            failureFlash: true
        }),
    (req, res) => {
        
        const { username } = req.user;
        req.flash('success', `Welcome Back ${username}`);
        res.redirect('/');
    });

router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/login');
})

module.exports=router;