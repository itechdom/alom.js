import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import { homeRouteList } from "./Routes";
import { Media, Forms, Notification, Crud } from "@markab.io/react";
import Loading from "Templates/_shared/Loading/Loading";
import withOrbital from "../Orbital/withOrbital";
import * as Templates from "./scripts/components";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import config from "Config";
const loginBG = "https://orbital-clients.s3.amazonaws.com/login-bg.jpg";
const registerBG = "https://orbital-clients.s3.amazonaws.com/register-bg.jpg";
const logo = "https://orbital-clients.s3.amazonaws.com/_Main/Markab-KB.svg";
const User = Loadable({
  loader: () =>
    import(/* webpackChunkName: "User" */ "../Orbital/User/User.js"),
  loading: err => <Loading err={err} logo={logo} />
});
import Home from "./Home/Home";
import Morkab from "./Morkab/";
const HomeWrapper = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "HomeWrapper" */ "./Templates/Wrappers/HomeWrapper"
    ),
  loading: err => <Loading err={err} logo={logo} />
});
const renderElement = el => {
  try {
    return React.createElement(el);
  } catch (err) {
    console.error("ORBITAL ERROR:", err);
    return <>{`Error`}</>;
  }
};
const App = ({
  isLoggedIn,
  offlineStorage,
  user,
  onLogout,
  selectedRoute,
  classes
}) => {
  const gridSizes = {
    xs: 12,
    sm: 12,
    md: 3,
    lg: 3,
    xl: 3
  };
  return (
    <>
      <Route
        path="/users"
        render={({ location, match, history }) => {
          return (
            <HomeWrapper
              routeList={homeRouteList}
              location={location}
              match={match}
              history={history}
              auth={isLoggedIn}
              user={user}
              logo={logo}
              hasPadding={true}
              onLogout={onLogout}
              crudDomainStore={rootStore.crudDomainStore}
            >
              <Crud
                modelName="users"
                SERVER={config.SERVER}
                offlineStorage={offlineStorage}
                notificationDomainStore={rootStore.notificationDomainStore}
              >
                <Forms formsDomainStore={rootStore.formsDomainStore}>
                  <Notification
                    notificationDomainStore={rootStore.notificationDomainStore}
                  >
                    <Media
                      extension="image/jpg"
                      mediaDomainStore={rootStore.mediaDomainStore}
                    >
                      <User
                        crudDomainStore={rootStore.crudDomainStore}
                        location={location}
                        match={match}
                        history={history}
                        gridSizes={gridSizes}
                      />
                    </Media>
                  </Notification>
                </Forms>
              </Crud>
            </HomeWrapper>
          );
        }}
      />
      <Route
        path="/morkab"
        render={({ location, match, history }) => {
          return (
            <Unsplash unsplashDomainStore={rootStore.unsplashDomainStore}>
              <Kb modelName="knowledge" kbDomainStore={rootStore.kbDomainStore}>
                <Crud
                  modelName="knowledge"
                  SERVER={config.SERVER}
                  offlineStorage={offlineStorage}
                  notificationDomainStore={rootStore.notificationDomainStore}
                >
                  <Forms formsDomainStore={rootStore.formsDomainStore}>
                    <Notification
                      notificationDomainStore={
                        rootStore.notificationDomainStore
                      }
                    >
                      <Media
                        mediaDomainStore={rootStore.mediaDomainStore}
                        extension="image/jpg"
                      >
                        <Morkab
                          isLoggedIn={isLoggedIn}
                          rootStore={rootStore}
                          location={location}
                          match={match}
                          history={history}
                          gridSizes={gridSizes}
                          Templates={Templates}
                        />
                      </Media>
                    </Notification>
                  </Forms>
                </Crud>
              </Kb>
            </Unsplash>
          );
        }}
      />
      <Route
        path="/"
        exact
        render={({ location, history, match }) => {
          const templateNames = Object.keys(Templates).map(
            compName => compName
          );
          let lib = {};
          templateNames.map(compName => {
            lib[compName] = Templates[compName];
          });
          return (
            <HomeWrapper
              routeList={homeRouteList}
              location={location}
              match={match}
              history={history}
              auth={isLoggedIn}
              user={user}
              logo={logo}
              onLogout={onLogout}
              crudDomainStore={rootStore.crudDomainStore}
            >
              {Object.keys(lib).map(library => {
                let Comps = lib[library];
                return (
                  <Grid container direction="column">
                    <Typography>{library}</Typography>
                    <Grid container spacing={2} direction="row">
                      {Object.keys(Comps).map(compName => {
                        return (
                          <Grid item md={6}>
                            <Card>
                              <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                  {compName}
                                </Typography>
                                {renderElement(Comps[compName])}
                              </CardContent>
                            </Card>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                );
              })}
            </HomeWrapper>
          );
        }}
      />
    </>
  );
};
// console.log(withOrbital({ loginBG, registerBG, routeList: homeRouteList }));
export default withOrbital({
  loginBG,
  registerBG,
  routeList: homeRouteList,
  rootStore,
  gaTrackingCode: "UA-147130682-7",
  disableAuth: true
})(App);
