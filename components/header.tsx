import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { config } from "react-spring";
import useScrollTo from "react-spring-scroll-to-hook";
import Stack from "@mui/material/Stack";
import { capitalize } from "@mui/material";

const sections = ["home", "about", "services", "contact"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const { scrollTo } = useScrollTo(config.molasses);

  const handleClick = (event: any, section: string) => {
    setAnchorElNav(null);
    scrollTo(document.querySelector("#" + section));
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logoRatio = 2077 / 921;
  const logoHeight = 125;
  const logoWidth = logoHeight * logoRatio;

  const menuItems = sections.map((section) => (
    <Typography
      key={section}
      onClick={(event: any) => handleClick(event, section)}
      sx={{
        color: "black",
        cursor: "pointer",
      }}
    >
      {capitalize(section)}
    </Typography>
  ));

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.98)",
        boxShadow: "none",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box sx={{ display: { xs: "none", md: "flex" }}}>
          <Image
            src="/logo-blue-01.svg"
            alt="Claro Creative Logo"
            width={logoWidth}
            height={logoHeight}
          />
        </Box>
        <Box
          sx={{ display: { xs: "flex", md: "none" }, maxHeight: "10vh", ml: "auto"}}
        >
          <Image
            src="/logo-blue-01.svg"
            alt="Claro Creative Logo"
            width={logoWidth}
            height={logoHeight}
          />
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            sx={{ color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <Stack direction="column" alignItems="center" px={1}>
            {sections.map((section) => (
              <MenuItem
                key={section}
                onClick={(event: any) => handleClick(event, section)}
              >
                <Typography> 
                  {capitalize(section)}
                </Typography>
              </MenuItem>
            ))}
            </Stack>
          </Menu>
        </Box>
        <Stack
          direction="row"
          sx={{ display: { xs: "none", md: "flex" } }}
          spacing={5}
          px={5}
        >
          {menuItems}
        </Stack>
      </Stack>
    </AppBar>
  );
}
