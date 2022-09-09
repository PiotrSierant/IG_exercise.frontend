import React, { useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import { InformationDetails } from "./InformationDetails";
import styles from "./About.module.scss";

export function Information() {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <main className={styles.main}>
      {isLoading ? <Spinner /> : <InformationDetails />}
    </main>
  );
}
