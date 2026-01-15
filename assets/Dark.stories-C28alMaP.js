import{r as c,j as a}from"./iframe-6u9WOm73.js";import{S as s}from"./Switch-B2ocgifq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ctvKEr8z.js";import"./index-ClYehXzk.js";import"./index-Bz5XYtw7.js";import"./index-CQcYP0zm.js";import"./index-C_3LLnZ7.js";import"./index-B5F8cXZ3.js";import"./Typography-BPbpOl-z.js";import"./index-B-7A89sm.js";const j={title:"In Review/Switch/Dark",component:s},l={parameters:{theme:"dark"},args:{value:!0,helperText:"Some helper text here"},render:function(t){const[h,i]=c.useState({switch1:t.value,switch2:t.value,switch3:t.value,switch4:t.value}),r=(e,n)=>{i(o=>({...o,[e]:n}))};return a.jsxs("div",{className:"flex flex-col gap-5",children:[a.jsx(s,{label:"Civo theme",...t,value:h.switch1,onChange:e=>r("switch1",e)}),a.jsx(s,{label:"Civo theme",...t,value:!0,onChange:e=>r("switch1",e),disabled:!0}),a.jsx(s,{label:"Civo theme",...t,value:!1,onChange:e=>r("switch1",e),disabled:!0}),a.jsx(s,{label:"Kubefirst theme",...t,value:h.switch2,onChange:e=>r("switch2",e),theme:"kubefirst"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}};const k=["Dark"];export{l as Dark,k as __namedExportsOrder,j as default};
