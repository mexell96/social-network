import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
  return (
    <div style={{ background: "yellow" }}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
