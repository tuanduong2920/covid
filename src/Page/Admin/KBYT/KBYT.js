import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import AdminHOC from "../AdminHOC"
const KBYT = () => {
    return <ChakraProvider>
        <AdminHOC>
            abc
        </AdminHOC>
    </ChakraProvider>;
}
 
export default KBYT;