
              
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
              const TypographyComponent = (props) => {
                return <Typography {...props}><>Typography</></Typography>;
              }
              TypographyComponent.propList = {/*

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
gutterBottom:"bool",
/*




*/
noWrap:"bool",
/*

*/
paragraph:"bool",
/*




*/
variantMapping:"object"}
              export default TypographyComponent
              
              