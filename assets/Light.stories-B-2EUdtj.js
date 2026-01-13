import{r as c,j as a}from"./iframe-Dv_ed3hk.js";import{S as s}from"./Switch-N3qpdYVx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRKh_P65.js";import"./index-Bvbp85qh.js";import"./index-Db6OKbb2.js";import"./index-CqmYFDcc.js";import"./index-znX8omPX.js";import"./index-Cdz7ryRP.js";import"./Typography-Cb2Ps2fx.js";import"./index-Bn42e07n.js";const j={title:"In Review/Switch/Light",component:s},i={args:{value:!0,helperText:"Some helper text here"},render:function(t){const[h,n]=c.useState({switch1:t.value,switch2:t.value,switch3:t.value,switch4:t.value}),l=(e,o)=>{n(r=>({...r,[e]:o}))};return a.jsxs("div",{className:"flex flex-col gap-5",children:[a.jsx(s,{label:"Civo theme",...t,value:h.switch1,onChange:e=>l("switch1",e)}),a.jsx(s,{label:"Civo theme",...t,value:!0,onChange:e=>l("switch1",e),disabled:!0}),a.jsx(s,{label:"Civo theme",...t,value:!1,onChange:e=>l("switch1",e),disabled:!0}),a.jsx(s,{label:"Kubefirst theme",...t,value:h.switch2,onChange:e=>l("switch2",e),theme:"kubefirst"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...i.parameters?.docs?.source}}};const N=["Light"];export{i as Light,N as __namedExportsOrder,j as default};
