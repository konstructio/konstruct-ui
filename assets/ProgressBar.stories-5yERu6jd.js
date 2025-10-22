import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-CDT3oZmd.js";import{c as u,a}from"./index-CJCZd66Q.js";import"./preload-helper-PPVm8Dsz.js";const v=u(["h-2","rounded-full","overflow-hidden","mt-4","bg-zinc-200"]),x=u(["h-full","bg-[length:100%_100%]","animate-gradient-move"],{variants:{status:{success:"",progress:"",error:""}},compoundVariants:[{status:"progress",class:["bg-linear-to-r from-[#81e2b4] to-kubefirst-primary"]},{status:"success",class:["bg-[#81E2B4]"]}],defaultVariants:{status:"success"}}),t=({backgroundBarClassName:o,label:s,labelClassName:i,labelWrapperClassName:l,percent:r,percentClassName:m,progressBarClassName:p,status:d,theme:g,wrapperClassName:f})=>e.jsxs("div",{className:a("w-full text-inherit",f),"data-theme":g,children:[e.jsxs("div",{className:a("flex font-semibold",{"justify-between":s,"justify-end":!s},l),children:[s?e.jsx("label",{className:a(i),children:s}):null,e.jsxs("span",{className:a(m),children:[r,"%"]})]}),e.jsx("div",{className:a(v({className:o})),children:e.jsx("div",{className:a(x({status:d,className:p}),r>0&&r<99?"transition-width duration-500":"transition-colors duration-0"),style:{width:`${r}%`}})})]});t.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{backgroundBarClassName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},labelWrapperClassName:{required:!1,tsType:{name:"string"},description:""},percent:{required:!0,tsType:{name:"number"},description:""},percentClassName:{required:!1,tsType:{name:"string"},description:""},progressBarClassName:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'success' | 'progress'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'progress'"}]},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'light'
| 'kubefirst-dark'
| 'dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'light'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'dark'"},{name:"undefined"}]},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const y={title:"In Review/ProgressBar",component:t},n={render:function(){const[s,i]=c.useState(10);return c.useEffect(()=>{const l=setInterval(()=>{i(r=>r>=100?0:r+5)},1500);return()=>{clearInterval(l)}},[]),e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-2",children:[e.jsx(t,{label:"Provisioning cluster:",percent:80,status:"progress"}),e.jsx("div",{className:"mt-3"}),e.jsx(t,{label:"Completed!",status:"success",percent:100}),e.jsx("div",{className:"mt-3"}),e.jsx(t,{label:"Provisioning:",status:s===100?"success":"progress",percent:s})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function ProgressBarStory() {
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
}`,...n.parameters?.docs?.source}}};const j=["ProgressBar"];export{n as ProgressBar,j as __namedExportsOrder,y as default};
