import { lazy } from "react";

export const BsPerson = lazy(() =>
  import("react-icons/bs").then((module) => ({ default: module.BsPerson }))
);
export const IoSettingsOutline = lazy(() =>
  import("react-icons/io5").then((module) => ({
    default: module.IoSettingsOutline,
  }))
);
export const RiLogoutCircleRLine = lazy(() =>
  import("react-icons/ri").then((module) => ({
    default: module.RiLogoutCircleRLine,
  }))
);
export const MdOutlineArrowBackIos = lazy(() =>
  import("react-icons/md").then((module) => ({
    default: module.MdOutlineArrowBackIos,
  }))
);
export const FaPlus = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaPlus }))
);
export const SlReload = lazy(() =>
  import("react-icons/sl").then((module) => ({ default: module.SlReload }))
);
export const MdOutlineFileUpload = lazy(() =>
  import("react-icons/md").then((module) => ({
    default: module.MdOutlineFileUpload,
  }))
);
export const RiSuitcaseFill = lazy(() =>
  import("react-icons/ri").then((module) => ({
    default: module.RiSuitcaseFill,
  }))
);
export const BsPersonWorkspace = lazy(() =>
  import("react-icons/bs").then((module) => ({
    default: module.BsPersonWorkspace,
  }))
);
export const MdEmail = lazy(() =>
  import("react-icons/md").then((module) => ({ default: module.MdEmail }))
);
export const ImCancelCircle = lazy(() =>
  import("react-icons/im").then((module) => ({
    default: module.ImCancelCircle,
  }))
);
export const FaRupeeSign = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaRupeeSign }))
);
export const FaRegTrashCan = lazy(() =>
  import("react-icons/fa6").then((module) => ({
    default: module.FaRegTrashCan,
  }))
);
export const AiOutlinePercentage = lazy(() =>
  import("react-icons/ai").then((module) => ({
    default: module.AiOutlinePercentage,
  }))
);
export const FiUpload = lazy(() =>
  import("react-icons/fi").then((module) => ({ default: module.FiUpload }))
);
