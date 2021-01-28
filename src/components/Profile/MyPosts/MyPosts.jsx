import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={style.item}>
        <Post message="Hi, how are you?" countLikes="15" />
        <Post message="It's my first post" countLikes="20" />
      </div>
    </div>
  );
};

export default MyPost;
