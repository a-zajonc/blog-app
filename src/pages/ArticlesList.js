import React from 'react';
import { dataBase } from '../db';
import { Link } from 'react-router-dom';
import { convertToSlug } from '../ConvertToSlug';
import { Sort } from '../components/Sort/Sort';
import { isBefore, parseISO } from 'date-fns';
import { Box, Heading, Center, ListItem, UnorderedList } from '@chakra-ui/react';

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

    return <Box p={5}>
        <Heading padding={2} textAlign="center">Lista artykułów:</Heading>
        <Center>
            <Box maxW='xlg'>
                <Sort onSortChange={handleSort} />
                <Box borderWidth='1px' borderRadius={10} padding={2} paddingLeft={10}>
                    {
                        dataBase
                            .sort((first, second) => sort(first, second, sortData))
                            .map((article) => (
                                <Box key={convertToSlug(article.title)}>
                                    <Link to={`/articles/${convertToSlug(article.title)}`}>
                                        <UnorderedList><ListItem fontSize="4xl" marginRight={50}>{article.title}</ListItem></UnorderedList>
                                    </Link>
                                </Box>
                            ))}
                </Box>
            </Box>
        </Center>
    </Box>
}