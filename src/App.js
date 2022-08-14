import { createContext } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';
import { Home } from './Components';

const UserContext = createContext(null);

function App() {
  return (
    <HashRouter>
    {/* <NavBar /> */}
    <UserContext.Provider
      value={{
        users: [
          {
            name: 'abel',
            email: 'abel@mit.edu',
            password: 'secret',
            balance: 0,
          },
        ],
      }}
    >
      <div className='container' style={{ padding: '20px' }}>
        <Route path='/' exact component={Home} />
        {/* 
        <Route path='/createaccount/' component={CreateAccount} />
        <Route path='/deposit/' component={Deposit} />
        <Route path='/withdraw/' component={Withdraw} />
        <Route path='/alldata/' component={AllData} /> */}
      </div>
    </UserContext.Provider>
  </HashRouter>
);
};

export default App;