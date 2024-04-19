import { useToast } from "../contexts/toast/ToastContext";

function Toast(props: { alert?: "info" | "success" | "warning" | "error"; message: JSX.Element }) {
  const showToast = useToast();

  return (
    <div className="toast toast-center z-50">
      <div
        className={`alert flex shadow-xl ${
          props.alert === "info"
            ? "alert-info"
            : props.alert === "success"
            ? "alert-success"
            : props.alert === "warning"
            ? "alert-warning"
            : props.alert === "error"
            ? "alert-error"
            : ""
        }`}
      >
        <div className="font-bold text-xs">{props.message}</div>
        <button onClick={() => showToast({})}>
          <span className="label label-text">✕</span>
        </button>
      </div>
    </div>
  );
}

export default Toast;
