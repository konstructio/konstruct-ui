import{r as u,j as t}from"./iframe-BXO_EhpM.js";import{C as o}from"./Counter-6BG1f-JU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BkHHbh_H.js";import"./index-vvKf7FSZ.js";import"./index-CUjo4IK2.js";import"./index-CxlmtjIK.js";import"./index-D_E6ICQ7.js";import"./index-BIgQ6y5l.js";import"./Typography-Bc3KsAQu.js";import"./index-jSjLyp38.js";const N={title:"In Review/Counter/Dark",component:o},r={parameters:{theme:"dark"},render:function(a){const[n,s]=u.useState(10);return t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e)}),t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e),canDecrement:!1}),t.jsx(o,{...a,label:"Number of nodes",isRequired:!0,value:n,onChange:({target:{value:e}})=>s(e),canIncrement:!1})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
