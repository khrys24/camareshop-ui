import React from "react";
import { Link } from "@mui/material";

const About = () => {
  return (
    <div className="container" style={{margin:"100px auto"}}>
      <div style={{textAlign:"left"}}>
        <h2 style={{textAlign:"center"}}>Camare Cakes</h2>
        <p>
          Since 2022, the Camare Cakes has grown to become a well-respected
          purveyor of fine baking goods within Metro Manila.
        </p>
        <br />
        <p>
          As the founders of Camare Cakes, we had a vision that our company
          could provide fresh and high quality cakes, year-round at a fair
          price. Time and circumstances have changed the way cakes are ordered,
          but the core of our work has remained constant.
        </p>
        <br />
        <p>
          Our service level extends beyond just providing fine cakes to the
          public. We believe the more we know about each other, the better we
          can work together to realize our common objectives.
        </p>
        <br />
        <p>
          We currently service the majority of the cities in Metro Manila. We
          are ready with a fleet of vehicles, to provide you with fast and
          continuous service, seven days a week, including holidays. With our
          well trained employees and the use of current technology and
          communication channels, we can assure you consistent service.
        </p>
      </div>
      <div style={{margin:"100px auto"}}>
        <h3 style={{margin:"50px 0"}}>Meet the Team</h3>
        <div className="d-flex flex-wrap justify-content-center" style={{gap:"50px"}} >
        <div id="card">
              <Link href="https://saichii23.github.io/MyPortfolio/" target="_blank" sx={{"&:hover": { color: "#9c27b0" }, color:"inherit", textDecoration:"none"}}>
                <img src="./images/gellie.png" alt="gellie-cano.png" style={{ borderRadius: "50%", height: "300px" }}/> <br/>
                <h5>GELLIE CANO</h5>
              </Link>
            </div>
            <div id="card">
              <Link href="https://edd-reyes.github.io/My_Portfolio/" target="_blank" sx={{"&:hover": { color: "#9c27b0" }, color:"inherit", textDecoration:"none"}}>
                <img src="./images/dboy.png" alt="dboy-reyes.png" style={{ borderRadius: "50%", height: "300px" }}/> <br/>
                <h5>DBOY REYES</h5>
              </Link>
            </div>
            <div id="card">
              <Link href="https://khrys24.github.io/kim-portfolio/index.html" target="_blank" sx={{"&:hover": { color: "#9c27b0" }, color:"inherit", textDecoration:"none"}}>
                <img src="./images/krystine.png" alt="khrystine.png" style={{ borderRadius: "50%", height: "300px" }}/> <br/>
                <h5>KHRYSTINE MASIGLAT</h5>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
