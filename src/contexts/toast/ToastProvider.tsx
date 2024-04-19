import { useState } from "react";
import { Toast, ToastContext, ms } from "./ToastContext";
import * as ToastComponent from "../../components/Toast";

function ToastProvider(props: { children: React.ReactNode }) {
  const [toast, setToast] = useState<Toast>({});
  const [timeoutID, setTimeoutID] = useState<ms>();

  const showToast = (toast: Toast, timeout?: ms) => {
    clearTimeout(timeoutID);
    setToast(toast);
    if (timeout) {
      const timeoutID = setTimeout(() => setToast({}), timeout);
      setTimeoutID(timeoutID);
    }
  };

  return (
    <ToastContext.Provider value={showToast}>
      {props.children}
      {toast.message && <ToastComponent.default message={toast.message} alert={toast.alert} />}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
