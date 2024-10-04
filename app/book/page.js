'use client'

import {
  Box,
  Button,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Spacer,
  Center,
  VStack,
  Icon,
  Popover,
  Heading,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  PopoverContent,
  PopoverTrigger,
  Portal
} from '@chakra-ui/react';
import { MdOutlineCircle, MdOutlineReportProblem, MdClose } from 'react-icons/md';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TIME_TABLE = [
  { id: 1, timeTable: '09:00' },
  { id: 2, timeTable: '09:15' },
  { id: 3, timeTable: '09:30' },
  { id: 4, timeTable: '09:45' },
  { id: 5, timeTable: '10:00' },
  { id: 6, timeTable: '10:15' },
  { id: 7, timeTable: '10:30' },
  { id: 8, timeTable: '10:45' },
  { id: 9, timeTable: '11:00' },
  { id: 10, timeTable: '11:15' },
  { id: 11, timeTable: '11:30' },
  { id: 12, timeTable: '11:45' },
  { id: 13, timeTable: '13:00' },
  { id: 14, timeTable: '13:15' },
  { id: 15, timeTable: '13:30' },
  { id: 16, timeTable: '13:45' },
  { id: 17, timeTable: '14:00' },
  { id: 18, timeTable: '14:15' },
  { id: 19, timeTable: '14:30' },
  { id: 20, timeTable: '14:45' },
  { id: 21, timeTable: '15:00' },
  { id: 22, timeTable: '15:15' },
  { id: 23, timeTable: '15:30' },
  { id: 24, timeTable: '15:45' },
  { id: 25, timeTable: '16:00' },
  { id: 26, timeTable: '16:15' },
  { id: 27, timeTable: '16:30' },
  { id: 28, timeTable: '16:45' },
  { id: 29, timeTable: '17:00' },
  { id: 30, timeTable: '17:15' },
  { id: 31, timeTable: '17:30' },
  { id: 32, timeTable: '17:45' },
];

const uniqueDates = getWeekdaysAfterNWeeks(1);

export default function Book() {
  return (
    <div>
      <Header />
      <Box height={40} display='flex' justifyContent='center' alignItems='center' bgColor='blue.100'>
        <Heading color='gray.600'>診察予約</Heading>
      </Box>
      <Flex alignItems='center' justifyContent='center' m={4}>
        <Button w={160} mb={6} m={2} colorScheme='blue' textAlign='center'>前週</Button>
        <Spacer />
        <Button w={160} mb={6} m={2} colorScheme='blue' textAlign='center'>翌週</Button>
      </Flex>
      <Box display='block' overflowX='scroll'>
        <Flex alignItems='center' justifyContent='center' m={4}>
          <Table w='75%'>
            <Thead bgColor='blue.100'>
              <Tr>
                <Th></Th>
                {uniqueDates.map(({ date, dayOfWeek }) => (
                  <Th color='white' key={date}>
                    <VStack>
                      <Center><Text fontWeight='bold'>{date}</Text></Center>
                      <Center><Text fontWeight='bold'>({dayOfWeek})</Text></Center>
                    </VStack>
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {TIME_TABLE.map(tt => (
                <Tr key={tt.id}>
                  <Td color='white' bgColor='blue.100'>
                    <Center><Text fontWeight='bold'>{tt.timeTable}</Text></Center>
                  </Td>

                  <Td _hover={{ cursor: 'pointer' }}>
                  <Popover>
                    <PopoverTrigger>
                        <Center>
                          <Icon as={MdOutlineCircle} boxSize={6} mr={2} color='blue.300'></Icon>
                        </Center>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverHeader fontWeight='bold'>予約確認</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                          <Text>2024-04-07 16:00 で予約してよろしいですか？</Text>
                        </PopoverBody>
                        <PopoverFooter>
                          <Flex alignItems='center' justifyContent='center'>
                            <Button colorScheme='blue' m={2} w='45%'>予約</Button>
                            <Button colorScheme='blue' m={2} w='45%'>キャンセル</Button>
                          </Flex>
                        </PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                  </Td>

                  <Td _hover={{ cursor: 'pointer' }}>
                  <Popover>
                    <PopoverTrigger>
                      <Center>
                          <Icon as={MdOutlineReportProblem} boxSize={6} mr={2} color='blue.300'></Icon>
                        </Center>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverHeader fontWeight='bold'>予約確認</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                          <Text>2024-04-07 16:00 で予約してよろしいですか？</Text>
                        </PopoverBody>
                        <PopoverFooter>
                          <Flex alignItems='center' justifyContent='center'>
                            <Button colorScheme='blue' m={2} w='45%'>予約</Button>
                            <Button colorScheme='blue' m={2} w='45%'>キャンセル</Button>
                          </Flex>
                        </PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                  </Td>

                  <Td>
                    <Center>
                      <Icon as={MdClose} boxSize={6} mr={2} color='blue.300'></Icon>
                    </Center>
                  </Td>
                  <Td>
                    <Center>
                      <Icon as={MdClose} boxSize={6} mr={2} color='blue.300'></Icon>
                    </Center>
                  </Td>
                  <Td>
                    <Center>
                      <Icon as={MdClose} boxSize={6} mr={2} color='blue.300'></Icon>
                    </Center>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Flex>
      </Box>
      <Footer />
    </div>
  )
}

function getWeekdaysAfterNWeeks(n) {
  const weekdays = ['月', '火', '水', '木', '金'];
  const dates = [];
  const currentDate = new Date();
  const oneDay = 24 * 60 * 60 * 1000; // 1日のミリ秒数

  // 現在日付からn週間後の日付を計算
  const targetDate = new Date(currentDate.getTime() + (n * 7 * oneDay));

  // n週間後の月曜日を計算
  targetDate.setDate(targetDate.getDate() - targetDate.getDay() + 1);

  // n週間後の月曜から金曜までの日付と曜日を配列に追加
  for (let i = 0; i < 5; i++) {
    const date = new Date(targetDate.getTime() + (i * oneDay));
    const dayOfWeek = weekdays[i];
    dates.push({ date: date.toLocaleDateString(), dayOfWeek });
  }

  return dates;
}