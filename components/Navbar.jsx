import { pages } from "@/pages";
import { Box, Image, Link, Stack, StackDivider, Text } from "@chakra-ui/react";
export default function Navbar({ setCurrentPage }) {
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
        <Link href="https://github.com/0xVikasRushi/ipfs-encrypt#readme">Docs</Link>
        <Link href="#" onClick={() => setCurrentPage(pages.upload)}>
          Upload
        </Link>
        <Link href="#" onClick={() => setCurrentPage(pages.download)}>
          Download
        </Link>
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
