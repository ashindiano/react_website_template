import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { compose } from "recompose";

import Login from "./login_page";

const styles = {
  paper: {
    minHeight: 600,
    padding: 10,
  },
};

function mapStateToProps(state) {
  return {};
}

const actionCreators = {};

const LoginContainer = compose(
  withStyles(styles),
  connect(mapStateToProps, actionCreators)
)(Login);

export default LoginContainer;
