import { capitalize, Stack, Typography } from "@mui/material";

export default function Section(props: { title: string }) {
  return (
    <Stack
      id={props.title}
      direction="column"
      flex={1}
      alignItems="center"
      justifyContent="center"
      maxHeight="100vh"
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          background: "linear-gradient(45deg, #8338EC, #3C84FF)",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}
      >
        {capitalize(props.title)}
      </Typography>
    </Stack>
  );
}
