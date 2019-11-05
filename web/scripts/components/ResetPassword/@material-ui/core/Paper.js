
              
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
              const PaperComponent = (props) => {
                return <Paper {...props}><>Paper</></Paper>;
              }
              PaperComponent.propList = {/*

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
component:"elementType",
/*


*/
elevation:"number",
/*

*/
square:"bool"}
              export default PaperComponent
              
              