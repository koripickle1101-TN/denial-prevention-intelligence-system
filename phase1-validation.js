/* DPIS Phase 1 — pure training-state evaluation functions (no PHI). */
(function(root){
"use strict";
const valid=new Set(["ready","unknown","unresolved","route"]);
function readiness(input){
 const fields=["eligibility","authorization","documentation","claim"];
 if(fields.some(k=>!valid.has(input[k])))return {status:"HOLD",reason:"Incomplete or invalid checkpoint evidence."};
 if(fields.some(k=>input[k]==="unresolved"))return {status:"HOLD",reason:"Unresolved upstream exceptions require correction or controlled escalation."};
 if(input.claim==="route")return {status:"ROUTE",reason:"Qualified review is required before advancement."};
 if(fields.some(k=>input[k]==="unknown"))return {status:"HOLD",reason:"Unknown evidence must not be treated as ready."};
 return {status:"READY",reason:"All modeled checkpoints are reviewed as ready; this does not establish real claim acceptance."};
}
function traceback(input){
 if(input.signal==="unknown"||input.signalEvidence==="missing")return {status:"HOLD",reason:"Signal classification or supporting response evidence is missing; do not assert a denial or rejection."};
 const kind=input.signal==="rejection"?"transmission / clearinghouse rejection":"payer-adjudication denial signal";
 if(!["rejection","denial"].includes(input.signal))return {status:"HOLD",reason:"Invalid signal type."};
 const owners={authorization:"Authorization workflow owner",eligibility:"Patient access / eligibility owner",documentation:"Documentation / HIM workflow owner",transmission:"Claim submission workflow owner"};
 if(input.breakpoint==="unknown"||!owners[input.breakpoint])return {status:"ESCALATE",reason:"The earliest supported checkpoint is not established. Obtain evidence before routing or attributing cause.",kind};
 return {status:"ROUTE",reason:"Review "+input.breakpoint+" checkpoint evidence. A "+kind+" is a signal, not proof of the original root cause."+(input.rootEvidence==="supported"?" The checkpoint condition is supported by fictional evidence, but causation remains unproven.":" Root-cause hypothesis remains unproven."),owner:owners[input.breakpoint],kind};
}
function closure(input){
 if(input.openException!=="no")return {status:"HOLD",reason:"An open exception cannot be closed."};
 if(!input.owner)return {status:"ROUTE",reason:"Assign an operational owner before closure."};
 if(!input.nextAction||!input.nextAction.trim()||!input.action)return {status:"HOLD",reason:"Document the action and follow-up/disposition before closure."};
 if(input.action==="escalate")return {status:"ESCALATE",reason:"Escalation is a next action, not verified account resolution."};
 if(input.closureStatus!=="verified"||!input.closureNote||!input.closureNote.trim())return {status:"HOLD",reason:"Verified resolution evidence and a supporting fictional closure note are required."};
 if(input.upstreamStatus!=="READY")return {status:"HOLD",reason:"Upstream review is not ready; resolve remaining simulated checkpoint issues first."};
 if(input.signalStatus!=="ROUTE"||input.signalEvidence==="missing")return {status:"HOLD",reason:"Downstream signal and evidence review are incomplete."};
 return {status:"CLOSED",reason:"Fictional resolution evidence, ownership and review checkpoints are documented. This is simulated closure only."};
}
const api={readiness,traceback,closure};
if(typeof module!=="undefined"&&module.exports)module.exports=api;
root.DPISPhase1=api;
if(typeof document==="undefined")return;
function value(id){return document.getElementById(id).value}
function show(id,r){const el=document.getElementById(id);el.replaceChildren();const h=document.createElement("h3"),p=document.createElement("p");h.textContent=r.status;p.textContent=r.reason;el.append(h,p)}
function upstream(){return readiness({eligibility:value("eligibility"),authorization:value("authorization"),documentation:value("documentation"),claim:value("claim")})}
function downstream(){return traceback({signal:value("signal"),signalEvidence:value("signalEvidence"),breakpoint:value("breakpoint"),rootEvidence:value("rootEvidence")})}
document.getElementById("assess").addEventListener("click",()=>show("readinessResult",upstream()));
document.getElementById("trace").addEventListener("click",()=>show("traceResult",downstream()));
document.getElementById("close").addEventListener("click",()=>show("closureResult",closure({owner:value("owner"),action:value("action"),nextAction:value("nextAction"),closureStatus:value("closureStatus"),closureNote:value("closureNote"),openException:value("openException"),upstreamStatus:upstream().status,signalStatus:downstream().status,signalEvidence:value("signalEvidence")})));
function resetCase(){
 // Restore the documented initial synthetic case, regardless of browser form persistence.
 const controls=document.querySelectorAll(".lab-grid select, .lab-grid input, .lab-grid textarea");
 controls.forEach(control=>{
  if(control.tagName==="SELECT"){
   const initial=Array.from(control.options).find(option=>option.defaultSelected);
   control.selectedIndex=initial?initial.index:0;
  }else{
   control.value=control.defaultValue;
  }
 });
 show("readinessResult",upstream());
 show("traceResult",downstream());
 show("closureResult",{status:"HOLD",reason:"No verified closure evidence has been provided."});
}
document.getElementById("reset").addEventListener("click",resetCase);
})(typeof globalThis!=="undefined"?globalThis:this);
