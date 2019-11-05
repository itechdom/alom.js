
              
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
              const CardActionsComponent = (props) => {
                return <CardActions {...props}><>CardActions</></CardActions>;
              }
              CardActionsComponent.propList = {/*

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
disableSpacing:"bool"}
              export default CardActionsComponent
              
              