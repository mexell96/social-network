import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessage = React.createRef();

  let addMessageBtn = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.dispatch(onMessageChangeActionCreator(text));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        {messagesElements}
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessage}
            value={props.dialogsPage.newMessageText}
          />
        </div>
        <div>
          <button onClick={addMessageBtn}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
