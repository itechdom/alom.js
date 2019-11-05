
              
import React from "react";
import { toJS } from "mobx";
import { Formik } from "formik";
import FormFields from "Templates/_shared/Forms/Forms";
import validate from "Templates/_shared/Forms/Forms.Validate";
import { Card, CardActions, CardContent, Button, Icon, Typography, CircularProgress } from "@material-ui/core";
import Loading from "Templates/_shared/Loading/Loading";
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
              
              