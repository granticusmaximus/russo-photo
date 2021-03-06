import React from 'react';
import main from '../../assets/img/mainlogo.png'

const Landing = () => (
  <div className="container">
    <center><h1 className="header">Welcome Home</h1></center>
    <div className="container-body">
      <center><img src={main} alt={"No Access"} height="50%" width="50%" /> </center>
    </div>
    <hr />
    <center><h2 className="header">Snapshot of us</h2></center>
    <h3>Picture it...</h3>
    <p>
      Long ago, before we even met, for lack of a more creative explanation; we actually DID "Fall in Love" with photography. 
    </p>
    <p>
      <strong>Welcome!</strong> We are Marisa and Erika, and taking photos has been a huge part of our livelihood for many years. Whether we are admiring nature, spending time with family and friends, or chasing around our adorable assortment of pets... 
      
      It's almost always while toting a camera or 2. 
    </p>
    <p>
      You've heard the phrase <em>"Do what you love, and you'll never work a day in your life"</em>, Yes? Don't believe it! When you truly love something, you end up working more... <u>Harder</u>... <u>Longer</u>... Because it has so much value. We take pride in our individual visions, viewpoints and strengths, then combine them with a finely tuned artistic flair that is all our own. 
    </p>
    <p>   
      From senior portraits that strive to bring your young adult's confidence to the forefront; to lifestyle family sessions filled with laughter and genuine moments (even when your family is your dog!); to bringing your own magical ideas to life... 
    </p>
    <p>  
      We would love to show you what we see! How can we help you?
    </p>

  </div>
);

export default Landing;