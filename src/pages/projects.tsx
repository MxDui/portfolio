import React from 'react';

import { Box, Heading } from '@chakra-ui/react';

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
      <Box height={'90vh'}>
        <Heading>Projects</Heading>
      </Box>
    </Main>
  );
};

export default projects;
