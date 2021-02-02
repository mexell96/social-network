const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (stateDialogsPage, action) => {
  console.log("dialogsReducer");
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      stateDialogsPage.newMessageText = action.newText;
      return stateDialogsPage;
    case SEND_MESSAGE:
      let prevID =
        stateDialogsPage.messages[stateDialogsPage.messages.length - 1].id;
      let newMessage = {
        id: ++prevID,
        message: stateDialogsPage.newMessageText,
      };

      stateDialogsPage.messages.push(newMessage);
      stateDialogsPage.newMessageText = "";
      return stateDialogsPage;
    default:
      return stateDialogsPage;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
