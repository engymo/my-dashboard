import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { rows, columns } from './dataa';
import React from 'react'

function Invoices() {
  return (
    <>
      <h2 style={{ fontWeight: '900', marginLeft: '3%' }}>Invoices</h2>

      <Box sx={{ width: "90%", minHeight: "50vh", mx: "auto" }}>
        <DataGrid
          checkboxSelection
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

export default Invoices
