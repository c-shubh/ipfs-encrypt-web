import Navbar from "@/components/Navbar";
import SignIn from "@/components/SignIn";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex height={"full"} direction={"column"}>
      <Navbar />
      <Flex direction={"column"} grow={"1"} justifyContent={"center"} alignItems={"center"}>
        <SignIn />
      </Flex>
    </Flex>
  );
}
