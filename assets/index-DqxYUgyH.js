import{r as R,R as S}from"./index-DRjF_FHU.js";import{j as I}from"./jsx-runtime-DR9Q75dM.js";import{u as N,S as P}from"./index-CaQnC5nY.js";function h(t,i=[]){let u=[];function M(c,o){const n=R.createContext(o),s=u.length;u=[...u,o];function x(m){const{scope:a,children:r,...e}=m,d=(a==null?void 0:a[t][s])||n,l=R.useMemo(()=>e,Object.values(e));return I.jsx(d.Provider,{value:l,children:r})}function _(m,a){const r=(a==null?void 0:a[t][s])||n,e=R.useContext(r);if(e)return e;if(o!==void 0)return o;throw new Error(`\`${m}\` must be used within \`${c}\``)}return x.displayName=c+"Provider",[x,_]}const f=()=>{const c=u.map(o=>R.createContext(o));return function(n){const s=(n==null?void 0:n[t])||c;return R.useMemo(()=>({[`__scope${t}`]:{...n,[t]:s}}),[n,s])}};return f.scopeName=t,[M,O(f,...i)]}function O(...t){const i=t[0];if(t.length===1)return i;const u=()=>{const M=t.map(f=>({useScope:f(),scopeName:f.scopeName}));return function(c){const o=M.reduce((n,{useScope:s,scopeName:x})=>{const m=s(c)[`__scope${x}`];return{...n,...m}},{});return R.useMemo(()=>({[`__scope${i.scopeName}`]:o}),[o])}};return u.scopeName=i.scopeName,u}function y(t){const i=t+"CollectionProvider",[u,M]=h(i),[f,c]=u(i,{collectionRef:{current:null},itemMap:new Map}),o=r=>{const{scope:e,children:d}=r,l=S.useRef(null),p=S.useRef(new Map).current;return I.jsx(f,{scope:e,itemMap:p,collectionRef:l,children:d})};o.displayName=i;const n=t+"CollectionSlot",s=S.forwardRef((r,e)=>{const{scope:d,children:l}=r,p=c(n,d),C=N(e,p.collectionRef);return I.jsx(P,{ref:C,children:l})});s.displayName=n;const x=t+"CollectionItemSlot",_="data-radix-collection-item",m=S.forwardRef((r,e)=>{const{scope:d,children:l,...p}=r,C=S.useRef(null),E=N(e,C),v=c(x,d);return S.useEffect(()=>(v.itemMap.set(C,{ref:C,...p}),()=>void v.itemMap.delete(C))),I.jsx(P,{[_]:"",ref:E,children:l})});m.displayName=x;function a(r){const e=c(t+"CollectionConsumer",r);return S.useCallback(()=>{const l=e.collectionRef.current;if(!l)return[];const p=Array.from(l.querySelectorAll(`[${_}]`));return Array.from(e.itemMap.values()).sort((v,A)=>p.indexOf(v.ref.current)-p.indexOf(A.ref.current))},[e.collectionRef,e.itemMap])}return[{Provider:o,Slot:s,ItemSlot:m},a,M]}export{y as c};