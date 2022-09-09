import React from "react";
import styles from "./About.module.scss";
import { Information } from "./Information";

export function About() {
  return (
    <div className={styles.container}>
      <Information />
    </div>
  );
}
