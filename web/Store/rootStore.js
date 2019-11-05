//Store config
import { unsplashDomainStore } from "../../../orbital-react-services/unsplash-service/unsplash-service";
import { kbDomainStore } from "../../../orbital-react-services/kb-service/kb-service";
import config from "Config";
import offlineStorage from "../OfflineStorage/OfflineStorage";
import {
  Crud,
  Media,
  Forms,
  Notification,
  EventWithCrud,
  authDomainStore,
  authUiStore,
  socketDomainStore,
  adminDomainStore,
  mediaDomainStore,
  formsDomainStore,
  notificationDomainStore,
  crudDomainStore
} from "@markab.io/react";
import Store from "./Store";
const rootStore = new Store({
  authDomainStore,
  authUiStore,
  crudDomainStore,
  socketDomainStore,
  adminDomainStore,
  mediaDomainStore,
  formsDomainStore,
  notificationDomainStore,
  unsplashDomainStore,
  kbDomainStore,
  skipAuth: true,
  config,
  offlineStorage
});

export default rootStore;
