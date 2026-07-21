import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-D9T3pWpr.js";import{t as r}from"./jsx-runtime-BPpv9Zq8.js";import{n as i,t as a}from"./Counter-CwIYZmYS.js";var o,s,c,l,u;t((()=>{o=e(n(),1),i(),s=r(),c={title:`In Review/Counter/Dark`,component:a},l={parameters:{theme:`dark`},render:function(e){let[t,n]=(0,o.useState)(10);return(0,s.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,s.jsx)(a,{...e,label:`Number of nodes`,isRequired:!0,value:t,onChange:({target:{value:e}})=>n(e)}),(0,s.jsx)(a,{...e,label:`Number of nodes`,isRequired:!0,value:t,onChange:({target:{value:e}})=>n(e),canDecrement:!1}),(0,s.jsx)(a,{...e,label:`Number of nodes`,isRequired:!0,value:t,onChange:({target:{value:e}})=>n(e),canIncrement:!1})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}},u=[`Dark`]}))();export{l as Dark,u as __namedExportsOrder,c as default};