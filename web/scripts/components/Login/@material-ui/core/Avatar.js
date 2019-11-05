
              
import React from "react";
import { withStyles } from "@material-ui/styles";
import theme from "Theme";
import { Formik } from "formik";
import * as Yup from "yup";
import LockIcon from "@material-ui/icons/LockOutlined";
import FormFields from "Templates/_shared/Forms/Forms";
import { styles } from "./Login.styles";
import {
  IconButton,
  Button,
  Typography,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Grid,
  Icon,
} from '@material-ui/core';
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
              
              