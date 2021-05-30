import "./App.css";

import { Route, Switch } from "react-router-dom";

import Client from "./Page/Client/Client";
import Admin from "./Page/Admin/Admin";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Switch>
          <Route path="/quan-ly">
            <Admin />
          </Route>
          <Route path="/">
            <Client />
          </Route>
        </Switch>
      </ChakraProvider>
    </>
  );
}

export default App;
