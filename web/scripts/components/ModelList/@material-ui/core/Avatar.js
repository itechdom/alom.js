
              
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
              const AvatarComponent = (props) => {
                return <Avatar {...props}><>Avatar</></Avatar>;
              }
              AvatarComponent.propList = {/*


*/
alt:"string",
/*





*/
children:"node",
/*



*/
childrenClassName:"string",
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
imgProps:"object",
/*

*/
sizes:"string",
/*

*/
src:"string",
/*

*/
srcSet:"string"}
              export default AvatarComponent
              
              