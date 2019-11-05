import ApolloClient from "apollo-boost";
import { observer } from "mobx-react";
import { observable, action, runInAction, toJS } from "mobx";
import React from "react";
import axios from "axios";
import { ApolloProvider } from "react-apollo";

//export store
export class graphqlDomainStore {
  modelName;
  mapStore = observable.map();
  rootStore;
  SERVER;
  offlineStorage;
  graphqlClient;
  constructor(rootStore, offlineStorage, SERVER) {
    this.rootStore = rootStore;
    if (offlineStorage) {
      this.offlineStorage = offlineStorage;
    }
    this.SERVER = SERVER;
    this.graphqlClient = new ApolloClient(
      `${this.SERVER.host}:${this.SERVER.port}/graphql`
    );
  }
  @action
  getModel(modelName, refresh) {
    //cached data, you don't have to hit up he end point
    if (this.mapStore.get(modelName) && !refresh) {
      return;
    }
    return this.offlineStorage.getItem("jwtToken").then(token => {
      return axios
        .get(`${this.SERVER.host}:${this.SERVER.port}/${modelName}/graphql`, {
          params: { token }
        })
        .then(res => {
          runInAction(() => {
            this.mapStore.set(modelName, res.data);
          });
        })
        .catch(err => {
          runInAction(() => {});
        });
    });
  }
  @action
  setError(err) {
    console.error(err);
  }
}

//determine the theme here and load the right login information?
@observer
export class Graphql extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  componentDidUpdate() {}
  render() {
    let { modelName, children, graphqlDomainStore } = this.props;
    if (modelName) {
      graphqlDomainStore.getModel(modelName, false);
    }
    console.log("rerender graphql service");
    const childrenWithProps = React.Children.map(children, child => {
      return React.cloneElement(child, {
        form: graphqlDomainStore.mapStore.get(modelName),
        getModel: () => graphqlDomainStore.getModel(modelName, true),
        ...this.props,
        ...child.props
      });
    });
    return (
      <React.Fragment>
        <ApolloProvider client={graphqlDomainStore.graphqlClient}>
          {childrenWithProps}
        </ApolloProvider>
      </React.Fragment>
    );
  }
}
