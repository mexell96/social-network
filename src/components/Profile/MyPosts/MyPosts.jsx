import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        <Post message="Hi, how are you?" countLikes="15" />
        <Post message="It's my first post" countLikes="20" />
      </div>
    </div>
  );
};

export default MyPost;
