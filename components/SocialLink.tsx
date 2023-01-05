import React, { ReactElement } from "react";

import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";

const SocialLink = (props: {
  link: string;
  socialName: string;
  logo: ReactElement;
  btnColor: string;
}) => {
  return (
    <Link href={props.link} passHref={true}>
      <Button
        bg="tomato"
        w={{ base: "4em", md: "10em" }}
        p={4}
        backgroundColor={props.btnColor}
        display={"flex"}
        alignItems={"center"}
        color={"#f2f7f5"}
        borderRadius={"8px"}
      >
        {props.logo}
        <Text ml={2} display={{ base: "none", md: "block" }}>
          {props.socialName}
        </Text>
      </Button>
    </Link>
  );
};

export default SocialLink;
