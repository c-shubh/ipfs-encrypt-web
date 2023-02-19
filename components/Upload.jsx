import StyledDropzone from "@/components/StyledDropzone";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";
import { GoCloudUpload } from "react-icons/go";
import PasswordInput from "./PasswordInput";

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
          <Button leftIcon={<Icon as={GoCloudUpload} />}>
            Upload to
            <Image src="ipfs.svg" alt="" width={"6"} ms={"2"} me={"1"} />
            IPFS
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}
