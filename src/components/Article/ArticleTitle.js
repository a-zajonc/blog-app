import React from 'react';
import styles from './Article.module.css';
import PropTypes from 'prop-types'

export function ArticleTitle({ title }) {
    return <div className={styles.title}>{title}</div>
}

ArticleTitle.propTypes = {
    title: PropTypes.string.isRequired,
}