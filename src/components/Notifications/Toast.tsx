import React, { useState, forwardRef, useImperativeHandle } from "react";

import { Check, X } from "phosphor-react";

import './Toast.scss'

/* eslint-disable-next-line */
export interface ToastProps {
  message: string;
  type: "Success" | "Error" | "";
}

export const Toast = forwardRef((props: ToastProps, ref: any) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const { message, type } = props;
  useImperativeHandle(ref, () => ({
    show() {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    },
  }));
  return (
    <div
      className={`'Toast', ${showToast ? "show" : "hide"}, ${
        type === "Success" ? "Success" : "Error"
      }`}
    >
      <div className={`'content', 'text'`}>
        <div className={`'symbol', ${type === "Success" ? "success" : "error"}`}>
          {type === "Success" ? <Check weight="bold" /> : <X weight="bold" />}
        </div>

        <div className="message">
          <span className="text1">{type}</span>
          <span className="text2">{message}</span>
        </div>
      </div>
      <div className="close" onClick={() => setShowToast(false)}>
        <X weight="bold" />
      </div>

      <div
        className={`${
          type === "Success" ? "progressSuccess" : "progressError"
        }`}
      />
    </div>
  );
});

export default Toast;
