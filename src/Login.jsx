import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

function Login() {

     const[email,setEmail]=useState('')
     const[password,setPassword]=useState('')
     const navigate = useNavigate();

   const signIn=e=>{
        e.preventDefault()
        
        
        signInWithEmailAndPassword(auth, email, password)
        .then(auth => {
          console.log(auth);
          navigate('/');
        })
        .catch(error => alert(error.message));
    };

const register=e=>{
    e.preventDefault()

    
    createUserWithEmailAndPassword(auth,email,password)
    .then((auth)=>{
        console.log(auth)
        navigate('/');
    })
    .catch(error=>alert(error.message));
    

}


    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>

            <div className='login__container'>
                <h1>sign in</h1>

                <form>
                    <h5>email</h5>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)} />

                    <h5>password</h5>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button type='submit'
                    onClick={signIn}
                    className='login__signInButton'>sign in</button>
                </form>

                <p>by signing in you agree to amazons conditions    <br/>
                   of use and sale. please see our privacy notice, <br/>
                   our cookies notice and our internet based ads notice.</p>

                   <button
                   onClick={register}
                   className='login__registerButton'>tfrfgtycfj</button>

            </div>

        </div>

    )
}

export default Login
