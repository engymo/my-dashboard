import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import { Avatar, styled, Typography, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight, HomeOutlined, PeopleAltOutlined, ContactsOutlined, AssignmentOutlined, Person2Outlined, CalendarTodayOutlined, HelpOutlineOutlined, QuestionMarkOutlined, BarChartOutlined, PieChartOutlined, TimelineOutlined, LeaderboardOutlined, }
    from '@mui/icons-material';
import { useLocation, useNavigate } from "react-router";
import { purple, grey } from '@mui/material/colors';


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Array1 = [{
    id: 1,
    "text": "Dashboard", "icon": <HomeOutlined />, "path": ""
},
{
    id: 2,
    "text": "Manage Team", "icon": <PeopleAltOutlined />, "path": "ManageTeam"
}, {

    id: 3,
    "text": "Contacts Information", "icon": <ContactsOutlined />, "path": "Contacts"
}
    , {
    id: 4,
    "text": "Invoices Balances", "icon": <AssignmentOutlined />, "path": "Invoices"
}
];

const Array2 = [{
    id: 5,
    "text": "Profile Form", "icon": <Person2Outlined />, "path": "ProfileForm"
},
{
    id: 6,
    "text": "Calendar", "icon": <CalendarTodayOutlined />, "path": "Calendar"
}, {
    id: 7,
    "text": "FAQ Page", "icon": <HelpOutlineOutlined />, "path": "FAQPage"
}
];

const Array3 = [{
    id: 8,
    "text": "Bar Chart", "icon": <BarChartOutlined />, "path": "BarChart"
},
{
    id: 9,
    "text": "Pie Chart", "icon": <PieChartOutlined />, "path": "PieChart"
}, {

    id: 10,
    "text": "Line Chart", "icon": <TimelineOutlined />, "path": "LineChart"
},
{

    id: 11,
    "text": "Geoghraphy Chart", "icon": < LeaderboardOutlined />, "path": "GeoghraphyChart"
}

];

function SideBar({ open, handleDrawerClose }) {
    const theme = useTheme();
    const navigate = useNavigate();
    let location = useLocation()



    return (

        <Drawer variant="permanent" open={open}>

            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <Avatar sx={{ mx: "auto", mt: 1, width: 47, height: 47, transition: ".5s" }} alt="Remy Sharp" src="https://i.pinimg.com/736x/5b/4c/ed/5b4cedba6d5dd87f8e6719fee2697265.jpg" />
            <Typography align='center' sx={{ marginTop: 1, fontSize: open ? "14px" : "0", transition: ".5s " }}>
                Eng / Angie
            </Typography>
            <Typography align='center' sx={{ marginBottom: 1, fontSize: open ? "12px" : "0", color: "#3f51b5", transition: ".5s" }}>
                Admin
            </Typography>

            <Divider />
            <List >
                {Array1.map((item) => (
                    <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => {
                                navigate(`/${item.path}`); // Navigate to the specified path
                            }}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                    bgcolor: location.pathname === `/${item.path}`
                                        ? theme.palette.mode === "dark"
                                            ? grey[800]  // لون الخلفية في وضع الدارك
                                            : purple[50] // لون الخلفية في وضع اللاليت
                                        : "transparent"
                                },
                                open
                                    ? {
                                        justifyContent: 'initial',
                                    }
                                    : {
                                        justifyContent: 'center',
                                    },
                            ]}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                    open
                                        ? {
                                            mr: 3,
                                        }
                                        : {
                                            mr: 'auto',
                                        },
                                ]}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {Array2.map((item2) => (
                    <ListItem key={item2.id} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => {
                                navigate(`/${item2.path}`)
                            }}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2,
                                    bgcolor: location.pathname === `/${item2.path}`
                                        ? theme.palette.mode === "dark"
                                            ? grey[800]  // لون الخلفية في وضع الدارك
                                            : purple[50] // لون الخلفية في وضع اللاليت
                                        : "transparent"
                                },
                                open
                                    ? {
                                        justifyContent: 'initial',
                                    }
                                    : {
                                        justifyContent: 'center',
                                    },
                            ]}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                    open
                                        ? {
                                            mr: 3,
                                        }
                                        : {
                                            mr: 'auto',
                                        },
                                ]}
                            >
                                {item2.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item2.text}
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {Array3.map((item3) => (
                    <ListItem key={item3.id} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => {
                                navigate(`/${item3.path}`)
                            }}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                    bgcolor: location.pathname === `/${item3.path}`
                                        ? theme.palette.mode === "dark"
                                            ? grey[800]  // لون الخلفية في وضع الدارك
                                            : purple[50] // لون الخلفية في وضع اللاليت
                                        : "transparent"
                                },
                                open
                                    ? {
                                        justifyContent: 'initial',
                                    }
                                    : {
                                        justifyContent: 'center',
                                    },
                            ]}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                    open
                                        ? {
                                            mr: 3,
                                        }
                                        : {
                                            mr: 'auto',
                                        },
                                ]}
                            >
                                {item3.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item3.text}
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Drawer>
    )
}

export default SideBar
