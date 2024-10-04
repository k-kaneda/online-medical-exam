import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  Icon,
  Divider,
  Show,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { MdHome, MdAccountCircle, MdHelp } from 'react-icons/md';

const Header = () => {
  return (
    <Box w='100%'>
      {/* Main Navigation */}
      <Flex justifyContent='space-between' p={4}>
        <Image src='sample-logo.png' alt='logo' w={36} />
        <Flex>
          <Show breakpoint='(min-width: 768px)'>
            <Flex direction='column' mr={6}>
              <Text fontSize='sm' mr={2} color='gray.600'>TEL: 03-XXXX-XXXX</Text>
              <Text fontSize='sm' mr={2} color='gray.600'>MAIL: xxx@example.com</Text>
            </Flex>
          </Show>
          <Link as={NextLink} textAlign='center' href='/login'><Icon as={MdHome} boxSize={8} mr={2} color='blue.300'></Icon></Link>
          <Icon as={MdAccountCircle} boxSize={8} mr={2} color='blue.300'></Icon>
          <Icon as={MdHelp} boxSize={8} mr={2} color='blue.300'></Icon>
        </Flex>
      </Flex>
      <Divider color='blue.300' height={2} />
    </Box>
  );
};

export default Header;