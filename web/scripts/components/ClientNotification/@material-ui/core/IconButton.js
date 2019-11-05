
              
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import WarningIcon from "@material-ui/icons/Warning";
// import theme from "Theme";
import { withStyles } from "@material-ui/styles";
import { IconButton, Snackbar, SnackbarContent } from "@material-ui/core";
              ;
              const IconButtonComponent = (props) => {
                return <IconButton {...props}><>IconButton</></IconButton>;
              }
              IconButtonComponent.propList = {/*


*/
classes:"object",
/*

*/
className:"string",
/*

*/
disabled:"bool",
/*


*/
disableFocusRipple:"bool",
/*

*/
disableRipple:"bool"}
              export default IconButtonComponent
              
              