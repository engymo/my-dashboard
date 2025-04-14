import { Box, Stack } from '@mui/system';
import Paper from '@mui/material/Paper';
import React from 'react'
import PieChart from '../PieChart/PieChart';
import GeoghraphyChart from '../GeoghraphyChart/GeoghraphyChart';
import LineChartt from '../LineChart/LineChart';

function Row3() {
  return (
    <Stack
      direction="row"
      marginTop={4}
      alignItems="center"
      flexWrap={"wrap"}
      justifyContent={{ xs: 'center', md: 'space-between' }}>

      <Paper sx={{ height: '500px', width: {md:'33%',xs:"100%"} }}>
        <PieChart />
      </Paper>

      <Paper sx={{ height: '500px', width: {md:'33%',xs:"100%"} ,marginTop: { xs: '6%', md: '0' } }}>
        < LineChartt />
      </Paper>

      <Paper sx={{ height: '500px', width: {md:'33%',xs:"100%"},marginTop: { xs: '6%', md: '0' } }}>
        < GeoghraphyChart />
      </Paper>

    </Stack>
  )
}

export default Row3
