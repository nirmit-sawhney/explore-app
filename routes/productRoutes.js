const express=require('express');
const router=express.Router();
const Product=require('../models/product');
const Review=require('../models/review');
const isLoggedIn=require('../isLoggedIn');

//get all the products
router.get('/products',(req,res)=>{
    res.render('products/index');
})

router.get('/products/electronics',async(req,res)=>{
    try{
        const products=await Product.find({type:'electronics'});
        res.render('products/electronics',{products});
    }
    catch(e){
        req.flash('error','oops something went wrong');
        res.redirect('/error');
    }
})

router.get('/products/menfashion',async(req,res)=>{
    try{
        const products=await Product.find({type:'menfashion'});
        res.render('products/menfashion',{products});
    }
    catch(e){
        req.flash('error','oops something went wrong');
        res.redirect('/error');
    }
})

router.get('/products/womenfashion',async(req,res)=>{
    try{
        const products=await Product.find({type:'womenfashion'});
        res.render('products/menfashion',{products});
    }
    catch(e){
        req.flash('error','oops something went wrong');
        res.redirect('/error');
    }
})

router.get('/products/home',async(req,res)=>{
    try{
        const products=await Product.find({type:'home'});
        res.render('products/home',{products});
    }
    catch(e){
        req.flash('error','oops something went wrong');
        res.redirect('/error');
    }
})

//form to make a new product
router.get('/products/new',isLoggedIn,(req,res)=>{
    res.render('products/new');
})

//create a new product
router.post('/products',async(req,res)=>{
    try{
        const {name,price,img,desc,reviews}=req.body;
        const newProduct=await new Product({name,price,img,desc,reviews});
        await Product.create(newProduct);
        req.flash('success','successfully created a new product');
        res.redirect('/products');
    }
    catch(e){
        req.flash('error','oops something went wrong');
        res.redirect('/error');
    }
})

//show a particular product
router.get('/products/:id',isLoggedIn,async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id).populate('reviews');
        res.render('products/show',{product});
    }
    catch(e){
        req.flash('error','oops something went wrong');
        res.redirect('/error');
    }
})

//form to edit product
router.get('/products/:id/edit',isLoggedIn,async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);
        res.render('products/edit',{product});
    }
    catch(e){
        req.flash('error','oops something went wrong');
        res.redirect('/error');
    }
})

//edit the product
router.patch('/products/:id',isLoggedIn,async(req,res)=>{
    try{
        const {id}=req.params;
        const product={...req.body};
        await Product.findByIdAndUpdate(id,product);
        req.flash('success','Successfully edited the product!!');
        res.redirect(`/products/${id}`);
    }
    catch(e){
        req.flash('error','oops something went wrong');
        res.redirect('/error');
    }
})

//delete the product
router.delete('/products/:id',isLoggedIn,async(req,res)=>{
    try{
        const {id}=req.params;
        await Product.findByIdAndDelete(id);
        req.flash('success','Product Deleted Successfully!');
        res.redirect('/products');
    }
    catch(e){
        req.flash('error','oops something went wrong');
        res.redirect('/error');
    }
})

router.post('/products/:id/review',isLoggedIn,async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);
        const {rating,comment}=req.body;
        const review=new Review({rating,comment,user:req.user.username});
        product.reviews.push(review);
        await review.save();
        await product.save();
        req.flash('success','Successfully created a review');
        res.redirect(`/products/${id}`);
    }
    catch(e){
        req.flash('error','oops something went wrong');
        res.redirect('/error');
    }
})

module.exports=router;