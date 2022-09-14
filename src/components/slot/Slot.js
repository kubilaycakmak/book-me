import React from "react";
import styles from "./Slot.module.scss";
const Slot = ({ id, avatar, text, onClickHandler, selected }) => {
  return (
    <div className={styles.slot} onClick={() => onClickHandler(id)}>
      <p>Slot {id + 1}</p>
      <div className={selected ? styles.selectedCube : styles.cube}>
        {avatar == "" ? <h3>empty</h3> : <img src={avatar}></img>}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Slot;
