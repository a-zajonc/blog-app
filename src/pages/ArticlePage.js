import React from 'react';
import { Article } from '../components/Article';
import { BackButton } from '../components/BackButton';
import { useParams } from 'react-router-dom';
import { dataBase } from '../db';
import { convertToSlug } from '../ConvertToSlug';
import { Box, Center, Spinner } from '@chakra-ui/react';

const getSingleArticle = async (slug) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(dataBase.find(article => convertToSlug(article.title) === slug))
        }, 300)
    })
}

export function ArticlePage() {
    const [article, setArticle] = React.useState()
    const { slug } = useParams();

    React.useEffect(() => {
        const fetchData = async () => {
            setArticle(await getSingleArticle(slug))
        }

        fetchData()
    }, [slug])

    return (
        <Box padding={2}>
            <BackButton />
            <Box>
                {article ? (
                    <Article
                        imgSrc={article.imgSrc}
                        alt={article.alt}
                        title={article.title}
                        date={article.date}
                        author={article.author}
                        content={article.content}
                    />)
                    : <Center><Spinner size='xl' thickness='4px' /></Center>
                }
            </Box>
        </Box>
    )
}
