import React from "react";
import ModelList from "Templates/_shared/ModelList/ModelList";
import { MyCalendar } from "./Calendar";
import theme from "Theme";
import { styles } from "./Events.styles";
import { withStyles } from "@material-ui/core";

const Events = ({
  events,
  events_createModel,
  events_getModel,
  events_updateModel,
  events_deleteModel,
  events_searchModel,
  events_gallery_upload,
  events_media_upload,
  location,
  match,
  history,
  classes,
  form,
  notifications,
  saveNotification,
  removeNotification,
  modelName
}) => {
  console.log(events, "hello");
  return (
    <>
      {events && events.length > 0 && <MyCalendar events={events} />}
      <ModelList
        modelArray={events}
        modelKey={"title"}
        modelName={modelName}
        columns={[
          "title",
          "startDateTime",
          "isRecurring",
          "endDateTime",
          "allDay"
        ]}
        createModel={events_createModel}
        updateModel={events_updateModel}
        getModel={events_getModel}
        deleteModel={events_deleteModel}
        searchModel={events_searchModel}
        uploadGallery={events_gallery_upload}
        uploadMedia={events_media_upload}
        location={location}
        match={match}
        history={history}
        classes={classes}
        form={form}
        notifications={notifications}
        saveNotification={saveNotification}
        removeNotification={removeNotification}
      />
    </>
  );
};

export default withStyles(styles, { defaultTheme: theme })(Events);
