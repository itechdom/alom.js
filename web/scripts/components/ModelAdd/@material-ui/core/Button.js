
              
import React from "react";
import { Formik } from "formik";
import FormFields from "Templates/_shared/Forms/Forms";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Icon,
  Typography
} from "@material-ui/core";
import validate from "Templates/_shared/Forms/Forms.Validate";
import { toJS } from "mobx";
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
              
              