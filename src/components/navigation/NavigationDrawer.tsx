import React from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  useTheme,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  Dashboard,
  Article,
  Create,
  Person,
  Search,
  Notifications,
  Settings,
  Logout,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

interface NavigationDrawerProps {
  mobileOpen: boolean;
  onMobileToggle: () => void;
  drawerWidth: number;
}

interface NavItem {
  text: string;
  icon: React.ReactElement;
  path: string;
  divider?: boolean;
}

const navItems: NavItem[] = [
  {
    text: "Início",
    icon: <Dashboard />,
    path: "/dashboard",
  },
  {
    text: "Explorar",
    icon: <Search />,
    path: "/explore",
  },
  {
    text: "Notificações",
    icon: <Notifications />,
    path: "/notifications",
  },
  {
    text: "Criar Post",
    icon: <Create />,
    path: "/posts/create",
  },
  {
    text: "Meus Posts",
    icon: <Article />,
    path: "/posts",
    divider: true,
  },
  {
    text: "Perfil",
    icon: <Person />,
    path: "/profile",
  },
  {
    text: "Configurações",
    icon: <Settings />,
    path: "/settings",
  },
];

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  mobileOpen,
  onMobileToggle,
  drawerWidth,
}) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleNavigation = (path: string) => {
    navigate(path);
    // Close mobile drawer after navigation
    if (mobileOpen) {
      onMobileToggle();
    }
  };

  const handleLogout = async () => {
    await logout();
  };
  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: 1,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            D
          </Box>
          <Typography variant="h6" noWrap>
            Dritter
          </Typography>
        </Box>
      </Toolbar>

      <Divider />

      <List sx={{ px: 1, flex: 1 }}>
        {navItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                selected={location.pathname === item.path}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                    "& .MuiListItemIcon-root": {
                      color: theme.palette.primary.contrastText,
                    },
                  },
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                    color:
                      location.pathname === item.path
                        ? theme.palette.primary.contrastText
                        : theme.palette.text.secondary,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "0.875rem",
                    fontWeight: location.pathname === item.path ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
            {item.divider && <Divider sx={{ my: 1 }} />}{" "}
          </React.Fragment>
        ))}
      </List>

      {/* User Section */}
      <Box sx={{ mt: "auto", p: 1 }}>
        <Divider sx={{ mb: 2 }} />
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, px: 1, py: 1 }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: "primary.main",
              fontSize: "1rem",
            }}
          >
            {user?.name?.charAt(0).toUpperCase()}
          </Avatar>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="body2" sx={{ fontWeight: 600 }} noWrap>
              {user?.name}
            </Typography>
            <Typography variant="caption" color="text.secondary" noWrap>
              {user?.email}
            </Typography>
          </Box>
          <IconButton
            size="small"
            onClick={handleLogout}
            color="inherit"
            title="Sair"
          >
            <Logout />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
    >
      {" "}
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            zIndex: (theme) => theme.zIndex.drawer,
          },
        }}
      >
        {drawer}
      </Drawer>{" "}
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            zIndex: (theme) => theme.zIndex.drawer,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default NavigationDrawer;
