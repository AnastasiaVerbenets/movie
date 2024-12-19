(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l="http://localhost:3000",d=document.getElementById("all-btn"),a=document.getElementById("list");d.addEventListener("click",u);async function m(){const o=await fetch(`${l}/movies`);if(!o.ok)throw new Error("Fail to fetch");return await o.json()}async function u(){try{const o=await m();f(o)}catch{console.error("Fail to render")}}function f(o){const n=o.map(({image:r,title:s,genre:e,director:t,year:i})=>`
      <li class="movies__item">
        <div class="movies__thumb">
          <img src="${r}" alt="movie" class="movies__img"  onerror="this.src='https://via.placeholder.com/150';"/>
          <h2 class="movies__title"><b>Title: ${s}</b></h2>
          <p class="movies__genre"><b>Genre: ${e}</b></p>
          <p class="movies__director">
            <b>Director: ${t}</b>
          </p>
          <p class="movies__year"><b>Year: ${i}</b></p>
        </div>
        <div>
          <button class="movies__btn" type="button" id="edit-btn">Edit</button>
          <button class="movies__btn" type="button" id="delete-btn">
            Delete
          </button>
        </div>
      </li>
    `).join("");a.insertAdjacentHTML("beforeend",n)}const p="http://localhost:3000",h=document.getElementById("form");h.addEventListener("submit",v);function b(o){const n={method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`${p}/movies`,n).then(r=>{if(!response.ok)throw new Error("Failed to fetch");return response.json()})}function v(o){const n=new FormData(o.currentTarget),r={};n.forEach((s,e)=>{r[e]=s}),b(r).then(()=>{alert("Movie added")}).catch(s=>{console.error("Failed to add")})}const y=document.getElementById("add-btn"),g=document.getElementById("close-modal-btn"),_=document.getElementById("modal");y.addEventListener("click",c);g.addEventListener("click",c);function c(){_.classList.toggle("is-hidden")}
//# sourceMappingURL=index.js.map
