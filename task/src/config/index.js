// export const baseUrl = "http://jsonplaceholder.typicode.com/posts";
export const baseUrl = "https://jsonplaceholder.typicode.com/";

export async function getList(url) {
  return await fetch(`${baseUrl}${url}`)
    .then((res) => res.json())
    .catch((err) => {
      return [];
      console.log("Error is in fetch", url);
    });
}
