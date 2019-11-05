
              
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
              const CheckboxComponent = (props) => {
                return <Checkbox {...props}><>Checkbox</></Checkbox>;
              }
              CheckboxComponent.propList = {/*

*/
checked:"bool",
/*

*/
checkedIcon:"node",
/*


*/
classes:"object",
/*

*/
disabled:"bool",
/*

*/
disableRipple:"bool",
/*

*/
icon:"node",
/*

*/
id:"string",
/*




*/
indeterminate:"bool",
/*

*/
indeterminateIcon:"node",
/*

*/
inputProps:"object",
/*

*/
inputRef:"string",
/*




*/
onChange:"func",
/*

*/
required:"bool",
/*

*/
type:"string",
/*

*/
value:"any"}
              export default CheckboxComponent
              
              