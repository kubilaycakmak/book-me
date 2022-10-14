import React from "react";
import styles from './SectionCustom.module.scss';
const SectionCustom = ({ text, element }) => {
  return (
    <div className={styles.sectionHeader}>
      <h1>{text}</h1>
      {element && element}
    </div>
  );
};

export default SectionCustom;
