import { Box, Stack } from '@mui/system';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import LineChartE from '../../Pages/LineChart/LineChart';
import { DownloadOutlined } from '@mui/icons-material';
import { Rowdata } from './Rowdata';


function Row2() {

  return (
    <>
      <Stack direction="row" sx={{ marginTop: '2%' }} flexWrap={'wrap'} gap={2} justifyContent={'space-between'}>

        <Paper sx={{
          minWidth: { xs: '400px', md: "48%" },
          marginTop: {
            xs: "3%",
            md: '0'
          }
        }} >
          <Stack direction="row" justifyContent={'space-between'} padding={2} alignItems={'center'}>
            <Box>
              <Typography variant="h6" sx={{ color: '#af52bf', fontWeight: 'bold' }}>Revenue Generated</Typography>
              <Typography variant="h6" sx={{}}>$59,342,32</Typography>
            </Box>

            <Box>
              <DownloadOutlined />
            </Box>

          </Stack>


          <LineChartE height={300} showtittle={false} />
        </Paper>

        <Box sx={{
          minWidth: { xs: '400px', md: "48%" },
          marginTop: {
            xs: "3%",
            md: '0'
          }
        }}>
          <Paper>
            <Typography variant="h6" sx={{ padding: '2%', fontWeight: '800', color: '#af52bf' }}>
              Reacent Transactions
            </Typography>
          </Paper>

          {Rowdata.map((item) => (


            <Paper key={item.id} sx={{ marginTop: '2%' }}>
              <Stack direction="row" justifyContent={'space-between'} padding={2} alignItems={'center'} >
                <Box>
                  <Typography variant="body2"  >
                    {item.txId}
                  </Typography>
                  <Typography variant="body2" >
                    {item.user}
                  </Typography>
                </Box>

                <Typography variant="body2">
                  {item.date}
                </Typography>

                <Typography variant="body2" sx={{ bgcolor: "#f44336", padding: '5px', borderRadius: '5px',width:{xs:'20%',md:'13%'},textAlign:'center'}} >
                  {item.amount}
                </Typography>
              </Stack>

            </Paper>



          ))}

        </Box>
      </Stack >
    </>
  )
}

export default Row2
