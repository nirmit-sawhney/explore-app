if(process.env.NODE_ENV!=='production'){
    require('dotenv').config();
}

const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const seedDB=require('./seed');
const methodOveride=require('method-override');
const session=require('express-session');
const flash=require('connect-flash');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const User=require('./models/user');
seedDB();

const sessionConfig={
    secret:'a shop app secret',
    resave:false,
    saveUninitialized:true
}

const ProductRoutes=require('./routes/productRoutes');
const AuthRoutes=require('./routes/authRoutes');
const cartRoutes=require('./routes/cartRoutes');

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB CONNECTED");
})
.catch((err)=>{
    console.log(err.message);
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOveride('_method'));

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

//local strategy
passport.use(new LocalStrategy(User.authenticate())); 
passport.serializeUser(User.serializeUser());       
passport.deserializeUser(User.deserializeUser());   

app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    res.locals.currentUser=req.user;
    next();
})

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/error',(req,res)=>{
    res.render('error');
})

app.use(ProductRoutes);
app.use(AuthRoutes);
app.use(cartRoutes);

const PORT=process.env.PORT || 2323;

app.listen(PORT,(req,res)=>{
    console.log(`server running at port ${PORT}`);
})