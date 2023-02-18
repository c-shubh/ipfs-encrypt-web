import { Button, Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <Card width={"96"}>
      <CardBody>
        <Stack gap={"16"}>
          <Stack>
            <Heading as={"h2"} textAlign={"center"}>
              Welcome
            </Heading>
            <Text textAlign={"center"} fontSize={"md"}>
              One click sign in with <Text as={"b"}>MetaMask</Text>
            </Text>
          </Stack>
          <Button leftIcon={<Image src="metamask.svg" alt="MetaMask icon" width={"30px"} height={"30px"} />}>
            Sign in with Metamask
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}
