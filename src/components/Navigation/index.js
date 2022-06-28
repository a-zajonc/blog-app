import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import { Box, Image, Stack, Button } from '@chakra-ui/react'

export function Navigation({ imgSrc, alt }) {
    return <Box display="flex" justifyContent="space-between" paddingRight={5} paddingLeft={5} bg="#CFA68F">
        <Link to="/">
            <Box justifyContent="left">
                <Image src={imgSrc} alt={alt} boxSize='100' borderRadius="full" marginTop={1} marginBottom={1} />
            </Box>
        </Link>
        <Stack
            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}>
            <Button colorScheme='whiteAlpha' size='lg'><Link to="/">Strona główna</Link></Button>
            <Button colorScheme='whiteAlpha' size='lg'><Link to="/articles">Lista artykułów</Link></Button>
            <Button colorScheme='whiteAlpha' size='lg'><Link to="/about" >O nas</Link></Button>
            <Button colorScheme='whiteAlpha' size='lg'><Link to="/contact">Kontakt</Link></Button>
        </Stack>
    </Box>
}

Navigation.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}