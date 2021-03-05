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
          <h1 className="headerone">Let Your Stuck up Ass Shine!  </h1>
          <p className="pone"> Starsnob is the app that celebrates the elite yelp restaurants. In an effort to streamline our lives, the brilliant minds at starsnob thought there was a market for such an app; and they were right! Search your craving and indulge in your snobbery.  </p>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <img src={guy} className="man" alt="cute guy" style={{width:"100%"}}/>
        </Grid>
      </Grid>
      </div>
    )

}

export default Header
