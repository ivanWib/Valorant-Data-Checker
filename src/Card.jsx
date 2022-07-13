import React, { useContext, useEffect } from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Mydata } from "./App";
import { useNavigate } from "react-router-dom";

function Card() {
  const data = useContext(Mydata);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.userData === undefined) {
      navigate("/");
    }
  });

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
          <Image src={data.userData?.card.wide} objectFit={"cover"} />
          <Flex justify={"center"} mt={-12}>
            <Avatar
              size={"xl"}
              src={data.userData?.card.small}
              alt={"Author"}
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {data.userData?.name}
              </Heading>
              <Text color={"gray.500"}>#{data.userData?.tag}</Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>{data.mmr?.currenttierpatched}</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Rank
                </Text>
              </Stack>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}>{data.userData?.last_update}</Text>
                <Text fontSize={"sm"} color={"gray.500"}>
                  Last Update
                </Text>
              </Stack>
            </Stack>

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
              onClick={() => {
                navigate("/");
              }}
            >
              Return
            </Button>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

export default Card;
