
              
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
              const TooltipComponent = (props) => {
                return <Tooltip {...props}><>Tooltip</></Tooltip>;
              }
              TooltipComponent.propList = {/*

*/
children:"string",
/*


*/
classes:"object",
/*

*/
disableFocusListener:"bool",
/*

*/
disableHoverListener:"bool",
/*

*/
disableTouchListener:"bool",
/*


*/
enterDelay:"number",
/*

*/
enterTouchDelay:"number",
/*



*/
id:"string",
/*


*/
interactive:"bool",
/*


*/
leaveDelay:"number",
/*

*/
leaveTouchDelay:"number",
/*



*/
onClose:"func",
/*



*/
onOpen:"func",
/*

*/
open:"bool",
/*

*/
PopperProps:"object",
/*

*/
title:"node",
/*

*/
TransitionComponent:"elementType",
/*

*/
TransitionProps:"object"}
              export default TooltipComponent
              
              