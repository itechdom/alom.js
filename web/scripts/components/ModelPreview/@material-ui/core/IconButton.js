
              
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ImageGallery from "react-image-gallery";
import ConfirmDeleteModal from "Templates/_shared/ConfirmDeleteModal/ConfirmDeleteModal";
import "react-image-gallery/styles/css/image-gallery.css";
import { withState, compose } from "recompose";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableRow,
  IconButton,
  Typography,
} from '@material-ui/core';
              import PropTypes from "prop-types";
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
              
              