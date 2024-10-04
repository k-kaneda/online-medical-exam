import {
  Box,
  Flex,
  Link,
  Text,
  Icon,
} from '@chakra-ui/react';
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <Box bgColor='blue.300' w='100%'>
      <Flex w='100%' alignItems='center' justifyContent='space-between' p={4} flexWrap='wrap' h={120}>
        <Link fontSize='sm' textAlign='center' flex='1' color='white'>当クリニックについて</Link>
        <Link fontSize='sm' textAlign='center' flex='1' color='white' href='/terms'>利用規約</Link>
        <Link fontSize='sm' textAlign='center' flex='1' color='white' href='/privacyPolicy'>プライバシーポリシー</Link>
        <Link fontSize='sm' textAlign='center' flex='1' color='white' href='/commerceDisclosure'>特定商取引法に基づく表記</Link>
        <Link fontSize='sm' textAlign='center' flex='1' color='white'>お問い合わせ</Link>
      </Flex>

      <Flex justifyContent='center' alignItems='center' p={4}>
        <Icon as={MdCopyright} boxSize={4} mr={2} color='white'/>
        <Text fontSize='sm' mr={2} color='white'>〇〇クリニック All Rights Reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;