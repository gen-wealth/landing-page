function Toast(props: { alert?: "info" | "success" | "warning" | "error"; message: JSX.Element }) {
  return (
    <div className="toast">
      <div
        className={`alert shadow-xl ${
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
        <span className="font-bold text-xs">{props.message}</span>
      </div>
    </div>
  );
}

export default Toast;
