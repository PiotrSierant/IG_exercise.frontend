import React, { useEffect, useState } from "react";
import { UserList } from "./UserList/UserList";
import styles from "./Home.module.scss";

export function Home() {
  const [data, setData] = useState("");
  const [typeAccount, setTypeAccount] = useState("");

  useEffect(() => {
    const headers = { "x-apikey": "5d9f48133cbe87164d4bb12c" };
    fetch("https://recruitmentdb-508d.restdb.io/rest/accounts", { headers })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    fetch("https://recruitmentdb-508d.restdb.io/rest/accounttypes", { headers })
      .then((response) => response.json())
      .then((type) => {
        setTypeAccount(type);
      });
  }, []);

  return (
    <div className={styles.container}>
      <UserList data={data} typeAccount={typeAccount} />
    </div>
  );
}
