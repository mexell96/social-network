const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yey" },
  ],
  newMessageText: "",
};

const dialogsReducer = (stateDialogsPage = initialState, action) => {
  console.log("dialogsReducer");
  switch (action.type) {
    case SEND_MESSAGE: {
      let prevID =
        stateDialogsPage.messages[stateDialogsPage.messages.length - 1].id;
      let newMessage = {
        id: ++prevID,
        message: stateDialogsPage.newMessageText,
      };

      let stateCopy = { ...stateDialogsPage };
      stateCopy.messages = [...stateDialogsPage.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...stateDialogsPage };

      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
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
