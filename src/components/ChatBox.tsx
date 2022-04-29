import { useState } from "react";
import {
  IconButton,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Input,
  FormControl,
  Flex,
} from "@chakra-ui/react";
import { BsPlusCircle } from "react-icons/bs";
import { MdSend } from "react-icons/md";

const ChatBox = () => {
  const [chat, setChatData] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setChatData(e.target.value);
  };

  return (
    <Flex align="center" direction="column">
      <Flex direction="row" position="absolute" bottom={0} width="80%">
        <FormControl
          alignContent="stretch"
          p={4}
          zIndex={3}
          as="form"
          display="flex"
          alignItems="center"
        >
          <InputGroup>
            <InputLeftElement>
              <IconButton
                variant="ghost"
                aria-label="Additional commands"
                type="submit"
                colorScheme="blue"
                icon={<BsPlusCircle />}
              />
            </InputLeftElement>
            <Input
              value={chat}
              pl={12}
              type="text"
              placeholder="Message"
              onChange={handleChange}
            />
            <InputRightElement>
              <IconButton
                aria-label="Send message"
                type="submit"
                colorScheme="blue"
                icon={<MdSend />}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default ChatBox;
