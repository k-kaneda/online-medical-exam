'use client'

import { Button, Flex, Heading, Input, Link, Box, Icon, Text, VStack, } from '@chakra-ui/react';
import { IoIosWarning } from 'react-icons/io';
import NextLink from 'next/link'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div>
      <Header />
      <Flex height='auto' alignItems='center' justifyContent='center' m={16}>
        <VStack spacing={4}>
          <Flex alignItems='center'>
            <Icon as={IoIosWarning} boxSize={8} mr={2} color='blue.100' />
            <Text fontSize={14} color='red'>当ページは架空のクリニックのオンライン診療システムです。</Text>
          </Flex>
          <Flex direction='column' background='gray.100' padding={12} rounded={6}>
            <Heading textAlign='center'>ログイン</Heading>
            <Input m={2} placeholder='sample@sample.com' variant='filled' type='email' />
            <Input m={2} placeholder='********' variant='filled' type='password' />
            <Button m={4} colorScheme='blue' as={NextLink} href='/portal'>ログイン</Button>
            <Link as={NextLink} textAlign='center' href='/requestTestKit'>はじめての方はこちら</Link>
          </Flex>
        </VStack>
      </Flex>
      <Footer />
    </div>
  )
}
