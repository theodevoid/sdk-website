import { Box, Button, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import bg from "public/coffee-hero.jpeg"

const Hero = () => {
  return (
    <Box
      height={{ lg: "80vh", base: "55vh" }}
      position="relative"
      display="flex"
      paddingX={{ lg: "64px", base: "16px" }}
    >
      {/* <Box  /> */}
      <Image src={bg} layout="fill" alt="coffee" objectFit="cover" />
      <Box
        position="absolute"
        width="100%"
        height="100%"
        backgroundColor="black"
        opacity={0.3}
        top={0}
        right={0}
        bottom={0}
        left={0}
      />
      <Stack alignSelf="center" spacing={{ base: 3, lg: 4 }}>
        <Text
          position="relative"
          color="white"
          fontSize={{ lg: "8xl", base: "6xl" }}
          lineHeight={{ base: "1" }}
          fontFamily="Inter"
          fontWeight="bold"
        >
          SESUATU DI KOPI
        </Text>
        <Text
          position="relative"
          color="white"
          fontSize={{ lg: "lg", base: "sm" }}
          fontFamily="Inter"
          fontWeight="medium"
        >
          Jl. R.H. Aria Surya Kencana II, Serpong, Tangerang Selatan
        </Text>
        <Button
          onClick={() => window.open("https://goo.gl/maps/HLGJ3Djb5NTTAnWx5")}
          alignSelf="start"
          colorScheme="blackAlpha"
        >
          Visit Us
        </Button>
      </Stack>
    </Box>
  )
}

export default Hero

