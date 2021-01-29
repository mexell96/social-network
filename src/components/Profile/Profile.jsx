import MyPost from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 25 },
  { id: 3, message: "Blabla", likesCount: 15 },
  { id: 4, message: "Yes", likesCount: 5 },
];

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPost posts={posts}/>
    </div>
  );
};

export default Profile;
