import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{o as n,t as r}from"./iframe-BhrQdzJp.js";import{n as i,t as a}from"./Switch-Co5NqY9J.js";var o,s,c,l,u;e((()=>{o=t(n(),1),i(),s=r(),c={title:`In Review/Switch/Dark`,component:a},l={parameters:{theme:`dark`},args:{value:!0,helperText:`Some helper text here`},render:function(e){let[t,n]=(0,o.useState)({switch1:e.value,switch2:e.value,switch3:e.value,switch4:e.value}),r=(e,t)=>{n(n=>({...n,[e]:t}))};return(0,s.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,s.jsx)(a,{label:`Civo theme`,...e,value:t.switch1,onChange:e=>r(`switch1`,e)}),(0,s.jsx)(a,{label:`Civo theme`,...e,value:!0,onChange:e=>r(`switch1`,e),disabled:!0}),(0,s.jsx)(a,{label:`Civo theme`,...e,value:!1,onChange:e=>r(`switch1`,e),disabled:!0}),(0,s.jsx)(a,{label:`Kubefirst theme`,...e,value:t.switch2,onChange:e=>r(`switch2`,e),theme:`kubefirst`})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  args: {
    value: true,
    helperText: 'Some helper text here'
  },
  render: function SwitchStory(args) {
    const [value, setValue] = useState({
      switch1: args.value,
      switch2: args.value,
      switch3: args.value,
      switch4: args.value
    });
    const handleChange = (switchName: string, value: boolean) => {
      setValue(values => ({
        ...values,
        [switchName]: value
      }));
    };
    return <div className="flex flex-col gap-5">
        <SwitchComponent label="Civo theme" {...args} value={value.switch1} onChange={event => handleChange('switch1', event)} />

        <SwitchComponent label="Civo theme" {...args} value={true} onChange={event => handleChange('switch1', event)} disabled />

        <SwitchComponent label="Civo theme" {...args} value={false} onChange={event => handleChange('switch1', event)} disabled />

        <SwitchComponent label="Kubefirst theme" {...args} value={value.switch2} onChange={event => handleChange('switch2', event)} theme="kubefirst" />
      </div>;
  }
} satisfies Story`,...l.parameters?.docs?.source}}},u=[`Dark`]}))();export{l as Dark,u as __namedExportsOrder,c as default};