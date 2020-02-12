import React from 'react';
import main from '../../assets/img/mainlogo.png'

const HomePage = () => (
  <div className="container-body">
    <h1>Home Page</h1>
    <center><img src={main} alt={"No Access"} height="50%" width="50%" /> </center>
  </div>
);

//const condition = authUser => !!authUser;

//export default withAuthorization(condition)(HomePage);
export default HomePage;