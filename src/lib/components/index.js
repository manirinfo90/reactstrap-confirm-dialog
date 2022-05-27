import React from "react";
import { createRoot } from "react-dom/client";
import ConfirmDialog from "./ConfirmDialog";

const confirm = (props) => {
  return new Promise((resolve) => {
    let containerEl = document.createElement("div");
    const confirmDialogRoot = createRoot(containerEl);

    const handleResolve = (result) => {
      confirmDialogRoot.unmount();
      containerEl = null;
      resolve(result);
    };

    confirmDialogRoot.render(
      <ConfirmDialog {...props} onClose={handleResolve} />
    );
  });
};

export default confirm;
