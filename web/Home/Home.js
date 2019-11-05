import React from "react";
import theme from "Theme";
import ModelList from "Templates/_shared/ModelList/ModelList";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./Home.styles";
import _ from "lodash";

const Home = ({
  classes,
  logo,
  title,
  isLoggedIn,
  onSignUp,
  onDashboard,
  location,
  match,
  history,
  searchModels,
  ...rest
}) => {
  return (
    <ModelList
      classes={classes}
      location={location}
      match={match}
      history={history}
      noPagination={true}
      modelKey={"title"}
      defaultView={
        <>
          <img
            style={{ marginTop: "2em" }}
            width="200px"
            height="auto"
            src={logo}
          />
        </>
      }
      onSearch={query => {
        const promises = searchModels(query, ["products", "events"]);
        return Promise.all(promises).then(res =>
          _.flatten(res.map(a => a.res))
        );
      }}
    />
  );
};

export default withStyles(styles, { defaultTheme: theme })(Home);
