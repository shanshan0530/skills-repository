const OWNER='sue1231511';
const REPO='skills-repository';
const BRANCH='main';

const files=[
['ai-prompts','grill-me.md'],['ai-prompts','prompt-optimizer.md'],
['ai-tools','AIPlanHub.md'],['ai-tools','openprice.md'],['chrome-extensions','ciphermind.md'],
['creative-visual','holo-card-studio.md'],['creative-visual','photo-flipbook-ui.md'],['creative-visual','tait-crt-interface.md'],
['design-tools','impeccable.md'],
['frontend-design','21st-dev.md'],['frontend-design','awesome-design-md.md'],['frontend-design','design-mobile-apps.md'],['frontend-design','design-taste-frontend.md'],['frontend-design','galaxy-frontend-design.md'],['frontend-design','gsap.md'],['frontend-design','image-to-code.md'],['frontend-design','motion-sites.md'],['frontend-design','motion-web.md'],['frontend-design','react-bits.md'],['frontend-design','refero-styles.md'],['frontend-design','threeui.md'],['frontend-design','web-design-guidelines.md'],
['methodology','lighthouse-travel-postcard-prompt.md'],['methodology','vibe-coding-approach.md'],['methodology','zeejay0-visual-skill-example.md'],
['photo-design','card-duo.md'],['photo-design','culture-fragment-poster-engine.md'],['photo-design','eastern-ink-photo.md'],['photo-design','mono-color.md'],['photo-design','gc-minimal-zine-poster.md'],['photo-design','heytea-style.md'],['photo-design','photo-abstract-editorial.md'],['photo-design','photo-riso-poster.md'],['photo-design','photo-to-minimal-illustration.md'],['photo-design','photo-to-zine-postcard.md'],['photo-design','reality-restaged.md'],['photo-design','scene-to-art-lab.md'],['photo-design','scenes-gathered-zine-v1-3.md'],['photo-design','selective-ink-sketch.md'],['photo-design','surreal-pop-collage.md'],['photo-design','travel-memory-sticker.md'],['photo-design','travel-photo-abstraction.md'],['photo-design','vinyl-image-generator.md'],
['token-optimization','caveman.md'],['token-optimization','rescue-tokens.md'],
['tools','bough.md'],['tools','no-negative-echo.md'],
['video-production','ai-image-generation.md'],['video-production','ai-music.md'],['video-production','ai-video-generation.md'],['video-production','anything2explainer.md'],['video-production','image-to-video.md'],['video-production','reddit-automation.md'],['video-production','seedance-image-to-video.md'],['video-production','seedance-reference-to-video.md'],['video-production','talkcraft.md'],['video-production','video-edit.md'],['video-production','video-shotcraft.md'],['video-production','wan-3-0-prime-reference-to-video.md']
];

const categoryNames={
'all':'全部','frontend-design':'前端设计','photo-design':'照片设计','video-production':'视频制作','creative-visual':'创意视觉','design-tools':'设计工具','ai-prompts':'AI Prompt','token-optimization':'Token 优化','methodology':'方法论','ai-tools':'AI 工具','chrome-extensions':'浏览器扩展','tools':'通用工具'
};

const ignoredExternalHosts=['uibakery.io','docs.lovable.dev'];
const state={query:'',category:'all',favoritesOnly:false,sort:'default'};
const favorites=new Set(JSON.parse(localStorage.getItem('skill-favorites')||'[]'));
const visits=JSON.parse(localStorage.getItem('skill-visits')||'{}');

const skills=files.map(([category,file],index)=>({
 id:`${category}/${file}`,category,file,index,name:humanize(file),description:'正在读取仓库说明…',tags:[],sourceUrl:'',
 docUrl:`https://github.com/${OWNER}/${REPO}/blob/${BRANCH}/${category}/${file}`,loaded:false
}));

