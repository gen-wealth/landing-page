import { createContext, useContext } from "react";

export type Toast = {
  alert?: "info" | "success" | "warning" | "error";
  message?: JSX.Element;
};

export const ToastContext = createContext<(toast: Toast) => void>(({}) => {});
export const useToast = () => useContext(ToastContext);
