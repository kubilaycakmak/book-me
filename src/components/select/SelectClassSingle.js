import axios from 'axios';
import React, { useState, useEffect } from 'react'
import styles from './SelectClassSingle.module.scss'
const SelectClassSingle = ({ _id, title }) => {

  const [settingMenu, setSettingMenu] = useState(false);
  const [message, setMessage] = useState("");
  const generateLink = (id) => {
    const link = process.env.REACT_APP_FRONT_END_URL + "/book/" + id;
    return navigator.clipboard.writeText(link);
  }
  const openLink = (id) => {
    const link = process.env.REACT_APP_FRONT_END_URL + "/book/" + id;
    window.open(link, "_blank");
  }

  const resetSlots = (id) => {
    console.log("reset");
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/classroom/reset/${id}`).then((res) => {
            console.log(res);
            setMessage("Slots reset successfully");
        }).catch((err) => {
            console.log(err);
        });
  }

  const deleteClassById = (id) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/classroom/delete/${id}`).then((res) => {
            console.log(res);
            window.location.reload();
            setMessage("Class deleted successfully");
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
      timeOut();
    }, [message])

    const timeOut = () => {
      setTimeout(() => {
        setMessage("");
      }, 2500);
    }

  return (
    <>
      <div key={_id} className={styles.card}>
        { 
        settingMenu ? <div className={styles.menu}>
          <button className={styles.optionButton} onClick={() => generateLink(_id)}>Copy Link</button>
          <button className={styles.optionButton} onClick={() => deleteClassById(_id)}>Delete</button>
          <button className={styles.optionButton} onClick={() => resetSlots(_id)}>Reset</button>
          <button className={styles.optionButton} onClick={() => openLink(_id)}>Open</button>
          <button className={styles.optionButton} onClick={() => setSettingMenu(!settingMenu)}>Back</button>
        </div> 
        :
        <div className={styles.title} onClick={() => openLink(_id)}>{title}</div>
        }
        { !settingMenu && <span onClick={() => setSettingMenu(!settingMenu)} className={styles.settings}>&#xFE19;</span>}
      </div> 
      {message && <div className={styles.message}>{message}</div>}
    </>
  )
}

export default SelectClassSingle