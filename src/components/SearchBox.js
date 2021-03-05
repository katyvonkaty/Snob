import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

class SearchBox extends React.Component {
  state = {
    category: "",
    accessible: "",
  };

  handleChange = (event) => {
    console.log(event.target.value);

    this.setState({ accessible: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.category, this.state.accessible);
  };

  render() {
    return (
      <>


        <Container maxWidth="sm">
        <FormControl
        row
          component="fieldset"
          align="center"
          justify="center"
          onSubmit={this.onFormSubmit}
          style={{textAlign:"center"}}
        >
          <FormLabel component="legend">
            Get even pickier:
          </FormLabel>

          <RadioGroup row aria-label="params" name="params">
            <FormControlLabel
              checked={this.state.accessible === "reservation"}
              // eslint-disable-next-line
              value="reservation"
              onChange={this.handleChange}

              control=<Radio />
              label="reservations accepted"
            />

            <FormControlLabel
              checked={this.state.accessible === "wheelchair_accessible"}
              // eslint-disable-next-line
              value="wheelchair_accessible"
              control=<Radio />
              onChange={this.handleChange}
              label="wheelchair accessible"
            />

            <FormControlLabel
              checked={this.state.accessible === "hot_and_new"}
              // eslint-disable-next-line
              value="hot_and_new"
              control=<Radio />
              onChange={this.handleChange}
              label="hot and new"
            />



          </RadioGroup>
        </FormControl>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={16} sm={12}>
              <form
                autocomplete="off"
                onSubmit={this.onFormSubmit}
                style={{ textAlign: "center", marginTop:"30px" }}
              >
                <div className="field">
                  <div className="text center">
                    <TextField
                      className="tf"
                      id="outlined-basic"
                      type="text"
                      input="Submit"
                      style={{
                        width: "100%",
                        textAlign: "center",
                        margin: "auto",
                        cursor:'pointer'
                      }}
                      size="large"
                      placeholder="what would you like?"
                      value={this.state.category}

                      onChange={(e) =>
                        this.setState({ category: e.target.value })
                      }
                      label="Feed your snobby ass"
                      variant="outlined"
                    />
                  </div>
                </div>
              </form>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default SearchBox;
