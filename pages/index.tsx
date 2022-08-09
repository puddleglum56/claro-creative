import { Stack, Typography } from "@mui/material";
import { type NextPage } from "next";
import { animated, useSpring } from "react-spring";

const Home: NextPage = () => {
  const space = <Typography fontSize={50}>&nbsp;</Typography>;
  const props = useSpring({
    from: { y: 50 },
    to: { y: 0 },
  });
  const AnimatedTypography = animated(Typography);

  return (
    <Stack direction="row" justifyContent="center" overflow="hidden">
      <Typography fontSize={50}>Your</Typography>
      {space}
      <AnimatedTypography fontSize={50} style={props}>
        passion
      </AnimatedTypography>
      <Typography fontSize={50}>, claro.</Typography>
    </Stack>
  );
};

export default Home;
