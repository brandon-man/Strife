import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";

const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.400", dark: "gray.800" };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width="100vw"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};

export default Container;
