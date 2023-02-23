import { createContext } from "react";
import { PostStore } from "./store/PostStore";
import { ButtonPagination } from "./components/ButtonsPagination";
import { Posts } from "./components/Posts";
import SearchInput from "./components/SearchInput";
import Modal from "./components/Modal";

export const Mycontext = createContext();

export default function App() {
  return (
    <Mycontext.Provider value={{ postStore: new PostStore() }}>
      <Modal>
        <SearchInput />
        <ButtonPagination />
        <Posts />
      </Modal>
    </Mycontext.Provider>
  );
}

// import PostList from "./components/PostList";

// import "./App.css";
// function App() {
//   return (
//     <main>
//       <PostList />
//     </main>
//   );
// }

// export default App;
