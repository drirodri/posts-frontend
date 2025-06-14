import React, { useState } from "react";
import { Box, Fab } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import NavigationDrawer from "../navigation/NavigationDrawer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const DRAWER_WIDTH = 280;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {" "}
      <NavigationDrawer
        mobileOpen={mobileOpen}
        onMobileToggle={handleDrawerToggle}
        drawerWidth={DRAWER_WIDTH}
      />
      {/* Mobile Menu Button */}
      <Fab
        color="primary"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          display: { xs: "flex", md: "none" },
          zIndex: (theme) => theme.zIndex.speedDial,
        }}
      >
        <MenuIcon />
      </Fab>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          width: {
            xs: "100%",
            md: `calc(100% - ${DRAWER_WIDTH}px)`,
          },
          minHeight: "100vh",
          backgroundColor: "background.default",
        }}
      >
        {" "}
        <Box
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 3 },
            pt: { xs: 3, sm: 4 },
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
