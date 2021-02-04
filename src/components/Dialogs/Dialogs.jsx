import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  console.log(props, "Dialogs");
  let state = props.dialogsPageProp;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  let newMessageText = state.newMessageText;

  let onSendMessage = () => {
    props.sendMessageProp();
  };

  let onNewMessageChange = (ev) => {
    let text = ev.target.value;
    props.updateNewMessageTextProp(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              placeholder="Enter your message"
              onChange={onNewMessageChange}
              value={newMessageText}
            />
          </div>
          <div>
            <button onClick={onSendMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
