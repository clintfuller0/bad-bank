import AllData from "./Components/alldata";
import Context from "./Components/context";
import CreateAccount from "./Components/createaccount";
import Deposit from "./Components/deposit";
import Home from "./Components/home";
import Index from "./Components/index";
import NavBar from "./Components/navbar";
import Withdraw from "./Components/withdraw";
import './App.css';

function App() {
  return (
    <div className="App">
        <AllData />
        <Context />
        <CreateAccount />
        <Deposit />
        <Home />
        <Index />
        <NavBar />
        <Withdraw />
    </div>
  );
};

export default App;
