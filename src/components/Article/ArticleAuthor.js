import React from 'react';
import styles from './Article.module.css';
import PropTypes from 'prop-types'

export function ArticleAuthor({ author }) {
    return <div className={styles.author}>{author}</div>
}

ArticleAuthor.propTypes = {
    author: PropTypes.string.isRequired,
}