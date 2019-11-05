
              
import React from "react";
import { visibleWhenFilter } from "Templates/_shared/Forms/VisibleWhenFilter";
import { styles } from "./Forms.styles";
import { withStyles } from "@material-ui/styles";
import { withState, compose, lifecycle } from "recompose";
// import theme from "Theme";
import RichTextEditor from "react-rte";
import moment from "moment";
import ClientNotification from "Templates/_shared/ClientNotification/ClientNotification";
import Autocomplete from "Templates/_shared/Autocomplete/Autocomplete";
import {
  EditableArray,
  TextFieldInput,
  SelectInput,
  GalleryInput,
  ImageFileInput,
  CheckboxInput
} from "Templates/_shared/Forms/Inputs";
import { CircularProgress, Typography } from "@material-ui/core";
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
              
              