
              
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
              const TabsComponent = (props) => {
                return <Tabs {...props}><>Tabs</></Tabs>;
              }
              TabsComponent.propList = {/*






*/
action:"string",
/*


*/
centered:"bool",
/*

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
onChange:"func",
/*

*/
ScrollButtonComponent:"elementType",
/*

*/
TabIndicatorProps:"object",
/*


*/
value:"any"}
              export default TabsComponent
              
              