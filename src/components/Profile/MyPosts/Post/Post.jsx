import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img
          src="https://iconape.com/wp-content/png_logo_vector/avatar.png"
          alt="avatar"
        />
        {props.message}
        <div>
          <span>like</span>
          {props.countLikes}
        </div>
      </div>
    </div>
  );
};

export default Post;
