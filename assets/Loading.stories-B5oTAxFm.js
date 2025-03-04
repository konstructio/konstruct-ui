import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as d}from"./theme.hook-gog7kSAh.js";import{c as p}from"./index-BVvdOpju.js";import{a as l}from"./index-Bj7X0qp-.js";import{c as x}from"./createLucideIcon-Bvb7mHdj.js";import"./index-DUAV1Q2A.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],v=x("LoaderCircle",h),g=l(["h-8","w-8","animate-spin","text-inherit"],{variants:{theme:{kubefirst:"text-kubefirst-primary",colony:"text-colony-primary",civo:"text-civo-primary"}},defaultVariants:{theme:"kubefirst"}}),o=({className:i,theme:r,...m})=>{const{theme:c}=d();return e.jsx(v,{className:p(g({className:i,theme:r??c})),...m})};o.displayName="Loading";o.__docgenInfo={description:"",methods:[],displayName:"Loading"};const w={title:"In Review/Loading",component:o},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-[350px]",children:e.jsx(o,{})}),e.jsx("div",{className:"w-[350px]",children:e.jsx(o,{theme:"colony"})}),e.jsx("div",{className:"w-[350px]",children:e.jsx(o,{theme:"civo"})})]})};var n,t,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
} satisfies Story`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const C=["Loading"];export{a as Loading,C as __namedExportsOrder,w as default};
