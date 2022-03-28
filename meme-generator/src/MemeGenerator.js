import React, { useEffect, useState } from "react"
import styles from "./Components/MemeGenerator.css"

const MemeGenerator = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet="C:\Users\JAYA\Pictures\Screenshots\Screenshot (247).png" />
        <img src="C:\Users\JAYA\Pictures\Screenshots\Screenshot (247).png" alt="background" />
      </picture>
      <h1 className={styles.header}>React Is Awesome</h1>
    </article>
  );
}

export default MemeGenerator