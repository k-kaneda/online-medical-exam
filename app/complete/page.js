'use client'

import { Flex, Text, Heading, Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Complete() {
  return (
    <div>
      <Header />
      <Box height={40} display='flex' justifyContent='center' alignItems='center' bgColor='blue.100'>
        <Heading color='gray.600'>受付完了</Heading>
      </Box>
      <Flex height='auto' alignItems='center' justifyContent='center' m={16}>
        <Flex direction='column'>
          <Text>検査キット送付を受け付けました。到着までお待ちください。</Text>
          <Text>陽性だった場合、入力いただいたメールアドレスにオンライン診察のご案内をお送りします。</Text>
        </Flex>
      </Flex>
      <Footer />
    </div>
  )
}