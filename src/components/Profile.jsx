import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg"
          alt=""
        />
        Main Content
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div className="posts">
          New post
          <div className={classes.item}>post 1</div>
          <div className={classes.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
