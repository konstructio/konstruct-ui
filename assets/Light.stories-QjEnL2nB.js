import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{o as n,t as r}from"./iframe-Cmi29qjC.js";import{n as i,t as a}from"./Counter-BFdsLCEl.js";var o,s,c,l,u;e((()=>{o=t(n(),1),i(),s=r(),c={title:`In Review/Counter/Light`,component:a},l={render:function(e){let[t,n]=(0,o.useState)(10);return(0,s.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,s.jsx)(a,{...e,label:`Number of nodes`,isRequired:!0,value:t,onChange:({target:{value:e}})=>n(e)}),(0,s.jsx)(a,{...e,label:`Number of nodes`,isRequired:!0,value:t,onChange:({target:{value:e}})=>n(e),canDecrement:!1}),(0,s.jsx)(a,{...e,label:`Number of nodes`,isRequired:!0,value:t,onChange:({target:{value:e}})=>n(e),canIncrement:!1})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}},u=[`Light`]}))();export{l as Light,u as __namedExportsOrder,c as default};