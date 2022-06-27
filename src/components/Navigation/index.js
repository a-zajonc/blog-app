import styles from './Navigation.module.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

export function Navigation({ imgSrc, alt }) {
    return <div className={styles.navigation}>
        <div>
            <Link to="/">
                <img className={styles.navigationLogo} src={imgSrc} alt={alt} >
                </img>
            </Link>
        </div>
        <ul className={styles.navigationButtonsContainer}>
            <li className={styles.navigationButton}>
                <Link to="/" className={styles.navigationLink}>Strona główna</Link></li>
            <li className={styles.navigationButton}>
                <Link to="/articles" className={styles.navigationLink}>Lista artykułów</Link></li>
            <li className={styles.navigationButton}>
                <Link to="/about" className={styles.navigationLink}>O mnie</Link></li>
            <li className={styles.navigationButton}>
                <Link to="/contact" className={styles.navigationLink}>Kontakt</Link></li>
        </ul>
    </div>
}

Navigation.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}