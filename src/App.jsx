import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './Components/TopBar';
import SideBar from './Components/SideBar';
import { styled, createTheme, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <TopBar handleDrawerOpen={() => setOpen(true)} open={open} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <SideBar open={open} handleDrawerClose={() => setOpen(false)} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: "80px" }}>
          <DrawerHeader />
          <Outlet/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
