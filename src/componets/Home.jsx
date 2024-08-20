import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa"; 
import "./Home.css"; 

const Home = () => {
  const googleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const githubLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  };

  return (
    <div className="container">
      <h2 className="header">Welcome to the OAuth Demo App</h2>
      <div className="button-group">
        <button className="button google-button" onClick={googleLogin}>
          <FaGoogle /> Login with Google
        </button>
        <button className="button github-button" onClick={githubLogin}>
          <FaGithub /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default Home;
