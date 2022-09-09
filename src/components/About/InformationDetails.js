import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./InformationDetails.module.scss";

export function InformationDetails() {
  const info = {
    name: "Piotr",
    lastName: "Sierant",
    website: "https://piotrsierant.github.io/portfolioWeb/",
    twitter: "https://twitter.com/piotr_sierant96",
    instagram: "https://www.instagram.com/dzd07/",
    linkedIn: "https://www.linkedin.com/in/piotr-sierant/",
    github: "https://github.com/PiotrSierant",
    photo:
      "https://github.com/PiotrSierant/portfolioWeb/blob/master/public/images/profile.jpg?raw=true",
  };
  const {
    photo,
    name,
    lastName,
    website,
    twitter,
    instagram,
    linkedIn,
    github,
  } = info;
  return (
    <section className={styles.information}>
      <img src={photo} alt="My profile" className={styles.profile} />
      <h1>
        {name} {lastName}
      </h1>
      <a href={website} className={styles.portfolio}>
        Portfolio
      </a>
      <section className={styles.media}>
        <a href={twitter}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href={instagram}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={linkedIn}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={github}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </section>
    </section>
  );
}
