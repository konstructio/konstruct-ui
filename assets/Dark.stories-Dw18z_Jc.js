import{r as u,j as t}from"./iframe-6u9WOm73.js";import{C as o}from"./Counter-CNDJPIxr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BVGCjgGz.js";import"./index-ClYehXzk.js";import"./index-Bz5XYtw7.js";import"./index-Cspk0_eg.js";import"./index-CQcYP0zm.js";import"./index-B-7A89sm.js";import"./Typography-BPbpOl-z.js";import"./index-Dy0v-Vbr.js";const N={title:"In Review/Counter/Dark",component:o},r={parameters:{theme:"dark"},render:function(a){const[n,s]=u.useState(10);return t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e)}),t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e),canDecrement:!1}),t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e),canIncrement:!1})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
