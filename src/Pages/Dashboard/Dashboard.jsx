import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import Button from '@mui/material/Button'
import { DownloadOutlined } from '@mui/icons-material'
import { Typography ,Box} from '@mui/material'

function Dashboard() {
  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: {
          xs: 'center',
          sm: 'space-between',
        }
      }}>
        <Typography variant='h5' style={{ fontWeight: '900' }}>Dashboard</Typography>
      </Box>

      <Box sx={{
        textAlign:
        {
          xs: "center",
          md: "right"
        },
        marginTop: {
          xs: '2%',
          md: '0',
        }
      }

      }>
        <Button variant="contained" color="secondary" sx={{ textTransform: 'capitalize' }}>
          <DownloadOutlined />
          Add New Task
        </Button>
      </Box >

      {/* // Box component to add some space between the title and the rows */}
      
      <Row1 />
      <Row2 />
      <Row3 />

    </>
  )
}

export default Dashboard
