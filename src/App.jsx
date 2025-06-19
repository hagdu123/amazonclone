import { useEffect, useState } from 'react'
import './App.css'
import Header from './header'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise=loadStripe('pk_test_51RCEWCCOEUtQEZukWy1lUCCcSTrmFViFlXDldCKEyCO2M6njrF4zdr8RTJHXvjPCHhCsXvUdbXwjgD8b0vTGuEf200nxxkfN48')

function App() {

const [{}, dispatch] = useStateValue()

       useEffect(()=>{

      auth.onAuthStateChanged(authUser=>{
        console.log('THE USER IS>>> ',authUser)

        if(authUser){
       
          dispatch({
            type:'SET_USER',
            user:authUser
          })

        } 
        else{
         
        dispatch({
          type:'SET_USER',
          user:null
        })

        }
      })

       },[])


  return (
    <Router>
      <div>
        <Routes>
          <Route path='/checkout' element={
           <>
           <Header/>
            <Checkout />
            </>
          } />
          <Route path='/' element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path='/payment' element={
              <>
                <Header />
                <Elements stripe={promise}>
                <Payment/>
                </Elements>
              </>
            }
          />
          <Route path='/login' element={<Login/>}/>
          <Route path='/orders' element={
            <>
            <Header/>
            <Orders/>
            </>
          }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
