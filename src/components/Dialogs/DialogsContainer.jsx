import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      updateNewMessageTextProp={onNewMessageChange}
      sendMessageProp={onSendMessage}
      dialogsPageProp={state}
    />
  );
};

export default DialogsContainer;
