// 외부 DOM에 렌더링하는 역할
// public -> index.html에서 <div id="modal-root"></div> 추가
import React from "react";
import { createPortal } from "react-dom";

interface Props {
  selector?: string;
  children: React.ReactNode;
}

const Portal: React.FC<Props> = ({ children, selector }) => {
  const rootElement = selector && document.querySelector(selector);

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
