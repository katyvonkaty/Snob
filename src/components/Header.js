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
          <img src={lady} alt="cute lady" style={{width:"100%"}}/>
        </Grid>
        <Grid align="center" item xs={12} sm={8} md={4} >
          <img src={logo} alt="logo" style={{width:"40%", margin:"0 auto", display:"block", marginBottom:"30px", marginTop:"110px"}}/>
          <h1>Let Your Stuck up Ass Shine!  </h1>
          <p> Authenticity is at the core of our vibrant culture, which inspires us to be the most successful versions of ourselves. From the moment you step foot into a Yelp office, you'll feel what it means to challenge the status quo.  </p>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <img src={guy}  alt="cute guy" style={{width:"100%"}}/>
        </Grid>
      </Grid>
      </div>
    )

}

export default Header
