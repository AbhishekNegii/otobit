import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css"

const Login = () => {
  const [inpval, setInpval] = useState({
    email: "",
    pass: "",
  });

  const history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userData"));
    if (inpval.email === userData.email && inpval.pass === userData.pass) {
      console.log("mail verified");
      history.replace("/homepage");
    } else {
         alert("Please check Email and password");
    }
  };

  const signupHandler=()=>{
    history.replace('/signUp')
  }

  return (
    <div className="login-page">
      <div className="form">
      <form onSubmit={loginHandler}>
        <h3>Login</h3>
        <input
          type="email"
          name="email"
          value={inpval.email}
          onChange={(e) =>
            setInpval({ ...inpval, [e.target.name]: e.target.value })
          }
          placeholder="Email"
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

        <button>Login</button>
      </form>
      <p>
            Create New Account <span><a onClick={signupHandler}>SignUp</a></span>{" "}
          </p>
      </div>
    </div>
  );
};

export default Login;
