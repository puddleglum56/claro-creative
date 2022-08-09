import { Slide, Stack, Typography } from "@mui/material";
import { type NextPage } from "next";
import { useRef, useState } from "react";

const Home: NextPage = () => {
  const [animating, setAnimating] = useState(0);
  const containerRef = useRef();
  const space = <Typography fontSize={50}>&nbsp;</Typography>;
  // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  const nextAnimation = () => {
    console.log("nextAnimation", animating);
    setAnimating(animating + 1);
  };

  const animations = [
    <Slide
      key={0}
      direction="up"
      in={animating === 0}
      container={containerRef.current}
      addEndListener={() => nextAnimation()}
      timeout={500}
    >
      <Typography fontSize={50}>business</Typography>
    </Slide>,
    <Slide
      key={1}
      direction="up"
      in={animating === 1}
      container={containerRef.current}
      addEndListener={() => nextAnimation()}
      timeout={500}
    >
      <Typography fontSize={50}>passion</Typography>
    </Slide>,
    <Slide
      key={2}
      direction="up"
      in={animating === 2}
      container={containerRef.current}
      addEndListener={() => nextAnimation()}
      timeout={500}
    >
      <Typography fontSize={50}>job</Typography>
    </Slide>,
  ];

  return (
    <Stack
      direction="row"
      justifyContent="center"
      overflow="hidden"
      ref={containerRef}
    >
      <Typography fontSize={50}>Your</Typography>
      {space}
      {animations}
      <Typography fontSize={50}>, claro.</Typography>
    </Stack>
  );
};

export default Home;
