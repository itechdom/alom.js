
              
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
// import theme from "Theme";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { styles, toolbarStyles } from "./Table.styles";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip
} from "@material-ui/core";
              ;
              const TooltipComponent = (props) => {
                return <Tooltip {...props}><>Tooltip</></Tooltip>;
              }
              TooltipComponent.propList = {/*

*/
children:"string",
/*


*/
classes:"object",
/*

*/
disableFocusListener:"bool",
/*

*/
disableHoverListener:"bool",
/*

*/
disableTouchListener:"bool",
/*


*/
enterDelay:"number",
/*

*/
enterTouchDelay:"number",
/*



*/
id:"string",
/*


*/
interactive:"bool",
/*


*/
leaveDelay:"number",
/*

*/
leaveTouchDelay:"number",
/*



*/
onClose:"func",
/*



*/
onOpen:"func",
/*

*/
open:"bool",
/*

*/
PopperProps:"object",
/*

*/
title:"node",
/*

*/
TransitionComponent:"elementType",
/*

*/
TransitionProps:"object"}
              export default TooltipComponent
              
              