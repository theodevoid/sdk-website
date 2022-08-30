import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react"
import CategoryTitle from "./CategoryTitle"
import MenuItem from "./MenuItem"

{
  /* <MenuItem productName="Kopi Hitam" price={15000} />
<MenuItem productName="Kopi Aren" price={20000} />
<MenuItem productName="Kopi Butterscotch" price={25000} />
<MenuItem productName="Kopi Rum" price={25000} /> */
}

const Menu = () => {
  return (
    <Container maxW="container.lg" py={{ lg: "32", base: "14" }}>
      <CategoryTitle mb={{ lg: "10", base: "4" }}>Kopi Pasir</CategoryTitle>
      <Grid
        gridTemplateColumns={{ lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
        rowGap="8"
        columnGap="12"
      >
        <GridItem>
          <MenuItem productName="Kopi Hitam" price={15000} />
        </GridItem>
        <GridItem>
          <MenuItem productName="Kopi Aren" price={20000} />
        </GridItem>
        <GridItem>
          <MenuItem productName="Kopi Butterscotch" price={25000} />
        </GridItem>
        <GridItem>
          <MenuItem productName="Kopi Rum" price={25000} />
        </GridItem>
      </Grid>

      <Button
        backgroundColor="blackAlpha.900"
        color="white"
        _hover={{ backgroundColor: "blackAlpha.700" }}
        _active={{ backgroundColor: "blackAlpha.500" }}
        mt={{ lg: "16", base: "8" }}
        size={{ lg: "lg", base: "md" }}
        // variant="link"
      >
        Lihat menu lengkap
      </Button>
    </Container>
  )
}

export default Menu

