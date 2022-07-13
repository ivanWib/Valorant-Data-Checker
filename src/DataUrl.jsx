import React, { useState, useContext } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Center,
  Image,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Mydata } from "./App";

function DataUrl() {
  const data = useContext(Mydata);
  const [user, setUser] = useState("");
  const [tag, setTag] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Account Data
  const url1 =
    "https://api.henrikdev.xyz/valorant/v1/account/" + user + "/" + tag;

  // MMR Data
  const url2 =
    "https://api.henrikdev.xyz/valorant/v1/mmr/ap/" + user + "/" + tag;

  function updateName(e) {
    setUser(e.target.value);
  }

  function updateTag(e) {
    setTag(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .all([axios.get(url1), axios.get(url2)])
      .then(
        axios.spread((res1, res2) => {
          data.setUserData(res1.data.data);
          data.setMmr(res2.data.data);

          if (user === "" || tag === "") {
            setError("Please fill in all fields");
          } else {
            navigate("/Card");
          }
        })
      )
      .catch((err) => {
        setError("Data not found");
      });
  }

  return (
    <Box>
      <Center py={6}>
        <Box
          maxW={"450px"}
          w={"full"}
          h={"full"}
          bg={useColorModeValue("skyblue", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            w={"full"}
            src="https://i2.wp.com/playerassist.com/wp-content/uploads/2020/11/valorant-wiki-guide.jpg?fit=762%2C397&ssl=1"
            objectFit={"cover"}
          />

          <Box p={6}>
            <FormControl>
              <FormLabel htmlFor="UserName">UserName</FormLabel>
              <Input
                w={"full"}
                id="UserName"
                placeholder="UserName"
                width="200px"
                onChange={updateName}
                mb={4}
              />
              <FormLabel htmlFor="Tagline">Tagline</FormLabel>
              <Input
                w={"full"}
                id="Tagline"
                placeholder="#"
                width="200px"
                onChange={updateTag}
              />
            </FormControl>

            <Box mt="4">
              <Center>{error}</Center>
            </Box>

            <Button
              w={"full"}
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              onClick={handleSubmit}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

export default DataUrl;
