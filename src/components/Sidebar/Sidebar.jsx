import style from "./Sidebar.module.css";
import Friend from "./Friend/Friend";

const Sidebar = (props) => {
  let friends = props.state.map((f) => <Friend name={f.name} />);

  return (
    <div>
      <h3 className={style.title}>Friends</h3>
      <div className={style.friends}>{friends}</div>
    </div>
  );
};

export default Sidebar;
