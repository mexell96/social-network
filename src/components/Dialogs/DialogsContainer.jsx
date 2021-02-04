import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let onSendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        let onNewMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        return (
          <Dialogs
            updateNewMessageTextProp={onNewMessageChange}
            sendMessageProp={onSendMessage}
            dialogsPageProp={store.getState().dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
