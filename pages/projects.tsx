import React from "react";

import { Box, Grid, Heading, Text } from "@chakra-ui/react";

import ProjectCard from "../components/ProjectCard";
import { Meta } from "../layouts/Meta";
import { Main } from "../templates/Main";

const projects = () => {
  return (
    <Main
      meta={
        <Meta
          title="MxDui"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Box height={"auto"}>
        <Text color={"#faae2b"} fontWeight={"bold"}>
          My
        </Text>
        <Heading color="#00473e" fontSize={"6xl"}>
          Projects
        </Heading>
        <Grid
          gap={10}
          mt={5}
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        >
          <ProjectCard
            id="gis"
            title="Mining GIS"
            description={
              "Created a GIS for a mining company in order to keep track of their legal permits and their mining operations."
            }
            image="
              /assets/images/gis_mx.png
            "
          />
          <ProjectCard
            id="almazan"
            title="GEO CRM"
            description={
              "Developed a CRM for a real estate company in order to keep track of their clients and their properties."
            }
            image="/assets/images/gis_alma.png"
          />

          <ProjectCard
            id="gis_tool"
            title="GIS Tooling and Automation Platform"
            description={
              "Built a GIS tooling and automation platform for a consulting company in order to automate their GIS and administrative tasks."
            }
            image="/assets/images/gis_ogo.png"
          />

          <ProjectCard
            id="dof-scaper"
            title="DOF Scraper"
            description={
              "Built a scraper for the DOF (Federal Official Gazette) in order to keep track of the updates of the Mexican laws related to one topic in particular."
            }
            image="/assets/images/gis_dof.png"
          />
        </Grid>
      </Box>
    </Main>
  );
};

export default projects;
