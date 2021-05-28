import React from "react";

import { Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./Login/Login";

const Admin = () => {
  return (
    <Route path="/quan-ly" exact>
      <ChakraProvider>
        <Login />
      </ChakraProvider>
    </Route>
  );
};

export default Admin;
