import NextLink from "next/link";
import { Flex, Text } from "@chakra-ui/react";

function NavBar() {

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={1}
            bg="gray.800"
            color="orange.500"
            position="relative"
            border="1px"
            borderColor="black"
            top={0}
            zIndex={1}
        >
            <NextLink href="/">
                Home
            </NextLink>
            <NextLink href="/apply">
                Apply
            </NextLink>
        </Flex>
    )
}

export default NavBar;