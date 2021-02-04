import style from "./Sidebar.module.css";
// import Friend from "./Friend/Friend";

const Sidebar = () => {
  return (
    <div>
      <h3 className={style.title}>Friends</h3>
      <div className={style.friends}>friends</div>
    </div>
  );
};

export default Sidebar;

// {(store) => {
//   let state = store.getState().sidebar;
//   let friends = state.friends.map((f) => <Friend name={f.name} />);

//   return (
//     <div>
//       <h3 className={style.title}>Friends</h3>
//       {/* <div className={style.friends}>{friends}</div> */}
//       <div className={style.friends}>friends</div>
//     </div>
//   );
// }}
