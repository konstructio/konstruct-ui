import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Switch-2Sp5S8BT.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{a=t(),r(),o=n(),s={title:`In Review/Switch/Dark`,component:i},c={parameters:{theme:`dark`},args:{value:!0,helperText:`Some helper text here`},render:function(e){let[t,n]=(0,a.useState)({switch1:e.value,switch2:e.value,switch3:e.value,switch4:e.value}),r=(e,t)=>{n(n=>({...n,[e]:t}))};return(0,o.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,o.jsx)(i,{label:`Civo theme`,...e,value:t.switch1,onChange:e=>r(`switch1`,e)}),(0,o.jsx)(i,{label:`Civo theme (black)`,...e,value:t.switch3,onChange:e=>r(`switch3`,e),variant:`black`}),(0,o.jsx)(i,{label:`Civo theme`,...e,value:!0,onChange:e=>r(`switch1`,e),disabled:!0}),(0,o.jsx)(i,{label:`Civo theme`,...e,value:!1,onChange:e=>r(`switch1`,e),disabled:!0}),(0,o.jsx)(i,{label:`Kubefirst theme`,...e,value:t.switch2,onChange:e=>r(`switch2`,e),theme:`kubefirst`})]})}},l={parameters:{docs:{description:{story:"`labels` renders a different label for each state, and `isLoading` disables the switch and shows a spinner while the change is pending. Settings composed both around the switch before."}}},render:function(){let[e,t]=(0,a.useState)(!0),[n,r]=(0,a.useState)(!1);return(0,o.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,o.jsx)(i,{labels:{on:`Webhook enabled`,off:`Webhook disabled`},value:e,isLoading:n,onChange:e=>{r(!0),setTimeout(()=>{t(e),r(!1)},1200)}}),(0,o.jsx)(i,{label:`Saving…`,value:!0,isLoading:!0})]})}},u=[`Dark`,`StateLabelsAndLoading`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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

        <SwitchComponent label="Civo theme (black)" {...args} value={value.switch3} onChange={event => handleChange('switch3', event)} variant="black" />

        <SwitchComponent label="Civo theme" {...args} value={true} onChange={event => handleChange('switch1', event)} disabled />

        <SwitchComponent label="Civo theme" {...args} value={false} onChange={event => handleChange('switch1', event)} disabled />

        <SwitchComponent label="Kubefirst theme" {...args} value={value.switch2} onChange={event => handleChange('switch2', event)} theme="kubefirst" />
      </div>;
  }
} satisfies Story`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`labels\` renders a different label for each state, and \`isLoading\` disables the switch and shows a spinner while the change is pending. Settings composed both around the switch before.'
      }
    }
  },
  render: function StateLabelsAndLoadingStory() {
    const [enabled, setEnabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (next: boolean) => {
      setIsLoading(true);
      setTimeout(() => {
        setEnabled(next);
        setIsLoading(false);
      }, 1200);
    };
    return <div className="flex flex-col gap-5">
        <SwitchComponent labels={{
        on: 'Webhook enabled',
        off: 'Webhook disabled'
      }} value={enabled} isLoading={isLoading} onChange={handleChange} />

        <SwitchComponent label="Saving…" value isLoading />
      </div>;
  }
} satisfies Story`,...l.parameters?.docs?.source}}}})))()}d();export{c as Dark,l as StateLabelsAndLoading,u as __namedExportsOrder,s as default};