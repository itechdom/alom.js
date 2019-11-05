
              
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
              const TypographyComponent = (props) => {
                return <Typography {...props}><>Typography</></Typography>;
              }
              TypographyComponent.propList = {/*

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
gutterBottom:"bool",
/*




*/
noWrap:"bool",
/*

*/
paragraph:"bool",
/*




*/
variantMapping:"object"}
              export default TypographyComponent
              
              