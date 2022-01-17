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
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Grid>
      </Box>
    </Main>
  );
};

export default projects;
