/*import { useContext, useState } from "react";
import { route, link, HashRouter } from 'react-router-dom';*/
import Card from './card.js';

function Home(){

  return (
    <div>
    <h1>Home<br/>
    </h1>
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src={require('./bank.png')} className="img-fluid" alt="Responsive"/>)}
    />   
    </div> 
  );  
}

export default Home;