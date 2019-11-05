
              
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
              const ToolbarComponent = (props) => {
                return <Toolbar {...props}><>Toolbar</></Toolbar>;
              }
              ToolbarComponent.propList = {/*

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
disableGutters:"bool"}
              export default ToolbarComponent
              
              