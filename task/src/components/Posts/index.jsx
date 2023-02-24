import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import style from "./style.module.css";
import { Mycontext } from "../../App";
import { getList } from "../../config";
import Post from "../Post";
import { PostStoreKeys } from "../../store/PostStore";

export const Posts = observer(() => {
  const { postStore } = useContext(Mycontext);
  const postsLength = postStore.getKey(PostStoreKeys.listLength);

  const listPerPage = postStore.ListPerPage;
  const loading = postStore.getKey(PostStoreKeys.loading);

  useEffect(() => {
    async function fetchAllPosts() {
      const dataList = await getList("posts");
      postStore.setAllPosts(dataList);
    }

    fetchAllPosts();
  }, []);

  if (loading) return <span>Loading...</span>;

  return (
    <>
      <p className={style.postsLength}>{`${postsLength} posts`}</p>
      <div className={style.container}>
        {listPerPage.map((item) => (
          <Post key={item.id} post={item} />
        ))}
      </div>
    </>
  );
});
