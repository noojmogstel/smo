import React from "react";
import styles from "./User.module.css";
const User = (props) => {
  return (
    <div className={props.className}>
      {React.Children.map(props.children, (child) => {
        return <div>{child}</div>;
      })}
    </div>
  );
};

export default User;
