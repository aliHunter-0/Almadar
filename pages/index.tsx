import { NextPage } from "next";
import { Text, Box } from "@chakra-ui/react";

import { AboutUs, ContactUs, Navbar, OurServices } from "../Components";
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Box minH="80vh" textAlign="center">
        <Box
          height={283}
          width={400}
          position="relative"
          background="url(/logo.png) center"
          backgroundSize="cover"
          margin="40px auto"
        >
          <Text
            position="absolute"
            marginLeft="auto"
            marginRight="auto"
            left={0}
            right={0}
            top="50%"
            fontSize="5xl"
            color="gray.700"
            fontWeight="bold"
          >
            Almadar
          </Text>
        </Box>
      </Box>

      <Box>
        <AboutUs />
      </Box>
      <Box>
        <OurServices />
      </Box>
      <Box>
        <ContactUs />
      </Box>
    </>
  );
};

export default Home;
