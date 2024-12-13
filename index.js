import{a as b,S as w,i as h}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();const C="47426000-935f334b470be797f22188feb",L="https://pixabay.com/api/";async function m(i,e,n){const s=await b(L,{params:{key:C,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:n}});return console.log(n),s.data}function f(i){return i.map(({webformatURL:e,largeImageURL:n,tags:s,likes:o,views:t,comments:r,downloads:v})=>`<li class="photo-item">
        <a class="photo-link" href="${n}" >
        <img class="photo-img" src=${e} alt="${s}"/>
       </a> 

       <div class="photo-info-container">
          <div class="photo-info-item">
          <span class="photo-info-label">Likes</span>
          <span class="photo-info-value">${o}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Views</span>
          <span class="photo-info-value">${t}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Comments</span>
          <span class="photo-info-value">${r}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Downloads</span>
          <span class="photo-info-value">${v}</span>
          </div>
       </div>
       </li>`).join("")}const y=document.querySelector(".form-search"),l=document.querySelector(".loader"),p=document.querySelector(".image-gallery"),a=document.querySelector(".load-more-btn");let c=1,d,u=15;y.addEventListener("submit",S);l.style.visibility="hidden";a.style.visibility="hidden";const g=new w(".image-gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250,captionPosition:"bottom",captionType:"attr"});async function S(i){if(i.preventDefault(),l.style.visibility="visible",d=i.target.elements.imageQuery.value.trim(),!d){l.style.visibility="hidden";return}m(d,c,u).then(e=>{if(p.innerHTML="",!e.total){h.show({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:"Sorry, there are no images matching your search query. Please try again!"}),a.style.visibility="hidden";return}console.log(e),p.innerHTML=f(e.hits),a.style.visibility="visible",g.refresh(),y.reset()}).catch(e=>{h.error({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:e.message}),console.log(e.message),a.style.visibility="hidden"}).finally(()=>{l.style.visibility="hidden"})}a.addEventListener("click",P);async function P(i){i.preventDefault(),c+=1,m(d,c,u).then(e=>{p.insertAdjacentHTML("beforeend",f(e.hits));const s=document.querySelector(".photo-item").getBoundingClientRect().height;window.scrollBy({top:s,behavior:"smooth"}),g.refresh();const o=Math.ceil(e.totalHits/u);c===o&&(a.style.visibility="hidden",h.show({backgroundColor:"blue",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:"We're sorry, but you've reached the end of search results."})),console.log(o)}).catch(e=>{h.error({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:e.message}),console.log(e.message)})}
//# sourceMappingURL=index.js.map
