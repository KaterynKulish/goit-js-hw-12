import{a as g,S as v,i as p}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}})();const b="47426000-935f334b470be797f22188feb",w="https://pixabay.com/api/";async function u(i,e,s=3){const n=await g(w,{params:{key:b,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:s}});return console.log(s),n.data}async function L(i,e,s){const n=await u(i,e,s);return console.log(n),n}function m(i){return i.map(({webformatURL:e,largeImageURL:s,tags:n,likes:o,views:t,comments:r,downloads:y})=>`<li class="photo-item">
        <a class="photo-link" href="${s}" >
        <img class="photo-img" src=${e} alt="${n}"/>
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
          <span class="photo-info-value">${y}</span>
          </div>
       </div>
       </li>`).join("")}const f=document.querySelector(".form-search"),l=document.querySelector(".loader"),h=document.querySelector(".image-gallery"),a=document.querySelector(".load-more-btn");let c=10,d,C=3;f.addEventListener("submit",x);l.style.visibility="hidden";a.style.visibility="hidden";const P=new v(".image-gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250,captionPosition:"bottom",captionType:"attr"});async function x(i){if(i.preventDefault(),l.style.visibility="visible",d=i.target.elements.imageQuery.value.trim(),!d){l.style.visibility="hidden";return}u(d,c).then(e=>{if(h.innerHTML="",!e.total){p.show({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:"Sorry, there are no images matching your search query. Please try again!"}),a.style.visibility="hidden";return}console.log(e),h.innerHTML=m(e.hits),a.style.visibility="visible",P.refresh(),f.reset()}).catch(e=>{p.error({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:e.message}),console.log(e.message),a.style.visibility="hidden"}).finally(()=>{l.style.visibility="hidden"})}a.addEventListener("click",S);async function S(i){i.preventDefault(),c+=1,L(d,c).then(e=>{h.innerHTML=m(e.hits);const s=Math.ceil(e.totalHits/C);c===s&&(a.style.visibility="hidden",p.show({backgroundColor:"blue",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:"We're sorry, but you've reached the end of search results."})),console.log(s)}).catch(e=>{p.error({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:e.message}),console.log(e.message)})}
//# sourceMappingURL=index.js.map
