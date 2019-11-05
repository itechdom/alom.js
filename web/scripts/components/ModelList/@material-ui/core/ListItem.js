
              
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
              const ListItemComponent = (props) => {
                return <ListItem {...props}><>ListItem</></ListItem>;
              }
              ListItemComponent.propList = {/*


*/
autoFocus:"bool",
/*


*/
button:"bool",
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
ContainerComponent:"elementType",
/*

*/
ContainerProps:"object",
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
divider:"bool",
/*

*/
focusVisibleClassName:"string",
/*

*/
selected:"bool"}
              export default ListItemComponent
              
              