import React from 'react';
import main from '../../assets/img/mainlogo.png'

const Landing = () => (
  <div className="container">
    <center><h1 className="header">Welcome Home</h1></center>
    <div className="container-body">
      <center><img src={main} alt={"No Access"} height="50%" width="50%" /> </center>
    </div>

  </div>
);

export default Landing;