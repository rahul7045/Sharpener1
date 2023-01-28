import React ,{useState , useRef , useContext}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios'

 const Login = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const[isLogin , setIsLogin]=useState(true)

    const switchAuthModeHandler=()=>{
        setIsLogin((prev)=>!prev)
    }

    const submitHandler=(event)=>{
     event.preventDefault();
  
     const enteredEmail =  emailInputRef.current.value
     const enteredPassword = passwordInputRef.current.value
     const obj = {
        enteredEmail ,
        enteredPassword
     }
     console.log(obj)
  
    let url =""
     if(isLogin){
      url = "http://localhost:5000/login"
     }else{
        url = "http://localhost:5000/signup"
     }
     axios.post(url , obj)
   .then(data=>{
        if(isLogin){
            console.log("Login Completed")
            alert(data.data)
            //console.log(data.idToken)
            // history.replace('/store')
            //alert("Log In Successful")
        }else{
            console.log(data.data)
             console.log("Sign up Completed")
             alert(data.data)
             
        }
     }).catch(err=>{
        console.log(err.message)
        alert(err.message)
     })


    }

  return (
    <Container className='pt-5'>
    <Form onSubmit={submitHandler} className='pt-3'>
        <h1 className='text-center'>{isLogin ? 'Log In' : "Sign Up"}</h1>
      <Form.Group  className="mb-3">
        <Form.Label htmlFor='email'>Email address</Form.Label>
        <Form.Control ref={emailInputRef} id='email' type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Control ref={passwordInputRef} id='password' type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        {isLogin ? 'Log In' : "Sign Up"}
      </Button>
      <div className='text-center pt-3'>
      <button type='button' onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
      </button>
      </div>
    </Form>
    </Container>
  )
}

export default Login