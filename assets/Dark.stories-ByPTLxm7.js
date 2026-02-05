import{r as u,j as t}from"./iframe-CQUPapgb.js";import{C as o}from"./Counter-CtNi8ttQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DE8r-Caz.js";import"./index-CGA3Cy4x.js";import"./index-Cj_TF1lr.js";import"./index-F5ZrBm5H.js";import"./index-15YaTtXl.js";import"./index-B-7A89sm.js";import"./Typography-BOqb3Y-Y.js";import"./index-B1MlFbps.js";const N={title:"In Review/Counter/Dark",component:o},r={parameters:{theme:"dark"},render:function(a){const[n,s]=u.useState(10);return t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e)}),t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e),canDecrement:!1}),t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e),canIncrement:!1})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};const h=["Dark"];export{r as Dark,h as __namedExportsOrder,N as default};
