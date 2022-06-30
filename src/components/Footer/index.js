import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Box, Center, Divider, HStack, Text, Link } from '@chakra-ui/react';


export function Footer() {
    return <Box pos="bottom" padding={5} >
        <Divider borderColor="black" />
        <Text fontSize="md" textAlign={'center'} paddingTop={2}>Znajdź nas:</Text>
        <Center>
            <HStack spacing='24px'>
                <Link href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size="2x" /></Link>
                <Link href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x" /></Link>
                <Link href="https://twitter.com/?lang=pl"><FontAwesomeIcon icon={faTwitter} size="2x" /></Link>
            </HStack>
        </Center>
        <Text fontSize="xs" textAlign={"right"}>
            © 2022 Zajonc. All Rights Reserved.
        </Text>
    </Box>
}