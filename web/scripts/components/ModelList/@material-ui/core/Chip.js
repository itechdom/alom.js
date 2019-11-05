
              
import React from "react";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ConfirmDeleteModal from "Templates/_shared/ConfirmDeleteModal/ConfirmDeleteModal";
import moment from "moment";
import { withState, compose } from "recompose";
import {
  Chip,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton,
  Divider,
  Grid
} from "@material-ui/core";
              import PropTypes from "prop-types";
              const ChipComponent = (props) => {
                return <Chip {...props}><>Chip</></Chip>;
              }
              ChipComponent.propList = {/*

*/
avatar:"element",
/*


*/
children:"string",
/*


*/
classes:"object",
/*

*/
className:"string",
/*





*/
clickable:"bool",
/*


*/
component:"elementType",
/*

*/
deleteIcon:"element",
/*

*/
icon:"element",
/*

*/
label:"node",
/*

*/
onClick:"func",
/*


*/
onDelete:"func",
/*

*/
onKeyDown:"func",
/*

*/
onKeyUp:"func"}
              export default ChipComponent
              
              