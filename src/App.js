import Dashboard from "./Page/Dashboard/Dashboard";
import "./App.css";
import KBYT from "./Page/KBYT/KBYT";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import PageHOC from "./Page/PageHOC";
import FormOTP from "./Components/Form/FormOTP";
import Map from "./Page/Map/Map";
function App() {
  return (
    <>
      <PageHOC>
        <Switch>
          <Route path="/thong-ke" exact>
            <Dashboard />
          </Route>
          <Route path="/" exact>
            <Map />
          </Route>
          <Route path="/khai-bao-y-te" exact>
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
