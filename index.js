import{a as v,S as w,i as c}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}})();const C="47426000-935f334b470be797f22188feb",L="https://pixabay.com/api/";async function m(i,e,s){return(await v(L,{params:{key:C,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:s}})).data}function f(i){return i.map(({webformatURL:e,largeImageURL:s,tags:a,likes:o,views:t,comments:l,downloads:b})=>`<li class="photo-item">
        <a class="photo-link" href="${s}" >
        <img class="photo-img" src=${e} alt="${a}"/>
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
          <span class="photo-info-value">${l}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Downloads</span>
          <span class="photo-info-value">${b}</span>
          </div>
       </div>
       </li>`).join("")}const y=document.querySelector(".form-search"),d=document.querySelector(".loader"),u=document.querySelector(".image-gallery"),r=document.querySelector(".load-more-btn");let n,h,p=3;y.addEventListener("submit",S);const g=new w(".image-gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250,captionPosition:"bottom",captionType:"attr"});async function S(i){if(i.preventDefault(),d.style.visibility="visible",n=1,h=i.target.elements.imageQuery.value.trim(),!h){d.style.visibility="hidden";return}m(h,n,p).then(e=>{if(u.innerHTML="",!e.total){c.show({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:"Sorry, there are no images matching your search query. Please try again!"}),r.style.visibility="hidden";return}console.log(e),u.innerHTML=f(e.hits);const s=Math.ceil(e.totalHits/p);n===s&&(r.style.visibility="hidden",c.show({backgroundColor:"blue",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:"We're sorry, but you've reached the end of search results."})),r.style.visibility="visible",g.refresh(),y.reset()}).catch(e=>{c.error({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:e.message}),console.log(e.message),r.style.visibility="hidden"}).finally(()=>{d.style.visibility="hidden"})}r.addEventListener("click",P);async function P(i){i.preventDefault(),n+=1,d.style.visibility="visible",m(h,n,p).then(e=>{u.insertAdjacentHTML("beforeend",f(e.hits));const a=document.querySelector(".photo-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),g.refresh();const o=Math.ceil(e.totalHits/p);n===o&&(r.style.visibility="hidden",c.show({backgroundColor:"blue",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:"We're sorry, but you've reached the end of search results."}))}).catch(e=>{c.error({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:e.message}),console.log(e.message)}).finally(()=>{d.style.visibility="hidden"})}
//# sourceMappingURL=index.js.map
