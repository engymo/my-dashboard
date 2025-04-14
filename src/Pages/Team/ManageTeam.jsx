import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AdminPanelSettings, Person, Security } from '@mui/icons-material';
import { teal, deepOrange, pink } from '@mui/material/colors';

const rows = [
  { id: 1, col1: '1', col2: 'Ali', col3: 'nn@gmail.com', col4: '25', col5: '01012457832', col6: 'Admin' },
  { id: 2, col1: '2', col2: 'Alaa', col3: 'nn@gmail.com', col4: '28', col5: '01012457832', col6: 'Admin' },
  { id: 3, col1: '3', col2: 'Aza', col3: 'nn@gmail.com', col4: '51', col5: '01012457832', col6: 'Manager' },
  { id: 4, col1: '4', col2: 'Amira', col3: 'nn@gmail.com', col4: '29', col5: '01012457832', col6: 'Manager' },
  { id: 5, col1: '5', col2: 'Ismail', col3: 'nn@gmail.com', col4: '25', col5: '01012457832', col6: 'User' },
  { id: 6, col1: '6', col2: 'Jessy', col3: 'nn@gmail.com', col4: '40', col5: '01012457832', col6: 'User' },
  { id: 7, col1: '7', col2: 'Atef', col3: 'nn@gmail.com', col4: '20', col5: '01012457832', col6: 'User' },
  { id: 8, col1: '8', col2: 'Ahmed', col3: 'nn@gmail.com', col4: '65', col5: '01012457832', col6: 'User' },
  { id: 9, col1: '9', col2: 'Amr', col3: 'nn@gmail.com', col4: '30', col5: '01012457832', col6: 'User' },
];

const accessConfig = {
  Admin: {
    bgColor: teal[600],
    icon: <AdminPanelSettings />,
  },
  User: {
    bgColor: deepOrange[600],
    icon: <Person />,
  },
  Manager: {
    bgColor: pink[600],
    icon: <Security />,
  }
};

const columns = [
  { field: 'col1', headerName: 'ID', width: 33 },
  { field: 'col2', headerName: 'Name', flex: 1 },
  { field: 'col3', headerName: 'Email', flex: 1 },
  { field: 'col4', headerName: 'Age', width: 33 },
  { field: 'col5', headerName: 'Phone', flex: 1 },
  {
    field: 'col6',
    headerName: 'Access',
    flex: 1,
    minWidth: 130,
    renderCell: (params) => {
      const access = accessConfig[params.value] || {};
      return (
        <Chip
          icon={access.icon}
          label={params.value}
          sx={{
            fontWeight: 'bold',
            backgroundColor: params.value === "Admin" ? teal[600] : params.value === "Manager" ? pink[600] : deepOrange[600],
            color: 'white',
            padding: '5px',
            width: '100%',
            maxWidth: '140px',
            borderRadius: '8px',
          }}
        />
      );
    },
  }
];

function ManageTeam() {
  return (

    <>
      <h2 style={{ fontWeight: '900', marginLeft: '3%' }}>Team</h2>

      <Box sx={{ width: "90%", minHeight: "50vh", mx: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          sx={{
            '& .MuiDataGrid-root': {
              minWidth: '500px'
            }
          }}
        />
      </Box>
    </>

  );
}

export default ManageTeam;
