import React, { useEffect } from "react";

import { Redirect, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import KBYT from "./KBYT/KBYT";
import AddDeclarer from "./Declarer/AddDeclarer";
import { useState } from "react";
import ProtectedRouter from "../../Router/ProtectedRouter";
import Login from "../../Components/Login/Login";
import UpdateDeclarer from "./Declarer/UpdateDeclarer";
import Statistical from "./Statistical/Statistical";

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
        path="/quan-ly/kbyt/them-moi"
        component={AddDeclarer}
        isAuthenticated={isAuthenticated}
      />
      <ProtectedRouter
        path="/quan-ly/kbyt/sua/:id"
        component={UpdateDeclarer}
        isAuthenticated={isAuthenticated}
      />
      <ProtectedRouter
        path="/quan-ly/thong-ke"
        component={Statistical}
        isAuthenticated={isAuthenticated}
      />
      <ProtectedRouter
        path="/quan-ly/kbyt"
        component={KBYT}
        isAuthenticated={isAuthenticated}
      />
    </>
  );
};

export default Admin;
