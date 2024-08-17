import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,

  } from "@chakra-ui/react";
  import { useEffect, useRef } from "react";
  import Lorem from "react-lorem-component"; // Make sure to have this installed or replace with your content
  
  const NotificationPop = ({ isOpen, onClose }) => {
    const finalRef = useRef(null);
  
    useEffect(() => {
      if (isOpen) {
        const timer = setTimeout(() => {
          onClose();
        }, 3000); // Close after 3 seconds
        return () => clearTimeout(timer);
      }
    }, [isOpen, onClose]);
  
    return (
      <>
        <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
          Some other content that'll receive focus on close.
        </Box>
  
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Event is created</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default NotificationPop;
  