import React from 'react';
import ReactRouterDOM from 'react-router-dom';
import Home from './home';
import NavBar from './navbar';
import Card from './card.js';
import CreateAccount from './createaccount';
import Deposit from './deposit';
/*import Withdraw from '.withdraw';
import AllData from './alldata';*/
import img from './bank.png';

export {
  React, /*ReactRouterDOM,*/ Home, NavBar, Card, CreateAccount, Deposit, /*Withdraw, AllData,*/ img,
};

/*const UserContext = React.createContext(null)

function Spa() {
    const Route       = ReactRouterDOM.Route;
    const Link        = ReactRouterDOM.Link;
    const HashRouter  = ReactRouterDOM.HashRouter;

  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel', email:'abel@mit.edu', password:'secret', balance:0}]}}>
        <div className="container" style={{padding: "20px"}}>
             <Route path="/" exact component={Home} />
             <Route path="/createaccount/" component={CreateAccount} />
             <Route path="/deposit/" component={Deposit} />
             <Route path="/withdraw/" component={Withdraw} />
             <Route path="/alldata/" component={AllData} />
             </div>
        </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
ReactDOM.render(<App />, document.getElementById('root'));

export default Index;*/