
              
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
              const HiddenComponent = (props) => {
                return <Hidden {...props}><>Hidden</></Hidden>;
              }
              HiddenComponent.propList = {/*

*/
children:"node",
/*

*/
className:"string",
/*

*/
lgDown:"bool",
/*

*/
lgUp:"bool",
/*

*/
mdDown:"bool",
/*

*/
mdUp:"bool",
/*

*/
smDown:"bool",
/*

*/
smUp:"bool",
/*

*/
xlDown:"bool",
/*

*/
xlUp:"bool",
/*

*/
xsDown:"bool",
/*

*/
xsUp:"bool"}
              export default HiddenComponent
              
              