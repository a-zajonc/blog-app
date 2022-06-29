import React from 'react';
import { Heading, Text, Box, Image, Center } from '@chakra-ui/react';

export function About() {
    return <Box p={5} >
        <Heading textAlign={'center'}>O nas</Heading>
        <Center>
            <Image src="https://cdn2.hubspot.net/hubfs/603447/Hcmworks_warning_signs_you_need_contingent_workers.jpg" borderRadius='10' h={350} padding={2} alt="Zdjęcie pracowników w biurze" />
        </Center>
        <Text textAlign={['center', 'left']} padding={2}>Jesteśmy firmą Vestibulum id purus in tortor ultricies tincidunt eu id urna.
            Cras eleifend non lacus finibus tempus. Vivamus id interdum urna.
            Phasellus orci risus, finibus et ultrices vel, varius vitae elit. Vivamus a lacus eu dolor pulvinar eleifend vel hendrerit felis.
            Integer ut ullamcorper arcu. Mauris consectetur orci vel erat auctor, nec volutpat nibh pharetra
            Curabitur viverra ultricies arcu, sed pretium risus luctus sed. Proin non erat ipsum. Sed imperdiet, magna sit amet congue convallis, purus augue ullamcorper ligula,
            id facilisis velit erat nec velit. Mauris nisl orci, ultrices ac dictum ut, sodales vitae nulla. Aliquam quis ex faucibus ligula varius semper. Suspendisse potenti.
            Nulla maximus dictum orci, a vulputate nisi gravida at.
        </Text>
    </Box>
}
