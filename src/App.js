import { createContext } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Home, NavBar, CreateAccount } from './Components';
import './App.css';

const UserContext = createContext(null);

function App() {
  return (
    <>
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
  <NavBar>
    <HashRouter>
      <div className='container' style={{ padding: '20px' }}>
        <Route path='/' exact component={Home} />
          <Route path='/createaccount/' component={CreateAccount} />
          {/*
            <Route path='/deposit/' component={Deposit} />
            <Route path='/withdraw/' component={Withdraw} />
            <Route path='/alldata/' component={AllData} />*/}
        </div>
        </HashRouter>
      </NavBar>
    </UserContext.Provider>
    <Home />
  </>
);
};

export default App;