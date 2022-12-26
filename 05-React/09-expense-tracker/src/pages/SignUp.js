import React, { useRef, useState } from "react";
import Home from "./Home";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { ForgotPassword } from "../components/ForgotPassword";

const SignUp = (props) => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputConfirmPasswordRef = useRef();
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = inputEmailRef.current.value;
    const password = inputPasswordRef.current.value;

    if (!login) {
      if (password !== inputConfirmPasswordRef.current.value) {
        return alert("Password and Confirm passsword are not same");
      }
    }
   let url =""
    if(login){
     url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAULICMLkKpLi7eJ9CIrBXM3fvXPmVHqoA"
    }else{
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAULICMLkKpLi7eJ9CIrBXM3fvXPmVHqoA'
    }

    console.log(email , password)

    try{
      const res = await fetch(url,
      {
        method:"POST",
        body :JSON.stringify({
          email : inputEmailRef.current.value,
          password : inputPasswordRef.current.value
        }),
       headers: {
        'Content-Type': 'application/json',
        }
    })
    if(res.ok){
      const data = await res.json();
      localStorage.setItem('idToken' , JSON.stringify(data))
      setLogin(true)
      inputEmailRef.current.value ="";
      inputPasswordRef.current.value="";
      if(!login){
        inputConfirmPasswordRef.current.value=""
        alert("SignUp Successful")
        navigate('/login')
      }else{
        alert("Login Successful")
        navigate("/home")
      }
    }else{
      const data = await res.json;
      throw data.error
    }

    }
    catch(error){
      console.log(error.message)
    }
  };

  const accountHandler = () => {
    setLogin((prev) => !prev);
  };

  const forgotPasswordHandler=()=>{
  navigate('/forgotpassword')
  }
  return (
    <div className="wrapper">
      <form onSubmit={submitHandler} className="form">
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" ref={inputEmailRef} required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={inputPasswordRef} required />

        {!login && (
          <>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              ref={inputConfirmPasswordRef}
              required
            />{" "}
          </>
        )}


        <button  type="submit">{login ? "Login" : "Sign Up"}</button>
        {
          login && <a onClick={forgotPasswordHandler} href="">Forgot Password</a>
        }
        <div className="signup-login" onClick={accountHandler}>
          {login ? "Click here to Sign Up" : "click here to Login"}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
