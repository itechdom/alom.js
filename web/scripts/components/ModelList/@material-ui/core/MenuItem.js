
              
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
              const MenuItemComponent = (props) => {
                return <MenuItem {...props}><>MenuItem</></MenuItem>;
              }
              MenuItemComponent.propList = {/*

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
dense:"bool",
/*

*/
disabled:"bool",
/*

*/
disableGutters:"bool",
/*

*/
role:"string",
/*

*/
selected:"bool",
/*

*/
tabIndex:"number"}
              export default MenuItemComponent
              
              