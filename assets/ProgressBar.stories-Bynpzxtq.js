import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{r as l}from"./index-BuYn5Wpo.js";import{a as d,c as i}from"./index-Dl2HxxTD.js";import{u as f}from"./theme.hook-3iWrhCdO.js";import"./index-D2MAbzvX.js";const v=d(["h-2","rounded-full","overflow-hidden","mt-4","bg-zinc-200"],{variants:{theme:{kubefirst:"",colony:"",civo:""}},defaultVariants:{theme:"kubefirst"}}),h=d(["h-full","bg-[length:100%_100%]","animate-gradient-move"],{variants:{theme:{kubefirst:"",colony:"",civo:""},status:{success:"",progress:"",error:""}},compoundVariants:[{status:"progress",theme:"kubefirst",class:["bg-kubefirst-gradient"]},{status:"success",theme:"kubefirst",class:["bg-[#81E2B4]"]},{status:"progress",theme:"colony",class:["bg-kubefirst-gradient"]}],defaultVariants:{theme:"kubefirst",status:"success"}}),t=({label:s,theme:o,percent:r,status:a})=>{const{theme:g}=f(),c=o??g;return e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:i("flex",s?"justify-between":"justify-end"),children:[s?e.jsx("label",{className:"font-semibold",children:s}):null,e.jsxs("span",{className:"font-semibold",children:[r,"%"]})]}),e.jsx("div",{className:i(v({theme:c})),children:e.jsx("div",{className:i(h({theme:c,status:a}),r>0&&r<99?"transition-width duration-500":"transition-colors duration-0"),style:{width:`${r}%`}})})]})};t.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},percent:{required:!0,tsType:{name:"number"},description:""},status:{required:!1,tsType:{name:"union",raw:"'success' | 'progress'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'progress'"}]},description:""}},composes:["VariantProps"]};const y={title:"Design System/ProgressBar",component:t},n={render:()=>{const[s,o]=l.useState(10);return l.useEffect(()=>{const r=setInterval(()=>{o(a=>a>=100?0:a+5)},1500);return()=>{clearInterval(r)}},[]),e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-2",children:[e.jsx(t,{label:"Provisioning cluster:",percent:80,status:"progress"}),e.jsx("div",{className:"mt-3"}),e.jsx(t,{label:"Completed!",status:"success",percent:100}),e.jsx("div",{className:"mt-3"}),e.jsx(t,{label:"Provisioning:",status:s===100?"success":"progress",percent:s})]})}};var m,u,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const B=["ProgressBar"];export{n as ProgressBar,B as __namedExportsOrder,y as default};
