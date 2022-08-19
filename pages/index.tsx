import { Box, Container, Stack, Typography } from "@mui/material";
import { type NextPage } from "next";
import { animated, useSpring, useSpringRef } from "react-spring";

const Home: NextPage = () => {
  const space = <Typography fontSize={70}>&nbsp;</Typography>;

  const springRef = useSpringRef();
  const props = useSpring({
    from: { y: 50 },
    to: { y: 0 },
    ref: springRef,
  });
  const AnimatedTypography = animated(Typography);

  return (
    <Stack
      direction="column"
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <Stack direction="row" overflow="hidden">
        <Typography fontSize={70}>Your</Typography>
        {space}
        <AnimatedTypography fontSize={70} style={props}>
          passion
        </AnimatedTypography>
        <Typography fontSize={70}>, claro.</Typography>
      </Stack>
    </Stack>
  );
};

export default Home;
