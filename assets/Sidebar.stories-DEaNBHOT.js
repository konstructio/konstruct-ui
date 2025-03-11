import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as o,R as le,c as R,g as Re}from"./index-DUAV1Q2A.js";import{T as _}from"./Typography-BhPkp4yD.js";import{c as y}from"./index-CnCxUiSm.js";import{a as x}from"./index-Bj7X0qp-.js";import{u as q}from"./theme.hook-gog7kSAh.js";import{T as Ze}from"./theme.provider-Dhp8WBNv.js";import{P as Z}from"./index-ux_S9feM.js";function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}function Pe(e,t){if(e==null)return{};var n=Le(e,t),r,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Le(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var re=o.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,i=e.size,l=i===void 0?24:i,c=Pe(e,["color","size"]);return le.createElement("svg",te({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),le.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))});re.propTypes={color:Z.string,size:Z.oneOfType([Z.string,Z.number])};re.displayName="Star";var H,ce;function qe(){if(ce)return H;ce=1;function e(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}return H=e,H}var B,me;function Ae(){if(me)return B;me=1;var e=typeof R=="object"&&R&&R.Object===Object&&R;return B=e,B}var W,ue;function Se(){if(ue)return W;ue=1;var e=Ae(),t=typeof self=="object"&&self&&self.Object===Object&&self,n=e||t||Function("return this")();return W=n,W}var F,de;function Me(){if(de)return F;de=1;var e=Se(),t=function(){return e.Date.now()};return F=t,F}var z,pe;function Ge(){if(pe)return z;pe=1;var e=/\s/;function t(n){for(var r=n.length;r--&&e.test(n.charAt(r)););return r}return z=t,z}var D,fe;function He(){if(fe)return D;fe=1;var e=Ge(),t=/^\s+/;function n(r){return r&&r.slice(0,e(r)+1).replace(t,"")}return D=n,D}var $,he;function Oe(){if(he)return $;he=1;var e=Se(),t=e.Symbol;return $=t,$}var U,ve;function Be(){if(ve)return U;ve=1;var e=Oe(),t=Object.prototype,n=t.hasOwnProperty,r=t.toString,i=e?e.toStringTag:void 0;function l(c){var m=n.call(c,i),u=c[i];try{c[i]=void 0;var s=!0}catch{}var h=r.call(c);return s&&(m?c[i]=u:delete c[i]),h}return U=l,U}var Q,ge;function We(){if(ge)return Q;ge=1;var e=Object.prototype,t=e.toString;function n(r){return t.call(r)}return Q=n,Q}var X,be;function Fe(){if(be)return X;be=1;var e=Oe(),t=Be(),n=We(),r="[object Null]",i="[object Undefined]",l=e?e.toStringTag:void 0;function c(m){return m==null?m===void 0?i:r:l&&l in Object(m)?t(m):n(m)}return X=c,X}var J,ye;function ze(){if(ye)return J;ye=1;function e(t){return t!=null&&typeof t=="object"}return J=e,J}var K,xe;function De(){if(xe)return K;xe=1;var e=Fe(),t=ze(),n="[object Symbol]";function r(i){return typeof i=="symbol"||t(i)&&e(i)==n}return K=r,K}var Y,Ne;function $e(){if(Ne)return Y;Ne=1;var e=He(),t=qe(),n=De(),r=NaN,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,m=parseInt;function u(s){if(typeof s=="number")return s;if(n(s))return r;if(t(s)){var h=typeof s.valueOf=="function"?s.valueOf():s;s=t(h)?h+"":h}if(typeof s!="string")return s===0?s:+s;s=e(s);var v=l.test(s);return v||c.test(s)?m(s.slice(2),v?2:8):i.test(s)?r:+s}return Y=u,Y}var ee,Te;function Ue(){if(Te)return ee;Te=1;var e=qe(),t=Me(),n=$e(),r="Expected a function",i=Math.max,l=Math.min;function c(m,u,s){var h,v,T,w,d,g,O=0,V=!1,p=!1,b=!0;if(typeof m!="function")throw new TypeError(r);u=n(u)||0,e(s)&&(V=!!s.leading,p="maxWait"in s,T=p?i(n(s.maxWait)||0,u):T,b="trailing"in s?!!s.trailing:b);function M(f){var j=h,C=v;return h=v=void 0,O=f,w=m.apply(C,j),w}function Ce(f){return O=f,d=setTimeout(I,u),V?M(f):w}function Ee(f){var j=f-g,C=f-O,se=u-j;return p?l(se,T-C):se}function ie(f){var j=f-g,C=f-O;return g===void 0||j>=u||j<0||p&&C>=T}function I(){var f=t();if(ie(f))return oe(f);d=setTimeout(I,Ee(f))}function oe(f){return d=void 0,b&&h?M(f):(h=v=void 0,w)}function Ve(){d!==void 0&&clearTimeout(d),O=0,h=g=v=d=void 0}function Ie(){return d===void 0?w:oe(t())}function G(){var f=t(),j=ie(f);if(h=arguments,v=this,g=f,j){if(d===void 0)return Ce(g);if(p)return clearTimeout(d),d=setTimeout(I,u),M(g)}return d===void 0&&(d=setTimeout(I,u)),w}return G.cancel=Ve,G.flush=Ie,G}return ee=c,ee}var Qe=Ue();const Xe=Re(Qe),Je=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},o.createElement("path",{d:"M262.42-187.27q-80.58 0-137.46-55.87-56.88-55.87-56.88-136.63 0-71.61 46.59-127.38 46.6-55.77 117.91-65.12 17.85-88.03 87.5-144.25 69.66-56.21 159.92-56.21 105.96 0 179.75 74.12 73.79 74.11 73.79 179.42v22.73h12.31q61.61 2.69 103.84 47.79 42.23 45.09 42.23 106.55 0 64.49-45.12 109.67-45.13 45.18-110.03 45.18H262.42Zm0-55.96H736.8q41.51 0 70.33-28.69 28.83-28.69 28.83-70.23 0-41.54-28.71-70.13-28.7-28.59-70.28-28.59h-59.39v-78.25q0-82.02-57.78-139.83-57.79-57.82-139.77-57.82-81.98 0-139.76 57.79-57.79 57.79-57.79 139.79h-19.93q-57.63 0-98.07 40.19-40.44 40.19-40.44 97.79 0 57.59 40.44 97.79 40.44 40.19 97.94 40.19ZM480-480Z"})),Ke=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},o.createElement("path",{d:"M147.27-518.08v-294.65h294.85v294.65H147.27Zm0 370.81v-294.85h294.85v294.85H147.27Zm370.81-370.81v-294.65h294.65v294.65H518.08Zm0 370.81v-294.85h294.65v294.85H518.08ZM203.23-574.04h182.93v-182.73H203.23v182.73Zm370.81 0h182.73v-182.73H574.04v182.73Zm0 370.81h182.73v-182.93H574.04v182.93Zm-370.81 0h182.93v-182.93H203.23v182.93Zm370.81-370.81Zm0 187.88Zm-187.88 0Zm0-187.88Z"})),Ye=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},o.createElement("path",{d:"M363.58-404.54h364.96L608.42-562.77l-95.07 121.54-61.97-76.88-87.8 113.57ZM318.27-260q-28.44 0-48.35-19.92Q250-299.83 250-328.27v-455.38q0-28.44 19.92-48.36 19.91-19.91 48.35-19.91h455.38q28.44 0 48.36 19.91 19.91 19.92 19.91 48.36v455.38q0 28.44-19.91 48.35Q802.09-260 773.65-260H318.27Zm0-55.96h455.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.47-3.84-3.84-8.46-3.84H318.27q-4.62 0-8.46 3.84-3.85 3.85-3.85 8.47v455.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM186.35-128.08q-28.44 0-48.36-19.92-19.91-19.91-19.91-48.35v-511.34h55.96v511.34q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h511.34v55.96H186.35Zm119.61-667.88v480-480Z"})),et=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},o.createElement("path",{d:"M243.23-108.08q-39.82 0-67.89-27.62-28.07-27.63-28.07-67.35v-92.91h118.39v-547.46l54.57 46.07 54.5-46.07 54.5 46.07 55.5-46.07 54.5 46.07 54.5-46.07 55.41 46.07 54.41-46.07 55.41 46.07 53.77-46.07v640.19q0 39.9-28.07 67.53-28.07 27.62-67.89 27.62H243.23Zm473.54-55.96q17 0 28.5-11.05 11.5-11.06 11.5-27.91v-553.77H321.62v460.81h355.96v92.73q0 17.08 11.05 28.14 11.06 11.05 28.14 11.05ZM370.12-610.81v-55.96h222.07v55.96H370.12Zm0 118.39v-55.96h222.07v55.96H370.12Zm304.75-113q-13.68 0-23.52-9.85-9.85-9.85-9.85-23.52t9.85-23.52q9.84-9.84 23.52-9.84 13.67 0 23.51 9.84 9.85 9.85 9.85 23.52t-9.85 23.52q-9.84 9.85-23.51 9.85Zm0 118.38q-13.68 0-23.52-9.84-9.85-9.85-9.85-23.52 0-13.68 9.85-23.52 9.84-9.85 23.52-9.85 13.67 0 23.51 9.85 9.85 9.84 9.85 23.52 0 13.67-9.85 23.52-9.84 9.84-23.51 9.84Zm-431.8 323h378.55V-240H203.23v36.77q0 17.08 11.45 28.14 11.46 11.05 28.39 11.05Zm-39.84 0V-240v75.96Z"})),tt=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",...e},o.createElement("path",{d:"M680-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200Zm-400-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T360-400q0-33-23.5-56.5T280-480q-33 0-56.5 23.5T200-400q0 33 23.5 56.5T280-320Zm160-240q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T520-720q0-33-23.5-56.5T440-800q-33 0-56.5 23.5T360-720q0 33 23.5 56.5T440-640Zm240 360ZM280-400Zm160-320Z"})),rt=x(["p-2","pb-5","text-white","flex","flex-col","gap-2"],{variants:{theme:{colony:"",kubefirst:"",civo:""}},defaultVariants:{theme:"kubefirst"}}),L=({theme:e,className:t,children:n})=>{const{theme:r}=q();return a.jsx("footer",{className:y(rt({theme:e??r,className:t})),children:n})};L.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren","VariantProps"]};const nt=x(["md:px-4","md:py-5","flex","flex-col","justify-center","gap-1","group","relative","mb-8","[&>p]:pl-14","[&>p]:-mt-2","[&>img]:pt-3","[&>*>p]:absolute","[&>*>p]:bottom-0","[&>*>p]:-mt-2","[&>*>img]:pt-3","cursor-pointer"],{variants:{theme:{colony:"",kubefirst:"",civo:""}},defaultVariants:{theme:"kubefirst"}}),A=({children:e,theme:t,className:n})=>{const{theme:r}=q();return a.jsx("header",{className:y(nt({theme:t??r,className:n})),children:e})};A.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren","VariantProps"]};const at=x(["text-sm","font-bold","px-4","mt-3","mb-2"],{variants:{theme:{colony:"",kubefirst:["text-white","selection:bg-powder-500","selection:text-white"],civo:""}},defaultVariants:{theme:"kubefirst"}}),ne=({title:e,className:t,theme:n,isVisible:r=!0})=>{const{theme:i}=q();return r?a.jsx("h2",{className:y(at({theme:n??i,className:t})),children:e}):null};ne.__docgenInfo={description:"",methods:[],displayName:"NavigationTitle",props:{title:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["VariantProps","Pick"]};const it=x(["flex","flex-col","gap-1"],{variants:{theme:{colony:"",kubefirst:"",civo:""}},defaultVariants:{theme:"kubefirst"}}),E=({children:e,title:t,className:n,theme:r,titleClassName:i,isVisible:l=!0,...c})=>{const{theme:m}=q();return l?a.jsxs(a.Fragment,{children:[t?a.jsx(ne,{title:t,className:i,...c}):null,a.jsx("ul",{className:y(it({theme:r??m,className:n})),children:e})]}):null};E.__docgenInfo={description:"",methods:[],displayName:"NavigationGroup",props:{title:{required:!1,tsType:{name:"string"},description:""},titleClassName:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["PropsWithChildren","VariantProps","Pick"]};const ot=x(["[&>a]:flex","[&>a]:gap-2","[&>a]:no-underline","[&>a]:text-inherit","[&>a]:w-full","cursor-pointer","flex","font-normal","font-normal","gap-2","rounded-xl","md:px-4","md:py-2.5","p-2","text-black","w-full"],{variants:{theme:{colony:"",kubefirst:["text-[#9ea2c6]","hover:text-white","hover:bg-[#252a41]","selection:bg-powder-500","selection:text-white"],civo:""},isActive:{true:"",false:""}},compoundVariants:[{theme:"kubefirst",isActive:!0,class:["text-white","bg-[#252a41]"]}],defaultVariants:{theme:"kubefirst"}}),k=({children:e,className:t,theme:n,isVisible:r=!0,isActive:i,...l})=>{const{theme:c}=q();return r?a.jsx("li",{...l,role:"option",className:y(ot({theme:n??c,className:t,isActive:i})),children:e}):null};k.__docgenInfo={description:"",methods:[],displayName:"NavigationOption",props:{className:{required:!1,tsType:{name:"string"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:""}}};const st=x(["border-t","rounded-full","my-1.5"],{variants:{theme:{colony:"",kubefirst:"border-t-[#9ea2c6]/30",civo:""}},defaultVariants:{theme:"kubefirst"}}),ae=({className:e,theme:t})=>{const{theme:n}=q();return a.jsx("div",{className:y(st({className:e,theme:t??n}))})};ae.__docgenInfo={description:"",methods:[],displayName:"NavigationSeparator",composes:["Pick","VariantProps"]};const lt=x(["flex","flex-1","w-full","flex-col"],{variants:{theme:{colony:"",kubefirst:"",civo:""}},defaultVariants:{theme:"kubefirst"}}),S=({className:e,theme:t,children:n})=>{const{theme:r}=q();return a.jsx("nav",{className:y(lt({theme:t??r,className:e})),children:n})};S.NavigationGroup=E;S.NavigationOption=k;S.NavigationSeparator=ae;S.NavigationTitle=ne;S.__docgenInfo={description:"",methods:[{name:"NavigationGroup",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  title,
  className,
  theme,
  titleClassName,
  isVisible = true,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"NavigationOption",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  theme,
  isVisible = true,
  isActive,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"NavigationSeparator",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  theme,
}`,optional:!1,type:null}],returns:null},{name:"NavigationTitle",docblock:null,modifiers:["static"],params:[{name:`{
  title,
  className,
  theme,
  isVisible = true,
}`,optional:!1,type:null}],returns:null}],displayName:"Navigation"};const ct=x(["duration-200","ease-linear","flex","flex-col","flex-shrink-0","group/sidebar","h-full","px-4","relative","transition-all","w-[72px]","md:w-[256px]"],{variants:{theme:{colony:"",kubefirst:["bg-kubefirst-dark-blue-900"],civo:""}},defaultVariants:{theme:"kubefirst"}}),mt=x(["absolute","top-0","right-0","h-full","opacity-0","group-hover/sidebar:opacity-100","cursor-col-resize","w-[2px]","shadow","shadow-slate-200"],{variants:{theme:{colony:"",kubefirst:["bg-slate-200"],civo:""}},defaultVariants:{theme:"kubefirst"}}),_e=({canResize:e=!0,children:t,maxWith:n=300,minWith:r=240,theme:i,wrapperClassName:l})=>{const c=o.useRef(null),m=o.useRef(null),u=o.useRef(!1),{theme:s,setTheme:h}=q(),v=o.useCallback(p=>{if(!u.current){c.current&&(c.current.style.opacity="0");return}let b=p.clientX;b<r&&(b=r),b>n&&(b=n),m.current&&c.current&&(m.current.style.width=`${b}px`,c.current.classList.add("opacity-100"))},[n,r]),T=o.useCallback(()=>{u.current=!1,c.current&&c.current.classList.remove("opacity-100"),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",T)},[v]),w=o.useCallback(p=>{p.preventDefault(),p.stopPropagation(),u.current=!0,document.addEventListener("mousemove",v),document.addEventListener("mouseup",T)},[v,T]),d=o.useMemo(()=>o.Children.toArray(t),[t]),g=o.useMemo(()=>o.Children.toArray(d).find(p=>o.isValidElement(p)&&p.type===A),[d]),O=o.useMemo(()=>o.Children.toArray(d).find(p=>o.isValidElement(p)&&p.type===S),[d]),V=o.useMemo(()=>o.Children.toArray(d).find(p=>o.isValidElement(p)&&p.type===L),[d]);return o.useEffect(()=>{i&&h(i)},[h,i]),a.jsxs("aside",{ref:m,className:y(ct({className:l,theme:s})),children:[g,O,V,e&&a.jsx("div",{ref:c,className:y(mt({theme:s})),onMouseDown:w})]})};_e.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{wrapperClassName:{required:!1,tsType:{name:"string"},description:""},minWith:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"240",computed:!1}},maxWith:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},canResize:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["VariantProps","PropsWithChildren"]};const N=e=>a.jsx(Ze,{children:a.jsx(_e,{...e})});N.Footer=L;N.Logo=A;N.Navigation=S;N.NavigationGroup=E;N.NavigationOption=k;N.NavigationSeparator=ae;N.__docgenInfo={description:"",methods:[{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ theme, className, children }",optional:!1,type:null}],returns:null},{name:"Logo",docblock:null,modifiers:["static"],params:[{name:"{ children, theme, className }",optional:!1,type:null}],returns:null},{name:"Navigation",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  theme,
  children,
}`,optional:!1,type:null}],returns:null},{name:"NavigationGroup",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  title,
  className,
  theme,
  titleClassName,
  isVisible = true,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"NavigationOption",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  theme,
  isVisible = true,
  isActive,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"NavigationSeparator",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  theme,
}`,optional:!1,type:null}],returns:null}],displayName:"Sidebar"};const yt={title:"In Review/Sidebar",component:N,decorators:[e=>{const[t,n]=o.useState(window.innerHeight),r=Xe(()=>n(window.innerHeight),150);return o.useEffect(()=>{const i=window.parent.document.getElementById("storybook-panel-root");if(!i)return;const l=new ResizeObserver(r);return l.observe(i),()=>{l.disconnect()}},[r]),o.useEffect(()=>{const i=m=>{(m==null?void 0:m.querySelector(".sidebar-container"))&&r()},l=m=>{m.forEach(u=>{u.addedNodes.forEach(i),u.removedNodes.forEach(i)})};new MutationObserver(l).observe(window.parent.document.body,{childList:!0,subtree:!0})},[r]),a.jsx("div",{style:{margin:"-1rem",height:t},children:a.jsx(e,{})})}]},P={render:()=>{const[e,t]=o.useState("kubefirst");return a.jsxs(N,{theme:e,children:[a.jsx(A,{children:a.jsxs("a",{className:"flex items-center gap-2",children:[a.jsx("img",{className:"flex-1 shrink-0 hidden md:block",src:"./logo-kubefirst.svg",alt:"Company logo"}),a.jsx("img",{className:"block h-10 w-12 md:hidden",src:"./ray.svg",alt:"Company logo"}),a.jsx(_,{variant:"labelSmall",className:"md:left-[35%] !bottom-[-20px] md:!bottom-0 text-[#ABADC6] lowercase",children:"v1.11.1"})]})}),a.jsxs(S,{className:"mt-4 md:mt-0",children:[a.jsxs(E,{children:[a.jsx(k,{children:a.jsxs("a",{className:"flex items-center gap-2 md:mt-0",children:[a.jsx(tt,{className:"w-6 h-6"})," ",a.jsx(_,{variant:"body1",className:"hidden md:block",children:"Clusters"})]})}),a.jsxs(k,{role:"button",onClick:()=>t("colony"),isActive:e==="colony",children:[a.jsx(Ke,{className:"w-6 h-6"})," ",a.jsx(_,{variant:"body1",className:"hidden md:block",children:"Services"})]}),a.jsxs(k,{role:"button",onClick:()=>t("kubefirst"),isActive:e==="kubefirst",children:[a.jsx(Ye,{className:"w-6 h-6"})," ",a.jsx(_,{variant:"body1",className:"hidden md:block",children:"Environments"})]})]}),a.jsxs(E,{title:"Admin settings",titleClassName:"uppercase hidden md:block ",children:[a.jsxs(k,{role:"button",onClick:()=>t("civo"),isActive:e==="civo",children:[a.jsx(et,{className:"w-6 h-6"})," ",a.jsx(_,{variant:"body1",className:"hidden md:block",children:"Plans & Billing"})]}),a.jsx(k,{children:a.jsxs("a",{className:"flex items-center gap-2",children:[a.jsx(Je,{className:"w-6 h-6"})," ",a.jsx(_,{variant:"body1",className:"hidden md:block",children:"Cloud accounts"})]})})]})]}),a.jsx(L,{children:a.jsxs("span",{className:"text-[#81e2b4] flex items-center gap-2 justify-center font-semibold cursor-pointer",children:[a.jsx(re,{className:"w-5 h-5"})," ",a.jsx(_,{variant:"body1",className:"hidden md:block",children:"Upgrade to Business"})]})})]})}};var we,je,ke;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
} satisfies Story`,...(ke=(je=P.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};const xt=["Sidebar"];export{P as Sidebar,xt as __namedExportsOrder,yt as default};
