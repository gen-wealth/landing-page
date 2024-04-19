import { createContext, useContext } from "react";

export type Toast = {
  alert?: "info" | "success" | "warning" | "error";
  message?: JSX.Element;
};
export type ms = number;
export const ToastContext = createContext<(toast: Toast, timeout?: ms) => void>(({}) => {});
export const useToast = () => useContext(ToastContext);
