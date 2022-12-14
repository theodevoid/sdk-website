const { Box, Text, Flex, Container } = require("@chakra-ui/react")

const Description = () => {
  return (
    <Box backgroundColor="blackAlpha.900">
      <Container
        maxW={{ lg: "container.lg", base: "container.sm" }}
        py={{ lg: "32", base: "14" }}
      >
        <Flex color="white" direction="row" justifyContent="start">
          <Text
            maxWidth={{ base: "410px", md: "756px" }}
            textTransform="uppercase"
            fontSize={{ lg: "5xl", base: "4xl" }}
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

