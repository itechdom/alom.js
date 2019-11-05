
              
import React from "react";
//Routing
import { Route } from "react-router-dom";
import { styles } from "./ModelList.styles";
import { withStyles } from "@material-ui/styles";
//infinite scroller
import infiniteScroll from "react-infinite-scroller";
import Loading from "Templates/_shared/Loading/Loading";
import Empty from "Templates/_shared/Empty/Empty";
// import theme from "Theme";

//recompose
import { withState, compose, lifecycle } from "recompose";
//Different template pages
import ModelAdd from "Templates/_shared/ModelAdd/ModelAdd";
import ModelEdit from "Templates/_shared/ModelEdit/ModelEdit";
import ModelPreview from "Templates/_shared/ModelPreview/ModelPreview";
import ModelListItems from "Templates/_shared/ModelList/ModelListItems";
//shared components
import FloatingAddButton from "Templates/_shared/FloatingAddButton/FloatingAddButton";
import ClientNotification from "Templates/_shared/ClientNotification/ClientNotification";
import Autocomplete from "Templates/_shared/Autocomplete/Autocomplete";
import Table from "Templates/_shared/Table/Table";
import {
  Paper,
  AppBar,
  Toolbar,
  Grid,
  TablePagination,
  Fade
} from "@material-ui/core";
              import PropTypes from "prop-types";
              const FadeComponent = (props) => {
                return <Fade {...props}><>Fade</></Fade>;
              }
              FadeComponent.propList = {/*

*/
children:"element",
/*

*/
in:"bool",
/*

*/
onEnter:"func",
/*

*/
onExit:"func",
/*

*/
style:"object"}
              export default FadeComponent
              
              