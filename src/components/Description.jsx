const { Box, Text, Flex, Container } = require("@chakra-ui/react")

const Description = () => {
  return (
    <Box backgroundColor="blackAlpha.900">
      <Container maxW="container.lg" py={{ lg: "32", base: "14" }}>
        <Flex
          color="white"
          direction="row"
          justifyContent={{ base: "center", lg: "start" }}
        >
          <Text
            maxWidth={{ base: "410px", lg: "756px" }}
            textTransform="uppercase"
            fontSize="3xl"
            fontWeight="bold"
            lineHeight="1.25"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Description

