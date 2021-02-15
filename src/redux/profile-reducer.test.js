import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 25 },
    { id: 3, message: "Blabla", likesCount: 15 },
    { id: 4, message: "Yes", likesCount: 5 },
  ],
};

it("Length of posts should be incremented", () => {
  // 1. test data
  let action = addPostActionCreator("it-incubator");
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

it("message of new post should be it-incubator", () => {
  // 1. test data
  let action = addPostActionCreator("it-incubator");
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts[4].message).toBe("it-incubator");
});

it("after deleting length of messages should be decrement", () => {
  // 1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
  // 1. test data
  let action = deletePost(1000);
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(4);
});
