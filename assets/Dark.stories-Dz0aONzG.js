import{r as c,j as a}from"./iframe-DLrn8Gk9.js";import{S as s}from"./Switch-Cut9KH7p.js";import"./preload-helper-PPVm8Dsz.js";import"./compiler-runtime-DxXHijtq.js";import"./index-QG5MEqND.js";import"./index-BfndZXuq.js";import"./index-8qrDTiGs.js";import"./index-CPvO_3XD.js";import"./index-CRB1R8uy.js";import"./index-BvLyimqJ.js";import"./Typography-CHpAwWZY.js";import"./index-CwGTy2we.js";const k={title:"In Review/Switch/Dark",component:s},l={parameters:{theme:"dark"},args:{value:!0,helperText:"Some helper text here"},render:function(t){const[i,h]=c.useState({switch1:t.value,switch2:t.value,switch3:t.value,switch4:t.value}),r=(e,n)=>{h(o=>({...o,[e]:n}))};return a.jsxs("div",{className:"flex flex-col gap-5",children:[a.jsx(s,{label:"Civo theme",...t,value:i.switch1,onChange:e=>r("switch1",e)}),a.jsx(s,{label:"Civo theme",...t,value:!0,onChange:e=>r("switch1",e),disabled:!0}),a.jsx(s,{label:"Civo theme",...t,value:!1,onChange:e=>r("switch1",e),disabled:!0}),a.jsx(s,{label:"Kubefirst theme",...t,value:i.switch2,onChange:e=>r("switch2",e),theme:"kubefirst"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...l.parameters?.docs?.source}}};const N=["Dark"];export{l as Dark,N as __namedExportsOrder,k as default};
