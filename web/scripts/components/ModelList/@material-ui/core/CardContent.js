
              
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
              const CardContentComponent = (props) => {
                return <CardContent {...props}><>CardContent</></CardContent>;
              }
              CardContentComponent.propList = {/*


*/
classes:"object",
/*

*/
className:"string",
/*


*/
component:"elementType"}
              export default CardContentComponent
              
              