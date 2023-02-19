import Navbar from "@/components/Navbar";
import SignIn from "@/components/SignIn";
import Upload from "@/components/Upload";
import React from "react";
import Download from "@/components/Download";
import { Flex } from "@chakra-ui/react";
import { useArcanaAuth } from "./auth/useArcanaAuth";
import Loader from "../components/loader";

export default function Home() {
  const { user, connect, isLoggedIn, loading, loginWithSocial, provider } = useArcanaAuth();
  const onConnectClick = async () => {
    try {
      await connect();
    } catch (e) {
      console.log(e);
    }
  };
  const onConnect = () => {
    console.log("connected");
  };
  React.useEffect(() => {
    provider.on("connect", onConnect);
    return () => {
      provider.removeListener("connect", onConnect);
    };
  }, [provider]);

  return (
    <Flex height={"full"} direction={"column"}>
      <Navbar />
      <Flex direction={"column"} grow={"1"} justifyContent={"center"} alignItems={"center"}>
        {/* <SignIn /> */}
        {/* <Upload /> */}
        {loading && <Loader secondaryColor="#101010" strokeColor="#101010" />}
        {!loading && !isLoggedIn && <SignIn actionF={onConnectClick} />}
        {!loading && isLoggedIn && <Download />}
      </Flex>
    </Flex>
  );
}
