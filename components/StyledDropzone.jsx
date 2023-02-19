import { useMemo } from "react";
import { useDropzone } from "react-dropzone";

import { Flex, Input, Stack, Text } from "@chakra-ui/react";

import FileViewDrawer from "@/components/FileViewDrawer";

const baseStyle = {
  flexDir: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "whitealpha.900",
  borderStyle: "dashed",
  bgColor: "gray.700",
  color: "gray.300",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const acceptStyle = {
  borderColor: "green.300",
};

const rejectStyle = {
  borderColor: "red.300",
};

export default function StyledDropzone() {
  /* https://react-dropzone.js.org/#section-styling-dropzone */
  const { getRootProps, getInputProps, acceptedFiles, isDragAccept, isDragReject } = useDropzone();

  const files = acceptedFiles.map((file) => file);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragAccept, isDragReject]
  );

  return (
    <Stack>
      <Flex {...getRootProps()} {...style} _focus={{ borderColor: "blue.300" }}>
        <Input {...getInputProps()} />
        <Text>Drag &lsquo;n&rsquo; drop some files here, or click to select files</Text>
      </Flex>
      <FileViewDrawer files={files} />
    </Stack>
  );
}
