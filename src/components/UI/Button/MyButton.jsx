import React from "react";
import classes from "./myButton.module.css";

export const MyButton = ({ children, ...props }) => {
  return (
    <button className={classes.myBtn} {...props}>
      {children}
    </button>
  );
};
