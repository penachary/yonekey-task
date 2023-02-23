import { makeAutoObservable } from "mobx";
export const PostStoreKeys = {
  loading: "loading",
  lastPage: "lastPage",
  numberOfPages: "numberOfPages",
  listLength: "listLength",
};
export class PostStore {
  limit = 20;
  list = [];
  listPerPage = [];
  //key
  loading = false;
  lastPage = 1;
  numberOfPages = 1;
  listLength = 1;

  constructor() {
    makeAutoObservable(this);
  }
  get AllPosts() {
    return this.list;
  }

  setAllPosts(posts) {
    this.list = [...posts];
    this.listUpdateFunc();
  }

  listUpdateFunc() {
    this.listLength = this.list.length;
    this.numberOfPages = Math.ceil(this.listLength / this.limit);
    this.listPerPage = this.list.slice(0, this.limit);
  }

  get ListPerPage() {
    return this.listPerPage;
  }

  setListPerPage(pageNumber) {
    this.listPerPage = this.list.slice(
      (pageNumber - 1) * this.limit,
      pageNumber * this.limit
    );
  }

  getKey(key) {
    return this[key];
  }

  setKey(key, value) {
    this[key] = value;
  }

  deletePost(id) {
    this.list = this.list.filter((post) => post.id !== id);
    this.listUpdateFunc();
  }
}
