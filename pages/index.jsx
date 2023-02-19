import Download from "@/components/Download";
import Navbar from "@/components/Navbar";
import SignIn from "@/components/SignIn";
import Upload from "@/components/Upload";
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useArcanaAuth } from "../auth/useArcanaAuth";

export const pages = Object.freeze({
  home: "home",
  signIn: "sign-in",
  upload: "upload",
  download: "download",
});

function Home() {
  return <></>;
}

function pageToComponent(page) {
  switch (page) {
    case pages.home:
      return <Home />;
    case pages.signIn:
      return <SignIn />;
    case pages.upload:
      return <Upload />;
    case pages.download:
      return <Download />;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(pages.upload);

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
  // console.log("wo" + process.env.NEXT_PUBLIC_AUTHTOKEN);
  return (
    <Flex height={"full"} direction={"column"}>
      <Navbar setCurrentPage={setCurrentPage} />
      <Flex direction={"column"} grow={"1"} justifyContent={"center"} alignItems={"center"}>
        {pageToComponent(currentPage)}
        {/* <SignIn /> */}
        {/* <Upload /> */}
        {/* {loading && <Loader secondaryColor="#101010" strokeColor="#101010" />}
        {!loading && !isLoggedIn && <SignIn actionF={onConnectClick} />}
        {!loading && isLoggedIn && <Download />} */}
      </Flex>
    </Flex>
  );
}
