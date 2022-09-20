import React from "react";
import styles from "./Avatar.module.scss";
import { generateFromString } from "generate-avatar";

const Avatar = ({ uuid }) => {
  return (
    <div className={styles.avatarOuter}>
      <img src={`data:image/svg+xml;utf8,${generateFromString(uuid)}`} />
    </div>
  );
};

export default Avatar;
