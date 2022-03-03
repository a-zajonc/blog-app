import React from 'react';
import styles from './BackButton.module.css';
import { Link } from 'react-router-dom';

export function BackButton() {
    return <Link to="/articles">
        <div className={styles.backbuttonbackground}><button className={styles.button}>Powrót listy artykułów</button>
        </div>
    </Link>
}