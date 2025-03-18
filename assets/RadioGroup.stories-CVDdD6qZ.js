import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as C}from"./index-CDkZDzqB.js";import{r as l}from"./index-DUAV1Q2A.js";import{c as p}from"./index-CnCxUiSm.js";import{R as j}from"./Radio-PA-cT3lq.js";import{a as T}from"./index-Bj7X0qp-.js";import{u as b}from"./theme.hook-gog7kSAh.js";import{I as q}from"./info-CKS3Vlei.js";import"./index-ux_S9feM.js";const O=T(["flex"],{variants:{theme:{colony:"",kubefirst:"",civo:""},direction:{row:["flex-row","gap-8"],col:["flex-col","gap-4"]}},defaultVariants:{theme:"kubefirst",direction:"col"}}),n=({asChild:o,className:t,defaultChecked:s,name:u,options:f,theme:h,wrapperClassName:x,direction:g,onValueChange:r})=>{const w=o?C:"div",{theme:v}=b(),[R,N]=l.useState(()=>s),k=l.useCallback(a=>{N(a),r==null||r(a)},[r]);return e.jsx(w,{className:p(O({className:x,direction:g})),children:e.jsx(e.Fragment,{children:f.map(({value:a,...y})=>e.jsx(j,{value:a,theme:h??v,name:u,className:p(t),checked:R===a,onChange:()=>k(a),...y},a))})})};n.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"RadioProps['className']",raw:"RadioProps['className']"},description:""},defaultChecked:{required:!1,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'col'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'col'"}]},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"RadioProps"},{name:"union",raw:"'name' | 'checked' | 'defaultChecked'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'defaultChecked'"}]}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>"}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>[]"},description:""},theme:{required:!1,tsType:{name:"RadioProps['theme']",raw:"RadioProps['theme']"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const z={title:"In Review/RadioGroup",component:n},i={args:{options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:e.jsxs("span",{className:"flex items-center gap-1.5",children:["Option 3 ",e.jsx(q,{className:"w-[15px] h-[15px] text-slate-400"})]}),value:"option3"}]},render:o=>e.jsxs("div",{className:"w-[350px] flex flex-col gap-3 text-slate-700",children:[e.jsx("h6",{children:"Row"}),e.jsx(n,{...o,direction:"row",name:"radio-group-row",defaultChecked:"option1",options:o.options.map(({value:t,...s})=>({...s,value:t}))}),e.jsx("h6",{className:"mt-5",children:"Column"}),e.jsx(n,{...o,name:"radio-group-col",defaultChecked:"option1",options:o.options.map(({value:t,...s})=>({...s,value:t}))})]})};var d,m,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
} satisfies Story`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const B=["RadioGroup"];export{i as RadioGroup,B as __namedExportsOrder,z as default};
