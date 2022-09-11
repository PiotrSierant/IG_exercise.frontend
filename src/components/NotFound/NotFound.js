import React, { useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import image from "../../images/Error404.svg";
import styles from "./NotFound.module.scss";

export function NotFound() {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {isLoading ? (
          <Spinner />
        ) : (
          <img
            src={image}
            alt="error 404, page not found"
            className={styles.image}
          />
        )}
      </main>
    </div>
  );
}
