
              
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
              
              