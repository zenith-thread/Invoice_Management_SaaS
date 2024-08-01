import { lazy } from "react";

export const Menu = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.Menu }))
);
export const MenuButton = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.MenuButton }))
);
export const MenuList = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.MenuList }))
);
export const MenuItem = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.MenuItem }))
);
export const MenuGroup = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.MenuGroup }))
);
export const MenuDivider = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.MenuDivider }))
);
export const Avatar = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.Avatar }))
);
export const Drawer = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.Drawer }))
);
export const DrawerBody = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.DrawerBody }))
);
export const DrawerFooter = lazy(() =>
  import("@chakra-ui/react").then((module) => ({
    default: module.DrawerFooter,
  }))
);
export const DrawerHeader = lazy(() =>
  import("@chakra-ui/react").then((module) => ({
    default: module.DrawerHeader,
  }))
);
export const DrawerOverlay = lazy(() =>
  import("@chakra-ui/react").then((module) => ({
    default: module.DrawerOverlay,
  }))
);
export const DrawerContent = lazy(() =>
  import("@chakra-ui/react").then((module) => ({
    default: module.DrawerContent,
  }))
);
export const DrawerCloseButton = lazy(() =>
  import("@chakra-ui/react").then((module) => ({
    default: module.DrawerCloseButton,
  }))
);
export const Stack = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.Stack }))
);
export const Button = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.Button }))
);
export const Box = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.Box }))
);
export const FormLabel = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.FormLabel }))
);
export const Select = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.Select }))
);
export const Input = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.Input }))
);
export const Textarea = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.Textarea }))
);
export const Switch = lazy(() =>
  import("@chakra-ui/react").then((module) => ({ default: module.Switch }))
);
export const CircularProgress = lazy(() =>
  import("@chakra-ui/react").then((module) => ({
    default: module.CircularProgress,
  }))
);
export const CircularProgressLabel = lazy(() =>
  import("@chakra-ui/react").then((module) => ({
    default: module.CircularProgressLabel,
  }))
);
export { useDisclosure } from "@chakra-ui/react";
