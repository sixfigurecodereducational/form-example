import {
    Flex,
    ThemeProvider,
    CSSReset,
    Box,
    Heading,
    Text,
    Button,
    Stack,
    Image
} from "@chakra-ui/react";
import customTheme from "../theme/customTheme";
import NavBar from "../components/NavBar";

function Home() {
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            <NavBar />
            <Flex
                align="center"
                justify="center"
                direction="column"
                minH="100vh"
                bg="gray.800"
                color="gray.50"
            >
                <Box p={8}>
                    <Heading as="h1" font="3xl" fontWeight="bold" mb={2}>
                        Welcome to Job Application
                    </Heading>
                    <Text fontSize="lg" mb={4}>
                        Kickstart your career with us.
                    </Text>
                    <Stack spacing={4} direction={{base : "column", md: "row"}}>
                        <Button as="a" href="apply" size="lg" backgroundColor="orange.500">
                            Apply Now
                        </Button>
                        <Button as="a" href="about" size="lg" varaint="outline" color="gray.800">
                            Learn more
                        </Button>
                    </Stack>
                </Box>
                <Box>
                    <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="people working" w="100%" />
                </Box>
            </Flex>
        </ThemeProvider>
    )
}

export default Home;