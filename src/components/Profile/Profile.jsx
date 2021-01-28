import MyPost from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg"
          alt=""
        />
        Main Content
      </div>
      <div>ava + description</div>
      <MyPost />
    </div>
  );
};

export default Profile;
