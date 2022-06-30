import React from 'react';
import PropTypes from 'prop-types'
import { Center, Image } from '@chakra-ui/react';

export function HeroImage({ imgSrc, alt }) {
    return <Center>
        <Image src={imgSrc} alt={alt} height="500px" borderRadius={10} />
    </Center>
}

HeroImage.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}