const grid=document.querySelector('#grid');
const empty=document.querySelector('#empty');
const searchInput=document.querySelector('#searchInput');
const categoryNav=document.querySelector('#categoryNav');
const favoriteToggle=document.querySelector('#favoriteToggle');
const sortSelect=document.querySelector('#sortSelect');
const stats=document.querySelector('#stats');
const dialog=document.querySelector('#detailDialog');
const dialogContent=document.querySelector('#dialogContent');

document.querySelector('#closeDialog').onclick=()=>dialog.close();
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

function humanize(file){return file.replace(/\.md$/,'').split('-').map(s=>s.length<=3?s.toUpperCase():s[0].toUpperCase()+s.slice(1)).join(' ')}
function escapeHTML(s=''){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function cleanText(s=''){return s.replace(/\*\*/g,'').replace(/`/g,'').replace(/\[(.*?)\]\((.*?)\)/g,'$1').trim()}

function parseMarkdown(md,skill){
 const lines=md.split(/\r?\n/);
 const heading=lines.find(l=>/^#\s+/.test(l));
 if(heading) skill.name=cleanText(heading.replace(/^#\s+/, '').split('｜')[0].trim());
 const funcIndex=lines.findIndex(l=>/^##\s+(功能描述|简介|描述|是什么)/.test(l));
 let desc='';
 if(funcIndex>=0){for(let i=funcIndex+1;i<Math.min(lines.length,funcIndex+8);i++){const line=lines[i].trim();if(line&&!line.startsWith('#')&&!line.startsWith('-')&&!line.startsWith('|')){desc=cleanText(line);break}}}
 if(!desc){const candidate=lines.find((l,i)=>i>0&&l.trim()&&!l.startsWith('#')&&!l.startsWith('-')&&!l.startsWith('|')&&!l.startsWith('```'));if(candidate)desc=cleanText(candidate)}
 skill.description=desc||'已收录到你的 Skill Library。';
 const tags=[];const tagIndex=lines.findIndex(l=>/^##\s+分类标签/.test(l));
 if(tagIndex>=0){for(let i=tagIndex+1;i<Math.min(lines.length,tagIndex+5);i++)tags.push(...[...lines[i].matchAll(/`([^`]+)`/g)].map(m=>m[1]))}
 skill.tags=[...new Set(tags)].slice(0,5);
 const urls=[...md.matchAll(/https?:\/\/[^\s)\]>]+/g)].map(m=>m[0].replace(/[.,]$/,''));
 const githubUrls=urls.filter(u=>/github\.com\//.test(u)&&!u.includes(`${OWNER}/${REPO}`));
 const external=urls.filter(u=>!ignoredExternalHosts.some(h=>u.includes(h))&&!u.includes(`${OWNER}/${REPO}`));
 skill.sourceUrl=githubUrls[0]||external[0]||'';skill.loaded=true;
}

async function hydrate(skill){
 try{const url=`https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${skill.id}`;const res=await fetch(url,{cache:'no-store'});if(!res.ok)throw new Error(res.status);parseMarkdown(await res.text(),skill)}
 catch{skill.description='打开仓库说明查看完整信息。';skill.loaded=true}
 render();
}

function getFiltered(){
 let list=skills.filter(s=>state.category==='all'||s.category===state.category);
 if(state.favoritesOnly)list=list.filter(s=>favorites.has(s.id));
 const q=state.query.trim().toLowerCase();
 if(q)list=list.filter(s=>[s.name,s.description,s.category,...s.tags].join(' ').toLowerCase().includes(q));
 if(state.sort==='az')list.sort((a,b)=>a.name.localeCompare(b.name));
 if(state.sort==='recent')list.sort((a,b)=>(visits[b.id]||0)-(visits[a.id]||0));
 return list;
}

function cardHTML(s){
 const fav=favorites.has(s.id);const url=s.sourceUrl||s.docUrl;
 return `<article class="skill-card" data-id="${s.id}">
   <div class="card-top"><span class="category-pill">${escapeHTML(categoryNames[s.category]||s.category)}</span><button class="star-btn ${fav?'active':''}" data-fav="${s.id}" aria-label="收藏 ${escapeHTML(s.name)}">${fav?'★':'☆'}</button></div>
   <h3>${escapeHTML(s.name)}</h3>
   ${s.loaded?`<p>${escapeHTML(s.description)}</p>`:`<div class="loading-line" style="width:92%"></div><div class="loading-line" style="width:70%"></div>`}
   ${s.tags.length?`<div class="tags">${s.tags.slice(0,3).map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div>`:''}
   <div class="card-actions"><a class="visit-link" data-visit="${s.id}" href="${escapeHTML(url)}" target="_blank" rel="noreferrer">${s.sourceUrl?'访问 Skill ↗':'查看说明 ↗'}</a><button class="detail-btn" data-detail="${s.id}">详情</button></div>
 </article>`;
}

function renderCategories(){
 const counts={all:skills.length};skills.forEach(s=>counts[s.category]=(counts[s.category]||0)+1);
 categoryNav.innerHTML=Object.keys(categoryNames).filter(k=>counts[k]).map(k=>`<button class="category-btn ${state.category===k?'active':''}" data-category="${k}"><span>${categoryNames[k]}</span><span>${counts[k]}</span></button>`).join('');
}

function render(){
 const list=getFiltered();grid.innerHTML=list.map(cardHTML).join('');empty.hidden=list.length!==0;grid.hidden=list.length===0;
 favoriteToggle.classList.toggle('active',state.favoritesOnly);favoriteToggle.textContent=state.favoritesOnly?'收藏中':'收藏';
 const loaded=skills.filter(s=>s.loaded).length;const sourceCount=skills.filter(s=>s.sourceUrl).length;
 stats.innerHTML=`<span>条目<b>${skills.length}</b></span><span>分类<b>${Object.keys(categoryNames).length-1}</b></span><span>原项目<b>${sourceCount}</b></span><span>已读取<b>${loaded}/${skills.length}</b></span>`;
 bindCardEvents();
}

function bindCardEvents(){
 document.querySelectorAll('[data-fav]').forEach(btn=>btn.onclick=e=>{e.preventDefault();const id=btn.dataset.fav;favorites.has(id)?favorites.delete(id):favorites.add(id);localStorage.setItem('skill-favorites',JSON.stringify([...favorites]));render()});
 document.querySelectorAll('[data-visit]').forEach(a=>a.onclick=()=>{visits[a.dataset.visit]=Date.now();localStorage.setItem('skill-visits',JSON.stringify(visits))});
 document.querySelectorAll('[data-detail]').forEach(btn=>btn.onclick=()=>openDetail(btn.dataset.detail));
}

function openDetail(id){
 const s=skills.find(x=>x.id===id);if(!s)return;visits[id]=Date.now();localStorage.setItem('skill-visits',JSON.stringify(visits));const url=s.sourceUrl||s.docUrl;
 dialogContent.innerHTML=`<span class="category-pill">${escapeHTML(categoryNames[s.category]||s.category)}</span><h2>${escapeHTML(s.name)}</h2><p>${escapeHTML(s.description)}</p><div class="detail-meta">${(s.tags.length?s.tags:['未标注标签']).map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div><div class="dialog-actions"><a class="primary-link" href="${escapeHTML(url)}" target="_blank" rel="noreferrer">${s.sourceUrl?'访问原项目':'打开说明'} ↗</a>${s.sourceUrl?`<a class="secondary-link" href="${s.docUrl}" target="_blank" rel="noreferrer">仓库说明</a>`:''}</div>`;
 dialog.showModal();
}

categoryNav.addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;state.category=b.dataset.category;renderCategories();render()});
searchInput.addEventListener('input',e=>{state.query=e.target.value;render()});
favoriteToggle.onclick=()=>{state.favoritesOnly=!state.favoritesOnly;render()};
sortSelect.onchange=e=>{state.sort=e.target.value;render()};
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();searchInput.focus()}});

renderCategories();render();Promise.allSettled(skills.map(hydrate));