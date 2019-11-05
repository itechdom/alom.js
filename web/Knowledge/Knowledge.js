import React from "react";
import { styles } from "./Knowledge.styles.js";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import theme from "Theme";
import ModelList from "Templates/_shared/ModelList/ModelList";
import ModelListItem from "./ModelList/ModelListItem";
import ModelPreview from "./ModelPreview/ModelPreview";
import { withStyles, Button } from '@material-ui/core';
const ModelListActions = ({ onAdd }) => {
  return (
    <Button
      key="close"
      aria-label="Edit Note"
      label="Edit Note"
      color="primary"
      onClick={onAdd}
    >
      <AddCircleIcon style={{ marginRight: "5px" }} />
      New Note
    </Button>
  );
};
const Knowledge = ({
  knowledge,
  knowledge_createModel,
  knowledge_getModel,
  knowledge_updateModel,
  knowledge_deleteModel,
  knowledge_searchModel,
  knowledge_gallery_upload,
  knowledge_media_upload,
  knowledge_media_delete,
  location,
  match,
  history,
  classes,
  form,
  notifications,
  saveNotification,
  removeNotification,
  modelName,
  getUnsplash,
  knowledge_createKnowledge,
  knowledge_updateKnowledge,
  knowledge_searchKnowledge,
  deleting,
  setDeleting,
  knowledge_loading,
  ...rest
}) => {
  return (
    <>
      <ModelList
        {...rest}
        modelArray={knowledge}
        modelKey={"title"}
        modelName={modelName}
        columns={["title"]}
        createModel={val => {
          let group = "0";
          let size = 20;
          val.body = {
            "1": {
              title: val.title,
              id: "1",
              _id: "1",
              group,
              size,
              level: "0",
              attr: {},
              children: [],
              links: {
                title: val.title,
                target: "1",
                source: "1",
                group
              }
            }
          };
          return knowledge_createModel(val);
        }}
        updateModel={knowledge_updateModel}
        getModel={knowledge_getModel}
        deleteModel={knowledge_deleteModel}
        searchModel={knowledge_searchModel}
        uploadMedia={knowledge_media_upload}
        uploadGallery={knowledge_gallery_upload}
        deleteMedia={knowledge_media_delete}
        knowledgeSearch={knowledge_searchKnowledge}
        location={location}
        match={match}
        history={history}
        classes={classes}
        form={form}
        notifications={notifications}
        saveNotification={saveNotification}
        removeNotification={removeNotification}
        ModelPreviewPage={ModelPreview}
        ModelListItemComponent={ModelListItem}
        xl={2}
        lg={2}
        md={4}
        sm={6}
        xs={6}
        // noPagination={true}
        ModelListActions={ModelListActions}
        loading={knowledge_loading}
        getUnsplash={getUnsplash}
      />
    </>
  );
};

export default withStyles(styles, { defaultTheme: theme })(Knowledge);
