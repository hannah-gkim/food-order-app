import React from "react";
import macaron_main from "../../assets/macaron_main.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>Les Macarons</h1>
        {/* <button className={classes.button}>Cart</button> */}
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={macaron_main} alt="macaron_main" />
      </div>
    </>
  );
}
