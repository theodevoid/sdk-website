import { Text } from "@chakra-ui/react"

const AboutTitle = ({ children }) => {
  return (
    <Text fontSize="3xl" fontWeight="bold">
      {children || "About Title"}
    </Text>
  )
}

export default AboutTitle

