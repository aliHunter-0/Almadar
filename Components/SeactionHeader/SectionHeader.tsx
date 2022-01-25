import { Flex, Text, Icon } from "@chakra-ui/react";
import {
  MdOutlineHomeRepairService,
  MdHelpOutline,
  MdMailOutline,
} from "react-icons/md";

const SectionHeader = ({ title }: { title: string }) => {
  let icon = MdHelpOutline;

  switch (title) {
    case "Our Services":
      icon = MdOutlineHomeRepairService;
      break;
    case "Contact Us":
      icon = MdMailOutline;
      break;
  }
  return (
    <Flex
      color="teal.300"
      justifyContent="center"
      alignItems="center"
      gap={5}
      m={20}
    >
      <Text fontSize="5xl">{title}</Text>
      <Icon as={icon} width="60px" height="60px" />
    </Flex>
  );
};

export default SectionHeader;
