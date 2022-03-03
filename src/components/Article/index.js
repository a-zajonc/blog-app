import styles from './Article.module.css'
import { HeroImage } from "./HeroImage";
import { ArticleTitle } from "./ArticleTitle";
import { ArticleAuthor } from "./ArticleAuthor";
import { ArticleContent } from "./ArticleContent";
import PropTypes from 'prop-types'
import { ArticleDate } from './ArticleDate';

export function Article({ imgSrc, alt, title, author, content, date }) {

    return <div className={styles.article}>
        <HeroImage imgSrc={imgSrc}
            alt={alt} />
        <ArticleTitle title={title} />
        <div className={styles.authorAndDate}>
            <ArticleDate date={date} />
            <ArticleAuthor author={author} />
        </div>
        <ArticleContent content={content} />
    </div>
}

Article.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.PropTypes.string.isRequired
}