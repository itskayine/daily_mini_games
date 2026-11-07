// ============================================================
// Promotions for the novel and for Substack. Edit texts and links here.
// ============================================================
const NOVEL={
  title:"The Weight of Oneself",
  base:"https://itskayine.github.io/theweightofoneself/",
  cover:"https://itskayine.github.io/theweightofoneself/cover.png",
  hook:"What if the system doesn’t just eliminate its enemies, but rebuilds them?",
  meta:"E-book · English · Launching soon",
  quote:"I closed it destabilized, and I loved that.",
  quoteBy:"Ghita S., student",
  cta:"Notify me at launch",
  chapter:"Read Chapter 1 free",
  email:"kayinewrites@gmail.com"
};
const SUBSTACK={url:"https://substack.com/@kayine",text:"Essays on philosophy, debate and ideas.",cta:"Read & subscribe"};
const ESSAY={
  title:"Should We Sometimes Disobey the Law?",
  text:"From Antigone to Rawls: when does obeying the law stop being a virtue?",
  url:"https://kayine.substack.com/p/should-we-sometimes-disobey-the-law?r=994z5i&utm_campaign=post-expanded-share&utm_medium=web",
  img:"https://itskayine.github.io/theweightofoneself/should_we_sometimes_disobey_the_law.jpg"
};
// Brevo email signup form (shown in the pop-up)
const FORM_URL="https://50f0f619.sibforms.com/v2/serve/MUIFAM9LFLyf9YdY6ShQHi297KiZgC2mukTtVShe5dsNX-pgj6TvIeMClEutMJZJgnE8d9HUlqzHOGqg6ck7S7A-TDO4GkjnYI4NaPRCdkO6DRBSJp_pOpK1OUPFeX_AFKlcdBdpa7ujqPdGnvqR_xwbtGmCRLJTY5ri4UG3zcM8mPHPd0wyIZR3eP7mCHoromWR1uz4j1SGKf-0Hw==";

// Words from Chapter 1 of the novel: one per day, cycling.
const WORDS=[
  ["discombobulated","confused and thrown off balance","…was now discombobulated by this strange awakening."],
  ["dubitative","expressing or feeling doubt","…he thought, dubitative."],
  ["aperture","a small opening or gap","…the little aperture under the bedroom’s door."],
  ["emanating","coming out from a source","…a rather dim light emanating from there."],
  ["punctuality","the habit of being on time","…an adept of punctuality, he had a really tight schedule."],
  ["circa","around, approximately (used with dates and times)","…as soon as he finished his work, circa 8pm."],
  ["ravishing","strikingly beautiful or delightful","…an absolutely ravishing white shirt."],
  ["indifferent","not caring about something","…indifferent to the judgment of others."],
  ["tremendous","extremely great in size or degree","…despite his tremendous vocabulary."],
  ["deficiency","a lack of something that is needed","…recover from the deficiency he was suffering from."],
  ["unscheduled","not planned in advance","…has left him unscheduled free time."],
  ["routine","a fixed, habitual way of doing things","He was a man of routine."]
];

// Link to the novel site, tagged so the visit shows up in your analytics.
const nu=(page,medium)=>NOVEL.base+page+"?utm_source=daily-puzzles&utm_medium="+medium+"&utm_campaign=novel";

// Count an event in GoatCounter (does nothing if it has not loaded).
function trk(name){try{if(window.goatcounter&&typeof goatcounter.count==="function")goatcounter.count({path:name,title:name,event:true})}catch(e){}}

// Compact novel card: after game 6 on the home screen (small screens only) and on result screens.
function novelBanner(place,hubOnly){
  return `<div class="nb${hubOnly?" hubonly":""}"><img src="${NOVEL.cover}" alt="Cover of ${NOVEL.title}" loading="lazy"><div><div class="tg">The novel · launching soon</div><h3>${NOVEL.title}</h3><p>${NOVEL.hook}</p><div class="nbb"><a class="pbtn" href="#" data-notify data-src="${place}">${NOVEL.cta}</a><a class="plnk" href="${nu("chapter-1.html",place)}" target="_blank" rel="noopener" data-trk="chapter1-click-${place}">${NOVEL.chapter}</a></div></div></div>`;
}

// Word of the day from the novel (home screen).
function wotd(){
  const n=WORDS.length,w=WORDS[(((DAYNO-1)%n)+n)%n];
  return `<section class="wotd"><div class="tg">Word of the day · from Chapter 1</div><h3>${w[0]}</h3><p class="def">${w[1]}</p><p class="ln">${w[2]}</p><a class="plnk" href="${nu("chapter-1.html","wotd")}" target="_blank" rel="noopener" data-trk="chapter1-click-wotd">Read it in context →</a></section>`;
}

