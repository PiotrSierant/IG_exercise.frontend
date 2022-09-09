import React, { useEffect, useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import styles from "../Home.module.scss";
import { Table } from "./Table";

export function UserList({ data, typeAccount }) {
  const [isLoading, setLoading] = useState(true);
  const [renderData, setRenderData] = useState("");

  useEffect(() => {
    if (data) {
      const filteredData = data.filter((item) => {
        return item.hasOwnProperty("id");
      });
      setRenderData(filteredData);
      setLoading(false);
    }
  }, [data]);
  return (
    <main className={styles.main}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table renderData={renderData} typeAccount={typeAccount} />
      )}
    </main>
  );
}
