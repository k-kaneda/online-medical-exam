'use client'

import {
  Text,
  Center,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Icon,
  Box,
  Link,
  Flex,
  Show,
} from '@chakra-ui/react';
import { MdMedication, MdOutlineAccessAlarm, MdOutlineVaccines } from 'react-icons/md';
import NextLink from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Portal() {
  return (
    <div>
      <Header />
      <Box mt={12} mx={{ base: 2, md: 36 }} rounded={6} borderColor='blue.300' borderStyle='solid' borderWidth={2}>
        <Heading size='md' p={4} color='gray.600'>次回予約</Heading>
        <Flex p={2} direction='column'>
          <Flex>
            <Show breakpoint='(min-width: 768px)'>
              <Text color='gray.600' px={2}>あなたの次の予約は</Text>
            </Show>
            <Show breakpoint='(max-width: 768px)'>
              <Text color='gray.600' px={2}>次回予約：</Text>
            </Show>
            <Text color='blue.300' fontWeight='bold' px={1}>2024-05-23 10:15</Text>
            <Show breakpoint='(min-width: 768px)'>
              <Text color='gray.600' px={2}>です。</Text>
            </Show>
          </Flex>
          <Flex>
            <Show breakpoint='(min-width: 768px)'>
              <Text color='gray.600' px={2}>お時間になりましたら</Text>
            </Show>
            <Show breakpoint='(max-width: 768px)'>
              <Text color='gray.600' px={2}>オンライン診療リンク：</Text>
            </Show>
            <NextLink href='https://www.google.com' target='_blank'><Text px={1} color='blue.300' fontWeight='bold'>こちら</Text></NextLink>
            <Show breakpoint='(min-width: 768px)'>
              <Text color='gray.600' px={2}>のリンクにアクセスしてください。</Text>
            </Show>
          </Flex>
        </Flex>
      </Box>
      <Center m={4}>
        <SimpleGrid spacing={4} columns={{ base: 1, md: 3 }} w={{ base: '90%', md: '60%' }} my={8}>
          <Card>
            <CardHeader>
              <Center><Heading size='md' color='gray.600'>再診予約</Heading></Center>
            </CardHeader>
            <Link as={NextLink} href='/registration'>
              <CardBody maxH='136px'>
                <Center>
                  <Icon as={MdOutlineAccessAlarm} boxSize={24} mr={2} color='blue.100' />
                </Center>
              </CardBody>
            </Link>
            <CardFooter>
              <Text fontSize='sm' color='gray.600'>再診の予約を行います。</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Center><Heading size='md' color='gray.600'>お薬処方</Heading></Center>
            </CardHeader>
            <Link as={NextLink} href='/registration'>
              <CardBody maxH='136px'>
                <Center><Icon as={MdMedication} boxSize={24} mr={2} color='blue.100' /></Center>
              </CardBody>
            </Link>
            <CardFooter>
              <Text fontSize='sm' color='gray.600'>オンラインでの診察結果を元に処方箋を発行、お薬の郵送も可能です。</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Center><Heading size='md' color='gray.600'>予防接種</Heading></Center>
            </CardHeader>
            <Link as={NextLink} href='/registration'>
              <CardBody maxH='136px'>
                <Center><Icon as={MdOutlineVaccines} boxSize={24} mr={2} color='blue.100' /></Center>
              </CardBody>
            </Link>
            <CardFooter>
              <Text fontSize='sm' color='gray.600'>各種予防接種の予約を行います。</Text>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Center>
      <Footer />
    </div>
  )
}