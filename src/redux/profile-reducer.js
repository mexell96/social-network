const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const profileReducer = (stateProfilePage, action) => {
  console.log("profileReducer");
  switch (action.type) {
    case ADD_POST:
      let prevID = stateProfilePage.posts[stateProfilePage.posts.length - 1].id;

      let newPost = {
        id: ++prevID,
        message: stateProfilePage.newPostText,
        likesCount: 0,
      };
      stateProfilePage.posts.push(newPost);
      stateProfilePage.newPostText = "";
      return stateProfilePage;
    case UPDATE_NEW_POST_TEXT:
      stateProfilePage.newPostText = action.newText;
      return stateProfilePage;
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
