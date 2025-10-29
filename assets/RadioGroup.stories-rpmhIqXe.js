import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as R}from"./index-DxaW_mER.js";import{r as l}from"./iframe-CAUz4KDi.js";import{c as C,a as p}from"./index-CJCZd66Q.js";import{R as N}from"./Radio-e0JmeWio.js";import{I as k}from"./info-Xg6wDa7o.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvanIfV0.js";const y=C(["flex"],{variants:{direction:{row:["flex-row","gap-8"],col:["flex-col","gap-4"]}},defaultVariants:{direction:"col"}}),n=({asChild:o,className:t,defaultChecked:s,name:d,options:m,theme:c,wrapperClassName:u,direction:f,onValueChange:i})=>{const h=o?R:"div",[x,g]=l.useState(()=>s),w=l.useCallback(a=>{g(a),i?.(a)},[i]);return e.jsx(h,{className:p(y({className:u,direction:f})),"data-theme":c,children:m.map(({value:a,...v})=>e.jsx(N,{value:a,name:d,className:p(t),checked:x===a,onChange:()=>w(a),...v},a))})};n.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"RadioProps['className']",raw:"RadioProps['className']"},description:""},defaultChecked:{required:!1,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'col'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'col'"}]},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"RadioProps"},{name:"union",raw:"'name' | 'checked' | 'defaultChecked'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'defaultChecked'"}]}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>"}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>[]"},description:""},theme:{required:!1,tsType:{name:"Theme"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const P={title:"In Review/RadioGroup",component:n},r={args:{options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:e.jsxs("span",{className:"flex items-center gap-1.5",children:["Option 3 ",e.jsx(k,{className:"w-[15px] h-[15px] text-slate-400"})]}),value:"option3"}]},render:o=>e.jsxs("div",{className:"w-[350px] flex flex-col gap-3 text-slate-700",children:[e.jsx("h6",{children:"Row"}),e.jsx(n,{...o,direction:"row",name:"radio-group-row",defaultChecked:"option1",options:o.options.map(({value:t,...s})=>({...s,value:t}))}),e.jsx("h6",{className:"mt-5",children:"Column"}),e.jsx(n,{...o,name:"radio-group-col",defaultChecked:"option1",options:o.options.map(({value:t,...s})=>({...s,value:t}))})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: <span className="flex items-center gap-1.5">
            Option 3 <Info className="w-[15px] h-[15px] text-slate-400" />
          </span>,
      value: 'option3'
    }]
  },
  render: args => <div className="w-[350px] flex flex-col gap-3 text-slate-700">
      <h6>Row</h6>

      <RadioGroupComponent {...args} direction="row" name="radio-group-row" defaultChecked="option1" options={args.options.map(({
      value,
      ...delegated
    }) => ({
      ...delegated,
      value
    }))} />

      <h6 className="mt-5">Column</h6>

      <RadioGroupComponent {...args} name="radio-group-col" defaultChecked="option1" options={args.options.map(({
      value,
      ...delegated
    }) => ({
      ...delegated,
      value
    }))} />
    </div>
} satisfies Story`,...r.parameters?.docs?.source}}};const _=["RadioGroup"];export{r as RadioGroup,_ as __namedExportsOrder,P as default};
