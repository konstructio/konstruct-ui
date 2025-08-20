import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-Cq_5r6J2.js";import{c as d,a as i}from"./index-Cr-WShRT.js";import"./preload-helper-Dp1pzeXC.js";const p=d(["h-2","rounded-full","overflow-hidden","mt-4","bg-zinc-200"]),v=d(["h-full","bg-[length:100%_100%]","animate-gradient-move"],{variants:{status:{success:"",progress:"",error:""}},compoundVariants:[{status:"progress",class:["bg-linear-to-r from-[#81e2b4] to-kubefirst-primary"]},{status:"success",class:["bg-[#81E2B4]"]}],defaultVariants:{status:"success"}}),t=({label:s,theme:o,percent:r,status:a})=>e.jsxs("div",{className:"w-full","data-theme":o,children:[e.jsxs("div",{className:i("flex",s?"justify-between":"justify-end"),children:[s?e.jsx("label",{className:"font-semibold",children:s}):null,e.jsxs("span",{className:"font-semibold",children:[r,"%"]})]}),e.jsx("div",{className:i(p()),children:e.jsx("div",{className:i(v({status:a}),r>0&&r<99?"transition-width duration-500":"transition-colors duration-0"),style:{width:`${r}%`}})})]});t.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},percent:{required:!0,tsType:{name:"number"},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""},status:{required:!1,tsType:{name:"union",raw:"'success' | 'progress'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'progress'"}]},description:""}},composes:["VariantProps"]};const P={title:"In Review/ProgressBar",component:t},n={render:()=>{const[s,o]=l.useState(10);return l.useEffect(()=>{const r=setInterval(()=>{o(a=>a>=100?0:a+5)},1500);return()=>{clearInterval(r)}},[]),e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-2",children:[e.jsx(t,{label:"Provisioning cluster:",percent:80,status:"progress"}),e.jsx("div",{className:"mt-3"}),e.jsx(t,{label:"Completed!",status:"success",percent:100}),e.jsx("div",{className:"mt-3"}),e.jsx(t,{label:"Provisioning:",status:s===100?"success":"progress",percent:s})]})}};var c,u,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const j=["ProgressBar"];export{n as ProgressBar,j as __namedExportsOrder,P as default};
