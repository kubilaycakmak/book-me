import React, { useState, useEffect } from "react";
import Slot from "./Slot";
import styles from "./Slots.module.scss";
const Slots = ({ onSubmitHandler, selected, avatar, books, list }) => {
  return (
    <div className={styles.slots}>
      {list.map((e, i) => {
        return (
          <Slot
            key={i}
            selected={selected}
            id={e.id}
            text={e.name}
            slot={e.slot}
            avatar={e.avatar}
            onClickHandler={() => onSubmitHandler(i)}
          />
        );
      })}
    </div>
  );
};

export default Slots;
