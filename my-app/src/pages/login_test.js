import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles.css';
import { Link } from "react-router-dom"

const Login2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  // login the user
  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post(
      "http://blogservice.herokuapp.com/api/login",
      user
    );
    // set the state of the user
    setUser(response.data);
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(response.data));
  };

  // if there's a user show the message below
  if (user) {
    return (
      <>
        <div className="title">
          ROV3D Login
        </div>

        <div bp="grid 4">

          <div> </div>

          <div className="main_div1">
            Welcome {user.name}!
            <br/><br/>
            <div bp="grid 4">
              <Link to="../testing_new_layout"><button id="submit_button" className="button" type="submit" value="Login">Return Home</button></Link>
              <Link to="CreateNote"><button id="submit_button" className="button" type="submit" value="Login">Upload File</button></Link>
              <button id="submit" className="button" onClick={handleLogout}>Logout</button>
            </div>
          </div>

          <div> </div>
        </div>

      </>
    );
  }

  // if there's no user, show the login form
  return (
    <>
      <div className="main_div">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            value={username}
            placeholder="Enter a username"
            onChange={({ target }) => setUsername(target.value)}
          />
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              value={password}
              placeholder="Enter a password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <br/>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login2;
