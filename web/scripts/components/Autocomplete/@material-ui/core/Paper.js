
              
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
              const PaperComponent = (props) => {
                return <Paper {...props}><>Paper</></Paper>;
              }
              PaperComponent.propList = {/*

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
elevation:"number",
/*

*/
square:"bool"}
              export default PaperComponent
              
              