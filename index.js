import{a as g,S as y,i as c}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}})();const v="47426000-935f334b470be797f22188feb",b="https://pixabay.com/api/";async function u(s,e){const i=await g(b,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:3}});return console.log(i.data),i.data}async function L(s,e){const i=await u(s,e);return console.log(i),i}function h(s){return s.map(({webformatURL:e,largeImageURL:i,tags:n,likes:o,views:t,comments:a,downloads:f})=>`<li class="photo-item">
        <a class="photo-link" href="${i}" >
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
          <span class="photo-info-value">${a}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Downloads</span>
          <span class="photo-info-value">${f}</span>
          </div>
       </div>
       </li>`).join()}const m=document.querySelector(".form-search"),r=document.querySelector(".loader"),p=document.querySelector(".image-gallery"),w=document.querySelector(".load-more-btn");let d=1,l;m.addEventListener("submit",P);r.style.visibility="hidden";const C=new y(".image-gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250,captionPosition:"bottom",captionType:"attr"});async function P(s){if(s.preventDefault(),r.style.visibility="visible",l=s.target.elements.imageQuery.value.trim(),!l){r.style.visibility="hidden";return}u(l,d).then(e=>{if(p.innerHTML="",!e.total){c.show({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:"Sorry, there are no images matching your search query. Please try again!"});return}console.log(e),p.innerHTML=h(e.hits),C.refresh(),m.reset()}).catch(e=>{c.error({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:e.message}),console.log(e.message)}).finally(()=>{r.style.visibility="hidden"})}w.addEventListener("click",S);async function S(s){s.preventDefault(),d+=1,L(l,d).then(e=>{p.innerHTML=h(e.hits)}).catch(e=>{c.error({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:e.message}),console.log(e.message)})}
//# sourceMappingURL=index.js.map
