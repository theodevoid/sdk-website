import {
  Box,
  IconButton,
  Icon,
  Flex,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react"
import { IoMdMenu } from "react-icons/io"

// Links
// - Menu
// - About
// - Order

const Header = () => {
  return (
    <Flex
      padding={{
        base: "24px 16px",
        lg: "24px 64px",
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
        display={{
          lg: "none",
        }}
      />
      <HStack
        display={{ base: "none", lg: "initial" }}
        color="white"
        spacing={10}
      >
        <Link>Menu</Link>
        <Link>About</Link>
        <Link>Order</Link>
      </HStack>
    </Flex>
  )
}

export default Header

