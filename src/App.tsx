import React, { useState } from 'react';
import { ChakraProvider, Box, VStack, Heading, Button, Progress, Text } from '@chakra-ui/react';

function App() {
  const [totalDonation, setTotalDonation] = useState(0);
  const targetAmount = 1000000; // 1 milyon dolar

  const handleDonate = () => {
    window.open('https://donate.bynogame.com/ineed1milliondollars', '_blank');
  };

  const progress = (totalDonation / targetAmount) * 100;

  return (
    <ChakraProvider>
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.800">
        <VStack spacing={8} p={8} bg="gray.800" borderRadius="lg" boxShadow="xl" maxW="600px" w="90%">
          <Heading size="2xl" textAlign="center" color="white" whiteSpace="nowrap">
            I Need 1 Million Dollars to Live
          </Heading>
          
          <Progress
            value={progress}
            size="lg"
            width="100%"
            colorScheme="blue"
            borderRadius="full"
          />
          
          <Text fontSize="xl" fontWeight="bold" color="white">
            Collected: ${totalDonation.toLocaleString()} / ${targetAmount.toLocaleString()}
          </Text>
          
          <Button
            colorScheme="green"
            size="lg"
            onClick={handleDonate}
          >
            Donate Now
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App; 