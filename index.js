(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c="http://localhost:3000",l=document.getElementById("all-btn"),d=document.getElementById("list");l.addEventListener("click",a);function u(){return fetch(`${c}/movies`).then(s=>s.json())}function a(){u().then(f)}function f(s){const o=s.map(r=>`
      <li class="movies__item">
        <div class="movies__thumb">
          <img src="${r.img}" alt="movie" class="movies__img"  onerror="this.src='https://via.placeholder.com/150';"/>
          <h2 class="movies__title"><b>Title: ${r.title}</b></h2>
          <p class="movies__genre"><b>Genre: ${r.genre}</b></p>
          <p class="movies__director">
            <b>Director: ${r.director}</b>
          </p>
          <p class="movies__year"><b>Year: ${r.year}</b></p>
        </div>
        <div>
          <button class="movies__btn" type="button" id="edit-btn">Edit</button>
          <button class="movies__btn" type="button" id="delete-btn">
            Delete
          </button>
        </div>
      </li>
    `).join("");d.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=index.js.map
