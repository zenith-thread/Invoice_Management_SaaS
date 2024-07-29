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
} from "@chakra-ui/react";

import { useRef } from "react";

const CompanyDrawer = ({ Icon, label }) => {
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
            Company
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel
                  htmlFor="username"
                  fontSize="sm"
                  fontWeight="bold"
                  py="5px"
                >
                  Name
                </FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Enter Company Name"
                />
              </Box>

              <Box>
                <FormLabel
                  htmlFor="username"
                  fontSize="sm"
                  fontWeight="bold"
                  py="5px"
                >
                  Country
                </FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Enter Country"
                />
              </Box>

              <Box>
                <FormLabel
                  htmlFor="username"
                  fontSize="sm"
                  fontWeight="bold"
                  py="5px"
                >
                  City
                </FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Enter City"
                />
              </Box>

              <Box>
                <FormLabel
                  htmlFor="username"
                  fontSize="sm"
                  fontWeight="bold"
                  py="5px"
                >
                  Address
                </FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Enter Address"
                />
              </Box>

              <Box>
                <FormLabel
                  htmlFor="username"
                  fontSize="sm"
                  fontWeight="bold"
                  py="5px"
                >
                  Phone #
                </FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Enter Phone #"
                />
              </Box>

              <Box>
                <FormLabel
                  htmlFor="username"
                  fontSize="sm"
                  fontWeight="bold"
                  py="5px"
                >
                  Email
                </FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  type="email"
                  placeholder="Enter Email"
                />
              </Box>

              <Box>
                <FormLabel
                  htmlFor="username"
                  fontSize="sm"
                  fontWeight="bold"
                  py="5px"
                >
                  Website
                </FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Enter Website"
                />
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

export default CompanyDrawer;
