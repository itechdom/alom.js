
              
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
              const SnackbarComponent = (props) => {
                return <Snackbar {...props}><>Snackbar</></Snackbar>;
              }
              SnackbarComponent.propList = {/*

*/
action:"node",
/*




*/
autoHideDuration:"number",
/*

*/
children:"element",
/*


*/
classes:"object",
/*

*/
className:"string",
/*

*/
ClickAwayListenerProps:"object",
/*

*/
ContentProps:"object",
/*

*/
disableWindowBlurListener:"bool",
/*




*/
key:"any",
/*

*/
message:"node",
/*








*/
onClose:"func",
/*

*/
onEnter:"func",
/*

*/
onEntered:"func",
/*

*/
onEntering:"func",
/*

*/
onExit:"func",
/*

*/
onExited:"func",
/*

*/
onExiting:"func",
/*

*/
onMouseEnter:"func",
/*

*/
onMouseLeave:"func",
/*

*/
open:"bool",
/*




*/
resumeHideDuration:"number",
/*

*/
TransitionComponent:"elementType",
/*

*/
TransitionProps:"object"}
              export default SnackbarComponent
              
              