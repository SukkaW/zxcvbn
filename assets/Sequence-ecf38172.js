import{_ as e,p as d,q as s,O as r,P as a,R as o,Q as t,v as n}from"./framework-9e042e77.js";const i={name:"ZxcvbnSequence",props:{result:{type:Object,default(){return{}}}}},_={class:"match-sequence"},h=t("strong",null,"match sequence:",-1),c={colspan:"2"},p=t("td",null,"pattern:",-1),y=t("td",null,"guessesLog10:",-1),m=t("td",null,"cardinality:",-1),f=t("td",null,"length:",-1),k=t("td",null,"dictionaryName:",-1),g=t("td",null,"rank:",-1),v=t("td",null,"reversed:",-1),b=t("td",null,"l33t subs:",-1),N=t("td",null,"un-l33ted:",-1),x=t("td",null,"base-guesses:",-1),S=t("td",null,"uppercase-variations:",-1),T=t("td",null,"l33t-variations:",-1),V=t("td",null,"graph:",-1),B=t("td",null,"turns:",-1),C=t("td",null,"shifted count:",-1),L={key:0},D=t("td",null,"baseToken:",-1),O=t("td",null,"guesses:",-1),R=t("td",null,"numRepeats:",-1),$={key:0},j=t("td",null,"sequence-name:",-1),z=t("td",null,"sequence-size",-1),E=t("td",null,"ascending:",-1),F={key:5},G=t("td",null,"regexName:",-1),P=t("td",null,"day:",-1),Q=t("td",null,"month:",-1),W=t("td",null,"year:",-1),Z=t("td",null,"separator:",-1);function w(A,H,u,I,J,K){return d(),s("div",_,[h,u.result.sequence?(d(!0),s(r,{key:0},a(u.result.sequence,l=>(d(),s("table",null,[t("tr",null,[t("td",c,"'"+n(l.token)+"'",1)]),t("tr",null,[p,t("td",null,n(l.pattern),1)]),t("tr",null,[y,t("td",null,n(l.guessesLog10),1)]),l.cardinality?(d(),s(r,{key:0},[t("tr",null,[m,t("td",null,n(l.cardinality),1)]),t("tr",null,[f,t("td",null,n(l.length),1)])],64)):o("v-if",!0),l.rank?(d(),s(r,{key:1},[t("tr",null,[k,t("td",null,n(l.dictionaryName),1)]),t("tr",null,[g,t("td",null,n(l.rank),1)]),t("tr",null,[v,t("td",null,n(l.reversed),1)]),l.l33t?(d(),s(r,{key:0},[t("tr",null,[b,t("td",null,n(l.subDisplay),1)]),t("tr",null,[N,t("td",null,n(l.matchedWord),1)])],64)):o("v-if",!0),t("tr",null,[x,t("td",null,n(l.baseGuesses),1)]),t("tr",null,[S,t("td",null,n(l.uppercaseVariations),1)]),t("tr",null,[T,t("td",null,n(l.l33tVariations),1)])],64)):o("v-if",!0),l.graph?(d(),s(r,{key:2},[t("tr",null,[V,t("td",null,n(l.graph),1)]),t("tr",null,[B,t("td",null,n(l.turns),1)]),t("tr",null,[C,t("td",null,n(l.shiftedCount),1)])],64)):o("v-if",!0),l.baseToken?(d(),s(r,{key:3},[l.baseToken?(d(),s("tr",L,[D,t("td",null,"'"+n(l.baseToken)+"'",1)])):o("v-if",!0),t("tr",null,[O,t("td",null,n(l.guesses),1)]),t("tr",null,[R,t("td",null,n(l.repeatCount),1)])],64)):o("v-if",!0),l.sequenceName?(d(),s(r,{key:4},[l.sequenceName?(d(),s("tr",$,[j,t("td",null,n(l.sequenceName),1)])):o("v-if",!0),t("tr",null,[z,t("td",null,n(l.sequenceSpace),1)]),t("tr",null,[E,t("td",null,n(l.ascending),1)])],64)):o("v-if",!0),l.regexName?(d(),s("tr",F,[G,t("td",null,n(l.regexName),1)])):o("v-if",!0),l.day?(d(),s(r,{key:6},[t("tr",null,[P,t("td",null,n(l.day),1)]),t("tr",null,[Q,t("td",null,n(l.month),1)]),t("tr",null,[W,t("td",null,n(l.year),1)]),t("tr",null,[Z,t("td",null,"'"+n(l.separator)+"'",1)])],64)):o("v-if",!0)]))),256)):o("v-if",!0)])}const U=e(i,[["render",w],["__file","Sequence.vue"]]);export{U as default};
