const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 25 },
    { id: 3, message: "Blabla", likesCount: 15 },
    { id: 4, message: "Yes", likesCount: 5 },
  ],
  newPostText: "",
};

const profileReducer = (stateProfilePage = initialState, action) => {
  console.log("profileReducer");
  switch (action.type) {
    case ADD_POST: {
      let prevID = stateProfilePage.posts[stateProfilePage.posts.length - 1].id;

      let newPost = {
        id: ++prevID,
        message: stateProfilePage.newPostText,
        likesCount: 0,
      };

      let stateCopy = { ...stateProfilePage };
      stateCopy.posts = [...stateProfilePage.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...stateProfilePage };

      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return stateProfilePage;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
