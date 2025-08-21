import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-R6RX4IC6.js";import{c as p,a as r}from"./index-Cr-WShRT.js";import"./preload-helper-Dp1pzeXC.js";const b=p(["h-2","rounded-full","overflow-hidden","mt-4","bg-zinc-200"]),y=p(["h-full","bg-[length:100%_100%]","animate-gradient-move"],{variants:{status:{success:"",progress:"",error:""}},compoundVariants:[{status:"progress",class:["bg-linear-to-r from-[#81e2b4] to-kubefirst-primary"]},{status:"success",class:["bg-[#81E2B4]"]}],defaultVariants:{status:"success"}}),a=({backgroundBarClassName:t,label:s,labelClassName:o,labelWrapperClassName:n,percent:i,percentClassName:g,progressBarClassName:f,status:v,theme:x,wrapperClassName:N})=>e.jsxs("div",{className:r("w-full text-inherit",N),"data-theme":x,children:[e.jsxs("div",{className:r("flex font-semibold",{"justify-between":s,"justify-end":!s},n),children:[s?e.jsx("label",{className:r(o),children:s}):null,e.jsxs("span",{className:r(g),children:[i,"%"]})]}),e.jsx("div",{className:r(b({className:t})),children:e.jsx("div",{className:r(y({status:v,className:f}),i>0&&i<99?"transition-width duration-500":"transition-colors duration-0"),style:{width:`${i}%`}})})]});a.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{backgroundBarClassName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},labelWrapperClassName:{required:!1,tsType:{name:"string"},description:""},percent:{required:!0,tsType:{name:"number"},description:""},percentClassName:{required:!1,tsType:{name:"string"},description:""},progressBarClassName:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'success' | 'progress'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'progress'"}]},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const k={title:"In Review/ProgressBar",component:a},l={render:()=>{const[t,s]=c.useState(10);return c.useEffect(()=>{const o=setInterval(()=>{s(n=>n>=100?0:n+5)},1500);return()=>{clearInterval(o)}},[]),e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-2",children:[e.jsx(a,{label:"Provisioning cluster:",percent:80,status:"progress"}),e.jsx("div",{className:"mt-3"}),e.jsx(a,{label:"Completed!",status:"success",percent:100}),e.jsx("div",{className:"mt-3"}),e.jsx(a,{label:"Provisioning:",status:t===100?"success":"progress",percent:t})]})}};var m,u,d;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [percent, setPercent] = useState(10);
    useEffect(() => {
      const interval = setInterval(() => {
        setPercent(prevPercent => {
          if (prevPercent >= 100) {
            return 0;
          }
          return prevPercent + 5;
        });
      }, 1500);
      return () => {
        clearInterval(interval);
      };
    }, []);
    return <div className="max-w-[350px] flex flex-col gap-2">
        <ProgressBarComponent label="Provisioning cluster:" percent={80} status="progress" />

        <div className="mt-3" />

        <ProgressBarComponent label="Completed!" status="success" percent={100} />

        <div className="mt-3" />

        <ProgressBarComponent label="Provisioning:" status={percent === 100 ? 'success' : 'progress'} percent={percent} />
      </div>;
  }
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const q=["ProgressBar"];export{l as ProgressBar,q as __namedExportsOrder,k as default};
