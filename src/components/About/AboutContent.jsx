import { Text } from "@chakra-ui/react"

const AboutContent = ({ children }) => {
  return <Text fontSize="md">{children || "About Content"}</Text>
}

export default AboutContent

