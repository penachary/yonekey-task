import cn from "classnames";
import { DeleteButton } from "../DeleteButton";
import style from "./style.module.css";

export default function Post({ post }) {
  return (
    <div className={style.post}>
      <span className={style.text}>
        {post.id}. {post.title}
      </span>
      <span className={cn(style.body, style.text)}>{post.body}</span>
      <DeleteButton id={post.id} />
    </div>
  );
}
