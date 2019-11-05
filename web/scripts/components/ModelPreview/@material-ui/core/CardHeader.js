
              
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
              const CardHeaderComponent = (props) => {
                return <CardHeader {...props}><>CardHeader</></CardHeader>;
              }
              CardHeaderComponent.propList = {/*

*/
action:"node",
/*

*/
avatar:"node",
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
disableTypography:"bool",
/*

*/
subheader:"node",
/*


*/
subheaderTypographyProps:"object",
/*

*/
title:"node",
/*


*/
titleTypographyProps:"object"}
              export default CardHeaderComponent
              
              