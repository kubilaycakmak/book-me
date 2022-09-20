import React, { useState } from "react";
import styles from "./SelectClass.module.scss";
import Dropdown from "react-bootstrap/Dropdown";

const SelectClass = ({ classes, callback }) => {
  const [item, setItem] = useState("Select Class");

  function mergeFunctions(name, code) {
    setItem(name);
    callback(code);
  }

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">{item}</Dropdown.Toggle>
        <Dropdown.Menu>
          {classes.map((item) => {
            return (
              <Dropdown.Item
                onClick={() => mergeFunctions(item.name, item.code)}
                href="#/action-1"
              >
                {item.name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default SelectClass;
