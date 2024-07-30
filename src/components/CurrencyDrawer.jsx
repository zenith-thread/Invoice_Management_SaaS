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
  useDisclosure,
  Switch,
} from "@chakra-ui/react";

import { useRef } from "react";

const CurrencyDrawer = ({ Icon, label }) => {
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
            Currency
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
                  Currency Name
                </FormLabel>
                <Input ref={firstField} id="username" />
              </Box>

              <Box>
                <FormLabel htmlFor="owner" fontSize="sm" fontWeight="bold">
                  Color
                </FormLabel>
                <Select
                  id="owner"
                  defaultValue="segun"
                  fontSize="sm"
                  fontWeight="semibold"
                >
                  <option value="segun">magenta</option>
                  <option value="kola">brown</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="owner" fontSize="sm" fontWeight="bold">
                  Color
                </FormLabel>
                <Select
                  id="owner"
                  defaultValue="segun"
                  fontSize="sm"
                  fontWeight="semibold"
                >
                  <option value="segun">PKR</option>
                  <option value="kola">USD</option>
                  <option value="kola">EUR</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="username" fontSize="sm" fontWeight="bold">
                  Currency Symbol
                </FormLabel>
                <Input ref={firstField} id="username" />
              </Box>

              <Box>
                <FormLabel htmlFor="owner" fontSize="sm" fontWeight="bold">
                  Currency Position
                </FormLabel>
                <Select fontSize="sm" fontWeight="semibold">
                  <option value="after">before</option>
                  <option value="before">after</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="username" fontSize="sm" fontWeight="bold">
                  Decimal Seperator
                </FormLabel>
                <Input ref={firstField} id="username" />
              </Box>

              <Box>
                <FormLabel htmlFor="username" fontSize="sm" fontWeight="bold">
                  Thousand Separator
                </FormLabel>
                <Input ref={firstField} id="username" />
              </Box>

              <Box>
                <FormLabel htmlFor="username" fontSize="sm" fontWeight="bold">
                  Cent Precision
                </FormLabel>
                <Input ref={firstField} id="username" />
              </Box>

              <Box pb="20px">
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

export default CurrencyDrawer;
