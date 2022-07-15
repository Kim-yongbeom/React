import React from "react";
import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;
