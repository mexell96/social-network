import Preloader from "../../common/preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  console.log(profile, "ProfileInfo");

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img src={profile.photos.large} alt="avatar" />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div>
          <div>"aboutMe": {profile.aboutMe}</div>
          <div>"facebook": {profile.contacts.facebook}</div>
          <div>"website": {profile.contacts.website}</div>
          <div>"vk": {profile.contacts.vk}</div>
          <div>"twitter": {profile.contacts.twitter}</div>
          <div>"instagram": {profile.contacts.instagram}</div>
          <div>"youtube": {profile.contacts.youtube}</div>
          <div>"github": {profile.contacts.github}</div>
          <div>"mainLink": {profile.contacts.mainLink}</div>
          <div>"lookingForAJob": {profile.lookingForAJob ? "yes" : "no"}</div>
          <div>
            "lookingForAJobDescription": {profile.lookingForAJobDescription}
          </div>
          <div>"fullName": {profile.fullName}</div>
          <div>"userId": {profile.userId}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
