import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Container,
  Flex,
  Box,
  Spacer,
  Divider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  IconButton,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import AdminHOC from "../AdminHOC";
import Admin from "../../../Api/Admin/Admin";
import {
  AddIcon,
  ChevronDownIcon,
  DeleteIcon,
  EditIcon,
} from "@chakra-ui/icons";
import Pagination from "react-js-pagination";
import "./KBYT.css";
import { Link } from "react-router-dom";

const KBYT = () => {
  const [declareList, setDeclareList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const toast = useToast();

  useEffect(() => {
    const fetchDeclarer = async () => {
      try {
        const { data } = await Admin.getDeclarer();
        setDeclareList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDeclarer();
  }, []);

  const deleteDeclarer = async () => {
    onClose();
    try {
      await Admin.deleteDeclarer(deleteId);
      const res = declareList.filter((i) => i.id !== deleteId);
      toast({
        position: "bottom",
        title: "Xóa thành công 🐱‍🐉",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setDeclareList(res);
    } catch (error) {
      console.log(error);
      toast({
        position: "bottom",
        title: "Có lỗi xảy ra 😢",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const start = (currentPage - 1) * 6;
  const end = start + 6;
  const pageList = declareList.slice(start, end);

  return (
    <ChakraProvider>
      <AdminHOC>
        <Container maxW="container.lg">
          <Flex py={4}>
            <Box>Danh sách khai báo y tế</Box>
            <Spacer />
            <Box>
              <Link to="/quan-ly/kbyt/them-moi">
                <Button
                  leftIcon={<AddIcon />}
                  colorScheme="blue"
                  variant="solid"
                >
                  Thêm mới
                </Button>
              </Link>
            </Box>
          </Flex>
          <Divider />
          <Table my={6} variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>Họ và tên</Th>
                <Th>email</Th>
                <Th isNumeric>#</Th>
              </Tr>
            </Thead>
            <Tbody>
              {pageList.map((i) => {
                const path = `/quan-ly/kbyt/sua/${i.id}`;
                return (
                  <Tr>
                    <Td>{i.ho_ten}</Td>
                    <Td>{i.email}</Td>
                    <Td isNumeric>
                      <Menu>
                        <MenuButton
                          as={IconButton}
                          aria-label="Options"
                          icon={<ChevronDownIcon />}
                          variant="solid"
                        />
                        <MenuList>
                          <Link to={path}>
                            <MenuItem icon={<EditIcon />}>Sửa</MenuItem>
                          </Link>
                          <MenuItem
                            onClick={() => {
                              setDeleteId(i.id);
                              return setIsOpen(true);
                            }}
                            icon={<DeleteIcon />}
                          >
                            Xóa
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
          <Box>
            <Pagination
              innerClass="pagination declareListPagination"
              activePage={currentPage}
              itemsCountPerPage={6}
              totalItemsCount={declareList.length}
              onChange={(page) => setCurrentPage(page)}
              itemClass="page-item"
              linkClass="page-link"
              hideFirstLastPages
            />
          </Box>
        </Container>
      </AdminHOC>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Xóa bản khai báo
            </AlertDialogHeader>

            <AlertDialogBody>Bạn có chắc chắn muốn xóa?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Hủy bỏ
              </Button>
              <Button colorScheme="red" onClick={deleteDeclarer} ml={3}>
                Xóa
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </ChakraProvider>
  );
};

export default KBYT;
