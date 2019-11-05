
              
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
              
              