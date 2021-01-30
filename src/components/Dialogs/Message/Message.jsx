import style from "./Message.module.css";

const Message = (props) => {
  return props.id % 2 === 0 ? (
    <div className={style.dialog + " " + style.right}>{props.message}</div>
  ) : (
    <div className={style.dialog}>{props.message}</div>
  );
};

export default Message;
