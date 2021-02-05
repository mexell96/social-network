import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoURL:
          "https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png",
        followed: false,
        fullName: "Dmitry",
        status: "I'm a boss",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoURL:
          "https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png",
        followed: true,
        fullName: "Sasha",
        status: "I'm a boss too",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoURL:
          "https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png",
        followed: false,
        fullName: "Andrew",
        status: "I'm a boss number one",
        location: { city: "Kiev", country: "Ukraine" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoURL} alt="avatar" className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}>
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
