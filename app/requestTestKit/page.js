'use client'

import {
  Button,
  Box,
  Flex,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  RadioGroup,
  Stack,
  StackDivider,
  Radio,
  Spacer,
  Checkbox,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RequestTestKit() {
  return (
    <div>
      <Header />
      <Box height={40} display='flex' justifyContent='center' alignItems='center' bgColor='blue.100'>
        <Heading color='gray.600'>検査キット郵送請求</Heading>
      </Box>
      <Flex w='100%' alignItems='center' justifyContent='center' m={4}>
        <Stack divider={<StackDivider borderColor='blue.300' />} spacing={4} align='stretch'>

          {/* 検査対象 */}
          <FormControl mb={6} w={{ base: '90%', md: '100%' }} isRequired>
            <FormLabel fontWeight='bold' color='gray.600'>検査対象</FormLabel>
            <Select placeholder='検査したい感染症を選択してください。' w='50%'>
              <option>新型コロナウイルス感染症</option>
              <option>インフルエンザ</option>
              <option>上記すべて</option>
            </Select>
            <FormHelperText >検査したい感染症を選択してください。※. 1キットごとに3,000円の検査費用が必要です。</FormHelperText>
          </FormControl>

          {/* 氏名漢字 */}
          <FormControl mb={6} w={{ base: '90%', md: '100%' }} isRequired>
            <FormLabel fontWeight='bold' color='gray.600'>氏名漢字</FormLabel>
            <Flex>
              <Input type='text' m={1} placeholder='例：田中' />
              <Input type='text' m={1} placeholder='例：一郎' />
            </Flex>
            <FormHelperText>お名前を漢字で入力してください。</FormHelperText>
          </FormControl>

          {/* 氏名かな */}
          <FormControl mb={6} w={{ base: '90%', md: '100%' }} isRequired>
            <FormLabel fontWeight='bold' color='gray.600'>氏名かな</FormLabel>
            <Flex>
              <Input type='text' m={1} placeholder='例：たなか' />
              <Input type='text' m={1} placeholder='例：いちろう' />
            </Flex>
            <FormHelperText>お名前をひらがなで入力してください。</FormHelperText>
          </FormControl>

          {/* 性別 */}
          <FormControl mb={6} w={{ base: '90%', md: '100%' }} isRequired>
            <FormLabel fontWeight='bold' color='gray.600'>性別</FormLabel>
            <RadioGroup alignItems='center' justifyContent='center' w='25%'>
              <Stack spacing={4} direction='row'>
                <Radio value='1'>男</Radio>
                <Spacer />
                <Radio value='2'>女</Radio>
              </Stack>
            </RadioGroup>
            <FormHelperText>性別を選択してください。</FormHelperText>
          </FormControl>

          {/* 電話番号 */}
          <FormControl w={{ base: '90%', md: '100%' }} mb={6} isRequired>
            <FormLabel fontWeight='bold' color='gray.600'>電話番号</FormLabel>
            <Input type='number' w='50%' placeholder='例：09012345678' />
            <FormHelperText>日中に連絡がつく電話番号をハイフンなしで入力してください。</FormHelperText>
          </FormControl>

          {/* メールアドレス */}
          <FormControl mb={6} w={{ base: '90%', md: '100%' }} isRequired>
            <FormLabel fontWeight='bold' color='gray.600'>メールアドレス</FormLabel>
            <Input type='email' m={1} placeholder='例：address@example.com' />
            <FormHelperText>メールアドレスを入力してください。検査で陽性の場合、このメールアドレスにオンライン診療案内が送付されます。</FormHelperText>
          </FormControl>

          {/* 郵便番号 */}
          <FormControl mb={6} w={{ base: '90%', md: '100%' }} isRequired>
            <FormLabel fontWeight='bold' color='gray.600'>郵便番号</FormLabel>
            <Input type='number' mr={2} placeholder='例：1110031' w='50%' />
            <FormHelperText>郵便番号をハイフンなしの半角数字で入力してください。</FormHelperText>
          </FormControl>

          {/* 住所 */}
          <FormControl mb={6} w={{ base: '90%', md: '100%' }} isRequired>
            <FormLabel fontWeight='bold' color='gray.600'>住所</FormLabel>
            <Input type='text' m={1} placeholder='例：東京都台東区千束４丁目４０−６' />
            <FormHelperText>住所を都道府県から入力してください。</FormHelperText>
          </FormControl>

          <Flex alignItems='center' justifyContent='center' m={4}>
            <Button
              w='40%' mb={6} m={2} colorScheme='blue' as={NextLink} textAlign='center'
              href='https://stripe.com'>
              請求する
            </Button>
            <Button w='40%' mb={6} m={2} colorScheme='blue' as={NextLink} textAlign='center' href='/login'>キャンセル</Button>
          </Flex>
        </Stack>
      </Flex>
      <Footer />
    </div>
  )
}