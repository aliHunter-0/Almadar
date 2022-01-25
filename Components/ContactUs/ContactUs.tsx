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
import { MdFacebook } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { SectionHeader } from "..";

type ContactLinkProps = {
  appName: string;
  appLink: string; //The link of the page in the social app
  appId: string;
};
const ContactLink = ({ appName, appLink, appId }: ContactLinkProps) => {
  let curIcon = MdFacebook;
  let boxColor = "blue.400";

  switch (appName) {
    case "Linkedin":
      curIcon = BsLinkedin;
      boxColor = "blue.600";
      break;
    case "Gmail":
      curIcon = SiGmail;
      boxColor = "red.500";
      break;
    case "Telegram":
      curIcon = FaTelegram;
      boxColor = "blue.300";
      break;
  }
  return (
    <Box>
      <Text fontSize="3xl">{appName}</Text>
      <Text color="gray.600">{appId}</Text>
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
        <Flex
          p={2}
          width="80px"
          height="80px"
          alignItems="center"
          justifyContent="center"
          bg={boxColor}
          borderRadius="lg"
        >
          <Icon as={curIcon} height="100%" width="100%" color="white" />
        </Flex>
      </motion.div>
    </Box>
  );
};

const ContactUs = () => {
  return (
    <Box>
      <SectionHeader title="Contact Us" />
      <Box bg="gray.50">
        <Container maxWidth="container.xl">
          <Grid gridTemplateColumns="repeat(2,1fr)">
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
                    <ContactLink
                      appName="Facebook"
                      appLink="test"
                      appId="test"
                    />
                  </GridItem>
                  <GridItem>
                    <ContactLink
                      appName="Linkedin"
                      appLink="test"
                      appId="test"
                    />
                  </GridItem>

                  <GridItem>
                    <ContactLink appName="Gmail" appLink="test" appId="test" />
                  </GridItem>
                  <GridItem>
                    <ContactLink
                      appName="Telegram"
                      appLink="test"
                      appId="test"
                    />
                  </GridItem>
                </Grid>
              </Box>
            </GridItem>
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
                <Image src="/contact-us.png" height="80vh" />
              </GridItem>
            </motion.div>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUs;
