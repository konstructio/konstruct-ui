import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Select-Df_T47hw.js";import{i as a,n as o,r as s,t as c}from"./civo-logo-p288Svfu.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{l=t(),o(),r(),a(),u=n(),d={title:`In Review/RadioCard`,component:s},f={args:{label:(0,u.jsx)(c,{}),wrapperClassName:`w-50`},render:e=>(0,u.jsxs)(`div`,{className:`w-87.5 flex flex-col gap-4`,children:[(0,u.jsx)(s,{...e,name:`input-name-1`}),(0,u.jsx)(s,{...e,name:`input-name-2`,checked:!0})]})},p={parameters:{docs:{description:{story:"`tag` renders a badge next to the label, `hideIndicator` removes the radio circle so the card border communicates the selection, and `content` renders interactive content below the label, outside the selectable area, receiving the checked state. Compute built a ToggleGroup and databases forced this layout with `!` overrides before."}}},render:function(){let[e,t]=(0,l.useState)(`existing`);return(0,u.jsxs)(`div`,{className:`flex gap-4`,children:[(0,u.jsx)(s,{name:`network`,value:`existing`,label:`Existing network`,tag:`Recommended`,description:`Attach the instance to a network you already manage`,hideIndicator:!0,wrapperClassName:`w-80 rounded-lg`,checked:e===`existing`,onChange:t,content:e=>e?(0,u.jsx)(i,{label:`Network`,placeholder:`Pick a network`,options:[{label:`default`,value:`default`},{label:`staging`,value:`staging`}]}):null}),(0,u.jsx)(s,{name:`network`,value:`new`,label:`New network`,description:`Create a network for this instance`,hideIndicator:!0,wrapperClassName:`w-80 rounded-lg`,checked:e===`new`,onChange:t})]})}},m=[`RadioCard`,`WithTagAndContent`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: <CivoLogo />,
    wrapperClassName: 'w-50'
  },
  render: args => <div className="w-87.5 flex flex-col gap-4">
      <RadioCardComponent {...args} name="input-name-1" />
      <RadioCardComponent {...args} name="input-name-2" checked={true} />
    </div>
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`tag\` renders a badge next to the label, \`hideIndicator\` removes the radio circle so the card border communicates the selection, and \`content\` renders interactive content below the label, outside the selectable area, receiving the checked state. Compute built a ToggleGroup and databases forced this layout with \`!\` overrides before.'
      }
    }
  },
  render: function WithTagAndContentStory() {
    const [value, setValue] = useState('existing');
    return <div className="flex gap-4">
        <RadioCardComponent name="network" value="existing" label="Existing network" tag="Recommended" description="Attach the instance to a network you already manage" hideIndicator wrapperClassName="w-80 rounded-lg" checked={value === 'existing'} onChange={setValue} content={checked => checked ? <Select label="Network" placeholder="Pick a network" options={[{
        label: 'default',
        value: 'default'
      }, {
        label: 'staging',
        value: 'staging'
      }]} /> : null} />

        <RadioCardComponent name="network" value="new" label="New network" description="Create a network for this instance" hideIndicator wrapperClassName="w-80 rounded-lg" checked={value === 'new'} onChange={setValue} />
      </div>;
  }
} satisfies Story`,...p.parameters?.docs?.source}}}})))()}h();export{f as RadioCard,p as WithTagAndContent,m as __namedExportsOrder,d as default};