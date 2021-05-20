import { Box } from "@chakra-ui/layout";
import classes from "./HalfBox.module.css";
const HalfBox = ({ children }) => {
  return (
    <Box className={classes.HalfBox} w="45%">
      {children}
    </Box>
  );
};
export default HalfBox;
