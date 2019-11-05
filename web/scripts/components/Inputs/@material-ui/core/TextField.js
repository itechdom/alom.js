
              
import React from "react";
import { FastField } from "formik";
import { TextField } from '@material-ui/core';
              import PropTypes from "prop-types";
              const TextFieldComponent = (props) => {
                return <TextField {...props}><>TextField</></TextField>;
              }
              TextFieldComponent.propList = {/*



*/
autoComplete:"string",
/*

*/
autoFocus:"bool",
/*

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
defaultValue:"any",
/*

*/
disabled:"bool",
/*

*/
error:"bool",
/*

*/
FormHelperTextProps:"object",
/*

*/
fullWidth:"bool",
/*

*/
helperText:"node",
/*

*/
hiddenLabel:"bool",
/*


*/
id:"string",
/*

*/
InputLabelProps:"object",
/*




*/
InputProps:"object",
/*

*/
inputProps:"object",
/*

*/
inputRef:"string",
/*

*/
label:"node",
/*

*/
multiline:"bool",
/*

*/
name:"string",
/*

*/
onBlur:"func",
/*




*/
onChange:"func",
/*

*/
onFocus:"func",
/*

*/
placeholder:"string",
/*

*/
required:"bool",
/*


*/
select:"bool",
/*

*/
SelectProps:"object",
/*

*/
type:"string",
/*

*/
value:"any"}
              export default TextFieldComponent
              
              