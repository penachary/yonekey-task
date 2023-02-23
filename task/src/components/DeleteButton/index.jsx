import { useContext } from "react";
import { Mycontext } from "../../App";
import style from "./style.module.css";

function DeleteButton({ id }) {
  const ctx = useContext(Mycontext);

  const onClickHandler = () => {
    ctx.postStore.deletePost(id);
    console.log(id);
  };

  return (
    <p className={style.deleteButton} onClick={onClickHandler}>
      X
    </p>
  );
}

export default DeleteButton;
