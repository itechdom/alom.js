
              
import React from "react";
import { Typography, TextField, Button, Icon, Chip } from "@material-ui/core";
import { withState, compose } from "recompose";
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
              
              