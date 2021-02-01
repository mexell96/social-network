import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let updateNewMessageText = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        {messagesElements}
        <div>
          <textarea
            placeholder="Enter your message"
            onChange={updateNewMessageText}
            value={props.dialogsPage.newMessageText}
          />
        </div>
        <div>
          <button onClick={sendMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
