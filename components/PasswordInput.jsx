import { Button, Input, InputGroup, InputLeftAddon, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

export default function PasswordInput() {
  /* https://chakra-ui.com/docs/components/input#password-input-example */
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup>
      <InputLeftAddon width="24" textAlign={"center"}>
        Password
      </InputLeftAddon>
      <Input name="password" pr="4.5rem" type={show ? "text" : "password"} placeholder="Decryption password" required />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
