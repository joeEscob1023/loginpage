import React from "react";

const Dashboard = props => {
  return (
    <div>
      <h1>Welcome {props.location.state.newUser}</h1>
    </div>
  );
};

export default Dashboard;
