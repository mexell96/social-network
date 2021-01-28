import classes from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <div className={classes.item}>
        <img
          src="https://iconape.com/wp-content/png_logo_vector/avatar.png"
          alt="avatar"
        />
        post 1
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
