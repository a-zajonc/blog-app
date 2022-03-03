import React from 'react';
import { Article } from '../components/Article';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './pages.module.css'
import { BackButton } from '../components/BackButton';
import { useParams } from 'react-router-dom';
import { dataBase } from '../db';
import { convertToSlug } from '../ConvertToSlug';

const getSingleArticle = async (slug) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(dataBase.find(article => convertToSlug(article.title) === slug))
        }, 100)
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
        <div>
            <BackButton />
            <div>
                {article ? (
                    <Article
                        imgSrc={article.imgSrc}
                        alt={article.alt}
                        title={article.title}
                        date={article.date}
                        author={article.author}
                        content={article.content}
                    />)
                    : <div className={styles.spinnerDiv}>
                        <Spinner animation="border" variant="primary" className={styles.spinner} />
                    </div>
                }
            </div>
        </div>
    )
}
