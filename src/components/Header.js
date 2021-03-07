import React from "react";
import Grid from '@material-ui/core/Grid';
import guy from "../assets/images/guy.png";
import lady from "../assets/images/lady.png";
import logo from "../assets/images/logo.png";


const Header = () => {
  return (
    <div>
      <Grid container spacing={7}  align="center">
        <Grid item xs={12} sm={8} md={4}>
          <img src={lady} className="lady" alt="cute lady" style={{width:"100%"}}/>
        </Grid>
        <Grid align="center" item xs={12} sm={8} md={4} >
          <img src={logo} alt="logo" className="logo" style={{width:"40%", margin:"0 auto", display:"block", marginBottom:"30px", marginTop:"110px"}}/>
          <h1 className="headerone">The Joy, Comfort, and Stress-Reducing Power of Snob </h1>
          <p className="pone">  Like other online platforms, Starsnob relies on a mix of software and human curation. On the software side, one of the main tasks is sorting reviews into recommended and not recommended.   </p>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <img src={guy} className="man" alt="cute guy" style={{width:"100%"}}/>
        </Grid>
      </Grid>
      </div>
    )


}

export default Header
