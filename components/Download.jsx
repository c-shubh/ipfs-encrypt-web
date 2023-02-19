import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Spinner,
  Stack
} from "@chakra-ui/react";
import { useState } from "react";
import { GoCloudDownload } from "react-icons/go";
import PasswordInput from "./PasswordInput";

export default function Download() {
  const [loading, setLoading] = useState(false);
  async function handleFormSubmit(e) {
    e.preventDefault();
    /* Get form values */
    const cid = e.target.cid.value;
    const password = e.target.password.value;
    const token = e.target.token.value;

    /* Send post request */
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/download`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cid,
          password,
          token,
        }),
      });
      const blob = await response.blob();
      const file = window.URL.createObjectURL(blob);
      setLoading(false);
      window.location.assign(file);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Flex direction={"column"} grow={"1"} justifyContent={"center"} alignItems={"center"}>
      <Card width={{ base: "85%", sm: "96", md: "md", lg: "lg" }}>
        <CardHeader>
          <Heading as={"h2"} textAlign={"center"}>
            Download files
          </Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftAddon width="24" textAlign={"center"} justifyContent={"center"}>
                  CID
                </InputLeftAddon>
                <Input name="cid" type="text" placeholder="IPFS Content Identfier" required />
              </InputGroup>
              <PasswordInput />
              <InputGroup>
                <InputLeftAddon width="24" textAlign={"center"} justifyContent={"center"}>
                  Token
                </InputLeftAddon>
                <Input name="token" type="text" placeholder="Your Web3 Storage token" required />
              </InputGroup>
              <Button type="submit" leftIcon={<Icon as={GoCloudDownload} />}>
                Download{loading && <>ing </>} from
                <Image src="ipfs.svg" alt="" width={"6"} ms={"2"} me={"1"} />
                IPFS
                {loading && <Spinner size="md" width={"6"} ms={"2"} me={"1"} />}
              </Button>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </Flex>
  );
}
