
              
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
              const AvatarComponent = (props) => {
                return <Avatar {...props}><>Avatar</></Avatar>;
              }
              AvatarComponent.propList = {/*


*/
alt:"string",
/*





*/
children:"node",
/*



*/
childrenClassName:"string",
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
imgProps:"object",
/*

*/
sizes:"string",
/*

*/
src:"string",
/*

*/
srcSet:"string"}
              export default AvatarComponent
              
              