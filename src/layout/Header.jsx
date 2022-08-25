import { Box, IconButton, Icon, Flex, Text } from "@chakra-ui/react"
import { IoMdMenu } from "react-icons/io"

const Header = () => {
  return (
    <Flex
      padding={{
        base: "24px 16px",
        lg: "24px 48px",
      }}
      backgroundColor="blackAlpha.900"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        color="white"
        textTransform="uppercase"
        fontFamily="Inter"
        fontWeight="bold"
      >
        Sesuatu Di Kopi
      </Text>
      <Icon
        _hover={{
          cursor: "pointer",
        }}
        color="white"
        focusable
        boxSize="8"
        as={IoMdMenu}
      />
    </Flex>
  )
}

export default Header

