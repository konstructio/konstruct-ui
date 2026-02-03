import{j as e,r as l}from"./iframe-Bp60l9al.js";import{a as p,c as t}from"./index-B-7A89sm.js";import"./preload-helper-PPVm8Dsz.js";const b=p(["h-2","rounded-full","overflow-hidden","mt-4","bg-zinc-200"]),v=p(["h-full","bg-[length:100%_100%]","animate-gradient-move"],{variants:{status:{success:"",progress:"",error:""}},compoundVariants:[{status:"progress",class:["bg-linear-to-r from-[#81e2b4] to-kubefirst-primary"]},{status:"success",class:["bg-[#81E2B4]"]}],defaultVariants:{status:"success"}}),a=({backgroundBarClassName:c,label:s,labelClassName:o,labelWrapperClassName:i,percent:r,percentClassName:m,progressBarClassName:u,status:d,theme:g,wrapperClassName:f})=>e.jsxs("div",{className:t("w-full text-inherit",f),"data-theme":g,children:[e.jsxs("div",{className:t("flex font-semibold",{"justify-between":s,"justify-end":!s},i),children:[s?e.jsx("label",{className:t(o),children:s}):null,e.jsxs("span",{className:t(m),children:[r,"%"]})]}),e.jsx("div",{className:t(b({className:c})),children:e.jsx("div",{className:t(v({status:d,className:u}),r>0&&r<99?"transition-width duration-500":"transition-colors duration-0"),style:{width:`${r}%`}})})]});a.__docgenInfo={description:`A progress bar component showing completion percentage.

@example
\`\`\`tsx
// Basic progress bar
<ProgressBar percent={50} />

// With label
<ProgressBar percent={75} label="Upload Progress" />

// Completed state
<ProgressBar percent={100} status="success" label="Complete" />
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-progressbar--docs Storybook}`,methods:[],displayName:"ProgressBar",props:{backgroundBarClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the background bar"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},label:{required:!1,tsType:{name:"string"},description:"Label text displayed above the progress bar"},labelClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the label"},labelWrapperClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the label wrapper"},percent:{required:!0,tsType:{name:"number"},description:"Progress percentage (0-100)"},percentClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the percent text"},progressBarClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the progress bar fill"},status:{required:!1,tsType:{name:"union",raw:"'success' | 'progress'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'progress'"}]},description:"Visual status of the progress bar"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the outer wrapper"}},composes:["VariantProps"]};const N={title:"In Review/ProgressBar",component:a},n={render:function(){const[s,o]=l.useState(10);return l.useEffect(()=>{const i=setInterval(()=>{o(r=>r>=100?0:r+5)},1500);return()=>{clearInterval(i)}},[]),e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-2",children:[e.jsx(a,{label:"Provisioning cluster:",percent:80,status:"progress"}),e.jsx("div",{className:"mt-3"}),e.jsx(a,{label:"Completed!",status:"success",percent:100}),e.jsx("div",{className:"mt-3"}),e.jsx(a,{label:"Provisioning:",status:s===100?"success":"progress",percent:s})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const y=["ProgressBar"];export{n as ProgressBar,y as __namedExportsOrder,N as default};
