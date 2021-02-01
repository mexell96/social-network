let store = {
  _state: {
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
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("state changed");
  },
  addPost() {
    let prevID = this._state.dialogsPage.messages[
      this._state.dialogsPage.messages.length - 1
    ].id;

    let newPost = {
      id: ++prevID,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let prevID = this._state.dialogsPage.messages[
      this._state.dialogsPage.messages.length - 1
    ].id;
    let newMessage = {
      id: ++prevID,
      message: this._state.dialogsPage.newMessageText,
    };

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;

window.store = store;
