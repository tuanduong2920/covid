import React from "react";
import PageHOC from "./PageHOC";
import Dashboard from "../Client/Dashboard/Dashboard";
import Map from "../Client/Map/Map";
import KBYT from "../Client/KBYT/KBYT";
import { Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const Client = () => {
  return (
    <PageHOC>
      <Route path="/thong-ke" exact>
        <Dashboard />
      </Route>
      <Route path="/" exact>
        <ChakraProvider>
          <Map />
        </ChakraProvider>
      </Route>
      <Route path="/khai-bao-y-te" exact>
        <ChakraProvider>
          <KBYT />
        </ChakraProvider>
      </Route>
    </PageHOC>
  );
};

export default Client;
