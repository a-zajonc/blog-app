import React from 'react';
import styles from './Article.module.css';
import PropTypes from 'prop-types'

export function ArticleContent({ content }) {
    return <div className={styles.content}>{content}</div>
}

ArticleContent.propTypes = {
    content: PropTypes.string.isRequired,
}