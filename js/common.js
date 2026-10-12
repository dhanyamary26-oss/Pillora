const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const J=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},S=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const users=()=>J('dc_users',{}),sess=()=>localStorage.getItem('dc_session');
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
async function hash(p,salt){const s=salt+p;if(window.crypto&&crypto.subtle){const h=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return[...new Uint8Array(h)].map(x=>x.toString(16).padStart(2,'0')).join('')}let h=5381;for(const c of s)h=(h*33^c.charCodeAt(0))>>>0;return''+h}
const setTheme=t=>{document.documentElement.dataset.theme=t;localStorage.dc_theme=t;const b=$('#theme');if(b)b.textContent=t==='dark'?'☀️':'🌙'};
setTheme(localStorage.dc_theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
document.addEventListener('DOMContentLoaded',()=>{
 setTheme(document.documentElement.dataset.theme);
 $('#theme')?.addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
 $('#burger')?.addEventListener('click',()=>document.body.classList.toggle('nav-open'));
 if($('#side')&&innerWidth>900)document.body.classList.add('nav-open');
 $$('.pw button').forEach(b=>b.addEventListener('click',()=>{const i=$('input',b.parentNode),s=i.type==='password';i.type=s?'text':'password';b.textContent=s?'Hide':'Show';b.setAttribute('aria-pressed',s)}));
});
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('sw.js').catch(()=>{});
