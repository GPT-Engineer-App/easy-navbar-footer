import { Box, Text, Link, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="100%" py={4} bg="gray.800" color="white" mt="auto">
      <VStack spacing={2}>
        <Text>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Text>
        <Link href="#" color="teal.200">Privacy Policy</Link>
        <Link href="#" color="teal.200">Terms of Service</Link>
      </VStack>
    </Box>
  );
};

export default Footer;