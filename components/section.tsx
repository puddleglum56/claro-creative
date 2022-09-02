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
        fontSize={50}
        fontWeight="bold"
        sx={{
          background: "-webkit-linear-gradient(#eee, #333)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        }}
      >
        {capitalize(props.title)}
      </Typography>
    </Stack>
  );
}
