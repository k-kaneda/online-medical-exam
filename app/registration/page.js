'use client'

import {
  Button,
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Stack,
  StackDivider,
  Textarea,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Registration() {
  return (
    <div>
      <Header />
      <Box w='100%' height={40} display='flex' justifyContent='center' alignItems='center' bgColor='blue.100'>
        <Heading color='gray.600'>再診予約</Heading>
      </Box>
      <Flex w='100%' alignItems='center' justifyContent='center' m={4}>
        <Stack divider={<StackDivider borderColor='blue.300' />} spacing={4} align='stretch'>

          {/* 診療科目 */}
          <FormControl mb={6} isRequired>
            <FormLabel fontWeight='bold' color='gray.600'>診療科目選択</FormLabel>
            <Select placeholder='診療科目を選択してください。'>
              <option>内科</option>
              <option>耳鼻咽喉科</option>
              <option>皮膚科</option>
            </Select>
            <FormHelperText>診療科目を選択してください。</FormHelperText>
          </FormControl>

          {/* 自覚症状 */}
          <FormControl mb={6} isRequired>
            <FormLabel fontWeight='bold' color='gray.600'>具体的な症状など</FormLabel>
              <Textarea />
            <FormHelperText>具体的な症状をできるだけ詳しくお聞かせください。</FormHelperText>
          </FormControl>

          <Flex alignItems='center' justifyContent='center' m={4}>
            <Button w='40%' mb={6} m={2} colorScheme='blue' as={NextLink} textAlign='center' href='/book'>予約する</Button>
            <Button w='40%' mb={6} m={2} colorScheme='blue' as={NextLink} textAlign='center' href='/portal'>キャンセル</Button>
          </Flex>
        </Stack>
      </Flex>
      <Footer />
    </div>
  )
}