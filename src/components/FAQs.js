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
          <Typography sx={{ textAlign: "left" }} variant="subtitle2">
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
          <Typography sx={{ textAlign: "left", fontFamily: "Varela Round" }} variant="subtitle2" >
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
          <Typography>Can we OPT FOR PICK-UP?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: "left", fontFamily: "Varela Round" }} variant="subtitle2">
            Yes. While we highly recommend having a professional baker handle
            your delivery, some orders may be suitable for pickup (by family,
            friends, or wedding coordinators) at our bakery during specific
            times. NOTE: If we do not handle the delivery, you are responsible
            for the order once it leaves the bakery. Pick up at our shop is
            typically available most weekdays 8am-5pm and Saturdays 11am-1pm;
            please confirm ahead of time to ensure someone is here.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Do you sell WHOLESALE for clients?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: "left", fontFamily: "Varela Round" }} variant="subtitle2">
            Yes, we sell to many fine hotels, restaurants, clubs, coffee
            companies, and stores at either wholesale or discounted pricing. If
            you hold a Resale License for food and would like more information
            or pricing, Please submit an online inquiry.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What are the sizes of your cakes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: "left", fontFamily: "Varela Round" }} variant="subtitle2">
            Our cakes ranges from 6 inches diameter cakes to 8 inches diameter
            cakes.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What type of payment do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: "left", fontFamily: "Varela Round" }} variant="subtitle2">
          We currently accept CASH ON DELIVERY ONLY.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
};

export default FAQs;
