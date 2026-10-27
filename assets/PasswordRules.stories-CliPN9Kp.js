import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BlIEEezU.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./CheckAlt-CrccNytg.js";import{n as a,t as o}from"./Input-DPQJcHVJ.js";import{i as s,t as c}from"./utils-DWfjJEhS.js";import{n as l,t as u}from"./Typography-DWBvCpi0.js";var d,f;function p(){return(p=e((()=>{r(),s(),l(),d=n(),f=({className:e,metLabel:t=`met`,pendingLabel:n=`pending`,rules:r,theme:a,title:o,value:s})=>(0,d.jsxs)(`div`,{"aria-live":`polite`,"data-theme":a,className:c(`flex flex-col gap-1`,e),children:[o?(0,d.jsx)(u,{variant:`body3`,component:`p`,className:`text-slate-700 dark:text-metal-200`,children:o}):null,(0,d.jsx)(`ul`,{className:`m-0 flex list-none flex-col gap-1 p-0`,children:r.map(e=>{let r=e.test(s);return(0,d.jsxs)(`li`,{"data-met":r,className:`flex items-center gap-3`,children:[(0,d.jsxs)(`span`,{className:`relative inline-flex size-4 items-center justify-center`,children:[(0,d.jsx)(`span`,{"aria-hidden":`true`,className:c(`absolute inset-0 inline-flex items-center justify-center leading-none text-slate-500 transition-all duration-200 ease-out dark:text-metal-400`,r?`scale-75 opacity-0`:`scale-100 opacity-100`),children:`•`}),(0,d.jsx)(i,{"aria-hidden":`true`,className:c(`absolute inset-0 size-4 text-green-600 transition-all duration-200 ease-out dark:text-green-400`,r?`scale-100 opacity-100`:`scale-75 opacity-0`)})]}),(0,d.jsx)(u,{variant:`body3`,component:`span`,className:`text-slate-700 dark:text-metal-200`,children:e.label}),(0,d.jsx)(`span`,{className:`sr-only`,children:r?t:n})]},e.id)})})]}),f.displayName=`KonstructPasswordRules`,f.__docgenInfo={description:`Lists password requirements and marks each one as met while the user types.
The list is a live region and every rule carries a screen-reader status.

@example
\`\`\`tsx
<PasswordRules
  value={password}
  title="Your password must contain at least:"
  rules={[
    { id: 'length', label: '8 characters', test: (value) => value.length >= 8 },
    { id: 'number', label: 'one number', test: (value) => /\\d/.test(value) },
  ]}
/>
\`\`\``,methods:[],displayName:`KonstructPasswordRules`,props:{className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the list wrapper`},metLabel:{required:!1,tsType:{name:`string`},description:`Screen-reader status appended to a satisfied rule`,defaultValue:{value:`'met'`,computed:!1}},pendingLabel:{required:!1,tsType:{name:`string`},description:`Screen-reader status appended to an unsatisfied rule`,defaultValue:{value:`'pending'`,computed:!1}},rules:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  label: ReactNode;
  test: (value: string) => boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`ReactNode`,required:!0}},{key:`test`,value:{name:`signature`,type:`function`,raw:`(value: string) => boolean`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`boolean`}},required:!0}}]}}],raw:`PasswordRule[]`},description:"Rules to evaluate against `value`"},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},title:{required:!1,tsType:{name:`ReactNode`},description:`Heading rendered above the rules`},value:{required:!0,tsType:{name:`string`},description:`Current password`}}}})))()}var m,h,g,_,v;function y(){return(y=e((()=>{m=t(),a(),p(),h=n(),g={title:`In Review/PasswordRules`,component:f},_={parameters:{docs:{description:{story:`Live list of password requirements: each rule flips from a bullet to a check as the value satisfies it and carries a screen-reader status. Dashboard-manager (signup) and settings (security tab) each had a copy; the settings one had lost the live region.`}}},render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsxs)(`div`,{className:`flex flex-col gap-4 max-w-80`,children:[(0,h.jsx)(o,{label:`Password`,type:`password`,value:e,onChange:e=>{t(e.target.value)}}),(0,h.jsx)(f,{value:e,title:`Your password must contain at least:`,rules:[{id:`length`,label:`8 characters`,test:e=>e.length>=8},{id:`upper`,label:`one uppercase letter`,test:e=>/[A-Z]/.test(e)},{id:`number`,label:`one number`,test:e=>/\d/.test(e)},{id:`symbol`,label:`one symbol`,test:e=>/[^A-Za-z0-9]/.test(e)}]})]})}},v=[`PasswordRules`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Live list of password requirements: each rule flips from a bullet to a check as the value satisfies it and carries a screen-reader status. Dashboard-manager (signup) and settings (security tab) each had a copy; the settings one had lost the live region.'
      }
    }
  },
  render: function PasswordRulesStory() {
    const [password, setPassword] = useState('');
    return <div className="flex flex-col gap-4 max-w-80">
        <Input label="Password" type="password" value={password} onChange={event => {
        setPassword(event.target.value);
      }} />

        <PasswordRulesComponent value={password} title="Your password must contain at least:" rules={[{
        id: 'length',
        label: '8 characters',
        test: value => value.length >= 8
      }, {
        id: 'upper',
        label: 'one uppercase letter',
        test: value => /[A-Z]/.test(value)
      }, {
        id: 'number',
        label: 'one number',
        test: value => /\\d/.test(value)
      }, {
        id: 'symbol',
        label: 'one symbol',
        test: value => /[^A-Za-z0-9]/.test(value)
      }]} />
      </div>;
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as PasswordRules,v as __namedExportsOrder,g as default};