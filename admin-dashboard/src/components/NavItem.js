import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";

const NavItem = (props) => {
  return (
    <Flex
      mt={2}
      flexDir="column"
      w="100%"
      alignItems={props.navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={props.active && "#afb6cc"}
          p={2}
          borderRadius={7}
          _hover={{ textDecor: "none", backgroundColor: "#afb6cc" }}
          w={props.navSize === "large" && "100%"}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                as={props.icon}
                fontSize="xl"
                color={props.active ? "#1345eb" : "gray.500"}
              />
              <Text
                ml={5}
                display={props.navSize === "small" ? "none" : "flex"}
              >
                {props.title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default NavItem;
