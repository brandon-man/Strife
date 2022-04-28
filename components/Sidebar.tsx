import {
  Flex,
  Stack,
  Avatar,
  IconButton,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { IoLogOut, IoSunny, IoMoon } from "react-icons/io5";

const Sidebar = ({ fullWidth }: { fullWidth: boolean }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      height="100vh"
      maxWidth={fullWidth ? "100vw" : "30vw"}
      width={fullWidth ? "100vw" : ""}
      direction="column"
      borderRight="1px solid"
      borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
    >
      <Flex flexWrap="wrap" direction="column">
        <Flex justify="space-between" height="71px" align="center" p="10px">
          <Avatar />
          <Stack maxWidth="30vw" direction="row" align="center">
            <IconButton
              aria-label="Sign Out"
              icon={<Icon as={IoLogOut} />}
              // onClick={handleLogOut}
              isRound
            />
            <IconButton
              aria-label="Toggle Dark Mode"
              icon={
                colorMode === "light" ? (
                  <Icon as={IoMoon} />
                ) : (
                  <Icon as={IoSunny} />
                )
              }
              onClick={toggleColorMode}
              isRound
            />
          </Stack>
        </Flex>
      </Flex>
      <Stack direction="row" align="center" p="10px">
        {/* <ChatModal type="room" title="Create New Room" />
      <ChatModal type="chat" title="Add Chat" /> */}
      </Stack>
      <Stack direction="column">
        {/* {rooms}
      {chats} */}
      </Stack>
    </Flex>
  );
};

export default Sidebar;
