import { Box, Container, Stack, Typography } from "@mui/material";
import { type NextPage } from "next";
import { useEffect, useState } from "react";
import {
  animated,
  useSpring,
  useSpringRef,
  useTransition,
  config,
} from "react-spring";

const Home: NextPage = () => {
  const words = ["passion", "business", "brand", "personality"];
  const [word, setWord] = useState<string>("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setWord(words[counter]);
  }, []);

  const transitions = useTransition(word, {
    enter: { y: 90 },
    leave: { y: 0 },
    update: { y: 0 },
    config: config.molasses,
    onRest: () => {
      if (counter < words.length - 1) setCounter(counter + 1);
      else setCounter(0);
      setWord(words[counter]);
    },
  });

  const AnimatedTypography = animated(Typography);

  const space = <Typography fontSize={70}>&nbsp;</Typography>;

  return (
    <Stack
      direction="column"
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <Stack direction="row" overflow="hidden" marginTop={-140 + "px"}>
        <Typography fontSize={70}>Your</Typography>
        {space}
        <Stack direction="column" overflow="hidden" height={100}>
          {transitions((props, item) => (
            <AnimatedTypography fontSize={70} style={props}>
              {item}
            </AnimatedTypography>
          ))}
        </Stack>
        <Typography fontSize={70}>, claro.</Typography>
      </Stack>
    </Stack>
  );
};

export default Home;
