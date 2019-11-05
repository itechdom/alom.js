
              
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
              const MenuComponent = (props) => {
                return <Menu {...props}><>Menu</></Menu>;
              }
              MenuComponent.propList = {/*

*/
autoFocus:"bool",
/*

*/
children:"node",
/*


*/
classes:"object",
/*


*/
disableAutoFocusItem:"bool",
/*

*/
MenuListProps:"object",
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
open:"bool",
/*

*/
PaperProps:"object",
/*

*/
PopoverClasses:"object"}
              export default MenuComponent
              
              