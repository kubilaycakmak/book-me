import React, { useState } from "react";
import styles from "./SelectClassEditable.module.scss";
import Dropdown from "react-bootstrap/Dropdown";
import SelectClassSingle from "./SelectClassSingle";

const SelectClassEditable = ({ classes }) => {
  const [settingMenu, setSettingMenu] = useState(false);
  const [selected, setSelected] = useState();
  const [item, setItem] = useState("M2-0922");

  const openSettingMenu = (id) => {
    setSettingMenu(id);
  };

  return (
    <>
    <div className={styles.outer}>
    {
      classes.map(item => 
        <SelectClassSingle {...item} />
      )
    }
    </div>
    </>
  );
};

export default SelectClassEditable;
