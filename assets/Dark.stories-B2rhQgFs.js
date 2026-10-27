import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BlIEEezU.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./Counter-CCTuPPzV.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{a=t(),r(),o=n(),s={title:`In Review/Counter/Dark`,component:i},c={parameters:{theme:`dark`},render:function(e){let[t,n]=(0,a.useState)(10);return(0,o.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,o.jsx)(i,{...e,label:`Number of nodes`,isRequired:!0,value:t,onChange:({target:{value:e}})=>n(e)}),(0,o.jsx)(i,{...e,label:`Number of nodes`,isRequired:!0,value:t,onChange:({target:{value:e}})=>n(e),canDecrement:!1}),(0,o.jsx)(i,{...e,label:`Number of nodes`,isRequired:!0,value:t,onChange:({target:{value:e}})=>n(e),canIncrement:!1})]})}},l={parameters:{docs:{description:{story:"`step` moves the value by a fixed amount, `unit` renders a suffix inside the field, `labelAction` fills the right end of the label row, and `error` / `helperText` describe the control the same way `Input` does. `fullWidth` stretches the field to its container."}}},render:function(){let[e,t]=(0,a.useState)(1e3),n=e>=2e3;return(0,o.jsxs)(`div`,{className:`flex flex-col gap-6 max-w-100`,children:[(0,o.jsx)(i,{label:`Size`,isRequired:!0,value:e,step:500,min:500,max:2e3,unit:`GB`,fullWidth:!0,labelAction:(0,o.jsxs)(`span`,{className:`text-sm font-medium text-aurora-500`,children:[`$`,(e/500*5).toFixed(2),`/mo`]}),decrementLabel:`Remove 500 GB`,incrementLabel:`Add 500 GB`,error:n?`You reached the quota for this account`:void 0,helperText:`Increments of 500 GB`,onChange:({target:{value:e}})=>t(e)}),(0,o.jsx)(i,{label:`Disabled`,value:3,unit:`nodes`,disabled:!0,helperText:`This pool cannot be resized while updating`})]})}},u=[`Dark`,`WithUnitAndMessages`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`step\` moves the value by a fixed amount, \`unit\` renders a suffix inside the field, \`labelAction\` fills the right end of the label row, and \`error\` / \`helperText\` describe the control the same way \`Input\` does. \`fullWidth\` stretches the field to its container.'
      }
    }
  },
  render: function WithUnitAndMessagesStory() {
    const [size, setSize] = useState<number>(1000);
    const isQuotaReached = size >= 2000;
    return <div className="flex flex-col gap-6 max-w-100">
        <CounterComponent label="Size" isRequired value={size} step={500} min={500} max={2000} unit="GB" fullWidth labelAction={<span className="text-sm font-medium text-aurora-500">
              \${(size / 500 * 5).toFixed(2)}/mo
            </span>} decrementLabel="Remove 500 GB" incrementLabel="Add 500 GB" error={isQuotaReached ? 'You reached the quota for this account' : undefined} helperText="Increments of 500 GB" onChange={({
        target: {
          value
        }
      }) => setSize(value)} />

        <CounterComponent label="Disabled" value={3} unit="nodes" disabled helperText="This pool cannot be resized while updating" />
      </div>;
  }
} satisfies Story`,...l.parameters?.docs?.source}}}})))()}d();export{c as Dark,l as WithUnitAndMessages,u as __namedExportsOrder,s as default};