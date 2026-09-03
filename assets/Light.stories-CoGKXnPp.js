import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Counter-orFe_nI8.js";var a,o,s,c,l;function u(){return(u=e((()=>{a=t(),r(),o=n(),s={title:`In Review/Counter/Light`,component:i},c={render:function(e){let[t,n]=(0,a.useState)(10);return(0,o.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,o.jsx)(i,{...e,label:`Number of nodes`,isRequired:!0,value:t,onChange:({target:{value:e}})=>n(e)}),(0,o.jsx)(i,{...e,label:`Number of nodes`,isRequired:!0,value:t,onChange:({target:{value:e}})=>n(e),canDecrement:!1}),(0,o.jsx)(i,{...e,label:`Number of nodes`,isRequired:!0,value:t,onChange:({target:{value:e}})=>n(e),canIncrement:!1}),(0,o.jsx)(i,{...e,label:`Number of nodes (editable)`,isRequired:!0,value:t,onChange:({target:{value:e}})=>n(e),editable:!0})]})}},l=[`Light`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        <CounterComponent {...args} label="Number of nodes (editable)" isRequired value={count} onChange={({
        target: {
          value
        }
      }) => setCount(value)} editable />
      </div>;
  }
} satisfies Story`,...c.parameters?.docs?.source}}}})))()}u();export{c as Light,l as __namedExportsOrder,s as default};