import { HeroImage } from "./HeroImage";
import { ArticleTitle } from "./ArticleTitle";
import { ArticleAuthor } from "./ArticleAuthor";
import { ArticleContent } from "./ArticleContent";
import PropTypes from 'prop-types'
import { ArticleDate } from './ArticleDate';
import { Box } from '@chakra-ui/react'

export function Article({ imgSrc, alt, title, author, content, date }) {

    return <Box>
        <HeroImage imgSrc={imgSrc}
            alt={alt} />
        <ArticleTitle title={title} />
        <ArticleDate date={date} />
        <ArticleAuthor author={author} />
        <ArticleContent content={content} />
    </Box>
}

Article.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.PropTypes.string.isRequired
}