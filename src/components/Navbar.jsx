import { Box, Flex, Link, Button, useColorModeValue, Stack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Logo</Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/about">About</Link>
            <Link as={RouterLink} to="/contact">Contact</Link>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;