import React, { useState } from "react";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.scss";

export function Navbar() {
  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  const menuList = MenuList.map(({ url, title, id }) => {
    return (
      <NavLink key={id} to={url} onClick={handleClickMenu}>
        <li>{title}</li>
      </NavLink>
    );
  });
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <div className={styles.menu_icon} onClick={handleClickMenu}>
          {isOpen ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <ul className={isOpen ? `${styles.menu}` : `${styles.close}`}>
          {menuList}
        </ul>
      </nav>
    </div>
  );
}
