import { Box, capitalize, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { config } from "react-spring";
import useScrollTo from "react-spring-scroll-to-hook";

export default function Header() {
  const logoRatio = 2077 / 921;
  const logoHeight = 125;
  const logoWidth = logoHeight * logoRatio;
  const { scrollTo } = useScrollTo(config.molasses);

  const handleClick = (event: any, section: string) => {
    scrollTo(document.querySelector("#" + section), -125);
  };

  const sections = ["home", "about", "services", "contact"];

  const menuItems = sections.map((section) => (
    <Typography
      key={section}
      onClick={(event: any) => handleClick(event, section)}
      sx={{ cursor: "pointer" }}
    >
      {capitalize(section)}
    </Typography>
  ));

  return (
    <Stack
      direction="row"
      spacing={10}
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top={0}
      bgcolor="rgba(255, 255, 255, 0.97)"
    >
      {menuItems}
      <Box marginLeft="auto">
        <Image
          src="/logo-blue-01.svg"
          alt="Claro Creative Logo"
          width={logoWidth}
          height={logoHeight}
        />
      </Box>
    </Stack>
  );
}
