import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";
import MaterialTable from "material-table";
import { tableData } from "./table.dummy_data";
import { columnDef } from "./column_def";
import { CComponent } from "../../../_components/custom";
import { tableIcons } from "../../../_constants/material_table.icons";
import { getCities } from "./actions";

export class Child3 extends CComponent {
  state = {
    cities: {},
  };

  componentDidMount() {
    // this.props.updateHeader("Sample Table");
    setTimeout(() => this.props.updateHeader("Sample Table with data"), 3000);

    //Api Call Example
    getCities().then((res) => {
      this.updateState({ cities: res }, () => console.log("State", this.state));
    });
  }

  tableActions = [
    {
      icon: "save",
      tooltip: "Save Record",
      onClick: (event, rowData) => alert("You saved " + rowData.name),
    },
    {
      icon: "delete",
      tooltip: "Delete Record",
      onClick: (event, rowData) => alert("You want to delete " + rowData.name),
    },
  ];

  tableOptions = { search: false };

  render() {
    const { classes } = this.props;
    let _columnDef = columnDef;
    _columnDef[3].lookup = this.state.cities;

    return (
      <Paper className={classes.paper}>
        <div style={{ display: "inline-flex" }}>
          <Typography style={{ fontSize: 16 }}>
            Material Table by mrbn
          </Typography>
          <br />
          <br />
          <Typography
            color="primary"
            variant="overline"
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://material-table.com/#/docs/get-started",
                "_blank"
              )
            }
          >
            &nbsp;(click)
          </Typography>
        </div>
        <MaterialTable
          title="Sample Title "
          data={tableData}
          columns={_columnDef}
          actions={this.tableActions}
          options={this.tableOptions}
        />
      </Paper>
    );
  }
}
