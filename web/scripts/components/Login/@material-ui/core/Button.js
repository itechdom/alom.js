
              
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
              const ButtonComponent = (props) => {
                return <Button {...props}><>Button</></Button>;
              }
              ButtonComponent.propList = {/*

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
disabled:"bool",
/*


*/
disableFocusRipple:"bool",
/*




*/
disableRipple:"bool",
/*

*/
focusVisibleClassName:"string",
/*

*/
fullWidth:"bool",
/*


*/
href:"string",
/*

*/
type:"string"}
              export default ButtonComponent
              
              