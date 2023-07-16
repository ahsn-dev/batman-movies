import "./style.css";
import { fetchMovies } from "./services/api/fetchMovies";

const app = document.getElementById("app");
let loading = document.createElement("div");
loading.classList.add("text-center");
loading.innerHTML = "LOADING";
document.body.append(loading);

let page = 1;
let newCard = [];

fetchMovies(page).then((res) => renderCards(res.data.Search));

function renderCards(card) {
  let html = "";

  newCard.push(...card);

  newCard.map(
    (c) =>
      (html += `
        <div class="col-span-3 h-80 rounded-xl overflow-hidden group">
        <figure class="w-full h-full">
          <img class="w-full h-full object-cover" src="${c.Poster}" alt="">
        </figure>
        <div class="bg-white/70 text-slate-800 flex flex-col p-2 group-hover:-translate-y-full duration-500">
          <h2>${c.Title}</h2>
          <div>
            <span>
              type: 
            </span>
            <span>
              ${c.Type}
            </span>
          </div>
          <div>
            <span>
              year: 
            </span>
            <span>
              ${c.Year}
            </span>
          </div>
        </div>
  
      </div>
        
        `)
  );

  app.innerHTML = html;
}

// scroll
// window.onscroll = () => {
//     const {
//         scrollTop,
//         clientHeight,
//         scrollHeight
//     } = document.documentElement

//     if (scrollTop + clientHeight + 1 >= scrollHeight) {
//         fetchMovies(++page)
//             .then(res => {
//                 renderCards(res.data.Search)
//             })
//     }else{
//     }
// }

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((loader) => {
      if (loader.isIntersecting) {
        fetchMovies(++page).then((res) => {
          renderCards(res.data.Search);
        });
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(loading);
