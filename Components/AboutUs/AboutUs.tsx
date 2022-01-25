import {
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  Container,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { SectionHeader } from "..";
const AboutUs = () => {
  return (
    <Box>
      <SectionHeader title="About Us" />
      <Box bg="gray.50">
        <Container maxWidth="container.xl">
          <Grid gridTemplateColumns="repeat(2,1fr)">
            <GridItem alignSelf="center">
              <Box p={20}>
                <Text fontSize="4xl">Header here for about section</Text>
                <Text>The mini header of the above</Text>
                <Grid
                  gridTemplateColumns="repeat(2,1fr)"
                  gap={15}
                  paddingY={10}
                >
                  <GridItem>
                    <Text fontSize="2xl">Featuer header</Text>
                    <Text color="gray.600">
                      Featuer text Featuer text Featuer text Featuer text
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="2xl">Featuer header</Text>
                    <Text>
                      Featuer text Featuer text Featuer text Featuer text
                    </Text>
                  </GridItem>

                  <GridItem>
                    <Text fontSize="2xl">Featuer header</Text>
                    <Text>
                      Featuer text Featuer text Featuer text Featuer text
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="2xl">Featuer header</Text>
                    <Text>
                      Featuer text Featuer text Featuer text Featuer text
                    </Text>
                  </GridItem>
                </Grid>
              </Box>
            </GridItem>
            <GridItem>
              <Image src="/about-us.png" height="80vh" />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
