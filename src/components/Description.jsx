const { Box, Text, Flex } = require("@chakra-ui/react")

const Description = () => {
  return (
    <Flex
      backgroundColor="blackAlpha.900"
      color="white"
      py={{ lg: "14", base: "0" }}
      pb={{ base: "6" }}
      pt={{ base: "12" }}
      direction="row"
      justifyContent="center"
      px="4"
    >
      <Text
        maxWidth="410px"
        textTransform="uppercase"
        fontSize="3xl"
        fontWeight="bold"
        lineHeight="1.25"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </Flex>
  )
}

export default Description

