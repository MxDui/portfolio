import React from 'react';

import { Box, Image, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ProjectCard = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Box backgroundColor="#faae2b" borderRadius="8px" height="20em">
        <Image
          src="https://i.ytimg.com/an_webp/hYs5QUNEu90/mqdefault_6s.webp?du=3000&sqp=CITrjY8G&rs=AOn4CLDun8DpV1RbQPUFq-nCvPMoDWNM0Q"
          alt="Image of my project"
          width="100%"
          height="14em"
          borderRadius="8px"
          objectFit="cover"
        ></Image>
        <Box p={3}>
          <Heading size="md" color="#475d5b" fontWeight="extrabold">
            Title
          </Heading>
          <Text>Description</Text>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ProjectCard;
