const APPLICATION_NAMES={dev:"Dev Application",mod:"Moderator Application",valueList:"Value List Application"};
const MAX_QUESTIONS=150;
export default{async fetch(request,env){
 const cors={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST, OPTIONS","Access-Control-Allow-Headers":"Content-Type"};
 if(request.method==="OPTIONS")return new Response(null,{status:204,headers:cors});
 if(request.method!=="POST")return json({error:"POST requests only."},405,cors);
 try{
  if(!env.DISCORD_WEBHOOK_URL)return json({error:"DISCORD_WEBHOOK_URL is not configured."},500,cors);
  const body=await request.json();
  const username=String(body.username||"").trim();
  const type=String(body.applicationType||"");
  const answers=body.answers;
  if(!username||username.length>100)return json({error:"Invalid Discord username."},400,cors);
  if(!APPLICATION_NAMES[type])return json({error:"Invalid application type."},400,cors);
  if(!answers||typeof answers!=="object"||Array.isArray(answers))return json({error:"Invalid answers."},400,cors);
  const entries=Object.entries(answers);
  if(!entries.length||entries.length>MAX_QUESTIONS)return json({error:"Applications support 1-150 questions."},400,cors);
  for(const [number,answer] of entries){
   if(!/^\d{1,3}$/.test(number))return json({error:"Invalid question number."},400,cors);
   const text=String(answer).trim();
   if(!text)return json({error:`Question ${number} is empty.`},400,cors);
   if(text.length>4000)return json({error:`Question ${number} is too long.`},400,cors);
  }
  const applicationId="APP-"+crypto.randomUUID().replaceAll("-","").slice(0,10).toUpperCase();
  const chunks=[];let fields=[];let length=0;
  for(const [number,answer] of entries){
   const value=String(answer);
   const field={name:`Question ${number}`,value:value.length>1024?value.slice(0,1021)+"...":value,inline:false};
   const add=field.name.length+field.value.length;
   if(fields.length>=25||length+add>5000){chunks.push(fields);fields=[];length=0;}
   fields.push(field);length+=add;
  }
  if(fields.length)chunks.push(fields);
  for(let i=0;i<chunks.length;i++){
   const safeUser=username.replaceAll("@","@\u200b");
   const embed={title:"📝 "+APPLICATION_NAMES[type],description:`**Applicant:** ${safeUser}\n**Application ID:** \`${applicationId}\`\n**Questions:** ${entries.length}`,color:0x8b5cf6,fields:chunks[i],footer:{text:`${applicationId} • Part ${i+1}/${chunks.length}`},timestamp:new Date().toISOString()};
   const r=await fetch(env.DISCORD_WEBHOOK_URL+"?wait=true",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({embeds:[embed]})});
   if(!r.ok){console.error(await r.text());return json({error:"Discord rejected the application."},502,cors);}
  }
  return json({success:true,applicationId},200,cors);
 }catch(error){console.error(error);return json({error:"Invalid request."},400,cors);}
}};
function json(data,status,cors){return new Response(JSON.stringify(data),{status,headers:{"Content-Type":"application/json",...cors}});}
