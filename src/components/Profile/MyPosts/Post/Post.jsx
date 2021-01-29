import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={style.item}>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          alt="avatar"
        />
        {props.message}
        <div>
          <span>like</span>
          {props.likesCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
