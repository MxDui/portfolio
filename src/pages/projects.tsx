import React from 'react';

import { Box, Grid, Heading, Text } from '@chakra-ui/react';

import ProjectCard from '@/components/ProjectCard';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const projects = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Box height={'auto'}>
        <Text color={'#faae2b'} fontWeight={'bold'}>
          My
        </Text>
        <Heading color="#00473e" fontSize={'6xl'}>
          Projects
        </Heading>
        <Grid
          gap={10}
          mt={5}
          gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
        >
          <ProjectCard
            id="dilocus"
            title="DiLocus"
            description="A mobile app to make crud requests"
            image="https://images.unsplash.com/photo-1561198379-7ef247721ff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9ja3VwfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
          <ProjectCard
            id="localis"
            title="Localis"
            description={''}
            image="https://images.unsplash.com/photo-1561198379-7ef247721ff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9ja3VwfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
          <ProjectCard
            id="culiacan"
            title="Culiacan"
            description={''}
            image="https://images.unsplash.com/photo-1561198379-7ef247721ff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9ja3VwfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
          <ProjectCard
            id="dilocus"
            title="DiLocus"
            description="A mobile app to make crud requests"
            image="https://images.unsplash.com/photo-1561198379-7ef247721ff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9ja3VwfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
          <ProjectCard
            id="dilocus"
            title="DiLocus"
            description="A mobile app to make crud requests"
            image="https://images.unsplash.com/photo-1561198379-7ef247721ff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9ja3VwfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
        </Grid>
      </Box>
    </Main>
  );
};

export default projects;
