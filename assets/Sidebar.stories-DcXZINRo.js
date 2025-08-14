import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as s,e as se,c as I,g as Ve}from"./iframe-bdvnZaW_.js";import{T as S}from"./Typography-RGth0MBy.js";import{c as x,a as y}from"./index-Cr-WShRT.js";import{P as V}from"./index-DnJcPJ_G.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BFfoInqr.js";function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function Ze(e,t){if(e==null)return{};var n=Re(e,t),r,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Re(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var te=s.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,i=e.size,l=i===void 0?24:i,c=Ze(e,["color","size"]);return se.createElement("svg",ee({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),se.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))});te.propTypes={color:V.string,size:V.oneOfType([V.string,V.number])};te.displayName="Star";var G,le;function qe(){if(le)return G;le=1;function e(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}return G=e,G}var H,ce;function Pe(){if(ce)return H;ce=1;var e=typeof I=="object"&&I&&I.Object===Object&&I;return H=e,H}var B,me;function ke(){if(me)return B;me=1;var e=Pe(),t=typeof self=="object"&&self&&self.Object===Object&&self,n=e||t||Function("return this")();return B=n,B}var W,de;function Le(){if(de)return W;de=1;var e=ke(),t=function(){return e.Date.now()};return W=t,W}var F,ue;function Ae(){if(ue)return F;ue=1;var e=/\s/;function t(n){for(var r=n.length;r--&&e.test(n.charAt(r)););return r}return F=t,F}var z,pe;function Me(){if(pe)return z;pe=1;var e=Ae(),t=/^\s+/;function n(r){return r&&r.slice(0,e(r)+1).replace(t,"")}return z=n,z}var D,fe;function Se(){if(fe)return D;fe=1;var e=ke(),t=e.Symbol;return D=t,D}var $,ve;function Ge(){if(ve)return $;ve=1;var e=Se(),t=Object.prototype,n=t.hasOwnProperty,r=t.toString,i=e?e.toStringTag:void 0;function l(c){var m=n.call(c,i),d=c[i];try{c[i]=void 0;var o=!0}catch{}var f=r.call(c);return o&&(m?c[i]=d:delete c[i]),f}return $=l,$}var U,ge;function He(){if(ge)return U;ge=1;var e=Object.prototype,t=e.toString;function n(r){return t.call(r)}return U=n,U}var Q,he;function Be(){if(he)return Q;he=1;var e=Se(),t=Ge(),n=He(),r="[object Null]",i="[object Undefined]",l=e?e.toStringTag:void 0;function c(m){return m==null?m===void 0?i:r:l&&l in Object(m)?t(m):n(m)}return Q=c,Q}var X,be;function We(){if(be)return X;be=1;function e(t){return t!=null&&typeof t=="object"}return X=e,X}var J,ye;function Fe(){if(ye)return J;ye=1;var e=Be(),t=We(),n="[object Symbol]";function r(i){return typeof i=="symbol"||t(i)&&e(i)==n}return J=r,J}var K,xe;function ze(){if(xe)return K;xe=1;var e=Me(),t=qe(),n=Fe(),r=NaN,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,m=parseInt;function d(o){if(typeof o=="number")return o;if(n(o))return r;if(t(o)){var f=typeof o.valueOf=="function"?o.valueOf():o;o=t(f)?f+"":f}if(typeof o!="string")return o===0?o:+o;o=e(o);var g=l.test(o);return g||c.test(o)?m(o.slice(2),g?2:8):i.test(o)?r:+o}return K=d,K}var Y,Ne;function De(){if(Ne)return Y;Ne=1;var e=qe(),t=Le(),n=ze(),r="Expected a function",i=Math.max,l=Math.min;function c(m,d,o){var f,g,h,T,v,b,u=0,w=!1,O=!1,L=!0;if(typeof m!="function")throw new TypeError(r);d=n(d)||0,e(o)&&(w=!!o.leading,O="maxWait"in o,h=O?i(n(o.maxWait)||0,d):h,L="trailing"in o?!!o.trailing:L);function A(p){var j=f,_=g;return f=g=void 0,u=p,T=m.apply(_,j),T}function _e(p){return u=p,v=setTimeout(E,d),w?A(p):T}function Ce(p){var j=p-b,_=p-u,oe=d-j;return O?l(oe,h-_):oe}function ae(p){var j=p-b,_=p-u;return b===void 0||j>=d||j<0||O&&_>=h}function E(){var p=t();if(ae(p))return ie(p);v=setTimeout(E,Ce(p))}function ie(p){return v=void 0,L&&f?A(p):(f=g=void 0,T)}function Ee(){v!==void 0&&clearTimeout(v),u=0,f=b=g=v=void 0}function Ie(){return v===void 0?T:ie(t())}function M(){var p=t(),j=ae(p);if(f=arguments,g=this,b=p,j){if(v===void 0)return _e(b);if(O)return clearTimeout(v),v=setTimeout(E,d),A(b)}return v===void 0&&(v=setTimeout(E,d)),T}return M.cancel=Ee,M.flush=Ie,M}return Y=c,Y}var $e=De();const Ue=Ve($e),Qe=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},s.createElement("path",{d:"M262.42-187.27q-80.58 0-137.46-55.87-56.88-55.87-56.88-136.63 0-71.61 46.59-127.38 46.6-55.77 117.91-65.12 17.85-88.03 87.5-144.25 69.66-56.21 159.92-56.21 105.96 0 179.75 74.12 73.79 74.11 73.79 179.42v22.73h12.31q61.61 2.69 103.84 47.79 42.23 45.09 42.23 106.55 0 64.49-45.12 109.67-45.13 45.18-110.03 45.18H262.42Zm0-55.96H736.8q41.51 0 70.33-28.69 28.83-28.69 28.83-70.23 0-41.54-28.71-70.13-28.7-28.59-70.28-28.59h-59.39v-78.25q0-82.02-57.78-139.83-57.79-57.82-139.77-57.82-81.98 0-139.76 57.79-57.79 57.79-57.79 139.79h-19.93q-57.63 0-98.07 40.19-40.44 40.19-40.44 97.79 0 57.59 40.44 97.79 40.44 40.19 97.94 40.19ZM480-480Z"})),Xe=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},s.createElement("path",{d:"M147.27-518.08v-294.65h294.85v294.65H147.27Zm0 370.81v-294.85h294.85v294.85H147.27Zm370.81-370.81v-294.65h294.65v294.65H518.08Zm0 370.81v-294.85h294.65v294.85H518.08ZM203.23-574.04h182.93v-182.73H203.23v182.73Zm370.81 0h182.73v-182.73H574.04v182.73Zm0 370.81h182.73v-182.93H574.04v182.93Zm-370.81 0h182.93v-182.93H203.23v182.93Zm370.81-370.81Zm0 187.88Zm-187.88 0Zm0-187.88Z"})),Je=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},s.createElement("path",{d:"M363.58-404.54h364.96L608.42-562.77l-95.07 121.54-61.97-76.88-87.8 113.57ZM318.27-260q-28.44 0-48.35-19.92Q250-299.83 250-328.27v-455.38q0-28.44 19.92-48.36 19.91-19.91 48.35-19.91h455.38q28.44 0 48.36 19.91 19.91 19.92 19.91 48.36v455.38q0 28.44-19.91 48.35Q802.09-260 773.65-260H318.27Zm0-55.96h455.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.47-3.84-3.84-8.46-3.84H318.27q-4.62 0-8.46 3.84-3.85 3.85-3.85 8.47v455.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM186.35-128.08q-28.44 0-48.36-19.92-19.91-19.91-19.91-48.35v-511.34h55.96v511.34q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h511.34v55.96H186.35Zm119.61-667.88v480-480Z"})),Ke=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},s.createElement("path",{d:"M243.23-108.08q-39.82 0-67.89-27.62-28.07-27.63-28.07-67.35v-92.91h118.39v-547.46l54.57 46.07 54.5-46.07 54.5 46.07 55.5-46.07 54.5 46.07 54.5-46.07 55.41 46.07 54.41-46.07 55.41 46.07 53.77-46.07v640.19q0 39.9-28.07 67.53-28.07 27.62-67.89 27.62H243.23Zm473.54-55.96q17 0 28.5-11.05 11.5-11.06 11.5-27.91v-553.77H321.62v460.81h355.96v92.73q0 17.08 11.05 28.14 11.06 11.05 28.14 11.05ZM370.12-610.81v-55.96h222.07v55.96H370.12Zm0 118.39v-55.96h222.07v55.96H370.12Zm304.75-113q-13.68 0-23.52-9.85-9.85-9.85-9.85-23.52t9.85-23.52q9.84-9.84 23.52-9.84 13.67 0 23.51 9.84 9.85 9.85 9.85 23.52t-9.85 23.52q-9.84 9.85-23.51 9.85Zm0 118.38q-13.68 0-23.52-9.84-9.85-9.85-9.85-23.52 0-13.68 9.85-23.52 9.84-9.85 23.52-9.85 13.67 0 23.51 9.85 9.85 9.84 9.85 23.52 0 13.67-9.85 23.52-9.84 9.84-23.51 9.84Zm-431.8 323h378.55V-240H203.23v36.77q0 17.08 11.45 28.14 11.46 11.05 28.39 11.05Zm-39.84 0V-240v75.96Z"})),Ye=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},s.createElement("path",{d:"M680-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200Zm-400-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T360-400q0-33-23.5-56.5T280-480q-33 0-56.5 23.5T200-400q0 33 23.5 56.5T280-320Zm160-240q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T520-720q0-33-23.5-56.5T440-800q-33 0-56.5 23.5T360-720q0 33 23.5 56.5T440-640Zm240 360ZM280-400Zm160-320Z"})),et=x(["p-2","pb-5","text-white","flex","flex-col","gap-2"]),R=({className:e,children:t})=>a.jsx("footer",{className:y(et({className:e})),children:t});R.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren","VariantProps"]};const tt=x(["md:px-4","md:py-5","flex","flex-col","justify-center","gap-1","group","relative","mb-8","[&>p]:pl-14","[&>p]:-mt-2","[&>img]:pt-3","[&>*>p]:absolute","[&>*>p]:bottom-0","[&>*>p]:-mt-2","[&>*>img]:pt-3","cursor-pointer"]),P=({children:e,className:t})=>a.jsx("header",{className:y(tt({className:t})),children:e});P.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren","VariantProps"]};const rt=x(["text-sm","font-bold","px-4","mt-3","mb-2","text-white","selection:bg-powder-500","selection:text-white"]),re=({title:e,className:t,isVisible:n=!0})=>n?a.jsx("h2",{className:y(rt({className:t})),children:e}):null;re.__docgenInfo={description:"",methods:[],displayName:"NavigationTitle",props:{title:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["VariantProps","Pick"]};const nt=x(["flex","flex-col","gap-1"]),C=({children:e,title:t,className:n,titleClassName:r,isVisible:i=!0,...l})=>i?a.jsxs(a.Fragment,{children:[t?a.jsx(re,{title:t,className:r,...l}):null,a.jsx("ul",{className:y(nt({className:n})),children:e})]}):null;C.__docgenInfo={description:"",methods:[],displayName:"NavigationGroup",props:{title:{required:!1,tsType:{name:"string"},description:""},titleClassName:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["PropsWithChildren","VariantProps","Pick"]};const at=x(["[&>a]:flex","[&>a]:gap-2","[&>a]:no-underline","[&>a]:text-inherit","[&>a]:w-full","cursor-pointer","flex","font-normal","font-normal","gap-2","rounded-xl","md:px-4","md:py-2.5","p-2","text-black","w-full","text-[#9ea2c6]","hover:text-white","hover:bg-[#252a41]","selection:bg-powder-500","selection:text-white"],{variants:{isActive:{true:"",false:""}},compoundVariants:[{isActive:!0,class:["text-white","bg-[#252a41]"]}]}),q=({children:e,className:t,isVisible:n=!0,isActive:r,...i})=>n?a.jsx("li",{...i,role:"option",className:y(at({className:t,isActive:r})),children:e}):null;q.__docgenInfo={description:"",methods:[],displayName:"NavigationOption",props:{className:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:""}}};const it=x(["border-t","rounded-full","my-1.5"]),ne=({className:e})=>a.jsx("div",{className:y(it({className:e}))});ne.__docgenInfo={description:"",methods:[],displayName:"NavigationSeparator",composes:["Pick","VariantProps"]};const ot=x(["flex","flex-1","w-full","flex-col"]),k=({className:e,children:t})=>a.jsx("nav",{className:y(ot({className:e})),children:t});k.NavigationGroup=C;k.NavigationOption=q;k.NavigationSeparator=ne;k.NavigationTitle=re;k.__docgenInfo={description:"",methods:[{name:"NavigationGroup",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  title,
  className,
  titleClassName,
  isVisible = true,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"NavigationOption",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  isVisible = true,
  isActive,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"NavigationSeparator",docblock:null,modifiers:["static"],params:[{name:`{
  className,
}`,optional:!1,type:null}],returns:null},{name:"NavigationTitle",docblock:null,modifiers:["static"],params:[{name:`{
  title,
  className,
  isVisible = true,
}`,optional:!1,type:null}],returns:null}],displayName:"Navigation"};const st=x(["duration-200","ease-linear","flex","flex-col","flex-shrink-0","group/sidebar","h-full","px-4","relative","transition-all","w-[72px]","md:w-[256px]","bg-kubefirst-dark-blue-900"]),lt=x(["absolute","top-0","right-0","h-full","opacity-0","group-hover/sidebar:opacity-100","cursor-col-resize","w-[2px]","shadow","shadow-slate-200","bg-slate-200"]),Oe=({canResize:e=!0,children:t,maxWith:n=300,minWith:r=240,theme:i,wrapperClassName:l})=>{const c=s.useRef(null),m=s.useRef(null),d=s.useRef(!1),o=s.useCallback(u=>{if(!d.current){c.current&&(c.current.style.opacity="0");return}let w=u.clientX;w<r&&(w=r),w>n&&(w=n),m.current&&c.current&&(m.current.style.width=`${w}px`,c.current.classList.add("opacity-100"))},[n,r]),f=s.useCallback(()=>{d.current=!1,c.current&&c.current.classList.remove("opacity-100"),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",f)},[o]),g=s.useCallback(u=>{u.preventDefault(),u.stopPropagation(),d.current=!0,document.addEventListener("mousemove",o),document.addEventListener("mouseup",f)},[o,f]),h=s.useMemo(()=>s.Children.toArray(t),[t]),T=s.useMemo(()=>s.Children.toArray(h).find(u=>s.isValidElement(u)&&u.type===P),[h]),v=s.useMemo(()=>s.Children.toArray(h).find(u=>s.isValidElement(u)&&u.type===k),[h]),b=s.useMemo(()=>s.Children.toArray(h).find(u=>s.isValidElement(u)&&u.type===R),[h]);return a.jsxs("aside",{ref:m,className:y(st({className:l})),"data-theme":i,children:[T,v,b,e&&a.jsx("div",{ref:c,className:y(lt()),onMouseDown:g})]})};Oe.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{wrapperClassName:{required:!1,tsType:{name:"string"},description:""},minWith:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"240",computed:!1}},maxWith:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},canResize:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""}},composes:["VariantProps","PropsWithChildren"]};const N=e=>a.jsx(Oe,{...e});N.Footer=R;N.Logo=P;N.Navigation=k;N.NavigationGroup=C;N.NavigationOption=q;N.NavigationSeparator=ne;N.__docgenInfo={description:"",methods:[{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ className, children }",optional:!1,type:null}],returns:null},{name:"Logo",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",optional:!1,type:null}],returns:null},{name:"Navigation",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  children,
}`,optional:!1,type:null}],returns:null},{name:"NavigationGroup",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  title,
  className,
  titleClassName,
  isVisible = true,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"NavigationOption",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  isVisible = true,
  isActive,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"NavigationSeparator",docblock:null,modifiers:["static"],params:[{name:`{
  className,
}`,optional:!1,type:null}],returns:null}],displayName:"Sidebar"};const gt={title:"In Review/Sidebar",component:N,decorators:[e=>{const[t,n]=s.useState(window.innerHeight),r=Ue(()=>n(window.innerHeight),150);return s.useEffect(()=>{const i=window.parent.document.getElementById("storybook-panel-root");if(!i)return;const l=new ResizeObserver(r);return l.observe(i),()=>{l.disconnect()}},[r]),s.useEffect(()=>{const i=m=>{(m==null?void 0:m.querySelector(".sidebar-container"))&&r()},l=m=>{m.forEach(d=>{d.addedNodes.forEach(i),d.removedNodes.forEach(i)})};new MutationObserver(l).observe(window.parent.document.body,{childList:!0,subtree:!0})},[r]),a.jsx("div",{style:{margin:"-1rem",height:t},children:a.jsx(e,{})})}]},Z={render:()=>{const[e,t]=s.useState("kubefirst");return a.jsxs(N,{theme:e,children:[a.jsx(P,{children:a.jsxs("a",{className:"flex items-center gap-2",children:[a.jsx("img",{className:"flex-1 shrink-0 hidden md:block",src:"./logo-kubefirst.svg",alt:"Company logo"}),a.jsx("img",{className:"block h-10 w-12 md:hidden",src:"./ray.svg",alt:"Company logo"}),a.jsx(S,{variant:"labelSmall",className:"md:left-[35%] !bottom-[-20px] md:!bottom-0 text-[#ABADC6] lowercase",children:"v1.11.1"})]})}),a.jsxs(k,{className:"mt-4 md:mt-0",children:[a.jsxs(C,{children:[a.jsx(q,{children:a.jsxs("a",{className:"flex items-center gap-2 md:mt-0",children:[a.jsx(Ye,{className:"w-6 h-6"})," ",a.jsx(S,{variant:"body1",className:"hidden md:block",children:"Clusters"})]})}),a.jsxs(q,{role:"button",onClick:()=>t("colony"),isActive:e==="colony",children:[a.jsx(Xe,{className:"w-6 h-6"})," ",a.jsx(S,{variant:"body1",className:"hidden md:block",children:"Services"})]}),a.jsxs(q,{role:"button",onClick:()=>t("kubefirst"),isActive:e==="kubefirst",children:[a.jsx(Je,{className:"w-6 h-6"})," ",a.jsx(S,{variant:"body1",className:"hidden md:block",children:"Environments"})]})]}),a.jsxs(C,{title:"Admin settings",titleClassName:"uppercase hidden md:block ",children:[a.jsxs(q,{role:"button",onClick:()=>t("civo"),isActive:e==="civo",children:[a.jsx(Ke,{className:"w-6 h-6"})," ",a.jsx(S,{variant:"body1",className:"hidden md:block",children:"Plans & Billing"})]}),a.jsx(q,{children:a.jsxs("a",{className:"flex items-center gap-2",children:[a.jsx(Qe,{className:"w-6 h-6"})," ",a.jsx(S,{variant:"body1",className:"hidden md:block",children:"Cloud accounts"})]})})]})]}),a.jsx(R,{children:a.jsxs("span",{className:"text-[#81e2b4] flex items-center gap-2 justify-center font-semibold cursor-pointer",children:[a.jsx(te,{className:"w-5 h-5"})," ",a.jsx(S,{variant:"body1",className:"hidden md:block",children:"Upgrade to Business"})]})})]})}};var Te,we,je;Z.parameters={...Z.parameters,docs:{...(Te=Z.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const [theme, setTheme] = useState<Theme>('kubefirst');
    return <SidebarPrimitive theme={theme}>
        <Logo>
          <a className="flex items-center gap-2">
            <img className="flex-1 shrink-0 hidden md:block" src="./logo-kubefirst.svg" alt="Company logo" />
            <img className="block h-10 w-12 md:hidden" src="./ray.svg" alt="Company logo" />
            <Typography variant="labelSmall" className="md:left-[35%] !bottom-[-20px] md:!bottom-0 text-[#ABADC6] lowercase">
              v1.11.1
            </Typography>
          </a>
        </Logo>

        <Navigation className="mt-4 md:mt-0">
          <NavigationGroup>
            <NavigationOption>
              <a className="flex items-center gap-2 md:mt-0">
                <ScatterPlotIcon className="w-6 h-6" />{' '}
                <Typography variant="body1" className="hidden md:block">
                  Clusters
                </Typography>
              </a>
            </NavigationOption>

            <NavigationOption role="button" onClick={() => setTheme('colony')} isActive={theme === 'colony'}>
              <GridViewIcon className="w-6 h-6" />{' '}
              <Typography variant="body1" className="hidden md:block">
                Services
              </Typography>
            </NavigationOption>

            <NavigationOption role="button" onClick={() => setTheme('kubefirst')} isActive={theme === 'kubefirst'}>
              <PhotoLibraryIcon className="w-6 h-6" />{' '}
              <Typography variant="body1" className="hidden md:block">
                Environments
              </Typography>
            </NavigationOption>
          </NavigationGroup>

          <NavigationGroup title="Admin settings" titleClassName="uppercase hidden md:block ">
            <NavigationOption role="button" onClick={() => setTheme('civo')} isActive={theme === 'civo'}>
              <ReceiptLongIcon className="w-6 h-6" />{' '}
              <Typography variant="body1" className="hidden md:block">
                Plans & Billing
              </Typography>
            </NavigationOption>

            <NavigationOption>
              <a className="flex items-center gap-2">
                <CloudIcon className="w-6 h-6" />{' '}
                <Typography variant="body1" className="hidden md:block">
                  Cloud accounts
                </Typography>
              </a>
            </NavigationOption>
          </NavigationGroup>
        </Navigation>

        <Footer>
          <span className="text-[#81e2b4] flex items-center gap-2 justify-center font-semibold cursor-pointer">
            <Star className="w-5 h-5" />{' '}
            <Typography variant="body1" className="hidden md:block">
              Upgrade to Business
            </Typography>
          </span>
        </Footer>
      </SidebarPrimitive>;
  }
} satisfies Story`,...(je=(we=Z.parameters)==null?void 0:we.docs)==null?void 0:je.source}}};const ht=["Sidebar"];export{Z as Sidebar,ht as __namedExportsOrder,gt as default};
