import { Box, Flex, Link, Text, VStack, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4} py={2} color="white" width="100%">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontSize="xl" fontWeight="bold">MyWebsite</Text>
        </Box>
        <Flex alignItems="center">
          <RouterLink to="/">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "brand.800" }}>Home</Link>
          </RouterLink>
          <RouterLink to="/about">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "brand.800" }}>About</Link>
          </RouterLink>
          <RouterLink to="/contact">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "brand.800" }}>Contact</Link>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;