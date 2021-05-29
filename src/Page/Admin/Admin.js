import React, { useEffect } from "react";

import { Redirect, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import KBYT from "./KBYT/KBYT";
import { useState } from "react";
import ProtectedRouter from "../../Router/ProtectedRouter";
import Login from "../../Components/Login/Login";

const tokenAction = {
  getToken: () => {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  },
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    tokenAction.getToken()
  );

  return (
    <>
      <Route path="/quan-ly" exact>
        {isAuthenticated ? (
          <Redirect to="/quan-ly/kbyt" />
        ) : (
          <ChakraProvider>
            <Login setIsAuthenticated={setIsAuthenticated} />
          </ChakraProvider>
        )}
      </Route>
      <ProtectedRouter
        path="/quan-ly/kbyt"
        component={KBYT}
        isAuthenticated={isAuthenticated}
      />
      {/* <Route path="/quan-ly/kbyt" exact>
        <ChakraProvider>
          {isAuthenticated ? (
            <AdminHOC>
              <KBYT />
            </AdminHOC>
          ) : (
            <Redirect to="/quan-ly" />
          )}
        </ChakraProvider>
      </Route> 
      <ChakraProvider>
            <AdminHOC>
              <KBYT />
            </AdminHOC>
          </ChakraProvider> */}
    </>
  );
};

export default Admin;
