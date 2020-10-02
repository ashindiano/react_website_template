import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { compose } from "recompose";

import { Child1 } from "./child1";
import { templateActions } from "../../../_actions";
import theme from "../../../_template/theme";
const styles = {
  paper: {
    minHeight: 300,
    padding: 10,
    border: "solid",
    borderColor: theme.palette.primary.main,
  },
};

function mapStateToProps(state) {
  return {};
}

const actionCreators = {
  updateHeader: templateActions.updateHeader,
};

const Child1Container = compose(
  withStyles(styles),
  connect(mapStateToProps, actionCreators)
)(Child1);

export default Child1Container;
