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
  const [word, setWord] = useState<string>("passion");
  const [counter, setCounter] = useState(1);
  const fontSize = 70;

  useEffect(() => {
    setWord(words[counter]);
  }, []);

  const transitions = useTransition(word, {
    from: { y: 90 },
    enter: { y: 0 },
    leave: { y: 0 },
    config: config.molasses,
    onRest: () => {
      if (counter < words.length - 1) setCounter(counter + 1);
      else setCounter(0);
      setWord(words[counter]);
    },
    exitBeforeEnter: true,
  });

  const AnimatedTypography = animated(Typography);

  const space = <Typography fontSize={70}>&nbsp;</Typography>;

  return (
    <Stack
      direction="column"
      flex={1}
      alignItems="center"
      justifyContent="center"
      maxHeight="100vh"
    >
      <Stack direction="row" overflow="hidden">
        <Typography fontSize={fontSize}>Your</Typography>
        {space}
        {transitions((props, item) => (
          <AnimatedTypography fontSize={fontSize} zIndex={-1} style={props}>
            {item}
          </AnimatedTypography>
        ))}
        <Typography width="100%" fontSize={fontSize}>
          , claro.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Home;
