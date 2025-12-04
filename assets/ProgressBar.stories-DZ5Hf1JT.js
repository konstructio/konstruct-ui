import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-CA1kgwfp.js";import{c as p,a as t}from"./index-Bn42e07n.js";import"./preload-helper-PPVm8Dsz.js";const v=p(["h-2","rounded-full","overflow-hidden","mt-4","bg-zinc-200"]),x=p(["h-full","bg-[length:100%_100%]","animate-gradient-move"],{variants:{status:{success:"",progress:"",error:""}},compoundVariants:[{status:"progress",class:["bg-linear-to-r from-[#81e2b4] to-kubefirst-primary"]},{status:"success",class:["bg-[#81E2B4]"]}],defaultVariants:{status:"success"}}),a=({backgroundBarClassName:c,label:s,labelClassName:i,labelWrapperClassName:o,percent:r,percentClassName:m,progressBarClassName:u,status:d,theme:g,wrapperClassName:f})=>e.jsxs("div",{className:t("w-full text-inherit",f),"data-theme":g,children:[e.jsxs("div",{className:t("flex font-semibold",{"justify-between":s,"justify-end":!s},o),children:[s?e.jsx("label",{className:t(i),children:s}):null,e.jsxs("span",{className:t(m),children:[r,"%"]})]}),e.jsx("div",{className:t(v({className:c})),children:e.jsx("div",{className:t(x({status:d,className:u}),r>0&&r<99?"transition-width duration-500":"transition-colors duration-0"),style:{width:`${r}%`}})})]});a.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{backgroundBarClassName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},labelWrapperClassName:{required:!1,tsType:{name:"string"},description:""},percent:{required:!0,tsType:{name:"number"},description:""},percentClassName:{required:!1,tsType:{name:"string"},description:""},progressBarClassName:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'success' | 'progress'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'progress'"}]},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const h={title:"In Review/ProgressBar",component:a},n={render:function(){const[s,i]=l.useState(10);return l.useEffect(()=>{const o=setInterval(()=>{i(r=>r>=100?0:r+5)},1500);return()=>{clearInterval(o)}},[]),e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-2",children:[e.jsx(a,{label:"Provisioning cluster:",percent:80,status:"progress"}),e.jsx("div",{className:"mt-3"}),e.jsx(a,{label:"Completed!",status:"success",percent:100}),e.jsx("div",{className:"mt-3"}),e.jsx(a,{label:"Provisioning:",status:s===100?"success":"progress",percent:s})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const j=["ProgressBar"];export{n as ProgressBar,j as __namedExportsOrder,h as default};
