
              
import React from "react";
// import theme from "Theme";
import PropTypes from "prop-types";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import { styles } from "./Autocomplete.styles";
import { withStyles } from "@material-ui/styles";
import { throttle } from "lodash";
import { TextField, Paper, MenuItem } from "@material-ui/core";
              ;
              const MenuItemComponent = (props) => {
                return <MenuItem {...props}><>MenuItem</></MenuItem>;
              }
              MenuItemComponent.propList = {/*

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
component:"elementType",
/*

*/
dense:"bool",
/*

*/
disabled:"bool",
/*

*/
disableGutters:"bool",
/*

*/
role:"string",
/*

*/
selected:"bool",
/*

*/
tabIndex:"number"}
              export default MenuItemComponent
              
              