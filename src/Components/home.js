import React from "react";
import Card from "./card.js"
/*import { useContext, useState } from "react";*/

function Home(){
  /*const ctx = React.useContext(UserContext);*/

  return (
    <div>
    <h1>Home<br/>
    </h1>
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />   
    </div> 
  );  
}

export default Home;