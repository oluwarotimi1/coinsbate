import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion({ parent, style }) {
  const myFeatures = ["buy", "sell", "price"];
  return (
    <div>
      <Accordion style={style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{parent}</Typography>
        </AccordionSummary>
        {myFeatures.map((features) => {
          return(
            <AccordionDetails key={features}>
            <Typography>{features}</Typography>
          </AccordionDetails>
          )
          
        })}
      </Accordion>
    </div>
  );
}
