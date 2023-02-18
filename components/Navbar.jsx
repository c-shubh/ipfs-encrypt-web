import { Box, Button, Image, Link, Stack, StackDivider, Text } from "@chakra-ui/react";
export default function Navbar() {
  return (
    <Stack
      bg={"blackAlpha.500"}
      padding={"4"}
      paddingX={"8"}
      boxShadow={"outline"}
      direction={"row"}
      justifyContent={"space-between"}
    >
      <NavbarLogo />
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"4"}
        divider={<StackDivider height={"8"} sx={{ marginY: "auto !important" }} />}
      >
        <Link href="#">Home</Link>
        <Link href="#">Section 1</Link>
        <Link href="#">Section 2</Link>
        <Link href="#">Section 3</Link>
        <Button colorScheme="blue" size={"sm"}>
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
}

function NavbarLogo() {
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Box boxSize={"12"}>
        <Image src="cube.svg" alt="Logo" />
      </Box>
      <Text>IPFS Encrypt</Text>
    </Stack>
  );
}