// Footer of the home screen.
function siteFooter(){
  return `<footer class="sf"><img src="${NOVEL.cover}" alt="" loading="lazy"><div><p><b>${NOVEL.title}</b>, a novel by Kayine, written at 18. ${NOVEL.meta}.</p><p><a href="#" data-notify data-src="footer">${NOVEL.cta}</a> · <a href="${nu("chapter-1.html","footer")}" target="_blank" rel="noopener" data-trk="chapter1-click-footer">${NOVEL.chapter}</a> · <a href="${SUBSTACK.url}" target="_blank" rel="noopener" data-trk="substack-click-footer">Essays on Substack</a> · <a href="mailto:${NOVEL.email}">Contact</a></p></div></footer>`;
}

// Side panels (wide screens)
document.getElementById("adr").innerHTML=
  `<div class="tg">The novel</div>`+
  `<a class="cv" href="${nu("index.html","sidebar")}" target="_blank" rel="noopener" data-trk="cover-click-sidebar"><img src="${NOVEL.cover}" alt="Cover of ${NOVEL.title}"></a>`+
  `<h3>${NOVEL.title}</h3><p class="hk">${NOVEL.hook}</p>`+
  `<div class="rv"><div class="st" role="img" aria-label="5 out of 5 stars">★★★★★</div><p>“${NOVEL.quote}”</p><small>${NOVEL.quoteBy}</small></div>`+
  `<small class="meta">${NOVEL.meta}</small>`+
  `<a class="pbtn" href="#" data-notify data-src="sidebar">${NOVEL.cta}</a>`+
  `<a class="plnk" href="${nu("chapter-1.html","sidebar")}" target="_blank" rel="noopener" data-trk="chapter1-click-sidebar">${NOVEL.chapter}</a>`;

document.getElementById("adl").innerHTML=
  `<div class="tg">Substack</div><h3>Kayine on Substack</h3><p>${SUBSTACK.text}</p>`+
  `<a class="essay" href="${ESSAY.url}" target="_blank" rel="noopener" data-trk="essay-click-sidebar" style="background-image:linear-gradient(180deg,rgba(20,27,36,0) 30%,rgba(20,27,36,.88) 100%),url('${ESSAY.img}')"><span>Latest essay</span><b>${ESSAY.title}</b><small>${ESSAY.text}</small></a>`+
  `<a class="plnk" href="${SUBSTACK.url}" target="_blank" rel="noopener" data-trk="substack-click-sidebar">${SUBSTACK.cta} →</a>`;

// Sticky bar (phones and tablets, home screen only; the CSS decides when it shows)
(function(){
  const bar=document.createElement("div");
  bar.className="nbar";
  bar.innerHTML=`<img src="${NOVEL.cover}" alt=""><span><b>${NOVEL.title}</b><small>E-book · launching soon</small></span><a class="pbtn" href="#" data-notify data-src="bar">Notify me</a><button type="button" class="x" aria-label="Dismiss">✕</button>`;
  try{if(sessionStorage.getItem("nbar-off"))bar.classList.add("off")}catch(e){}
  bar.querySelector(".x").onclick=()=>{bar.classList.add("off");try{sessionStorage.setItem("nbar-off","1")}catch(e){}};
  document.body.appendChild(bar);
})();

// Email pop-up (Brevo form). The form only loads the first time the pop-up opens.
(function(){
  const FADE=250;
  const dlg=document.createElement("dialog");
  dlg.className="nd";
  dlg.setAttribute("aria-labelledby","nd-title");
  dlg.innerHTML=`<h2 id="nd-title">Get notified when it’s live</h2><p>The e-book is launching soon. Leave your email and you’ll be the first to know when it’s out.</p><iframe class="nf" title="Email signup form"></iframe><button type="button" class="ghost nclose">Close</button>`;
  document.body.appendChild(dlg);
  const fr=dlg.querySelector("iframe");
  window.openNotify=function(src){
    trk("notify-click-"+(src||"site"));
    if(!fr.getAttribute("src"))fr.setAttribute("src",FORM_URL);
    if(typeof dlg.showModal!=="function"){window.open(FORM_URL,"_blank","noopener");return}
    dlg.showModal();
    void dlg.offsetWidth;
    dlg.classList.add("is-open");
  };
  const close=()=>{if(!dlg.open)return;dlg.classList.remove("is-open");setTimeout(()=>dlg.close(),FADE)};
  dlg.querySelector(".nclose").onclick=close;
  dlg.addEventListener("click",e=>{if(e.target===dlg)close()});
  dlg.addEventListener("cancel",e=>{e.preventDefault();close()});
  document.addEventListener("click",e=>{
    const n=e.target.closest("[data-notify]");
    if(n){e.preventDefault();window.openNotify(n.dataset.src);return}
    const t=e.target.closest("[data-trk]");
    if(t)trk(t.dataset.trk);
  });
})();
