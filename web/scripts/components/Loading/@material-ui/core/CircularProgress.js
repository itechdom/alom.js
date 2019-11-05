
              
import React from "react";
// import theme from "Theme";
import { withStyles } from "@material-ui/styles";
import { styles } from "./Loading.styles";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
              import PropTypes from "prop-types";
              const CircularProgressComponent = (props) => {
                return <CircularProgress {...props}><>CircularProgress</></CircularProgress>;
              }
              CircularProgressComponent.propList = {/*


*/
classes:"object",
/*

*/
className:"string",
/*

*/
style:"object",
/*

*/
thickness:"number",
/*


*/
value:"number"}
              export default CircularProgressComponent
              
              