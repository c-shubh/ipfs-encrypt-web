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
import { GoCloudDownload } from "react-icons/go";
import PasswordInput from "./PasswordInput";

export default function Download() {
  return (
    <Card width={"lg"}>
      <CardHeader>
        <Heading as={"h2"} textAlign={"center"}>
          Download files
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon width="24" textAlign={"center"} justifyContent={"center"}>
              CID
            </InputLeftAddon>
            <Input type="text" placeholder="IPFS Content Identfier" />
          </InputGroup>
          <PasswordInput />
          <InputGroup>
            <InputLeftAddon width="24" textAlign={"center"} justifyContent={"center"}>
              Token
            </InputLeftAddon>
            <Input type="text" placeholder="Your IPFS token" />
          </InputGroup>
          <Button leftIcon={<Icon as={GoCloudDownload} />}>
            Download from
            <Image src="ipfs.svg" alt="" width={"6"} ms={"2"} me={"1"} />
            IPFS
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}
