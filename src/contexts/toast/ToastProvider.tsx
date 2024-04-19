"use client";

import { useState } from "react";
import { Toast, ToastContext } from "./ToastContext";
import * as ToastComponent from "../../components/Toast";

function ToastProvider(props: { children: React.ReactNode }) {
  const [toast, setToast] = useState<Toast>({});

  return (
    <ToastContext.Provider value={setToast}>
      {props.children}
      {toast.message && <ToastComponent.default message={toast.message} alert={toast.alert} />}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
