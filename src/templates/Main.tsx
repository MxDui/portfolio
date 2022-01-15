import { ReactNode } from 'react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

import SocialLink from '@/components/SocialLink';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const NavLink = ({ children, link }: { children: ReactNode; link: string }) => (
  <NextLink href={link}>
    <Link
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
      }}
    >
      {children}
    </Link>
  </NextLink>
);

const Main = (props: IMainProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <Box display={'flex'} justifyContent={'center'} bg={'#f2f7f5'}>
      <Box px={4} w={'container.md'}>
        {props.meta}

        <Flex
          h={16}
          alignItems={'center'}
          flexDirection={'row'}
          justifyContent={'space-between'}
        >
          <NextLink href={'/'}>
            <Link
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Heading fontSize={'xl'} color={'#faae2b'}>
                mxdui
              </Heading>
            </Link>
          </NextLink>
          <HStack spacing={8} alignItems={'center'} color={'#475d5b'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavLink link="/projects">Projects</NavLink>
              <a href="https://medium.com/">Blog</a>
              <a href="mailto:mxduibot@gmail.com">
                <Button backgroundColor={'#faae2b'} color={'#00473e'}>
                  Contact me
                </Button>
              </a>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink link="/projects">Projects</NavLink>
              <a href="https://medium.com/">Blog</a>
              <a href="mailto:mxduibot@gmail.com">
                <Button backgroundColor={'#faae2b'} color={'#00473e'}>
                  Contact me
                </Button>
              </a>
            </Stack>
          </Box>
        ) : null}
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'linear', duration: 1 }}
        >
          <Box p={4} height={'auto'}>
            {props.children}
          </Box>
        </motion.div>
        <div className="border-t border-gray-300 flex py-5 justify-around	 ">
          <SocialLink
            link="https://twitter.com/mxduibot"
            socialName="Twitter"
            logo={<IoLogoTwitter />}
            btnColor="#1DA1F2"
          />
          <SocialLink
            link="https://www.github.com/mxdui/"
            socialName="Github"
            logo={<IoLogoGithub />}
            btnColor="#333333
"
          />
          <SocialLink
            link="https://www.linkedin.com/in/mxdui/"
            socialName="LinkedIn"
            logo={<IoLogoLinkedin />}
            btnColor="#2867B2"
          />
        </div>
      </Box>
    </Box>
  );
};

export { Main };
