import React, { useState } from "react";
import { Spinner } from "./Spinner/Spinner";
import styles from "./Home.module.scss";

export function Home() {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {isLoading ? <Spinner /> : <h1>tu renderujemy liste :) </h1>}
      </main>
    </div>
  );
}
