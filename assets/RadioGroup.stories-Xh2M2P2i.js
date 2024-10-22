import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{S as y}from"./index-Br99lKzn.js";import{R as O}from"./Radio-CSzZKTRL.js";import{u as T}from"./theme.hook-Bl8Zju5o.js";import"./index-Bb4qSo10.js";const n=({options:a,theme:t,name:i,asChild:c,defaultValue:u,onValueChange:r})=>{const f=c?y:"div",{theme:g}=T(),[x,R]=p.useState(u),h=p.useCallback(e=>{R(e),r==null||r(e)},[r]);return o.jsx(f,{className:"flex gap-2",children:o.jsx(o.Fragment,{children:a.map(({value:e,...v})=>o.jsx(O,{value:e,theme:t??g,name:i,checked:x===e,onChange:()=>h(e),...v},e))})})};n.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{label:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"RadioProps"},{name:"literal",value:"'name'"}],raw:"Omit<RadioProps, 'name'>"}],raw:"Omit<RadioProps, 'name'>[]"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},theme:{required:!1,tsType:{name:"RadioProps['theme']",raw:"RadioProps['theme']"},description:""},className:{required:!1,tsType:{name:"RadioProps['className']",raw:"RadioProps['className']"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const S={component:n},s={args:{asChild:!0,name:"radio-group",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}]},render:a=>o.jsx("div",{className:"w-[350px] flex flex-col gap-3",children:o.jsx(n,{...a,options:a.options.map(({value:t,...i})=>({...i,value:t}))})})};var m,d,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const G=["RadioGroup"];export{s as RadioGroup,G as __namedExportsOrder,S as default};
