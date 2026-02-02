import{r as u,j as n}from"./iframe-Bn_zYVkQ.js";import{C as r}from"./Counter-B-vhGWw7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-4tFc9-.js";import"./index-BPquQhIf.js";import"./index-BZrJoUPC.js";import"./index-C3wFPQlr.js";import"./index-aQzbjv51.js";import"./index-B-7A89sm.js";import"./Typography-BK75nqwC.js";import"./index-DWQB616r.js";const h={title:"In Review/Counter/Light",component:r},t={render:function(o){const[a,s]=u.useState(10);return n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsx(r,{...o,label:"Number of nodes",isRequired:!0,value:a,onChange:({target:{value:e}})=>s(e)}),n.jsx(r,{...o,label:"Number of nodes",isRequired:!0,value:a,onChange:({target:{value:e}})=>s(e),canDecrement:!1}),n.jsx(r,{...o,label:"Number of nodes",isRequired:!0,value:a,onChange:({target:{value:e}})=>s(e),canIncrement:!1})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...t.parameters?.docs?.source}}};const N=["Light"];export{t as Light,N as __namedExportsOrder,h as default};
