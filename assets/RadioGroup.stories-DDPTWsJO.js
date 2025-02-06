import{j as s}from"./jsx-runtime-BjgbQsUx.js";import{S as T}from"./index-CaN0e_5C.js";import{r as f,R as p}from"./index-DmOy-Ncz.js";import{c as P,a as x}from"./index-BQJH-10k.js";import{R as q}from"./Radio-CVJdMN_x.js";import{u as S}from"./theme.hook-DTgsUARC.js";import{P as c}from"./index-CRcxehxe.js";import"./index-D2MAbzvX.js";function h(){return h=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},h.apply(this,arguments)}function E(e,o){if(e==null)return{};var t=G(e,o),a,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],!(o.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function G(e,o){if(e==null)return{};var t={},a=Object.keys(e),r,n;for(n=0;n<a.length;n++)r=a[n],!(o.indexOf(r)>=0)&&(t[r]=e[r]);return t}var g=f.forwardRef(function(e,o){var t=e.color,a=t===void 0?"currentColor":t,r=e.size,n=r===void 0?24:r,u=E(e,["color","size"]);return p.createElement("svg",h({ref:o,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),p.createElement("circle",{cx:"12",cy:"12",r:"10"}),p.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),p.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))});g.propTypes={color:c.string,size:c.oneOfType([c.string,c.number])};g.displayName="Info";const _=P(["flex"],{variants:{theme:{colony:"",kubefirst:"",civo:""},direction:{row:["flex-row","gap-8"],col:["flex-col","gap-4"]}},defaultVariants:{theme:"kubefirst",direction:"col"}}),d=({asChild:e,className:o,defaultChecked:t,name:a,options:r,theme:n,wrapperClassName:u,direction:R,onValueChange:l})=>{const b=e?T:"div",{theme:k}=S(),[O,j]=f.useState(()=>t),N=f.useCallback(i=>{j(i),l==null||l(i)},[l]);return s.jsx(b,{className:x(_({className:u,direction:R})),children:s.jsx(s.Fragment,{children:r.map(({value:i,...C})=>s.jsx(q,{value:i,theme:n??k,name:a,className:x(o),checked:O===i,onChange:()=>N(i),...C},i))})})};d.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"RadioProps['className']",raw:"RadioProps['className']"},description:""},defaultChecked:{required:!1,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'col'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'col'"}]},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"RadioProps"},{name:"union",raw:"'name' | 'checked' | 'defaultChecked'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'defaultChecked'"}]}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>"}],raw:"Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>[]"},description:""},theme:{required:!1,tsType:{name:"RadioProps['theme']",raw:"RadioProps['theme']"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const F={title:"Design System/RadioGroup",component:d},m={args:{options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:s.jsxs("span",{className:"flex items-center gap-1.5",children:["Option 3 ",s.jsx(g,{className:"w-[15px] h-[15px] text-slate-400"})]}),value:"option3"}]},render:e=>s.jsxs("div",{className:"w-[350px] flex flex-col gap-3 text-slate-700",children:[s.jsx("h6",{children:"Row"}),s.jsx(d,{...e,direction:"row",name:"radio-group-row",defaultChecked:"option1",options:e.options.map(({value:o,...t})=>({...t,value:o}))}),s.jsx("h6",{className:"mt-5",children:"Column"}),s.jsx(d,{...e,name:"radio-group-col",defaultChecked:"option1",options:e.options.map(({value:o,...t})=>({...t,value:o}))})]})};var v,y,w;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies Story`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const H=["RadioGroup"];export{m as RadioGroup,H as __namedExportsOrder,F as default};
