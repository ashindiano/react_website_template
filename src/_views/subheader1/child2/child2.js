import React, { Component } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { LineGraph } from "./line_graph";
import { lineGraphData } from "./line_graph.dummy_data";
import { barGraphData } from "./bar_graph_dummy_data";
import { BarGraph } from "./bar_graph";

export class Child2 extends Component {
  componentDidMount() {
    this.props.updateHeader("Child 2");
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <div style={{ display: "inline-flex" }}>
          <Typography variant="h6">Nivo Graphs</Typography>
          <Typography
            color="primary"
            variant="overline"
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://nivo.rocks/", "_blank")}
          >
            &nbsp;(click)
          </Typography>
        </div>
        <Grid container>
          <Grid item lg={6} md={6} xs={12}>
            <div style={{ height: 400 }}>
              <LineGraph data={lineGraphData} />
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div style={{ height: 400 }}>
              <BarGraph data={barGraphData} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
