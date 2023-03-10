import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Mycontext } from "../../App";
import { PostStoreKeys } from "../../store/PostStore";
import { Button } from "../Button";
import style from "./style.module.css";

export const buttonKeys = {
  first: "|<",
  prev: "<<",
  last: ">|",
  next: ">>",
};

export const ButtonPagination = observer(() => {
  const { postStore } = useContext(Mycontext);
  const lastPage = postStore.getKey(PostStoreKeys.lastPage);
  const numberOfPages = postStore.getKey(PostStoreKeys.numberOfPages);

  const myButtons = [...Array(numberOfPages).keys()].map((n) => n + 1);

  if (numberOfPages)
    return (
      <div className={style.container}>
        <Button number={buttonKeys.first} />
        <Button number={buttonKeys.prev} />
        {myButtons.map((num) => (
          <Button key={num} number={num} />
        ))}
        <Button number={buttonKeys.next} />
        <Button number={buttonKeys.last} />
      </div>
    );

  return null;
});
