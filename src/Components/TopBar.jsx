import { IconButton, InputBase, styled, Toolbar, alpha, Box, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import { Notifications, Settings, Person, DarkMode, LightMode } from '@mui/icons-material';
import React from 'react';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  // @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
 backgroundColor: theme.palette.mode === 'light' ? '#4a148c' : '#000000'
}));

// search bar styles

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// Dark mode icon styles


function TopBar({ handleDrawerOpen, open, darkMode, toggleDarkMode }) {
  const icons = [
    { id: 1, component: darkMode ? <DarkMode /> : <LightMode />, Label: "Dark Mode", onClick: toggleDarkMode },
    { id: 2, component: <Notifications />, Label: "Notifications" },
    { id: 3, component: <Settings />, Label: "Settings" },
    { id: 4, component: <Person />, Label: "Profile" },
  ];
 

  return (
    <AppBar position="fixed"
      // @ts-ignore
      open={open}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ marginRight: 5, ...(open && { display: 'none' }) }}>
          <MenuIcon />
        </IconButton>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center">
          {icons.map((icon) => (
            <IconButton key={icon.id} aria-label={icon.Label} onClick={icon.onClick || undefined} color="inherit">
              {icon.component}
            </IconButton>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}


export default TopBar
