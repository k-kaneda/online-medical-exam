'use client'

import {
  Flex,
  Text,
  Heading,
  Box,
  ListItem,
  OrderedList,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Complete() {
  return (
    <div>
      <Header />
      <Box height={40} display='flex' justifyContent='center' alignItems='center' bgColor='blue.100'>
        <Heading color='gray.600'>利用規約</Heading>
      </Box>
      <Flex height='auto' alignItems='center' justifyContent='center' m={16}>
        <VStack spacing={4}>
          <UnorderedList spacing={4} styleType='none' width={840}>
            {
              /* 第1条 */
            }
            <ListItem fontSize={24} fontWeight='bold'>第1条（概要）</ListItem>
            <Box>
              <Text fontSize={14}>本規約は、〇〇クリニック（以下、「当院」といいます）と患者様との間で、当院が提供するオンライン診療サービス及びそれに付帯するサービス（以下、「本サービス」といいます）の利用に関して必要な事項を定めることにより、本サービスを適正かつ円滑に運営することを目的とし、患者様と当院間の本サービスの利用に関わる一切の関係に適用されます。</Text>
            </Box>
          </UnorderedList>
        </VStack>
      </Flex>
     <Footer />
    </div>
  )
}