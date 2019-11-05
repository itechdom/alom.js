
              
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
              const MenuComponent = (props) => {
                return <Menu {...props}><>Menu</></Menu>;
              }
              MenuComponent.propList = {/*

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
disableAutoFocusItem:"bool",
/*

*/
MenuListProps:"object",
/*




*/
onClose:"func",
/*

*/
onEnter:"func",
/*

*/
onEntered:"func",
/*

*/
onEntering:"func",
/*

*/
onExit:"func",
/*

*/
onExited:"func",
/*

*/
onExiting:"func",
/*

*/
open:"bool",
/*

*/
PaperProps:"object",
/*

*/
PopoverClasses:"object"}
              export default MenuComponent
              
              