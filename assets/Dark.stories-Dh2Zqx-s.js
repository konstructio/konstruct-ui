import{r as c,j as a}from"./iframe-CoBiGKUL.js";import{S as s}from"./Switch-23d0Oa2s.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt2jClfr.js";import"./index-Buesxbiu.js";import"./index-BG4t6Fzh.js";import"./index-D1HSvG2h.js";import"./index-Box-pd3H.js";import"./index-CVV1FKaE.js";import"./Typography-DZ3by0j3.js";import"./index-BIgQ6y5l.js";const j={title:"In Review/Switch/Dark",component:s},l={parameters:{theme:"dark"},args:{value:!0,helperText:"Some helper text here"},render:function(t){const[h,i]=c.useState({switch1:t.value,switch2:t.value,switch3:t.value,switch4:t.value}),r=(e,n)=>{i(o=>({...o,[e]:n}))};return a.jsxs("div",{className:"flex flex-col gap-5",children:[a.jsx(s,{label:"Civo theme",...t,value:h.switch1,onChange:e=>r("switch1",e)}),a.jsx(s,{label:"Civo theme",...t,value:!0,onChange:e=>r("switch1",e),disabled:!0}),a.jsx(s,{label:"Civo theme",...t,value:!1,onChange:e=>r("switch1",e),disabled:!0}),a.jsx(s,{label:"Kubefirst theme",...t,value:h.switch2,onChange:e=>r("switch2",e),theme:"kubefirst"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
