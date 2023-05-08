import React, { useState } from "react";
import logo from "../img/logo.png";
import menu from "../img/icons8-menu-rounded-50.png";
import noti from "../img/icons8-알림-30.png";
import Modal from "./Modal";
import styles from "./Header.module.css";
import Scrollbar from "./Scrollbar";
import ScrollbarStyle from "./Scrollbar.module.css";


const Header = (props) => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  const handleMenuClick = () => {
    setShowMenuModal(true);
  };

  const handleNotificationClick = () => {
    setShowNotificationModal(true);
  };

  const handleCloseModal = () => {
    setShowMenuModal(false);
    setShowNotificationModal(false);
  };

  return (
    <div className={styles.container}>
      {props.useButton ? (
        <img
          className={styles.menuIcon}
          src={menu}
          alt="menu"
          onClick={handleMenuClick}
        />
      ) : (
        <div className={styles.placeholder} />
      )}
      <img className={styles.logo} src={logo} alt="logo" />
      {props.useButton ? (
        <img
          className={styles.notificationIcon}
          src={noti}
          alt="noti"
          onClick={handleNotificationClick}
        />
      ) : (
        <div className={styles.placeholder} />
      )}
      {showMenuModal && (
        <Modal show={showMenuModal} onClose={handleCloseModal} title="Menu">
          <Scrollbar className={ScrollbarStyle.scrollbar_container}></Scrollbar>
        </Modal>
      )}
      {showNotificationModal && (
        <Modal
          show={showNotificationModal}
          onClose={handleCloseModal}
          title="Notification"
        >
          <Scrollbar className={ScrollbarStyle.scrollbar_container}></Scrollbar>
        </Modal>

     ) }</div>)}


export default Header;
      
