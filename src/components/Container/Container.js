import React from "react";
import "../styles/container.scss";

export default function Container({ children }) {
  return <div className="container">{children}</div>;
}
