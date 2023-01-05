import React from "react";

import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

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
        scale: 1.04,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
        borderRadius: "8px",
        transition: {
          duration: 0.2,
        },
      }}
    >
      <NextLink href={`/projects/${id}`}>
        <Box
          textAlign="center"
          borderRadius="8px"
          height="23em"
          border={"1px solid #475d5b "}
        >
          <Image
            src={image}
            alt="Image of my project"
            width="100%"
            height="14em"
            borderTopRadius={"8px"}
            objectFit="contain"
            backgroundColor={"#475d5b"}
            // blur background image
            filter={"blur(2px)"}
          ></Image>
          <Box p={3}>
            <Heading
              size="md"
              color="#475d5b"
              fontWeight="extrabold"
              textAlign={"start"}
              mb={2}
            >
              {title}
            </Heading>
            <Text textAlign={"justify"} fontSize={"sm"}>
              {description}
            </Text>
          </Box>
        </Box>
      </NextLink>
    </motion.div>
  );
};

export default ProjectCard;
