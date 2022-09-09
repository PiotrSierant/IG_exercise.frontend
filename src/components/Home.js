import React, { useEffect, useState } from "react";
import { UserList } from "./UserList/UserList";
import styles from "./Home.module.scss";

export function Home() {
  const [data, setData] = useState("");
  const [typeAccount, setTypeAccount] = useState("");

  useEffect(() => {
    fetchData().then(() => console.log("Sprawdzam dane!"));
  }, []);

  const fetchData = async () => {
    const checkLocalStorageUser = localStorage.getItem("user");
    const checkLocalStorageType = localStorage.getItem("type");

    if (checkLocalStorageUser && checkLocalStorageType) {
      setData(JSON.parse(checkLocalStorageUser));
      setTypeAccount(JSON.parse(checkLocalStorageType));
    } else {
      const headers = { "x-apikey": "5d9f48133cbe87164d4bb12c" };
      fetch("https://recruitmentdb-508d.restdb.io/rest/accounts", { headers })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          localStorage.setItem("user", JSON.stringify(data));
        });
      fetch("https://recruitmentdb-508d.restdb.io/rest/accounttypes", {
        headers,
      })
        .then((response) => response.json())
        .then((type) => {
          setTypeAccount(type);
          localStorage.setItem("type", JSON.stringify(type));
        });
    }
  };

  return (
    <div className={styles.container}>
      <UserList data={data} typeAccount={typeAccount} />
    </div>
  );
}
