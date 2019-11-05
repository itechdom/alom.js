
              
import React from "react";
import { withStyles } from "@material-ui/styles";
import theme from "Theme";
import { Formik } from "formik";
import * as Yup from "yup";
import LockIcon from "@material-ui/icons/LockOutlined";
import { Route } from "react-router-dom";
import { styles } from "./ResetPassword.styles";
import ResetPasswordConfirm from "Templates/_shared/ResetPassword/ResetPasswordConfirm";
import queryString from "query-string";
import {
  Button,
  TextField,
  Typography,
  Avatar,
  CssBaseline,
  Paper
} from "@material-ui/core";
              import PropTypes from "prop-types";
              const TextFieldComponent = (props) => {
                return <TextField {...props}><>TextField</></TextField>;
              }
              TextFieldComponent.propList = {/*



*/
autoComplete:"string",
/*

*/
autoFocus:"bool",
/*

*/
children:"node",
/*


*/
classes:"object",
/*

*/
className:"string",
/*

*/
defaultValue:"any",
/*

*/
disabled:"bool",
/*

*/
error:"bool",
/*

*/
FormHelperTextProps:"object",
/*

*/
fullWidth:"bool",
/*

*/
helperText:"node",
/*

*/
hiddenLabel:"bool",
/*


*/
id:"string",
/*

*/
InputLabelProps:"object",
/*




*/
InputProps:"object",
/*

*/
inputProps:"object",
/*

*/
inputRef:"string",
/*

*/
label:"node",
/*

*/
multiline:"bool",
/*

*/
name:"string",
/*

*/
onBlur:"func",
/*




*/
onChange:"func",
/*

*/
onFocus:"func",
/*

*/
placeholder:"string",
/*

*/
required:"bool",
/*


*/
select:"bool",
/*

*/
SelectProps:"object",
/*

*/
type:"string",
/*

*/
value:"any"}
              export default TextFieldComponent
              
              