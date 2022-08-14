import React from "react";

function Deposit(){
  const ctx = React.useContext(UserContext);
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
  <button type ="submit" id="basic-addon1">Deposit</button>
  <input type="text" class="form-control" placeholder="Deposit Amount" aria-label="Deposit Amount" aria-describedby="basic-addon1"/>
  </div>
</div>
</div>
    </>
  )
}

export default Deposit;