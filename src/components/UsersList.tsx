import { Flex, useColorMode } from "@chakra-ui/react";

const UsersList = ({ fullWidth }: { fullWidth: boolean }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      height="100vh"
      maxWidth={fullWidth ? "100vw" : "30vw"}
      width={fullWidth ? "100vw" : ""}
      direction="column"
      borderLeft={fullWidth ? "0px solid" : "1px solid"}
      borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
    >
      <Flex justify="space-between" height="71px" align="center" p="10px">
        Users will be rendered here
      </Flex>
    </Flex>
  );
};

export default UsersList;
