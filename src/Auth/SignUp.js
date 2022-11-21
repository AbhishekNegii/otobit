import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './Login.css'

const SignUp = () => {
  const [inpval, setInpval] = useState({
    email: "",
    fname: "",
    lname: "",
    pass: "",
    cpass: "",
  });

  const history=useHistory()

  const submitHandler = (e) => {
    e.preventDefault();
    if(inpval.pass==inpval.cpass){
    localStorage.setItem("userData", JSON.stringify(inpval));
    history.replace('/')
    }
    else{
        alert('Password didnt match')
    }
  };

  const signinHandler=()=>{
    history.replace('/')
  }

  return (
    <div className="login-page">
         <div className="form">
          <h3>Sign Up</h3>
          <form onSubmit={submitHandler}>
            <input
              type="email"
              name="email"
              value={inpval.email}
              onChange={(e) =>
                setInpval({ ...inpval, [e.target.name]: e.target.value })
              }
              placeholder="Enter email"
              required
            />
            <input
              type="text"
              name="fname"
              value={inpval.fname}
              onChange={(e) =>
                setInpval({ ...inpval, [e.target.name]: e.target.value })
              }
              placeholder="Enter Your First Name"
              required
            />
            <input
              type="text"
              name="lname"
              value={inpval.lname}
              onChange={(e) =>
                setInpval({ ...inpval, [e.target.name]: e.target.value })
              }
              placeholder="Enter Your Last Name"
              required
            />

            <input
              type="password"
              name="pass"
              value={inpval.pass}
              onChange={(e) =>
                setInpval({ ...inpval, [e.target.name]: e.target.value })
              }
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="cpass"
              value={inpval.cpass}
              onChange={(e) =>
                setInpval({ ...inpval, [e.target.name]: e.target.value })
              }
              placeholder="Confirm Password"
              required
            />

            <button>Sign Up</button>
          </form>
          <p>
            Already Have an Account <span><a onClick={signinHandler}>SignIn</a></span>{" "}
          </p>
        </div>
      </div>
  );
};

export default SignUp;
