import {
  LoginWithAuth,
  RegisterWithAuth,
  authDomainStore,
  authUiStore,
  withAuth,
  Auth
} from "./auth-service/auth-service";
import { Crud, withCrud, crudDomainStore } from "./crud-service/crud-service";
import { Event, EventWithCrud } from "./event-service/event-service";
import { Socket, socketDomainStore } from "./socket-service/socket-service";
import {
  Admin,
  withAdmin,
  adminDomainStore
} from "./admin-service/admin-service";
import { Media, mediaDomainStore } from "./media-service/media-service";
import { Forms, formsDomainStore } from "./forms-service/forms-service";
import {
  Notification,
  notificationDomainStore
} from "./notification-service/notification-service";
import { Game, gameDomainStore } from "./game-service/game-service";
export {
  LoginWithAuth,
  RegisterWithAuth,
  authDomainStore,
  authUiStore,
  withAuth,
  Auth,
  Crud,
  crudDomainStore,
  withCrud,
  Socket,
  socketDomainStore,
  Admin,
  withAdmin,
  adminDomainStore,
  Media,
  mediaDomainStore,
  Forms,
  formsDomainStore,
  Notification,
  notificationDomainStore,
  Game,
  gameDomainStore,
  Event,
  EventWithCrud
};
