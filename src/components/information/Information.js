import React, { useState } from "react";
import styles from "./Information.module.scss";

const Information = ({ onSubmitHandler, image, onSubmitHandlerButton }) => {
  return (
    <div className={styles.information}>
      {image ? (
        <img className={styles.avatarOuter} src={image} />
      ) : (
        <div className={styles.default}></div>
      )}
      <div className={styles.form}>
        <input
          className={styles.name}
          placeholder="Full Name"
          onChange={(v) => onSubmitHandler(v.target.value)}
        ></input>
        <button className={styles.submitButton} onClick={onSubmitHandlerButton}>
          Get your spot!
        </button>
      </div>
    </div>
  );
};

export default Information;
