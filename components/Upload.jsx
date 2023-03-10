import ManualCloseModal from "@/components/ManualCloseModal";
import StyledDropzone from "@/components/StyledDropzone";
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
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { GoCloudUpload } from "react-icons/go";
import PasswordInput from "./PasswordInput";

export default function Upload() {
  /* for CID display modal */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cid, setCid] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    /* Get form values */
    const token = e.target.token.value;
    const password = e.target.password.value;
    const files = e.target.files.files;

    /* Set up form data */
    const formData = new FormData();
    formData.append("token", token);
    formData.append("password", password);
    let i = 0;
    for (const file of files) {
      formData.append("files", file);
      i++;
    }
    setLoading(true);

    /* Send post request */
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/upload`, {
        method: "POST",
        body: formData,
      });
      const responseJson = await response.json();
      console.log(responseJson);
      if (responseJson.cid) {
        setCid(responseJson.cid);
        onOpen();
        setLoading(false);
        return;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Flex direction={"column"} grow={"1"} justifyContent={"center"} alignItems={"center"}>
      <Card width={{ base: "85%", sm: "96", md: "md", lg: "lg" }}>
        <CardHeader>
          <Heading as={"h2"} textAlign={"center"}>
            Upload files
          </Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={4}>
              {" "}
              <StyledDropzone />
              <PasswordInput />
              <InputGroup>
                <InputLeftAddon width="24" textAlign={"center"} justifyContent={"center"}>
                  Token
                </InputLeftAddon>
                <Input name="token" type="text" placeholder="Your Web3 Storage token" required />
              </InputGroup>
              <Button type="submit" leftIcon={<Icon as={GoCloudUpload} />}>
                Upload to
                <Image src="ipfs.svg" alt="" width={"6"} ms={"2"} me={"1"} />
                IPFS
                {loading && <Spinner size="md" width={"6"} ms={"2"} me={"1"} />}
              </Button>
              <ManualCloseModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} cid={cid} />
            </Stack>
          </form>
        </CardBody>
      </Card>
    </Flex>
  );
}
