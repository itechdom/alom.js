
              
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
              const TabComponent = (props) => {
                return <Tab {...props}><>Tab</></Tab>;
              }
              TabComponent.propList = {/*


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
disabled:"bool",
/*


*/
disableFocusRipple:"bool",
/*

*/
disableRipple:"bool",
/*

*/
fullWidth:"bool",
/*

*/
icon:"node",
/*



*/
indicator:"node",
/*

*/
label:"node",
/*

*/
onChange:"func",
/*

*/
onClick:"func",
/*

*/
selected:"bool",
/*

*/
value:"any",
/*


*/
wrapped:"bool"}
              export default TabComponent
              
              