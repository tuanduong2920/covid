import "./App.css";

import { Route, Switch } from "react-router-dom";

import Client from "./Page/Client/Client";
import Admin from "./Page/Admin/Admin";

function App() {
  return (
    <>
      <Switch>
        <Route path="/quan-ly">
          <Admin />
        </Route>
        <Route path="/">
          <Client />
        </Route>
      </Switch>
    </>
  );
}

export default App;
