
              
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
              const CardComponent = (props) => {
                return <Card {...props}><>Card</></Card>;
              }
              CardComponent.propList = {/*


*/
classes:"object",
/*

*/
className:"string",
/*

*/
raised:"bool"}
              export default CardComponent
              
              