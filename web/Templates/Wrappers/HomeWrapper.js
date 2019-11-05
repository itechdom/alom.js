import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import theme from "Theme";
import { styles } from "./HomeWrapper.styles";
import { compose, withState } from "recompose";
import {
  withStyles,
  AppBar,
  Grid,
  Tabs,
  Tab,
  IconButton,
  Icon,
  Menu,
  MenuItem,
  Tooltip,
  Drawer
} from "@material-ui/core";
const enhance = compose(
  withState("headerTitle", "setHeaderTitle"),
  withState("drawerLeftOpen", "setDrawerLeftOpen", true),
  withState("drawerRightOpen", "setDrawerRightOpen", true)
);

class HomeWrapper extends React.Component {
  state = {
    anchorEl: null,
    value: 0
  };

  componentDidMount() {
    let route = this.props.routeList.find(({ name, url }) => {
      return url.indexOf(this.props.match.path.replace("/", "/")) !== -1;
    });
    this.setState({ value: this.props.routeList.indexOf(route) });
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleTabChange = (event, value) => {
    this.setState({ value });
    this.props.history.push(this.props.routeList[value].url);
  };

  render() {
    const {
      classes,
      children,
      history,
      auth,
      user,
      logo,
      onLogout,
      routeList,
      drawerLeftList,
      drawerRightList,
      withDrawers
    } = this.props;
    const {
      anchorEl,
      drawerLeftOpen,
      setDrawerLeftOpen,
      drawerRightOpen,
      setDrawerRightOpen
    } = this.state;
    const isAnchor = Boolean(anchorEl);
    const childrenWithProps = React.Children.map(children, child => {
      return React.cloneElement(child, { ...this.props, ...child.props });
    });
    return (
      <>
        <AppBar color="default" className={classNames(classes.appBar)}>
          <Grid container>
            <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
              <Grid container justify="center">
                <img
                  style={{ marginTop: "10px" }}
                  src={logo}
                  width="60px"
                  height="auto"
                />
              </Grid>
            </Grid>
            <Grid xs={12} sm={12} md={11} lg={11} xl={11} item>
              <Grid container>
                <Grid item xs={8}>
                  <Tabs
                    className={classes.tabs}
                    value={this.state.value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleTabChange}
                  >
                    {routeList.map((route, index) => {
                      return (
                        <Tab
                          key={index}
                          icon={<Icon>{route.icon}</Icon>}
                          label={route.name}
                        />
                      );
                    })}
                  </Tabs>
                </Grid>
                <Grid style={{ position: "relative", top: "15px" }} item xs={4}>
                  {auth && (
                    <>
                      <Tooltip
                        style={{ float: "right" }}
                        title={(user && user.name) || ""}
                      >
                        <IconButton
                          aria-owns={isAnchor ? "menu-appbar" : null}
                          aria-haspopup="true"
                          onClick={this.handleMenu}
                          color="inherit"
                        >
                          <img
                            style={{ borderRadius: "30px" }}
                            src={
                              user.image
                                ? user.image
                                : "https://via.placeholder.com/50"
                            }
                            width={"40px"}
                            height={"auto"}
                          />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left"
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right"
                        }}
                        open={isAnchor}
                        onClose={this.handleMenuClose}
                      >
                        <MenuItem
                          onClick={event => {
                            this.handleMenuClose(event);
                            history.push("/profile");
                          }}
                        >
                          Profile
                        </MenuItem>
                        <MenuItem
                          onClick={event => {
                            this.handleMenuClose(event);
                            history.push("/settings");
                          }}
                        >
                          Settings
                        </MenuItem>
                        <MenuItem
                          onClick={event => {
                            onLogout();
                            this.handleMenuClose(event);
                            history.push("/auth/login");
                          }}
                        >
                          Log out
                        </MenuItem>
                      </Menu>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
        {withDrawers && (
          <>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawerLeftList}
            </Drawer>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="right"
              open={open}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawerRightList}
            </Drawer>
          </>
        )}
        <main className={classes.root}>
          <>{childrenWithProps}</>
        </main>
      </>
    );
  }
}

HomeWrapper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { defaultTheme: theme })(
  enhance(HomeWrapper)
);
