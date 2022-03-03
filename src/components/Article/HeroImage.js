import React from 'react';
import styles from './Article.module.css';
import PropTypes from 'prop-types'

export function HeroImage({ imgSrc, alt }) {
    return <div>
        <img className={styles.heroimage} src={imgSrc} alt={alt} />
    </div>
}

HeroImage.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}