
              
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  Typography,
  Avatar,
  Icon,
  Grid
} from "@material-ui/core";
import theme from "Theme";
import { withStyles } from "@material-ui/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import FormFields from "Templates/_shared/Forms/Forms";
import { styles } from "./Register.styles";
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
              
              