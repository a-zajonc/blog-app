import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";


export function Footer() {
    return <div className={styles.container}>
        <div className={styles.socialContainer}>
            <h3>Znajdź nas:</h3>
            <a href="https://www.instagram.com/" className={styles.icon}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.facebook.com/" className={styles.icon}>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/?lang=pl" className={styles.icon}>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
        </div>
        <span>© 2022 Zajonc. All Rights Reserved.</span>
    </div>
}