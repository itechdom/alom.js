
              
import React from "react";
import { withStyles } from "@material-ui/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import LockIcon from "@material-ui/icons/LockOutlined";
import theme from "Theme";
import { styles } from "./ForgotPassword.styles";
import { Route } from "react-router-dom";
import ForgotPasswordConfirm from "Templates/_shared/ForgotPassword/ForgotPasswordConfirm";
import { Button, Typography, Avatar } from "@material-ui/core";
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
              
              