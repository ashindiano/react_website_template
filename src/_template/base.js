import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import { Link, Typography, Hidden, CssBaseline } from "@material-ui/core";
import Navigator from "./navigator";
import Header from "./header";
import theme from "./theme";
import { bodyRoutes } from "../_helpers";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Purtainet</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 256;

const styles = {
  root: {
    display: "fixed",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    padding: theme.spacing(2, 2),
    background: "#eaeff1",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    height: "100vh",
    [theme.breakpoints.up("md")]: {
      marginLeft: drawerWidth,
    },
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    padding: theme.spacing(2),
    background: "#eaeff1",
  },
};

class Base extends Component {
  render() {
    const { classes, open, account } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            <Hidden mdUp implementation="js">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={open}
              />
            </Hidden>
            <Hidden smDown implementation="css">
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden>
          </nav>
          <div className={classes.app}>
            <Header logout={this.props.logout} account={account} />
            <main className={classes.main}>{bodyRoutes()}</main>
            <footer className={classes.footer}>
              <Copyright />
            </footer>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

function mapState(state) {
  return { open: state.template.open };
}
const actionCreators = {};

export default compose(
  withStyles(styles),
  connect(mapState, actionCreators)
)(Base);
