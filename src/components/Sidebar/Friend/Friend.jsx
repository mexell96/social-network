import style from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={style.friend}>
      <div className={style.avatarCenter}>
        <img
          src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
          alt="friendAvatar"
          className={style.avatar}
        />
      </div>
      <div className={style.userName}>{props.name}</div>
    </div>
  );
};

export default Friend;
