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
  const words = ["passion", "brand", "personality", "business"];
  const [word, setWord] = useState<string>("passion");
  const [prevWord, setPrevWord] = useState<string>("business");
  const [counter, setCounter] = useState(1);
  const fontSize = 70;

  const Space = () => <Typography fontSize={70}>&nbsp;</Typography>;

  const transitions = useTransition(word, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: config.molasses,
    onRest: () => {
      if (counter < words.length - 1) setCounter(counter + 1);
      setPrevWord(word);
      setWord(words[counter]);
    },
    exitBeforeEnter: true,
  });

  const getNextWord = () => {
    var nextWord = "";
    if (counter < words.length - 1) nextWord = words[counter + 1];
    else nextWord = words[0];
    return nextWord;
  };

  const getWordWidth = (word: string) => word.length * fontSize * 0.53;

  const AnimatedTypography = animated(Typography);

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
        <Space />
        <Stack direction="row" justifyContent="center">
          {transitions((props, item) => (
            <AnimatedTypography fontSize={fontSize} zIndex={-1} style={props}>
              {item}
            </AnimatedTypography>
          ))}
        </Stack>
        <Typography width="100%" fontSize={fontSize}>
          , claro.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Home;
