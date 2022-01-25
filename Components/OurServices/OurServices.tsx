import {
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  Container,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { MdBrush } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { IoIosSpeedometer } from "react-icons/io";
import { IoPhonePortrait } from "react-icons/io5";
import { SectionHeader } from "..";

type FeatuerBoxProps = {
  featuer: string;
  details: string;
  icon: IconType;
};
const FeatuerBox = ({ featuer, details, icon }: FeatuerBoxProps) => {
  return (
    <Box>
      <motion.div
        whileInView={{
          opacity: 1,
          x: "0",
        }}
        initial={{
          opacity: 0,
          x: "20px",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 5,
        }}
      >
        <Flex
          p={2}
          width="80px"
          height="80px"
          alignItems="center"
          justifyContent="center"
          bg="teal.300"
          borderRadius="lg"
        >
          <Icon as={icon} color="white" height="100%" width="100%" />
        </Flex>
      </motion.div>
      <Text fontSize="3xl">{featuer}</Text>
      <Text color="gray.600">{details}</Text>
    </Box>
  );
};

const OurServices = () => {
  return (
    <Box>
      <SectionHeader title="Our Services" />
      <Box>
        <Container maxWidth="container.xl">
          <Grid gridTemplateColumns="repeat(2,1fr)">
            <motion.div
              whileInView={{
                opacity: 1,
                x: "0",
              }}
              initial={{
                opacity: 0,
                x: "-20px",
              }}
            >
              <GridItem>
                <Image src="/web-section.png" height="80vh" />
              </GridItem>
            </motion.div>

            <GridItem alignSelf="center">
              <Box p={20}>
                <Text fontSize="4xl">Header here for about section</Text>
                <Text>The mini header of the above</Text>
                <Grid
                  gridTemplateColumns="repeat(2,1fr)"
                  gap={30}
                  paddingY={10}
                >
                  <GridItem>
                    <FeatuerBox
                      featuer="Modren Design"
                      icon={MdBrush}
                      details="We will make a modren designs"
                    />
                  </GridItem>
                  <GridItem>
                    <FeatuerBox
                      featuer="Responsive"
                      icon={BsFillPhoneFill}
                      details="We will make a modren designs"
                    />
                  </GridItem>

                  <GridItem>
                    <FeatuerBox
                      featuer="Speed"
                      icon={IoIosSpeedometer}
                      details="We will make a modren designs"
                    />
                  </GridItem>
                  <GridItem>
                    <FeatuerBox
                      featuer="Modren Design"
                      icon={MdBrush}
                      details="We will make a modren designs"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </GridItem>
          </Grid>
          <Grid gridTemplateColumns="repeat(2,1fr)" mt="100px">
            <GridItem alignSelf="center">
              <Box p={20}>
                <Text fontSize="4xl">Header here for about section</Text>
                <Text>The mini header of the above</Text>
                <Grid
                  gridTemplateColumns="repeat(2,1fr)"
                  gap={30}
                  paddingY={10}
                >
                  <GridItem>
                    <FeatuerBox
                      featuer="Modren Design"
                      icon={IoPhonePortrait}
                      details="We will make a modren designs"
                    />
                  </GridItem>
                  <GridItem>
                    <FeatuerBox
                      featuer="Modren Design"
                      icon={BsFillPhoneFill}
                      details="We will make a modren designs"
                    />
                  </GridItem>

                  <GridItem>
                    <FeatuerBox
                      featuer="Modren Design"
                      icon={MdBrush}
                      details="We will make a modren designs"
                    />
                  </GridItem>
                  <GridItem>
                    <FeatuerBox
                      featuer="Modren Design"
                      icon={MdBrush}
                      details="We will make a modren designs"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </GridItem>
            <GridItem>
              <motion.div
                whileInView={{
                  opacity: 1,
                  x: "0",
                }}
                initial={{
                  opacity: 0,
                  x: "20px",
                }}
              >
                <Image src="/mobile-section.png" height="80vh" />
              </motion.div>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default OurServices;
