import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg"
          alt=""
        />
      </div>
      <div className={style.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
