import{r as u,j as t}from"./iframe-DLrn8Gk9.js";import{C as o}from"./Counter-BI4G0TWo.js";import"./preload-helper-PPVm8Dsz.js";import"./compiler-runtime-DxXHijtq.js";import"./index-DFrv0GJx.js";import"./index-BfndZXuq.js";import"./index-8qrDTiGs.js";import"./index-y1nNICkM.js";import"./index-CPvO_3XD.js";import"./index-CwGTy2we.js";import"./Typography-CHpAwWZY.js";import"./index-CE1qPSkB.js";const h={title:"In Review/Counter/Dark",component:o},r={parameters:{theme:"dark"},render:function(a){const[n,s]=u.useState(10);return t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e)}),t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e),canDecrement:!1}),t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e),canIncrement:!1})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
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
} satisfies Story`,...r.parameters?.docs?.source}}};const R=["Dark"];export{r as Dark,R as __namedExportsOrder,h as default};
