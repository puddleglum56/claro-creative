import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { animated, useTransition, config } from "react-spring";

export default function Home() {
  const words = ["passion", "brand", "personality", "business"];
  const [word, setWord] = useState<string>("passion");
  const [counter, setCounter] = useState(1);

  const Space = () => <Typography variant="h2">&nbsp;</Typography>;

  const transitions = useTransition(word, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: config.molasses,
    onRest: () => {
      if (counter < words.length - 1) setCounter(counter + 1);
      setWord(words[counter]);
    },
    exitBeforeEnter: true,
  });

  const AnimatedTypography = animated(Typography);

  const { ref } = useParallax({ speed: 5 });

  return (
    <Stack
      id="home"
      direction="column"
      flex={1}
      alignItems="center"
      justifyContent="center"
      maxHeight="100vh"
      minWidth="100vw"
    >
      <Stack sx={{}} ref={ref}>
        <Stack direction="row">
          <Typography variant="h2">Your</Typography>
          <Space />
          {transitions((props, item) => (
            <AnimatedTypography variant="h2" style={props}>
              {item}
            </AnimatedTypography>
          ))}
          <Typography variant="h2">,</Typography>
          <Space />
          <Typography variant="h2" sx={{ display: { xs: "none", md: "flex" } }}>
            claro.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Typography variant="h2">claro.</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
