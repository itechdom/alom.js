
              
import React, { Children } from "react";
import classNames from "classnames";
import MenuIcon from "@material-ui/icons/Menu";
import { compose, withState } from "recompose";
import { Routes } from "Templates/Wrappers/Routes";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Hidden,
  Tabs,
  Tab,
  Drawer,
  Icon
} from "@material-ui/core";
              import PropTypes from "prop-types";
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
              
              