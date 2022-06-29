import React from 'react';
import { Box, Heading, Text, Image, Center } from '@chakra-ui/react';

export function Home() {

    return <Box position="flex" padding={5}  >
        <Heading textAlign={'center'} padding={2} justifyContent="center">Witamy u Zajonca!</Heading>
        <Text textAlign={['center', 'left']} padding={2}>
            Nulla facilisi. Morbi dapibus at orci sit amet pulvinar. Nam ornare non sapien vitae tempus. Fusce cursus sagittis metus, vel vehicula tortor blandit sit amet. Integer semper, eros in feugiat posuere, ante mi aliquet tellus, nec dictum mauris erat vel ligula. Quisque eget ex a purus ullamcorper sodales. Nulla laoreet accumsan pulvinar. In ligula tortor, pellentesque id justo non, ultrices malesuada nisl. Nullam fermentum est tincidunt turpis pulvinar, quis consectetur turpis venenatis. Sed vitae condimentum metus. Aenean euismod tortor non elit consequat consequat. Nulla ac porta orci. Sed mollis, nulla mollis tristique vestibulum, nibh ex luctus arcu, a aliquet odio tellus et nulla. Etiam consequat volutpat turpis quis viverra.
        </Text>
        <Text textAlign={['center', 'left']} padding={2}>
            Etiam at neque fringilla, ornare augue sit amet, porta enim. Aliquam aliquet rhoncus convallis. Nunc dignissim pulvinar dapibus. Aliquam dapibus orci id ex tincidunt lacinia. Suspendisse laoreet pharetra nunc, at vulputate sapien consequat et. Aenean id consequat nibh. Suspendisse iaculis justo nec laoreet lobortis. Proin ut est a tellus venenatis suscipit.
        </Text>
        <Center>
            <Image src="https://media.istockphoto.com/photos/close-up-woman-hand-writing-on-notebook-picture-id1035462384?k=20&m=1035462384&s=612x612&w=0&h=sQGYRJdWsXuO1n16dB8-fU62xu1Ojjy4xhbEDxAga1c="
                alt="Kobieta pisząca w zeszycie" borderRadius={10} />
        </Center>
    </Box>
}