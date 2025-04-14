import { Box } from '@mui/system'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { rows, columns } from './data';
import React from 'react'

function Contacts() {
  return (
    <>
      <h2 style={{ fontWeight: '900', marginLeft: '3%' }}>Contacts</h2>

      <Box sx={{ width: "90%", minHeight: "50vh", mx: "auto" }}>
        <DataGrid
          slots={{ toolbar: GridToolbar }}
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
  )
}

export default Contacts
