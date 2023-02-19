import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";

import { useState } from "react";

import StyledDropzone from "@/components/StyledDropzone";

function PasswordInput() {
  /* https://chakra-ui.com/docs/components/input#password-input-example */
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup>
      <InputLeftAddon width="24" textAlign={"center"}>
        Password
      </InputLeftAddon>
      <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="A password to encrypt the files with" />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default function Upload() {
  return (
    <Card width={"lg"}>
      <CardHeader>
        <Heading as={"h2"} textAlign={"center"}>
          Upload files
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing={4}>
          <StyledDropzone />
          <PasswordInput />
          <InputGroup>
            <InputLeftAddon width="24" textAlign={"center"} justifyContent={"center"}>
              Token
            </InputLeftAddon>
            <Input type="text" placeholder="Your IPFS token" />
          </InputGroup>
          <Button>
            Upload to
            <Image src="ipfs.svg" alt="" width={"6"} ms={"2"} me={"1"} />
            IPFS
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}
