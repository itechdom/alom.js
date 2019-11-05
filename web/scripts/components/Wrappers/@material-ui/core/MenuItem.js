
              
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
              
              