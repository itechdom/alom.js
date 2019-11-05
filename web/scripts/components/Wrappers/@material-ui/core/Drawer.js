
              
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
              const DrawerComponent = (props) => {
                return <Drawer {...props}><>Drawer</></Drawer>;
              }
              DrawerComponent.propList = {/*

*/
BackdropProps:"object",
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
elevation:"number",
/*

*/
ModalProps:"object",
/*



*/
onClose:"func",
/*

*/
open:"bool",
/*

*/
PaperProps:"object",
/*

*/
SlideProps:"object"}
              export default DrawerComponent
              
              