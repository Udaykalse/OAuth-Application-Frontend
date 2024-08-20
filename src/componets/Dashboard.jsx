import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css"; 

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/user-info", { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Error occurred", error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="dashboard-header">Dashboard</h2>
      <div className="card">
        {user ? (
          <div>
            <p className="user-info">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="user-info">
              <strong>Email:</strong> {user.email}
            </p>
            {user.picture && (
              <img
                src={user.picture}
                alt="User profile"
                className="profile-pic"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        ) : (
          <p className="loading">Loading Data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
