/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Box height={{ md: 'auto', base: 'auto' }}>
        <Text color={'#faae2b'} fontWeight={'bold'}>
          Hello there
        </Text>
        <Heading fontSize={'8xl'} textAlign="left">
          I'm
          <br />
          David
        </Heading>
        <Text
          fontSize={'xl'}
          textAlign={'justify'}
          lineHeight={{ base: '200%', md: '250%' }}
        >
          Currently I am a high school student and freelance software developer
          interested on web3 and blockchain. My main focus is on building full
          stack web applications with Typescript , React , Postgres , NestJS and
          occasionally mobile apps with Flutter. Most of my previous projects
          are related on developing GIS applications so I am also profficient
          with libraries like Leaflet and Postgis.
        </Text>
        <Center mt={5}>
          <Button
            size={'lg'}
            backgroundColor={'#faae2b'}
            color={'#00473e'}
            _hover={{
              bg: '#475d5b',
              color: '#faae2b',
              transition: '0.5s',
              border: '10px #00332c',
            }}
          >
            View projects
          </Button>
        </Center>
        <Box ml={0}>
          <Image
            src={'/bust.png'}
            width={'300'}
            height={'350'}
            alt="Cartoon bust image"
          />
        </Box>
      </Box>
    </Main>
  );
};

export default Index;
