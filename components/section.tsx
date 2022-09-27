import { capitalize, Stack, Typography } from "@mui/material";
import { content } from "../content";

export default function Section(props: { title: string }) {
  return (
    <Stack
      id={props.title}
      direction="column"
      flex={1}
      alignItems="center"
      justifyContent="center"
      maxHeight="100vh"
      spacing={5}
      width={{xs: "80vw", md: "50vw"}}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          background: "linear-gradient(45deg, #8338EC, #3C84FF)",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}
      >
        {capitalize(props.title)}
      </Typography>
      <Typography variant="body1" textAlign="center" fontSize={{xs: "100%", md: "150%"}}>
        {content[props.title]}
      </Typography>
    </Stack>
  );
}
