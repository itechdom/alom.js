
              
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ConfirmDeleteModal from "Templates/_shared/ConfirmDeleteModal/ConfirmDeleteModal";
import { withState, compose } from "recompose";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Button,
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
              
              