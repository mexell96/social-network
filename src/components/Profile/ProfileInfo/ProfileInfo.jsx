import Preloader from "../../common/preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  console.log(props.profile, "ProfileInfo");

  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div>
        <img
          src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg"
          alt=""
        />
      </div> */}
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} alt="avatar" />
        <ProfileStatus status={"Hello my friends"} />
        <div>
          <div>"aboutMe": {props.profile.aboutMe}</div>
          <div>"facebook": {props.profile.contacts.facebook}</div>
          <div>"website": {props.profile.contacts.website}</div>
          <div>"vk": {props.profile.contacts.vk}</div>
          <div>"twitter": {props.profile.contacts.twitter}</div>
          <div>"instagram": {props.profile.contacts.instagram}</div>
          <div>"youtube": {props.profile.contacts.youtube}</div>
          <div>"github": {props.profile.contacts.github}</div>
          <div>"mainLink": {props.profile.contacts.mainLink}</div>
          <div>
            "lookingForAJob": {props.profile.lookingForAJob ? "yes" : "no"}
          </div>
          <div>
            "lookingForAJobDescription":{" "}
            {props.profile.lookingForAJobDescription}
          </div>
          <div>"fullName": {props.profile.fullName}</div>
          <div>"userId": {props.profile.userId}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
