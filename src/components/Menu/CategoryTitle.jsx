import { Text } from "@chakra-ui/react"

const CategoryTitle = ({ children, ...props }) => {
  return (
    <Text
      {...props}
      fontSize="3xl"
      fontWeight="extrabold"
      textTransform="uppercase"
    >
      {children}
    </Text>
  )
}

export default CategoryTitle

