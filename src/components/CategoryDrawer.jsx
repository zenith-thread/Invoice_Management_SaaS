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
} from "@chakra-ui/react";

import { useRef } from "react";

const CategoryDrawer = ({ Icon, label }) => {
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
            Product Category
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel
                  htmlFor="username"
                  fontSize="sm"
                  fontWeight="bold"
                  py="10px"
                >
                  Name
                </FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Enter Product Category Name"
                />
              </Box>

              <Box>
                <FormLabel
                  htmlFor="desc"
                  fontSize="sm"
                  fontWeight="bold"
                  py="10px"
                >
                  Description
                </FormLabel>
                <Textarea id="desc" />
              </Box>

              <Box>
                <FormLabel
                  htmlFor="owner"
                  fontSize="sm"
                  fontWeight="bold"
                  py="10px"
                >
                  Color
                </FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="segun">magenta</option>
                  <option value="kola">brown</option>
                </Select>
              </Box>

              <Box>
                <FormLabel
                  htmlFor="owner"
                  fontSize="sm"
                  fontWeight="bold"
                  py="10px"
                >
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

export default CategoryDrawer;
