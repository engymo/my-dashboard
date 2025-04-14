import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';


const FAQPa = () => [
  {
    id: 1,
    tittle: "Amr Soliman",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 2,
    tittle: "Hassan Mahmoud",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 3,
    tittle: " Ali Hassan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 4,
    tittle: "Ibrahim Ahmed",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 5,
    tittle: "Adel Mohamed",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 6,
    tittle: "Mohamed Ibrahim",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  }
]


function FAQPage() {


  return (
    <>
    <h2 style={{ fontWeight: '900', marginLeft: '3%' }}>FAQ Page </h2>
    <Stack spacing={5} sx={{ width: '90%',mx:'auto', marginTop: '2%' }}>
      {FAQPa().map((FAQ) => (
        <Accordion key={FAQ.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header">
            <Typography component="span" sx={{fontSize:'14px',fontWeight:'600'}}>{FAQ.tittle}</Typography>
          </AccordionSummary>
          <AccordionDetails  sx={{fontSize:'12px'}} > {FAQ.description} </AccordionDetails>
        </Accordion>
      ))}
    </Stack >
    </>
  )
}

export default FAQPage;
