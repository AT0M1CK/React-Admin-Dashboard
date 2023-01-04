import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import React from "react";

const SideBar = () => {
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w="200px"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {}}
        />
      </Flex>

      <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb={4}>
        <Divider />

        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.png" />
          <Flex flexDir="column" ml={4}>
            <Heading as="h3" size="sm">
              Test Admin
            </Heading>
            <Text color="grey">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
