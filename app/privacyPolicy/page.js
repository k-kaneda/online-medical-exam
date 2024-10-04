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
  Divider,
} from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Complete() {
  return (
    <div>
      <Header />
      <Box height={40} display='flex' justifyContent='center' alignItems='center' bgColor='blue.100'>
        <Heading color='gray.600'>個人情報保護方針</Heading>
      </Box>
      <Flex height='auto' alignItems='center' justifyContent='center' m={16}>
        <VStack spacing={4}>
          <Box>
            <Text fontSize={16}>当院では、以下の個人情報保護方針を定め確実な履行に努めます。</Text>
          </Box>
          <OrderedList spacing={4}>
            <ListItem>個人情報¹の収集について</ListItem>
            <Box>
              <Text fontSize={14}>当院が患者様の個人情報を収集する場合、診療・看護および患者様の医療にかかわる範囲で行います。</Text>
            </Box>
          </OrderedList>
        </VStack>
      </Flex>
      <Divider orientation='horizontal' borderColor='blue.600' />
      <Flex height='auto' mx={12} my={4}>
        <OrderedList spacing={1}>
          <ListItem fontSize={12}>個人情報とは、生存する個人に関する情報であって、氏名や生年月日などによって特定の個人を識別できる情報を指します。</ListItem>
        </OrderedList>
      </Flex>
      <Divider orientation='horizontal' borderColor='blue.600' />
      <Footer />
    </div>
  )
}