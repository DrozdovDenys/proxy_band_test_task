import React from "react";
import classes from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={[classes.inner, classes.one].join(" ")}></div>
      <div className={[classes.inner, classes.two].join(" ")}></div>
      <div className={[classes.inner, classes.three].join(" ")}></div>
    </div>
  );
};
