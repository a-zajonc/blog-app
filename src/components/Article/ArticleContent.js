import React from 'react';
import PropTypes from 'prop-types'
import { Text } from '@chakra-ui/react';

export function ArticleContent({ content }) {
    return <Text textAlign={['center', 'left']} marginLeft={20} marginRight={20}>{content}</Text>
}

ArticleContent.propTypes = {
    content: PropTypes.string.isRequired,
}