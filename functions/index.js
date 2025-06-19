const functions=require('firebase-functions')
const express=require("express")
const cors=require("cors")
require('dotenv').config(); // Make sure this line is at the top

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


const app=express()

app.use(cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST"],
    credentials: true
  }));
  
app.use(express.json())

app.get('/', (request,response)=>response.status(200).send('fttvu'))

app.post('/payments/create',async(request,response)=>{
    const total=request.query.total
    console.log('payment',total)

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",

    })

     response.status(201).send({
        clientSecret:paymentIntent.client_secret,
     })

})

exports.api=functions.https.onRequest(app)

//http://127.0.0.1:5001/clone-a43c4/us-central1/api

//http://127.0.0.1:5001/clone-a43c4/us-central1/api/payments/create?total=5000


//http://127.0.0.1:5001/clone-a43c4/us-central1/api/payments/create




