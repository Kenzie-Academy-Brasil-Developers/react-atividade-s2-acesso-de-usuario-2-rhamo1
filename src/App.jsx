import "./App.css";

import members from "./members";
import { Home } from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { Company } from "./pages/Company";
import { Customer } from "./pages/Customer";

function App() {
  const [member, setMember] = useState([...members]);

  const newMember = "";

  return (
    <Switch>
      <div className="box">
        <Route exact path="/customer/:id">
          <Customer members={member} />
        </Route>
        <Route exact path="/company/:id">
          <Company members={member} />
        </Route>
        <Route exact path="/">
          <Home members={member} />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
