import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";
import MaterialTable from "material-table";
import { tableData } from "./table.dummy_data";
import { columnDef } from "./column_def";
import { tableIcons } from "../../../_constants/material_table.icons";

export class Child3 extends Component {
  componentDidMount() {
    this.props.updateHeader("Child 3");
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
          icons={tableIcons}
          title="Sample Title "
          data={tableData}
          columns={columnDef}
          actions={this.tableActions}
          options={this.tableOptions}
        />
      </Paper>
    );
  }
}
