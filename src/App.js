import Dashboard from "./Page/Dashboard/Dashboard";
import "./App.css";
import KBYT from "./Page/KBYT/KBYT";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import PageHOC from "./Page/PageHOC";
import FormOTP from "./Components/Form/FormOTP";
function App() {
  return (
    <>
      <PageHOC>
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/khai-bao-y-te">
            <ChakraProvider>
              <KBYT />
            </ChakraProvider>
          </Route>
        </Switch>
      </PageHOC>
    </>
  );
}

export default App;
