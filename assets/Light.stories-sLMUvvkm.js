import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Switch-BeJwMlJT.js";var a,o,s,c,l;function u(){return(u=e((()=>{a=t(),r(),o=n(),s={title:`In Review/Switch/Light`,component:i},c={args:{value:!0,helperText:`Some helper text here`},render:function(e){let[t,n]=(0,a.useState)({switch1:e.value,switch2:e.value,switch3:e.value,switch4:e.value}),r=(e,t)=>{n(n=>({...n,[e]:t}))};return(0,o.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,o.jsx)(i,{label:`Civo theme`,...e,value:t.switch1,onChange:e=>r(`switch1`,e)}),(0,o.jsx)(i,{label:`Civo theme (black)`,...e,value:t.switch3,onChange:e=>r(`switch3`,e),variant:`black`}),(0,o.jsx)(i,{label:`Civo theme`,...e,value:!0,onChange:e=>r(`switch1`,e),disabled:!0}),(0,o.jsx)(i,{label:`Civo theme`,...e,value:!1,onChange:e=>r(`switch1`,e),disabled:!0}),(0,o.jsx)(i,{label:`Kubefirst theme`,...e,value:t.switch2,onChange:e=>r(`switch2`,e),theme:`kubefirst`})]})}},l=[`Light`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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

        <SwitchComponent label="Civo theme (black)" {...args} value={value.switch3} onChange={event => handleChange('switch3', event)} variant="black" />

        <SwitchComponent label="Civo theme" {...args} value={true} onChange={event => handleChange('switch1', event)} disabled />

        <SwitchComponent label="Civo theme" {...args} value={false} onChange={event => handleChange('switch1', event)} disabled />

        <SwitchComponent label="Kubefirst theme" {...args} value={value.switch2} onChange={event => handleChange('switch2', event)} theme="kubefirst" />
      </div>;
  }
} satisfies Story`,...c.parameters?.docs?.source}}}})))()}u();export{c as Light,l as __namedExportsOrder,s as default};