import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { CloseButton } from "@chakra-ui/react";

import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 */
function humanFileSize(bytes, si = false, dp = 1) {
  /* https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string/14919494#14919494 */
  const thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }
  const units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
  return bytes.toFixed(dp) + " " + units[u];
}

export default function FileViewDrawer({ files }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justifyContent={"end"}>
      <Button
        hidden={files.length <= 0}
        colorScheme="blue"
        onClick={onOpen}
        variant={"ghost"}
        size={"sm"}
        width={"min-content"}
        alignContent={"end"}
      >
        View {files.length} selected files
      </Button>
      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" display={"flex"} justifyContent={"space-between"}>
            <Text>Selected Files ({files.length})</Text>
            <CloseButton onClick={onClose} />
          </DrawerHeader>
          <DrawerBody>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th isNumeric>Size</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {files.map((file) => (
                    <Tr key={file.path}>
                      <Td>{file.path}</Td>
                      <Td isNumeric>{humanFileSize(file.size)}</Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Name</Th>
                    <Th isNumeric>Size</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
