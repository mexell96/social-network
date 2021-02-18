import React from "react";
import { Redirect } from "react-router";
import { AddMessageFormRedux } from "./AddMessageForm/AddMessageForm";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
