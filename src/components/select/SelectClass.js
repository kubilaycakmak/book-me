import React, { useState } from "react";
import styles from "./SelectClass.module.scss";
import Dropdown from "react-bootstrap/Dropdown";

const SelectClass = ({ classes, callback, code }) => {

  const [item, setItem] = useState("M2-0922");

  // function mergeFunctions(name, code) {
  //   setItem(name);
  //   callback(code);
  // }

  return (
    <>
    <div className={styles.outer}>
    {
      classes.map(item => <div key={item.code} onClick={() => callback(item.code)} className={code == item.code ? styles.focusedCard : styles.card}>{item.name}</div> )
    }
    </div>
    
    {/* <select name="cars" id="cars">
    {classes.map((item) => {
            return (
              <option value="saab">{item.name}</option>
            );
          })} */}
      {/* <Dropdown.Item
                onClick={() => mergeFunctions(item.name, item.code)}
                href="#/action-1"
              >
                {item.name}
              </Dropdown.Item> */}
      {/* <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option> */}
    {/* </select> */}
      {/* <Dropdown>
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
      </Dropdown> */}
    </>
  );
};

export default SelectClass;
