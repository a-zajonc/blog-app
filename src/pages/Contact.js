import React from 'react';
import { useState } from 'react';
import { Container, Box, Text, Center, Heading, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';

export function Contact() {

    const [submitted, setSubmitted] = useState(false);

    const [values, setValues] = useState({
        name: '',
        surname: '',
        message: '',
        email: '',
    });

    const handleNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };

    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const handleMessageInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            message: event.target.value,
        }));
    };

    const handleSurnameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            surname: event.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.name || !values.email || !values.message) {
            setSubmitted(false)
        }
        (setSubmitted(true) && console.log(values))
    };

    return (
        <Container padding={2} marginTop={5}>
            <Container border="1px" borderColor="#CFA68F" padding={2} borderRadius={10}>
                <form onSubmit={handleSubmit}>
                    <FormControl padding={2} isRequired>
                        <Heading textAlign={"center"}>Napisz do nas!</Heading>
                        <FormLabel> Twoje imię:</FormLabel>
                        <Input
                            placeholder="Wpisz imię"
                            type="text"
                            onChange={handleNameInputChange}
                            value={values.name}>
                        </Input>
                    </FormControl>
                    <FormControl padding={2}>
                        <FormLabel>Twoje nazwisko</FormLabel>
                        <Input
                            placeholder="Wpisz nazwisko"
                            type="text"
                            onChange={handleSurnameInputChange}
                            value={values.surname}>
                        </Input>
                    </FormControl>
                    <FormControl isRequired padding={2}>
                        <FormLabel>Twój email:</FormLabel>
                        <Input
                            placeholder="Wpisz email"
                            type="email"
                            onChange={handleEmailInputChange}
                            value={values.email}>
                        </Input>
                    </FormControl>
                    <FormControl isRequired padding={2}>
                        <FormLabel>Wiadomość:</FormLabel>
                        <Input
                            placeholder="Wpisz wiadomość"
                            type="text"
                            onChange={handleMessageInputChange}
                            value={values.message}>
                        </Input>
                    </FormControl>
                    <Center>
                        <Button type="submit" bg={"#CFA68F"} padding={2}>
                            Wyślij!
                        </Button>
                    </Center>
                    {(submitted === true) && <Text padding={2} textAlign="center" fontSize="lg" fontWeight="bold">
                        Dziękujemy za wiadomość. Odezwiemy się w ciągu 2-3 dni!
                    </Text>}
                </form>
            </Container>
            <Box marginTop={5}>
                <Text textAlign="center" fontSize={"lg"}>Nasz adres:</Text>
                <Text textAlign="center" fontSize={"sm"}>Zajonc SA </Text>
                <Text textAlign="center" fontSize={"sm"}>Uszata 5</Text>
                <Text textAlign="center" fontSize={"sm"}>123 - 456 Sianowo</Text>
            </Box>
        </Container>
    )
}