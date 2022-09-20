import React from "react";
import styles from './SectionCustom.module.scss';
const SectionCustom = ({ text }) => {
  return (
    <div className={styles.sectionHeader}>
      <h1>{text}</h1>
    </div>
  );
};

export default SectionCustom;
