import { ReactNode } from "react";
import { Flex, Text, Icon, Container, Box } from "@chakra-ui/react";
import {
  MdOutlineHomeRepairService,
  MdHelpOutline,
  MdMailOutline,
} from "react-icons/md";
import { IconType } from "react-icons";

type NavItemProps = {
  children: ReactNode;
  icon: IconType;
};
const NavItem = ({ children, icon }: NavItemProps) => {
  return (
    <Flex align="center" gap="8px">
      <Icon as={icon} />
      <Text>{children}</Text>
    </Flex>
  );
};

const Navbar = () => {
  return (
    <Box bg="gray.50">
      <Container maxWidth="container.lg">
        <Flex justify="space-between" p="10px">
          <Text>Logo</Text>
          <Flex gap="30px" color="teal.300">
            <NavItem icon={MdOutlineHomeRepairService}>Our Service</NavItem>
            <NavItem icon={MdHelpOutline}>About Us</NavItem>
            <NavItem icon={MdMailOutline}>Contact Us</NavItem>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
