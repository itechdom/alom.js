
              
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
              const ListItemTextComponent = (props) => {
                return <ListItemText {...props}><>ListItemText</></ListItemText>;
              }
              ListItemTextComponent.propList = {/*

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
disableTypography:"bool",
/*


*/
inset:"bool",
/*

*/
primary:"node",
/*


*/
primaryTypographyProps:"object",
/*

*/
secondary:"node",
/*


*/
secondaryTypographyProps:"object"}
              export default ListItemTextComponent
              
              