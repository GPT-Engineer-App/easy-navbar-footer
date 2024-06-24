import { Container, Text, VStack, Box, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
      <VStack spacing={4} flex="1" justifyContent="center">
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
      </VStack>
      <Box as="footer" width="100%" py={4} textAlign="center" borderTop="1px" borderColor="gray.200">
        <Text fontSize="sm">© 2023 Your Company. All rights reserved.</Text>
        <Link href="#" color="teal.500" fontSize="sm" ml={2}>Privacy Policy</Link>
        <Link href="#" color="teal.500" fontSize="sm" ml={2}>Terms of Service</Link>
      </Box>
    </Container>
  );
};

export default Index;