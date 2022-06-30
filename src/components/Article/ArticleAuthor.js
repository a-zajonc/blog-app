import React from 'react';
import PropTypes from 'prop-types';
import { Text, Center } from '@chakra-ui/react';

export function ArticleAuthor({ author }) {
    return <Center paddingBottom={2}>
        <Text fontSize={"sm"}>{author}</Text>
    </Center>
}

ArticleAuthor.propTypes = {
    author: PropTypes.string.isRequired,
}