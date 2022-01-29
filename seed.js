const Product=require('./models/product');

const products=[
    {
        name:'Iphone 11',
        price:60000,
        img:'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80',
        type:'electronics',
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc."
    },
    {
        name:'Nike Shoes',
        price:4500,
        img:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        type:'menfashion',
        desc:"The all new nike shoes gives you the ultimate comfort and grip."
    },
    {
        name:'MacBook Pro',
        price:160000,
        img:'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        type:'electronics',
        desc:'The Macbook Pro designed and marketed by Apple Inc.'
    },
    {
        name:'HeadPhones',
        price: 3500,
        img:'https://media.istockphoto.com/photos/sony-wh1000xm3-noise-canceling-wireless-headphones-on-a-rotation-picture-id1221743844?b=1&k=20&m=1221743844&s=170667a&w=0&h=G0HrSJUb670TtvrYvnEj1i4FlMSSMOVxq_I0lRR04T4=',
        type:'electronics',
        desc:'The Boat Headphones comes with dual equalizer modes for normal and deep bass output, hands free calling with 3 button remote and many more..'
    },
    {
        name:'Smart Watch',
        price:4000,
        img:'https://images.unsplash.com/photo-1601905192985-e47604d4c6e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aSUyMHdhdGNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        type:'electronics',
        desc:'This smart watch comes with various varients and gives you various accessibility like incoming call and message notifications, walk steps counter, heart rate monitor and many more'
    },
    {
        name:'Shorts',
        price:450,
        img:'https://media.istockphoto.com/photos/man-posing-with-bicycle-picture-id472315566?b=1&k=20&m=472315566&s=170667a&w=0&h=uAD9hnw7VTAinvCP9G0TGW8c5aPM7xJfjBSk8LVgiYk=',
        type:'menfashion',
        desc:'The Jockey Men Shorts is designed by Jockey Inc. to give you the great comfort and joy.'
    },
    {
        name:'ONLY',
        price:2699,
        img:'https://images.unsplash.com/photo-1589810635657-232948472d98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80',
        type:'womenfashion',
        desc:'Women Teal Embellished'
    },
    {
        name:'Gucci',
        price:4200,
        img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        type:'womenfashion',
        desc:'Women\'s Handbag'
    },
    {
        name:'Zara',
        price:2899,
        img:'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
        type:'womenfashion',
        desc:'Women Floral Dress'
    },
    {
        name:'Mochi',
        price:1899,
        img:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80',
        type:'womenfashion',
        desc:'Women \'s Footwear'
    },
    {
        name:'Flora',
        price:499,
        img:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        type:'womenfashion',
        desc:'Women \'s Casual T-shirt'
    },
    {
        name:'Zara Men',
        price:1199,
        img:'https://images.unsplash.com/photo-1550246140-29f40b909e5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        type:'menfashion',
        desc:'Zara Men\'s Hoodie'
    },
    {
        name:'Omega',
        price:6499,
        img:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
        type:'menfashion',
        desc:'Exclusive men wrist watch'
    },
    {
        name:'Rayban',
        price:5799,
        img:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80',
        type:'menfashion',
        desc:'Men Sunglasses'
    },
    {
        name:'Voyage Women',
        price:1699,
        img:'https://images.unsplash.com/photo-1610136649349-0f646f318053?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        type:'womenfashion',
        desc:'Women\'s Sunglasses'
    },
    {
        name:'Puma',
        price:3899,
        img:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        type:'menfashion',
        desc:'Men\'s Footwear'
    },
    {
        name:'iMac',
        price:219900,
        img:'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80',
        type:'electronics',
        desc:'Apple iMac'
    },
    {
        name:'Samusung Galaxy Z-flip',
        price:94999,
        img:'https://images.unsplash.com/photo-1592813630413-1124aa567638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=585&q=80',
        type:'electronics',
        desc:'All new samsung galaxy z-flip'
    },
    {
        name:'Indoor Pot',
        price:399,
        img:'https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        type:'home',
        desc:'Indoor Pot for home decor'
    },
    {
        name:'Wooden Chair',
        price:1499,
        img:'https://images.unsplash.com/photo-1517705008128-361805f42e86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=787&q=80',
        type:'home',
        desc:'Comfortable wooden chair for home'
    },
    {
        name:'Chandelier',
        price:8999,
        img:'https://images.unsplash.com/photo-1589200334106-58b552a9a8ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        type:'home',
        desc:'Lightning chandelier'
    },
    {
        name:'Sofa Couch',
        price:11999,
        img:'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80',
        type:'home',
        desc:'Comfotable sofa couch for indoors'
    },
    {
        name:'Bamboo Ladles',
        price:699,
        img:'https://images.unsplash.com/photo-1597393647616-d45e1078312b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80',
        type:'home',
        desc:'Set of 12 ladles for kitchen'
    }
]

const seedDB=async()=>{
    await Product.deleteMany({});
    await Product.insertMany(products);
}

module.exports=seedDB;