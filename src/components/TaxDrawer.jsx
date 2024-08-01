import { useRef, lazy } from "react";

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
  Input,
  useDisclosure,
  Switch,
} from "../Utils/chakraUIExports";

// custom icons
const Plus = lazy(() => import("../customFavIcons/Plus"));

const TaxDrawer = ({ Icon, label }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  return (
    <>
      <Button
        leftIcon={Icon}
        onClick={onOpen}
        className="max-h-[33px] transition delay-74 ease-in-out shadow-sm"
        textColor="white"
        background="#1640D6"
        _hover={{
          background: "#6284E9",
        }}
        fontSize="sm"
      >
        <Plus classnames="text-2xl font-semibold mb-[7px] pr-2" />
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
            Taxes
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
                  Name
                </FormLabel>
                <Input ref={firstField} id="username" />
              </Box>

              <Box>
                <FormLabel htmlFor="username" fontSize="sm" fontWeight="bold">
                  Value
                </FormLabel>
                <Input ref={firstField} id="username" />
              </Box>

              <div className="flex gap-[130px] items-center">
                <Box>
                  <FormLabel htmlFor="owner" fontSize="sm" fontWeight="bold">
                    Enabled
                  </FormLabel>
                  <Switch size="lg" />
                </Box>
                <Box>
                  <FormLabel htmlFor="owner" fontSize="sm" fontWeight="bold">
                    Default
                  </FormLabel>
                  <Switch size="lg" />
                </Box>
              </div>
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

export default TaxDrawer;
