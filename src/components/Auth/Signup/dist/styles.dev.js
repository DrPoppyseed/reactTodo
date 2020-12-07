"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  pageTitle: {
    marginTop: 150
  },
  box: {
    marginTop: 20,
    width: 350
  },
  form: {
    marginTop: 20
  },
  textfield: {
    marginTop: 10,
    width: '100%'
  },
  googleButton: {
    marginTop: 20,
    width: '100%'
  },
  button: {
    height: 50,
    marginTop: 40,
    width: '100%'
  },
  linkContainer: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  link: {
    textDecoration: 'none'
  }
});
var _default = useStyles;
exports["default"] = _default;