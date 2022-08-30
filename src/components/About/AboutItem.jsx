import { Stack, Text } from "@chakra-ui/react"
import AboutContent from "./AboutContent"
import AboutTitle from "./AboutTitle"

const AboutItem = ({ title, content }) => {
  return (
    <Stack spacing={3} fontFamily="Inter">
      <AboutTitle>{title || ""}</AboutTitle>
      <AboutContent>{content || ""}</AboutContent>
    </Stack>
  )
}

export default AboutItem

