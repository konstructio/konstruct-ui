import{r as u,j as n}from"./iframe-DLrn8Gk9.js";import{C as r}from"./Counter-BI4G0TWo.js";import"./preload-helper-PPVm8Dsz.js";import"./compiler-runtime-DxXHijtq.js";import"./index-DFrv0GJx.js";import"./index-BfndZXuq.js";import"./index-8qrDTiGs.js";import"./index-y1nNICkM.js";import"./index-CPvO_3XD.js";import"./index-CwGTy2we.js";import"./Typography-CHpAwWZY.js";import"./index-CE1qPSkB.js";const N={title:"In Review/Counter/Light",component:r},t={render:function(o){const[a,s]=u.useState(10);return n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsx(r,{...o,label:"Number of nodes",isRequired:!0,value:a,onChange:({target:{value:e}})=>s(e)}),n.jsx(r,{...o,label:"Number of nodes",isRequired:!0,value:a,onChange:({target:{value:e}})=>s(e),canDecrement:!1}),n.jsx(r,{...o,label:"Number of nodes",isRequired:!0,value:a,onChange:({target:{value:e}})=>s(e),canIncrement:!1})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function NumberInputStory(args) {
    const [count, setCount] = useState<number>(10);
    return <div className="flex flex-col gap-6">
        <CounterComponent {...args} label="Number of nodes" isRequired value={count} onChange={({
        target: {
          value
        }
      }) => setCount(value)} />

        <CounterComponent {...args} label="Number of nodes" isRequired value={count} onChange={({
        target: {
          value
        }
      }) => setCount(value)} canDecrement={false} />
        <CounterComponent {...args} label="Number of nodes" isRequired value={count} onChange={({
        target: {
          value
        }
      }) => setCount(value)} canIncrement={false} />
      </div>;
  }
} satisfies Story`,...t.parameters?.docs?.source}}};const R=["Light"];export{t as Light,R as __namedExportsOrder,N as default};
