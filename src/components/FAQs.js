import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQs = () => {
  return (
    <div className="container" style={{ margin: "150px auto 500px auto" }}>
      <h3>Frequently Asked Questions</h3>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What are your most ordered cakes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: "left" }}>
            <p>
              Our best sellers include:
              <ul>
                <li>Mocha Cake</li>
                <li>Black Forest Cake</li>
                <li>Orange-strawberry fondant cake</li>
              </ul>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            What's the difference between layered and tiered cakes?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: "left", fontFamily:"Varela Round" }}>
            A classic (think: Duncan Hines) birthday cake is a “Single Tier
            Round” with 3 “Layers” hidden under the frosting. <br /> A classic
            Wedding Cake has multiple “Tiers” for height. Our cake tiers are
            3-layers each unless otherwise designed with you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            What's the difference between layered and tiered cakes?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: "left", fontFamily:"Varela Round" }}>
            A classic (think: Duncan Hines) birthday cake is a “Single Tier
            Round” with 3 “Layers” hidden under the frosting. <br /> A classic
            Wedding Cake has multiple “Tiers” for height. Our cake tiers are
            3-layers each unless otherwise designed with you.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQs;
