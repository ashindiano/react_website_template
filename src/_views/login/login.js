import {
  Button,
  Grid,
  makeStyles,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import theme from "../../_template/theme";
import AuthService from "../../_services/authorize.service";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    right: 0,
    top: 0,
    width: "100%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    width: 330,
    padding: 30,
    textAlign: "center",
    // borderWidth: "thin",
    // borderStyle: "solid",
    // borderRadius: 4,
    // borderColor: "grey",
  },
});

export default function Login() {
  const classes = useStyles(theme);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    AuthService.authorize(email, password);
    setPassword("asdad");
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
          <Grid container className={classes.login}>
            <Typography
              style={{ width: "inherit", fontSize: 16 }}
              color="primary"
              variant="h6"
            >
              MNSP
            </Typography>
            <TextField
              fullWidth
              required
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div style={{ paddingTop: 20, width: "inherit" }}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </div>
          </Grid>
        </form>
      </div>
    </ThemeProvider>
  );
}
