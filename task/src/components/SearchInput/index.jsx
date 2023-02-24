import { useContext } from "react";
import { Mycontext } from "../../App";
import { getList } from "../../config";
import style from "./style.module.css";

function SearchInput() {
  const { postStore } = useContext(Mycontext);

  const onChangeSearchHandler = async (event) => {
    const searchQuery = event.target.value;
    const searchResult = await getList(`posts?q=${searchQuery}`);
    postStore.setAllPosts(searchResult);
  };

  return (
    <div className={style.searchInput}>
      <input
        type="text"
        placeholder="Search..."
        onChange={onChangeSearchHandler}
      />
    </div>
  );
}

export default SearchInput;
