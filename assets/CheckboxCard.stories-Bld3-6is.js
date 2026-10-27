import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BlIEEezU.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{i as r,t as i}from"./utils-DWfjJEhS.js";import{n as a,t as o}from"./Typography-DWBvCpi0.js";import{n as s,t as c}from"./Checkbox-BdMQfoM-.js";import{n as l,t as u}from"./Card--NasiuVj.js";var d,f,p;function m(){return(m=e((()=>{d=t(),r(),l(),s(),a(),f=n(),p=({checked:e,className:t,contentClassName:n,defaultChecked:r,description:a,disabled:s=!1,id:l,label:p,name:m,theme:h,value:g,wrapperClassName:_,onChange:v})=>{let y=(0,d.useId)(),b=l??y,x=`${b}-label`,S=`${b}-description`,[C,w]=(0,d.useState)(r??!1),T=e??C;return(0,f.jsx)(u,{"data-theme":h,isActive:T,canHover:!s,wrapperClassName:i(`w-full`,_),className:i(`flex items-start p-0`,s&&`cursor-not-allowed opacity-50`),children:(0,f.jsxs)(`label`,{htmlFor:b,className:i(`flex w-full items-start gap-3 p-4`,s?`cursor-not-allowed`:`cursor-pointer`),children:[(0,f.jsx)(c,{id:b,name:m,value:g,checked:T,disabled:s,ariaLabelledBy:x,"aria-describedby":a?S:void 0,className:i(`mt-0.5 shrink-0`,t),onChange:e=>{w(e),v?.(e)}}),(0,f.jsxs)(`span`,{className:i(`flex flex-col gap-1`,n),children:[(0,f.jsx)(o,{id:x,component:`span`,variant:`body2`,className:`font-medium text-slate-800 dark:text-metal-50`,children:p}),a?(0,f.jsx)(o,{id:S,component:`span`,variant:`body3`,className:`text-slate-500 dark:text-metal-400`,children:a}):null]})]})})},p.displayName=`KonstructCheckboxCard`,p.__docgenInfo={description:`A card-style checkbox for multi-select options with a title and a description.
The whole card is clickable and reflects the checked state on its border.

@example
\`\`\`tsx
<CheckboxCard
  name="events"
  value="instance.created"
  label="Instance created"
  description="Sent when a new instance finishes provisioning"
  checked={events.includes('instance.created')}
  onChange={(checked) => toggle('instance.created', checked)}
/>
\`\`\``,methods:[],displayName:`KonstructCheckboxCard`,props:{contentClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the text column`},description:{required:!1,tsType:{name:`ReactNode`},description:`Secondary text displayed below the label`},label:{required:!0,tsType:{name:`ReactNode`},description:`Primary text of the option`},wrapperClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the card`},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}}}})))()}var h,g,_,v,y,b;function x(){return(x=e((()=>{h=t(),m(),g=n(),_={title:`In Review/CheckboxCard`,component:p},v=[{value:`instance.created`,label:`Instance created`,description:`Sent when a new instance finishes provisioning`},{value:`instance.deleted`,label:`Instance deleted`,description:`Sent when an instance is removed from the account`},{value:`instance.rebooted`,label:`Instance rebooted`,description:`Not available on this plan`,disabled:!0}],y={parameters:{docs:{description:{story:`The multi-select counterpart of RadioCard: a clickable card with a title, a description and a checkbox, reflecting the checked state on its border. Settings built this as EventCheckboxCard for webhook events.`}}},render:function(){let[e,t]=(0,h.useState)([`instance.created`]);return(0,g.jsx)(`div`,{className:`grid max-w-160 grid-cols-2 gap-4`,children:v.map(({value:n,label:r,description:i,disabled:a})=>(0,g.jsx)(p,{name:`events`,value:n,label:r,description:i,disabled:a,checked:e.includes(n),onChange:e=>{t(t=>e?[...t,n]:t.filter(e=>e!==n))}},n))})}},b=[`CheckboxCard`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The multi-select counterpart of RadioCard: a clickable card with a title, a description and a checkbox, reflecting the checked state on its border. Settings built this as EventCheckboxCard for webhook events.'
      }
    }
  },
  render: function CheckboxCardStory() {
    const [selected, setSelected] = useState<string[]>(['instance.created']);
    return <div className="grid max-w-160 grid-cols-2 gap-4">
        {EVENTS.map(({
        value,
        label,
        description,
        disabled
      }) => <CheckboxCardComponent key={value} name="events" value={value} label={label} description={description} disabled={disabled} checked={selected.includes(value)} onChange={checked => {
        setSelected(current => checked ? [...current, value] : current.filter(item => item !== value));
      }} />)}
      </div>;
  }
} satisfies Story`,...y.parameters?.docs?.source}}}})))()}x();export{y as CheckboxCard,b as __namedExportsOrder,_ as default};