import { Box, Container, Grid, GridItem, Stack, Text } from "@chakra-ui/react"
import AboutContent from "./AboutContent"
import AboutItem from "./AboutItem"
import AboutTitle from "./AboutTitle"

const About = () => {
  return (
    <Box backgroundColor="gray.100">
      <Container
        maxW={{ lg: "container.lg", base: "container.sm" }}
        py={{ lg: "32", base: "14" }}
      >
        <Grid
          gridTemplateColumns={{ lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
        >
          <GridItem>
            <Stack spacing="12">
              <AboutItem
                title="Recipes"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus necessitatibus inventore quibusdam nostrum eum quidem. Dignissimos nesciunt hic architecto."
              />
              <AboutItem
                title="Recipes"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus necessitatibus inventore quibusdam nostrum eum quidem. Dignissimos nesciunt hic architecto."
              />
              <AboutItem
                title="Recipes"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus necessitatibus inventore quibusdam nostrum eum quidem. Dignissimos nesciunt hic architecto."
              />
            </Stack>
          </GridItem>
          <GridItem></GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default About

