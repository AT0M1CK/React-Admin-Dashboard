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
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={props.navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={props.active && "#AEC8CA"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
          w={props.navSize === "large" && "100%"}
        >
          <MenuButton>
            <Flex>
              <Icon as={props.icon} />
              <Text>{props.title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default NavItem;
