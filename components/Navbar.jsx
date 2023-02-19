import { pages } from "@/pages";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Hide,
  Image,
  Link,
  Show,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
export default function Navbar({ setCurrentPage }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const links = [
    {
      title: "Home",
      href: "#",
      onClickHandler: () => {
        setCurrentPage(pages.home);
        onClose();
      },
    },
    { title: "Docs", href: "https://github.com/0xVikasRushi/ipfs-encrypt#readme" },
    {
      title: "Upload",
      href: "#",
      onClickHandler: () => {
        setCurrentPage(pages.upload);
        onClose();
      },
    },
    {
      title: "Download",
      href: "#",
      onClickHandler: () => {
        setCurrentPage(pages.download);
        onClose();
      },
    },
    {
      title: "Blog post",
      href: "https://medium.com/@vikas_rushi/securely-store-files-in-ipfs-with-ipfs-encrypted-8bc6d43b85e0",
    },
    {
      title: <AiFillGithub style={{ width: "32", height: "32" }} />,
      href: "https://github.com/0xVikasRushi/ipfs-encrypt",
    },
  ];
  return (
    <Stack
      bg={"blackAlpha.500"}
      padding={{ base: "4" }}
      paddingX={{ base: "4", md: "8" }}
      boxShadow={"outline"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <NavbarLogo />
      <Hide above="md">
        <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
          <HamburgerIcon />
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>IPFS Encrypted</DrawerHeader>
            <DrawerBody>
              <Stack gap={"4"}>
                {links.map((link) => (
                  <Link key={link.title} href={link.href} onClick={link.onClickHandler}>
                    {link.title}
                  </Link>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Hide>
      <Show above="md">
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"4"}
          divider={<StackDivider height={"8"} sx={{ marginY: "auto !important" }} />}
        >
          {links.map((link) => (
            <Link key={link.title} href={link.href} onClick={link.onClickHandler}>
              {link.title}
            </Link>
          ))}
        </Stack>
      </Show>
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
