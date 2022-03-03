import React from 'react';
import styles from './pages.module.css'
import { dataBase } from '../db';
import { Link } from 'react-router-dom';
import { convertToSlug } from '../ConvertToSlug';
import { Sort } from '../components/Sort/Sort';
import { isBefore, parseISO } from 'date-fns';

const sort = (first, second, sortData) => {
    const sortDirection = Number(sortData.direction)

    if (sortData.type === 'date') {
        return isBefore(parseISO(first.date), parseISO(second.date)) ? sortDirection * -1 : sortDirection
    }

    if (sortData.type === 'title') {
        return first.title.localeCompare(second.title) * sortDirection
    }

    return isBefore(parseISO(first.date), parseISO(second.date)) ? -1 : 1
}

export function ArticlesList() {
    const [sortData, setSortData] = React.useState({})

    const handleSort = React.useCallback(sortDirection => setSortData(sortDirection), [])

    return <div className={styles.articlesList}>
        <h2 className={styles.articlesHeader}>Lista artykułów:</h2>
        <Sort onSortChange={handleSort} />
        <div className={styles.articlesTitlesListed}>
            {
                dataBase
                    .sort((first, second) => sort(first, second, sortData))
                    .map((article) => (
                        <div key={convertToSlug(article.title)}>
                            <Link to={`/articles/${convertToSlug(article.title)}`} className={styles.articleTitle} >
                                <h4>{article.title}</h4>
                            </Link>
                        </div>
                    ))}
        </div>
    </div>
}


                    // .sort((first, second) => first.title.localeCompare(second.title))