import cn from "classnames";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Mycontext } from "../../App";
import { PostStoreKeys } from "../../store/PostStore";
import { buttonKeys } from "../ButtonsPagination";
import style from "./style.module.css";

export const Button = observer(({ number }) => {
  const { postStore } = useContext(Mycontext);

  const lastPage = postStore.getKey(PostStoreKeys.lastPage);
  const numberOfPages = postStore.getKey(PostStoreKeys.numberOfPages);

  const onClickHandler = () => {
    let pageNumber = 0;
    switch (number) {
      case buttonKeys.first:
        pageNumber = 1;
        break;
      case buttonKeys.prev:
        pageNumber = lastPage === 1 ? 1 : lastPage - 1;
        break;
      case buttonKeys.next:
        pageNumber = lastPage === numberOfPages ? lastPage : lastPage + 1;
        break;
      case buttonKeys.last:
        pageNumber = numberOfPages;
        break;
      default:
        pageNumber = number;
        break;
    }
    postStore.setListPerPage(pageNumber);
    postStore.setKey(PostStoreKeys.lastPage, pageNumber);
  };

  const isSelected = number === lastPage;
  return (
    <p
      className={cn(style.button, { [style.selected]: isSelected })}
      onClick={onClickHandler}
    >
      {number}
    </p>
  );
});
