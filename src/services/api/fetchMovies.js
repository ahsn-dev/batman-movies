import publicAxios from "../instances/publicAxios";

async function fetchMovies(page = 1) {
  const res = await publicAxios(`/?s=Batman&page=${page}&apikey=fc1fef96`);
  return res;
}
export { fetchMovies };
