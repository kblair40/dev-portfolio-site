import classes from "./Hair.module.css";

const Hair = () => {
  return (
    <div className={classes.hair}>
      <div className={classes.hairBase}></div>
      <div className={classes.hairLeft}></div>
      <div className={classes.hairRight}></div>
      <div className={classes.hairLeftDetail}></div>
    </div>
  );
};

export default Hair;
