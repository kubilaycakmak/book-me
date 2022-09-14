import React, { useState, useEffect } from "react";
import Slot from "./Slot";
import styles from "./Slots.module.scss";
const Slots = () => {
  const [slotList, setSlotList] = useState([
    {
      id: 0,
      avatar: "",
      text: "Kubilay Cakmak",
      selected: false,
    },
    {
      id: 1,
      avatar: "",
      text: "Joe Doe",
      selected: false,
    },
    {
      id: 2,
      avatar: "",
      text: "Joe Doe 1",
      selected: false,
    },
    {
      id: 3,
      avatar: "",
      text: "HAHA",
      selected: false,
    },
    {
      id: 4,
      avatar: "",
      text: "",
      selected: false,
    },
    {
      id: 5,
      avatar: "",
      text: "",
      selected: false,
    },
    {
      id: 6,
      avatar: "",
      text: "",
      selected: false,
    },
    {
      id: 7,
      avatar: "",
      text: "",
      selected: false,
    },
    {
      id: 8,
      avatar: "",
      text: "",
      selected: false,
    },
    {
      id: 9,
      avatar: "",
      text: "",
      selected: false,
    },
  ]);

  const selectSlot = (slot) => {
    console.log(slot, " selected");
    // slotList.find((el) => el.id == slot)
    slotList.forEach((el, index) => {
      if (el.id == slot) {
        slotList[index].selected = true;
      }
    });

    // console.log(newArr);

    // setSlotList(newArr);

    console.log(slotList.find((el) => el.id == slot));
  };

  return (
    <div className={styles.slots}>
      {slotList.map((item, index) => {
        return <Slot key={index} {...item} onClickHandler={selectSlot} />;
      })}
    </div>
  );
};

export default Slots;
