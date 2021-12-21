import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Image from "next/image";
const ToolIcon = (props) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"xl"}
      padding={5}
      width={["90px", "150px"]}
      rounded={"lg"}
      _hover={useColorModeValue(
        {
          background: "gray.700",
          color: "white",
          transition: "0.5s",
        },
        {
          background: "white",
          color: "gray.700",
          transition: "0.5s",
        }
      )}
      className="tool-icon"
    >
      <Flex flexDirection={"column"} justifyContent={"center"}>
        <Image
          src={"/" + props.tool + ".svg"}
          className="image"
          width={50}
          height={50}
          alt="Dan Abramov"
        />
        <Text textAlign={"center"} fontSize={["sm", "md"]} marginTop={2}>
          {props.tool.toString().charAt(0).toUpperCase() +
            props.tool.toString().slice(1)}
        </Text>
      </Flex>
    </Box>
  );
};

export default ToolIcon;
