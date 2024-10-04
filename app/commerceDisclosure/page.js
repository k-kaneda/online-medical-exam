'use client'

import {
  Flex,
  Heading,
  Box,
  TableContainer,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Complete() {
  return (
    <div>
      <Header />
      <Box height={40} display='flex' justifyContent='center' alignItems='center' bgColor='blue.100'>
        <Heading color='gray.600'>特定商取引法に基づく表記</Heading>
      </Box>
      <Flex height='auto' alignItems='center' justifyContent='center' m={16}>
        <TableContainer>
          <Table variant='simple'>
            <Tbody>
              <Tr>
                <Th>法人名</Th>
                <Td><Text fontSize={14}>〇〇クリニック</Text></Td>
              </Tr>
              <Tr>
                <Th>代表者名</Th>
                <Td><Text fontSize={14}>〇〇　〇〇</Text></Td>
              </Tr>
              <Tr>
                <Th>所在地</Th>
                <Td><Text fontSize={14}>東京都台東区〇〇</Text></Td>
              </Tr>
              <Tr>
                <Th>電話番号</Th>
                <Td><Text fontSize={14}>03-xxxx-xxxx</Text></Td>
              </Tr>
              <Tr>
                <Th>メールアドレス</Th>
                <Td><Text fontSize={14}>info@example.com</Text></Td>
              </Tr>
              <Tr>
                <Th>運営統括責任者</Th>
                <Td><Text fontSize={14}>〇〇　〇〇</Text></Td>
              </Tr>
              <Tr>
                <Th>追加手数料等の追加料金</Th>
                <Td><Text fontSize={14}>当サイトのページの閲覧等に必要となるインターネット接続料金、通信料金は、お客様のご負担となります。</Text></Td>
              </Tr>
              <Tr>
                <Th>交換および返品（返金ポリシー）</Th>
                <Td><Text fontSize={14}>役務の性質上、返金・返品はいたしかねます。</Text></Td>
              </Tr>
              <Tr>
                <Th>引渡時期</Th>
                <Td>
                  <Text fontSize={14}>1. オンライン診療：予約した日時</Text>
                  <Text fontSize={14}>2. 処方薬：ご注文から1週間前後</Text>
                </Td>
              </Tr>
              <Tr>
                <Th>受け付け可能な決済手段</Th>
                <Td><Text fontSize={14}>クレジットカード、コンビニ決済、銀行振込、バーコード決済 (PayPay)</Text></Td>
              </Tr>
              <Tr>
                <Th>支払時期</Th>
                <Td>
                  <Text fontSize={14}>診療後当日中に請求</Text>
                  <Text fontSize={14}>クレジット決済：各カード会社が定める支払時期</Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Footer />
    </div>
  )
}