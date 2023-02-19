import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useClipboard,
} from "@chakra-ui/react";

export default function ManualClose({ isOpen, onOpen, onClose, cid }) {
  /* https://chakra-ui.com/docs/components/modal/usage#close-modal-on-overlay-click */

  const { onCopy, value, setValue, hasCopied } = useClipboard(cid);

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Content ID</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <code>{cid}</code>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCopy}>
              {hasCopied ? "Copied!" : "Copy to clipboard"}
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
