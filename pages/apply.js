import {
    Stack,
    ThemeProvider,
    CSSReset,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Box,
    Button,
    Text,
    FormHelperText
} from "@chakra-ui/react";
import customTheme from "../theme/customTheme";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Apply() {
    const [localApplications, setLocalApplications] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.post('https://xhnwzq3h95.execute-api.us-east-1.amazonaws.com/prod/applications',
                {
                    name: name,
                    email: email,
                    age: age,
                    message: message,
                },
                {
                    headers: {
                        'x-api-key': `p53epkM6BX6XR8gSzrmZL3N6WAXYfKVWa0tOrYfM`
                    }
                });
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }

    }

    const globalData = useSelector(state => state.data);
    const globalLoading = useSelector(state => state.isLoading);

    useEffect(() => {
        setLocalApplications(globalData);
        setIsLoading(globalLoading)
    }, [globalData, globalLoading])

    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            <NavBar />
            <Stack
                spacing={4}
                p={8}
                bg="gray.800"
                align="center"
                minH="100vh"
            >
                <Heading as="h2" size="lg" color="orange.500">
                    Apply for a job
                </Heading>
                <form onSubmit={handleFormSubmit}>
                    <FormControl>
                        <FormLabel htmlFor="name" color="white">Name</FormLabel>
                        <Input name="name" placeholder="John Doe" color="white" onChange={e => setName(e.target.value)} />
                        <FormHelperText id="name-helper-text" color="red.500">
                            {error}
                        </FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email" color="white">Email</FormLabel>
                        <Input name="email" type="email" placeholder="johndoe@example.com" color="white" onChange={e => setEmail(e.target.value)} />
                        <FormHelperText id="email-helper-text" color="red.500">
                            {error}
                        </FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="age" color="white" >Age</FormLabel>
                        <Input name="age" type="number" color="white" onChange={e => setAge(e.target.value)} />
                        <FormHelperText id="age-helper-text" color="red.500">
                            {error}
                        </FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="message" color="white">Message</FormLabel>
                        <Textarea name="message" color="white" placeholder="Enter your message here" onChange={e => setMessage(e.target.value)} />
                        <FormHelperText id="message-helper-text" color="red.500">
                            {error}
                        </FormHelperText>
                    </FormControl>
                    <Box mt={4}>
                        <Button
                            isLoading={isLoading}
                            backgroundColor="orange.500"
                            size="sm"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Box>
                </form>
                <FancyLabel jobTitle="The best job in the world" />
                {localApplications != null && localApplications.map((item) => (
                    <div>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                        <p>{item.age}</p>
                        <p>{item.message}</p>
                        <br />
                    </div>
                ))};
            </Stack>
        </ThemeProvider>
    )
}

function FancyLabel(props) {
    return (
        <Box border="2px" borderColor="orange.500">
            <Heading mt={12} p={4} as="b" color="orange.500">
                {props.jobTitle}
            </Heading>
        </Box>
    )
}

export default Apply;