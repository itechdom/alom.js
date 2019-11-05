
              
import React from "react";
import { withStyles } from "@material-ui/styles";
import theme from "Theme";
import { Formik } from "formik";
import * as Yup from "yup";
import LockIcon from "@material-ui/icons/LockOutlined";
import FormFields from "Templates/_shared/Forms/Forms";
import { styles } from "./Login.styles";
import {
  IconButton,
  Button,
  Typography,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Grid,
  Icon,
} from '@material-ui/core';
              import PropTypes from "prop-types";
              const CardComponent = (props) => {
                return <Card {...props}><>Card</></Card>;
              }
              CardComponent.propList = {/*


*/
classes:"object",
/*

*/
className:"string",
/*

*/
raised:"bool"}
              export default CardComponent
              
              