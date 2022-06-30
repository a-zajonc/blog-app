import React from 'react';
import { Center, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types'

export function ArticleTitle({ title }) {
    return <Center>
        <Heading padding={2}>{title}</Heading>
    </Center>
}

ArticleTitle.propTypes = {
    title: PropTypes.string.isRequired,
}