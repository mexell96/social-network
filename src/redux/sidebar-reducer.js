let initialState = {
  friends: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
  ],
};

const sidebarReducer = (stateSidebar = initialState, action) => {
  return stateSidebar;
};

export default sidebarReducer;
