// Chakra UI components
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Button,
  Box,
  FormLabel,
  Select,
  Input,
  Textarea,
  useDisclosure,
  Switch,
} from "../Utils/chakraUIExports";

import { useRef } from "react";

const EmployeeDrawer = ({ Icon, label }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  return (
    <>
      <Button
        leftIcon={Icon}
        onClick={onOpen}
        className="max-h-[33px] transition delay-74 ease-in-out shadow-sm"
        textColor="white"
        background="#3B65E3"
        _hover={{
          background: "#6284E9",
        }}
        fontSize="sm"
      >
        {label}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize="md"
            fontWeight="bold"
            py="30px"
          >
            Employee
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel
                  htmlFor="username"
                  fontSize="sm"
                  fontWeight="bold"
                  pt="20px"
                >
                  First Name
                </FormLabel>
                <Input ref={firstField} id="username" />
              </Box>

              <Box>
                <FormLabel htmlFor="username" fontSize="sm" fontWeight="bold">
                  Last Name
                </FormLabel>
                <Input ref={firstField} id="username" />
              </Box>

              <Box>
                <FormLabel htmlFor="username" fontSize="sm" fontWeight="bold">
                  Email
                </FormLabel>
                <Input ref={firstField} id="username" type="email" />
              </Box>

              <Box>
                <FormLabel htmlFor="username" fontSize="sm" fontWeight="bold">
                  Password
                </FormLabel>
                <Input ref={firstField} id="username" type="password" />
              </Box>

              <Box>
                <FormLabel htmlFor="username" fontSize="sm" fontWeight="bold">
                  Description
                </FormLabel>
                <Textarea ref={firstField} id="username" type="password" />
              </Box>

              <Box>
                <FormLabel htmlFor="owner" fontSize="sm" fontWeight="bold">
                  Role
                </FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="segun">Admin</option>
                  <option value="kola">Employee</option>
                  <option value="kola">Read Only</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="owner" fontSize="sm" fontWeight="bold">
                  Enabled
                </FormLabel>
                <Switch size="lg" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              _hover={{
                borderColor: "#3B65E3",
                textColor: "#3B65E3",
              }}
              fontSize="sm"
              py="10px"
            >
              Cancel
            </Button>
            <Button
              textColor="white"
              background="#3B65E3"
              _hover={{
                background: "#6284E9",
              }}
              fontSize="sm"
            >
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default EmployeeDrawer;
