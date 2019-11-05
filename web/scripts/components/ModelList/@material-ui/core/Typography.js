
              
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
              const TypographyComponent = (props) => {
                return <Typography {...props}><>Typography</></Typography>;
              }
              TypographyComponent.propList = {/*

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
gutterBottom:"bool",
/*




*/
noWrap:"bool",
/*

*/
paragraph:"bool",
/*




*/
variantMapping:"object"}
              export default TypographyComponent
              
              