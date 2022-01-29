if(process.env.NODE_ENV!=='production'){
    require('dotenv').config();
}
const express=require('express');
const router=express.Router();
const Product=require('../models/product');
const User=require('../models/user');
const isLoggedIn=require('../isLoggedIn');
const stripe=require('stripe')(process.env.SECRET_KEY);

router.post('/cart/:productid/add',isLoggedIn,async(req,res)=>{
    const {productid}=req.params;
    const product=await Product.findById(productid);
    const currentUser=req.user;
    currentUser.cart.push(product);
    await currentUser.save();
    req.flash('success','Item added to your cart successfully!');
    res.redirect(`/products/${productid}`);
})

router.get('/user/cart',isLoggedIn,async(req,res)=>{
    const userid=req.user._id;
    const user=await User.findById(userid).populate('cart');
    res.render('cart/usercart',{user,key:process.env.PUB_KEY});
})

router.post('/payment/:subtotal',(req,res)=>{
    const {subtotal}=req.params;
    stripe.customers.create({
        email:req.body.stripeEmail,
        source:req.body.stripeToken,
        name: 'Nirmit Sawhney',
        address: {
            line1: 'TC 9/4 Old MES colony',
            postal_code: '135001',
            city: 'Yamuna Nagar',
            state: 'Haryana',
            country: 'India',
        }
    })
    .then((customer)=>{
        return stripe.charges.create({
            amount:subtotal,
            description:'Shopping App Product',
            currency:'INR',
            customer:customer.id
        })
    })
    .then(async(charge)=>{
        const userid=req.user._id;
        await User.findByIdAndUpdate(userid,{$set:{cart:[]}},{multi:true});
        req.flash('success','Order Placed Successfully, Thankyou!');
        res.redirect('/');
    })
    .catch((err)=>{
        req.flash('error',"OOPS! Something Went Wrong. Please try again");
        res.redirect('/error');
    })
})

router.delete('/cart/:id/remove',isLoggedIn,async(req,res)=>{
    const productid=req.params.id;
    const userid=req.user._id;
    await User.findByIdAndUpdate(userid,{$pull:{cart:productid}});
    res.redirect('/user/cart');
})

module.exports=router;