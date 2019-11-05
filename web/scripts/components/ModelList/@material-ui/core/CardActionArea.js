
              
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
              const CardActionAreaComponent = (props) => {
                return <CardActionArea {...props}><>CardActionArea</></CardActionArea>;
              }
              CardActionAreaComponent.propList = {/*

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
focusVisibleClassName:"string"}
              export default CardActionAreaComponent
              
              