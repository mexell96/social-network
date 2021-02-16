import Preloader from "../../common/preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/806962_user_512x512.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  console.log(profile, "ProfileInfo");

  if (!profile) {
    return <Preloader />;
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img
          src={profile.photos.large || userPhoto}
          alt="avatar"
          className={styles.mainPhoto}
        />
        {isOwner && <input type={"file"} onChange={onPhotoSelected} />}
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
