import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Mycontext } from "../../App";
import { baseUrl } from "../../config";
import style from "./style.module.css";

export const DeleteButton = observer(({ id }) => {
  const ctx = useContext(Mycontext);

  const onClickDelServerHandler = () => {
    async function delPosts() {
      return await fetch(`${baseUrl}posts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .catch((err) => {
          console.log("Error is in fetch Delete");
        });
    }
    delPosts();
    ctx.postStore.deletePost(id);
  };

  return (
    <button
      className={style.buttonDel}
      role="button"
      onClick={onClickDelServerHandler}
    >
      del
    </button>
  );
});
