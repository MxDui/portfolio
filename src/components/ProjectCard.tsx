import React from 'react';

import { Box, Image, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ProjectCard = ({ id, title, description, image }: ProjectProps) => {
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
      <NextLink href={`/projects/${id}`}>
        <Box textAlign="center" borderRadius="8px" height="20em">
          <Image
            src={image}
            alt="Image of my project"
            width="100%"
            height="14em"
            borderRadius="8px"
            objectFit="cover"
          ></Image>
          <Box p={3}>
            <Heading size="md" color="#475d5b" fontWeight="extrabold">
              {title}
            </Heading>
            <Text>{description}</Text>
          </Box>
        </Box>
      </NextLink>
    </motion.div>
  );
};

export default ProjectCard;
