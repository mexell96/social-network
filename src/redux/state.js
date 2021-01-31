import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 25 },
      { id: 3, message: "Blabla", likesCount: 15 },
      { id: 4, message: "Yes", likesCount: 5 },
    ],
    newPostText: "it-incubator",
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Valera" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your it-kamasutra" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yey" },
    ],
    newMessageText: "message",
  },
  sidebar: {
    friends: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
    ],
  },
};

window.state = state;

export let addPost = () => {
  let prevID =
    state.dialogsPage.messages[state.dialogsPage.messages.length - 1].id;

  let newPost = {
    id: ++prevID,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let prevID =
    state.dialogsPage.messages[state.dialogsPage.messages.length - 1].id;
  let newMessage = {
    id: ++prevID,
    message: state.dialogsPage.newMessageText,
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export default state;
