import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Admin from "../../Api/Admin/Admin";
import { useState } from "react";
import { Link } from "react-router-dom";

const Links = [
  { path: "/quan-ly/kbyt", name: "Danh sách" },
  { path: "/quan-ly/thong-ke", name: "Thống kê" },
];

const NavLink = ({ path, name }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={path}
  >
    {name}
  </Link>
);

export default function AdminHOC({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOut, setIsOut] = useState(false);

  const logOut = async () => {
    setIsOut(true);
    try {
      const token = localStorage.getItem("token");
      await Admin.logout({ Authorization: token });
      localStorage.removeItem("token");
      window.location.reload();
      setIsOut(false);
    } catch (error) {
      localStorage.removeItem("token");
      window.location.reload();
      setIsOut(false);
    }
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontWeight={700}>Covid Admin</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.name} {...link}></NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              onClick={logOut}
              variant={"solid"}
              colorScheme={"blue"}
              size={"sm"}
              mr={4}
              isLoading={isOut}
            >
              Đăng xuất
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} {...link}></NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>{children}</Box>
    </>
  );
}
