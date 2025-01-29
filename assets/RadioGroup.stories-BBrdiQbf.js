import{j as a}from"./jsx-runtime-BjgbQsUx.js";import{S as b}from"./index-DMFkobGk.js";import{r as p}from"./index-BuYn5Wpo.js";import{c as m}from"./index-Dl2HxxTD.js";import{R as q}from"./Radio-C76QijIx.js";import{u as N}from"./theme.hook-3iWrhCdO.js";import"./index-D2MAbzvX.js";const n=({asChild:o,className:t,defaultValue:i,name:u,options:f,theme:g,wrapperClassName:x,onValueChange:r})=>{const R=o?b:"div",{theme:y}=N(),[h,v]=p.useState(i),T=p.useCallback(e=>{v(e),r==null||r(e)},[r]);return a.jsx(R,{className:m("flex gap-2",x),children:a.jsx(a.Fragment,{children:f.map(({value:e,...O})=>a.jsx(q,{value:e,theme:g??y,name:u,className:m(t),checked:h===e,onChange:()=>T(e),...O},e))})})};n.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"RadioProps['className']",raw:"RadioProps['className']"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"RadioProps"},{name:"literal",value:"'name'"}],raw:"Omit<RadioProps, 'name'>"}],raw:"Omit<RadioProps, 'name'>[]"},description:""},theme:{required:!1,tsType:{name:"RadioProps['theme']",raw:"RadioProps['theme']"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const E={title:"Design System/RadioGroup",component:n},s={args:{asChild:!0,name:"radio-group",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}]},render:o=>a.jsx("div",{className:"w-[350px] flex flex-col gap-3",children:a.jsx(n,{...o,options:o.options.map(({value:t,...i})=>({...i,value:t}))})})};var d,l,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    asChild: true,
    name: 'radio-group',
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: 'Option 3',
      value: 'option3'
    }]
  },
  render: args => <div className="w-[350px] flex flex-col gap-3">
      <RadioGroupComponent {...args} options={args.options.map(({
      value,
      ...delegated
    }) => ({
      ...delegated,
      value
    }))} />
    </div>
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const k=["RadioGroup"];export{s as RadioGroup,k as __namedExportsOrder,E as default};
