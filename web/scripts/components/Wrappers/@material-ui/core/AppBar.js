
              
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
              const AppBarComponent = (props) => {
                return <AppBar {...props}><>AppBar</></AppBar>;
              }
              AppBarComponent.propList = {//
// | These PropTypes are generated from the TypeScript type definitions |
// |     To update them edit the d.ts file and run "yarn proptypes"     |
// ----------------------------------------------------------------------

/**
 * The content of the component.
 */
children:"node",
/*


*/
classes:"object",
/*

*/
className:"string"}
              export default AppBarComponent
              
              