import { Button, Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function SignIn(props) {
  return (
    <Card width={"96"}>
      <CardBody>
        <Stack gap={"16"}>
          <Stack>
            <Heading as={"h2"} textAlign={"center"}>
              Welcome
            </Heading>
            <Text textAlign={"center"} fontSize={"md"}>
              Sign in with <Text as={"b"}>Arcana</Text>
            </Text>
          </Stack>

          <Button onClick={props.actionF}>Sign in</Button>
        </Stack>
      </CardBody>
    </Card>
  );
}
