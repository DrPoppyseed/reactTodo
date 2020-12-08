import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";

import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";

import { signInGoogle, signUpWithEmail } from "../../../actions";

const SignUp = () => {
  const { register, handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  // useEffect(() => {
  // 	if (loading) return <CircularProgress />
  // }, [loading])

  const onGLoginSuccess = () => {
    console.log("nice!");
  };

  const onGLoginFailure = () => {
    console.log("damn!");
  };

  const handleClickShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const onSubmit = (data) => {
    dispatch(signUpWithEmail(data));
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography className={classes.pageTitle} variant="h6">
        Sign Up
      </Typography>

      <Box className={classes.box}>
        <div>
          <GoogleLogin
            clientId="774362943221-5jbo5hupldlijbt777jmlgcs0nmtohsu.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onGLoginSuccess}
            onFailure={onGLoginFailure}
            cookiePolicy={"single_host_origin"}
            className={classes.googleButton}
          />
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              name="email"
              label="email"
              type="text"
              inputRef={register}
              className={classes.textfield}
              autoComplete="username"
              variant="outlined"
              control={control}
              defaultValue=""
              required
            />
            <TextField
              type={showPassword ? "text" : "password"}
              variant="outlined"
              inputRef={register}
              name="password"
              label="password"
              className={classes.textfield}
              autoComplete="new-password"
              control={control}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              disabled={isLoading ? true : false}
            >
              {isLoading ? <CircularProgress /> : "Sign Up"}
            </Button>
            <div className={classes.linkContainer}>
              <Link
                component={RouterLink}
                to="/auth/signin"
                className={classes.link}
              >
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </Box>
    </Container>
  );
};

export default SignUp;
