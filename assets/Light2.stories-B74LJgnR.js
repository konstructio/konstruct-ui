import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{o as n,t as r}from"./iframe-Y1_HDYN6.js";import{n as i,t as a}from"./Switch-DZWr8OSA.js";var o,s,c,l,u;e((()=>{o=t(n(),1),i(),s=r(),c={title:`In Review/Switch/Light`,component:a},l={args:{value:!0,helperText:`Some helper text here`},render:function(e){let[t,n]=(0,o.useState)({switch1:e.value,switch2:e.value,switch3:e.value,switch4:e.value}),r=(e,t)=>{n(n=>({...n,[e]:t}))};return(0,s.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,s.jsx)(a,{label:`Civo theme`,...e,value:t.switch1,onChange:e=>r(`switch1`,e)}),(0,s.jsx)(a,{label:`Civo theme`,...e,value:!0,onChange:e=>r(`switch1`,e),disabled:!0}),(0,s.jsx)(a,{label:`Civo theme`,...e,value:!1,onChange:e=>r(`switch1`,e),disabled:!0}),(0,s.jsx)(a,{label:`Kubefirst theme`,...e,value:t.switch2,onChange:e=>r(`switch2`,e),theme:`kubefirst`})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}},u=[`Light`]}))();export{l as Light,u as __namedExportsOrder,c as default};