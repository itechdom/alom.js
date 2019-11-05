
              
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
              const CardContentComponent = (props) => {
                return <CardContent {...props}><>CardContent</></CardContent>;
              }
              CardContentComponent.propList = {/*


*/
classes:"object",
/*

*/
className:"string",
/*


*/
component:"elementType"}
              export default CardContentComponent
              
              