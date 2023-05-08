import React from 'react';
import styles from './Nav.module.css';
import home from "../img/icons8-시골집-30.png"
import post from "../img/icons8-연필-30.png"
import find from "../img/icons8-수색-30.png"
import profile from "../img/icons8-사람-남자-30.png"
import { useNavigate } from "react-router-dom";

export default function Nav() {
 const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLinks}>
          <ul>
              <a onClick={() => navigate("/main/home")} >
                <img src={home} alt="button1" />
              </a>
            
              <a onClick={() => navigate("/main/posting")}>
                <img src={post} alt="button2" />
              </a>
          
            
              <a onClick={() => navigate("/main/find")}>
                <img src={find} alt="button3" />
              </a>
            
            
              <a onClick={() => navigate("/main/profile")}>
                <img src={profile} alt="button4" />
              </a>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
