import { useContext, useState } from "react";
import UserContext from "./context";
/*import { UserConsumer } from "./card.js";*/

function Deposit(){
  const [deposit, setDeposit] = useState(0);
  const UserConsumer = UserContext.Consumer;

  return (
<UserConsumer>
      {({ name, email, balance, updateBalance }) => {

        const submitDeposit = () => {
          updateBalance(deposit);
        };

        const updateDeposit = (event) => setDeposit(parseFloat(event.target.value));
  
  return (
    <>
    <h1>Deposit<br/>
    </h1>
    <div class="card">
  <div class="card-header" bgcolor="secondary">
     Balance: $0
  </div>
  <div class="card-body">
  <div class="input-group mb-3">
  <button type ="submit" onClick={submitDeposit} id="basic-addon1">Deposit</button>
  <input type="text" class="form-control" placeholder="Deposit Amount" aria-label="Deposit Amount" aria-describedby="basic-addon1" onChange={updateDeposit} />
  </div>
</div>
</div>
</>
  );
}};
</UserConsumer>
  );
}

export default Deposit;