import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={style.item}>
        <img
          src="https://iconape.com/wp-content/png_logo_vector/avatar.png"
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
