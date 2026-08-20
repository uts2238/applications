// PUT YOUR DEPLOYED CLOUDFLARE WORKER URL HERE.
const API_URL="PASTE_YOUR_WORKER_URL_HERE";
let type=null;
const $=s=>document.querySelector(s);
document.querySelectorAll(".card").forEach(x=>x.onclick=()=>openApp(x.dataset.type));
$("#back").onclick=()=>show("cards");
$("#home").onclick=()=>show("cards");

function show(id){["cards","application","success"].forEach(x=>$(x).classList.add("hidden"));$(id).classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"});}

function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}

function openApp(t){
 const user=$("#username").value.trim();
 if(!user){$("#topError").textContent="Enter your Discord username first.";$("#username").focus();return}
 const a=APPLICATIONS[t], entries=Object.entries(a.questions);
 if(entries.length>150){$("#topError").textContent="This application has more than 150 questions.";return}
 type=t;$("#badge").textContent=a.badge;$("#title").textContent=a.title;
 $("#count").textContent=`${entries.length} question${entries.length===1?"":"s"}`;
 $("#form").innerHTML=entries.map(([n,q])=>`<div class="question"><div class="num">QUESTION ${esc(n)}</div><label>${esc(q)}</label><textarea class="answer" data-number="${esc(n)}" maxlength="4000" required placeholder="Type your answer..."></textarea></div>`).join("");
 $("#formError").textContent="";show("application");
}

$("#form").onsubmit=async e=>{
 e.preventDefault();$("#formError").textContent="";
 const user=$("#username").value.trim();
 if(!user){$("#formError").textContent="Enter your Discord username.";return}
 if(API_URL.includes("PASTE_YOUR")){$("#formError").textContent="Set the Worker URL in app.js first.";return}
 const answers={};document.querySelectorAll(".answer").forEach(x=>answers[x.dataset.number]=x.value.trim());
 if(Object.values(answers).some(x=>!x)){$("#formError").textContent="Answer every question.";return}
 $("#submit").disabled=true;$("#submit").textContent="Submitting...";
 try{
  const r=await fetch(API_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:user,applicationType:type,answers})});
  const data=await r.json().catch(()=>({}));
  if(!r.ok)throw Error(data.error||"Submission failed.");
  $("#successText").textContent=`Your ${APPLICATIONS[type].title.toLowerCase()} was submitted. Application ID: ${data.applicationId}.`;
  show("success");
 }catch(err){$("#formError").textContent=err.message}finally{$("#submit").disabled=false;$("#submit").textContent="Submit Application"}
};
