import React from "react";
import logo from "../img/logo.png";
import menu from "../img/icons8-menu-rounded-50.png";
import noti from "../img/icons8-알림-30.png";
const Header = (props) => {
  return (
    <div
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "70px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "nowrap",
      }}
    >
      {props.useButton ? (
        <img
          style={{ flex: "1", maxWidth: "8%", height: "50%" }}
          src={menu}
          alt="menu"
        />
      ) : (
        <div style={{ flex: "1", maxWidth: "10%", height: "auto" }} />
      )}
      <img
        style={{ flex: "1", maxWidth: "70%", height: "auto" }}
        src={logo}
        alt="logo"
      />
      {props.useButton ? (
        <img
          style={{ flex: "1", maxWidth: "8%", height: "50%" }}
          src={noti}
          alt="noti"
        />
      ) : (
        <div style={{ flex: "1", maxWidth: "10%", height: "auto" }} />
      )}
    </div>
  );
};

export default Header;
