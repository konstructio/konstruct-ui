import{r as u,j as t}from"./iframe-BV61N9iv.js";import{C as o}from"./Counter-BGZiV9Yy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjy7NVQy.js";import"./index-Dt9fwwpA.js";import"./index-C9jgRrj1.js";import"./index-DvOec0CH.js";import"./index-qNDKP_kg.js";import"./index-B-7A89sm.js";import"./Typography-sshlW9sh.js";import"./index-DbSf99dR.js";const N={title:"In Review/Counter/Dark",component:o},r={parameters:{theme:"dark"},render:function(a){const[n,s]=u.useState(10);return t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e)}),t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e),canDecrement:!1}),t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e),canIncrement:!1})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
