
              
import React from "react";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Dialog,
} from '@material-ui/core';
              import PropTypes from "prop-types";
              const DialogComponent = (props) => {
                return <Dialog {...props}><>Dialog</></Dialog>;
              }
              DialogComponent.propList = {/*

*/
BackdropProps:"object",
/*

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
disableBackdropClick:"bool",
/*

*/
disableEscapeKeyDown:"bool",
/*

*/
fullScreen:"bool",
/*

*/
fullWidth:"bool",
/*

*/
onBackdropClick:"func",
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
onEscapeKeyDown:"func",
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
open:"bool",
/*

*/
PaperComponent:"elementType",
/*

*/
PaperProps:"object",
/*

*/
TransitionComponent:"elementType",
/*

*/
TransitionProps:"object"}
              export default DialogComponent
              
              