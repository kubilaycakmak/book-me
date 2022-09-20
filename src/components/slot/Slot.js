import React from "react";
import styles from "./Slot.module.scss";
import unselected from "../../image/question.png";

const Slot = ({ id, avatar, text, onClickHandler, selected, slot }) => {
  return (
    <div className={styles.slot} onClick={() => onClickHandler(id)}>
      <p className={selected == id ? styles.activeTitle : styles.title}>
        Slot {slot}
      </p>
      <div className={selected == id ? styles.selectedCube : styles.cube}>
        {avatar == "" ? (
          // <img className={styles.avatar} src={unselected} />
          <div className={styles.defaultBg}></div>
        ) : (
          <img className={styles.avatar} src={avatar}></img>
        )}
      </div>
      <p className={selected == id ? styles.activeName : styles.name}>{text}</p>
    </div>
  );
};

export default Slot;
