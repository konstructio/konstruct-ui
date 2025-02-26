import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{u as w}from"./theme.hook-gog7kSAh.js";import{c as L}from"./index-BVvdOpju.js";import{a as y}from"./index-Bj7X0qp-.js";import{r as i}from"./index-DUAV1Q2A.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x=(...t)=>t.filter((e,o,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:m="",children:s,iconNode:u,...h},f)=>i.createElement("svg",{ref:f,...C,width:e,height:e,stroke:t,strokeWidth:n?Number(o)*24/Number(e):o,className:x("lucide",m),...h},[...u.map(([g,v])=>i.createElement(g,v)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(t,e)=>{const o=i.forwardRef(({className:n,...m},s)=>i.createElement(N,{ref:s,iconNode:e,className:x(`lucide-${j(t)}`,n),...m}));return o.displayName=`${t}`,o};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],E=k("LoaderCircle",b),_=y(["h-8","w-8","animate-spin","text-inherit"],{variants:{theme:{kubefirst:"text-kubefirst-primary",colony:"text-colony-primary",civo:"text-civo-primary"}},defaultVariants:{theme:"kubefirst"}}),a=({className:t,theme:e,...o})=>{const{theme:n}=w();return r.jsx(E,{className:L(_({className:t,theme:e??n})),...o})};a.displayName="Loading";a.__docgenInfo={description:"",methods:[],displayName:"Loading"};const O={title:"In Review/Loading",component:a},c={render:()=>r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"w-[350px]",children:r.jsx(a,{})}),r.jsx("div",{className:"w-[350px]",children:r.jsx(a,{theme:"colony"})}),r.jsx("div",{className:"w-[350px]",children:r.jsx(a,{theme:"civo"})})]})};var d,l,p;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <>
      <div className="w-[350px]">
        <LoadingComponent />
      </div>
      <div className="w-[350px]">
        <LoadingComponent theme="colony" />
      </div>
      <div className="w-[350px]">
        <LoadingComponent theme="civo" />
      </div>
    </>
} satisfies Story`,...(p=(l=c.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const S=["Loading"];export{c as Loading,S as __namedExportsOrder,O as default};
