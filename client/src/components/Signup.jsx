import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {

    const[data, setData] = React.useState({
        name:"",
        number:"",
        email:"",
        password:"",
        confirmpass:""
    })

    console.log(data);

    const addData = ((e)=>{
        const {name, value} = e.target
        setData(()=>{
            return{
                ...data,
                [name]: value
            }
        })
    })

  return (
    <div className="signin--main">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="signin--logo"
          alt=""
        />
      </Link>
      <div className="signin--card">
        <h1 signin--heading>Create Account</h1>
        <form action="">

          <h5>Your name</h5>
          <input type="text" name = "name" onChange={addData} placeholder="First and last name" className="signin--input"/>

          <h5>Mobile Number</h5>
          <input type="text" name = "number" onChange={addData} placeholder="Mobile number" className="signin--input"/>

          <h5>Email</h5>
          <input type="text" name = "email" onChange={addData} placeholder="Email" className="signin--input"/>

          <h5>Password</h5>
          <input type="password" name = "password" onChange={addData} placeholder="at least 6 characters" className="signin--input"/>

          <h5>Confirm Password</h5>
          <input type="password" name = "confirmpass" onChange={addData} placeholder="same as password" className="signin--input"/>

          <button className="signin--button">Create Account</button>
        </form>
        <p>
          By Creating account, you agree to Amazon Clone's Conditions of Use and
          Privacy Notice.
        </p>

        <Link
          className="custom-link"
          to="https://www.linkedin.com/in/rahul-jaiswal-82027b1b3/"
>
        </Link>
        <div className="dash"></div>

        <div className="signin--card--bottom">
          <h6 className="top">Already have an account?</h6>
          <Link
            className="custom-link"
            to="/signin"
          >
            <h6>Sign in</h6>
          </Link>
        </div>
      </div>
      
    </div>
  );
}
