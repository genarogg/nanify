// src/components/nano/notify.ts
import { toast, Flip } from "react-toastify";
var defaultToastConfig = {
  position: "top-right",
  autoClose: 5e3,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: void 0,
  transition: Flip
};
var notify = ({ type, message, config = {} }) => {
  const finalConfig = { ...defaultToastConfig, ...config };
  switch (type) {
    case "success":
      toast.success(message, finalConfig);
      break;
    case "error":
      toast.error(message, finalConfig);
      break;
    case "warning":
      toast.warning(message, finalConfig);
      break;
    default:
      break;
  }
};
var notify_default = notify;

export {
  notify_default
};
