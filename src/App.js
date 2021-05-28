import Dashboard from "./Page/Client/Dashboard/Dashboard";
import "./App.css";
import KBYT from "./Page/Client/KBYT/KBYT";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import PageHOC from "./Page/Client/PageHOC";

import Map from "./Page/Client/Map/Map";
import Login from "./Page/Admin/Login/Login";
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
