import { Flex, Stack, Text } from "@chakra-ui/react"

const MenuItem = ({ productName, price, description }) => {
  return (
    <Stack fontFamily="Inter" spacing="1">
      <Flex
        direction={{ lg: "row", base: "column" }}
        justifyContent={{ lg: "space-between", base: "initial" }}
        mb={{ lg: "1", base: "0" }}
      >
        <Text textTransform="uppercase" fontSize="xl">
          {productName || "Kopi Hitam"}
        </Text>
        <Text fontSize="lg" fontWeight="semibold">
          Rp. {(price || 15000).toLocaleString()}
        </Text>
      </Flex>
      <Text fontSize="md">
        {description ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, consequuntur!"}
      </Text>
    </Stack>
  )
}

export default MenuItem

