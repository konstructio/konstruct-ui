import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-B9AI4aWu.js";import{c as j,a as w}from"./index-DJQVxuCM.js";import{B as O}from"./Badge-BnvBaXgR.js";import{B as S}from"./Button-dhQMVP_o.js";import{C as I}from"./Checkbox-D31Kahf2.js";import{C as B}from"./chevron-down-DGXnx3_C.js";import{D as L}from"./DatePicker-CovLMpXs.js";import"./createLucideIcon-RCdyzEA5.js";import"./index-CpO6tK0t.js";import"./index-B3P-LaQE.js";import"./index-Cj60s3m2.js";import"./index-Ckg7Z0kc.js";import"./index-CuGPqyjD.js";import"./index-BIwEoO6b.js";import"./index-C30Px5Hu.js";import"./useToggle-C0BKuWW7.js";import"./check-BW8OZgYI.js";import"./index-DOgF4wQY.js";const V=j(["flex","gap-8","items-center"]),F=j(["flex","items-center","gap-1","text-slate-500","cursor-pointer","text-sm","w-max"]),q=j(["text-slate-400","h-[20px]","w-[20px]","transition-all","duration-150","ease-in-out"]);var C=(e=>(e.OPEN="@konstrtuctio/Filter/event-OPEN",e.RESET="@konstrtuctio/Filter/event-RESET",e))(C||{});const P=e=>document.dispatchEvent(new CustomEvent("@konstrtuctio/Filter/event-OPEN",{detail:e})),$=()=>document.dispatchEvent(new CustomEvent("@konstrtuctio/Filter/event-RESET")),z=({onApply:e})=>{const d=t.useId(),l=t.useRef(null),[g,c]=t.useState(!1),[i,r]=t.useState([]);t.useEffect(()=>{const n=new AbortController;return document.addEventListener(C.OPEN,o=>{o.detail!==d&&c(!1)},{signal:n.signal}),document.addEventListener(C.RESET,()=>{r([]),e==null||e([])},{signal:n.signal}),()=>{n.abort()}},[d,e]);const m=t.useCallback(()=>c(n=>(n||(P(d),r(o=>o.filter(s=>s.isApplied))),!n)),[d,c]),u=t.useCallback(()=>c(!1),[]),h=t.useCallback((n,o)=>{r(o?[...i,{...n,isApplied:!1}]:i.map(s=>s.id===n.id?{...s,isRemoved:!0}:s))},[r,i]),b=t.useCallback(()=>{r([]),e==null||e([])},[e]),x=t.useCallback(()=>{r(n=>n==null?void 0:n.filter(o=>!o.isRemoved).map(o=>({...o,isApplied:!0}))),e==null||e(i.map(({isApplied:n,isRemoved:o,...s})=>s))},[e,i,r]),p=t.useMemo(()=>i.filter(n=>n.isApplied),[i]);return t.useEffect(()=>{const n=new AbortController,o=s=>{var v;(v=l.current)!=null&&v.contains(s.target)||u()};return document.addEventListener("mousedown",o,{signal:n.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&u()},{signal:n.signal}),()=>{n.abort()}},[u,l]),{isOpen:g,selectedCount:p,selectedOptions:i,wrapperRef:l,handleApplyOptions:x,handleOpen:m,handleResetOptions:b,handleSelectOption:h}},T=({options:e,label:d,position:l="left",onApply:g})=>{const{wrapperRef:c,isOpen:i,selectedOptions:r,selectedCount:m,handleOpen:u,handleResetOptions:h,handleApplyOptions:b,handleSelectOption:x}=z({onApply:g});return e.length===0?null:a.jsxs("div",{ref:c,className:"relative",children:[a.jsxs("button",{className:w(F(),{"text-slate-700":i}),onClick:u,children:[d,m.length>0&&a.jsx(O,{label:m.length.toString()}),a.jsx(B,{className:w(q(),{"rotate-180":i,"text-blue-600":i})})]}),i&&a.jsxs("div",{className:w("absolute top-full mt-1 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200",{"left-0":l==="left","right-0":l==="right"}),children:[a.jsx("div",{className:"py-4",children:a.jsx("div",{className:"flex flex-col gap-2",children:e.map(p=>{const n=!!r.find(o=>o.id===p.id);return a.jsxs("div",{className:"flex gap-4 px-6",children:[a.jsx(I,{defaultChecked:n,"data-label":p.id,onChange:o=>x(p,o)},`${p.id}-${n}`),a.jsx(O,{label:p.label,variant:p.variant})]},p.id)})})}),a.jsxs("div",{className:"flex justify-center items-center gap-4 py-4 border-t border-gray-200",children:[a.jsx(S,{variant:"secondary",appearance:"compact",onClick:h,children:"Reset"}),a.jsx(S,{appearance:"compact",onClick:b,children:"Apply"})]})]})]})};T.__docgenInfo={description:"",methods:[],displayName:"BadgeMultiSelect",props:{label:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"intersection['variant']",raw:"BadgeProps['variant']",required:!1}}]}}],raw:"Option[]"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedOptions: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"intersection['variant']",raw:"BadgeProps['variant']",required:!1}}]}}],raw:"Option[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""}}};const G=({onApply:e})=>{const d=t.useRef(null),l=t.useId(),[g,c]=t.useState(!1),[i,r]=t.useState(),[m,u]=t.useState(),h=t.useMemo(()=>m==null?void 0:m.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),[m]),b=t.useCallback(()=>c(s=>(s||P(l),!s)),[l]),x=t.useCallback(()=>{u(i),e==null||e(i)},[e,i]),p=t.useCallback(s=>r(s),[]),n=t.useCallback(()=>c(!1),[]),o=t.useCallback(()=>{r(void 0),u(void 0),e==null||e()},[e]);return t.useEffect(()=>{const s=new AbortController;return document.addEventListener(C.OPEN,v=>{v.detail!==l&&c(!1)},{signal:s.signal}),()=>{s.abort()}},[l]),t.useEffect(()=>{const s=new AbortController;return document.addEventListener(C.OPEN,v=>{v.detail!==l&&c(!1)},{signal:s.signal}),document.addEventListener(C.RESET,()=>{r(void 0),u(void 0),e==null||e()},{signal:s.signal}),()=>{s.abort()}},[l,e]),t.useEffect(()=>{const s=new AbortController,v=E=>{var k;(k=d.current)!=null&&k.contains(E.target)||n()};return document.addEventListener("mousedown",v,{signal:s.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&n()},{signal:s.signal}),()=>{s.abort()}},[n,d]),{id:l,appliedDay:h,isOpen:g,selectedDay:i,wrapperRef:d,handleApply:x,handleOpen:b,handleSelect:p,handleReset:o}},M=({label:e,position:d="left",onApply:l})=>{const{id:g,appliedDay:c,isOpen:i,selectedDay:r,wrapperRef:m,handleApply:u,handleOpen:h,handleSelect:b,handleReset:x}=G({onApply:l});return a.jsxs("div",{ref:m,className:"relative",children:[a.jsxs("button",{className:w(F(),{"text-slate-700":i}),onClick:h,children:[e,c&&a.jsx(O,{label:c}),a.jsx(B,{className:w(q(),{"rotate-180":i,"text-blue-600":i})})]}),i&&a.jsxs("div",{className:w("absolute top-full mt-1 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200 flex flex-col gap-4 py-4 px-6",{"left-0":d==="left","right-0":d==="right"}),children:[a.jsx(L,{className:"p-0",arrowClassName:"-top-1 right-0",monthsClassName:"shadow-none p-0 w-auto",defaultSelected:r,defaultMonth:r,onSelect:b},(r==null?void 0:r.toISOString())??g),a.jsxs("div",{className:"flex justify-end items-center gap-4 py-2",children:[a.jsx(S,{variant:"secondary",appearance:"compact",onClick:x,children:"Reset"}),a.jsx(S,{appearance:"compact",onClick:u,children:"Apply"})]})]})]})};M.__docgenInfo={description:"",methods:[],displayName:"DateFilterDropdown",props:{label:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(date?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const _=({disabled:e})=>a.jsx(S,{type:"button",variant:"text",appearance:"compact",version:"alternate",onClick:$,disabled:e,children:"Reset"});_.__docgenInfo={description:"",methods:[],displayName:"ResetButton",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const f=({className:e,theme:d="civo",children:l})=>a.jsx("div",{className:w(V({className:e})),"data-theme":d,children:l});f.displayName="Filter";f.BadgeMultiSelect=T;f.DateFilterDropdown=M;f.ResetButton=_;f.__docgenInfo={description:"",methods:[{name:"BadgeMultiSelect",docblock:null,modifiers:["static"],params:[{name:`{
  options,
  label,
  position = 'left',
  onApply,
}`,optional:!1,type:null}],returns:null},{name:"DateFilterDropdown",docblock:null,modifiers:["static"],params:[{name:`{
  label,
  position = 'left',
  onApply,
}`,optional:!1,type:null}],returns:null},{name:"ResetButton",docblock:null,modifiers:["static"],params:[{name:"{ disabled }",optional:!1,type:null}],returns:null}],displayName:"Filter",props:{theme:{defaultValue:{value:"'civo'",computed:!1},required:!1}}};const de={title:"In Review/Filter",component:f},y={render:e=>{const[d,l]=t.useState([]),[g,c]=t.useState(),i=u=>c(u),r=u=>{l(u)},m=t.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return a.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:a.jsxs(f,{...e,children:[a.jsx(f.BadgeMultiSelect,{label:"Status",options:m,onApply:r}),a.jsx(f.DateFilterDropdown,{label:"Created",onApply:i}),a.jsx(f.ResetButton,{disabled:!g&&d.length===0})]})})}};var D,R,N;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [selectedStatus, setSelectedStatus] = useState<Option[]>([]);
    const [date, setDate] = useState<Date | undefined>();
    const onApplyDate = (date?: Date) => setDate(date);
    const onApplyBadge = (selectedOptions: Option[]) => {
      setSelectedStatus(selectedOptions);
    };
    const options = useMemo<Option[]>(() => [{
      id: 'creating',
      label: 'Creating',
      variant: 'warning'
    }, {
      id: 'deleting',
      label: 'Deleting',
      variant: 'danger'
    }, {
      id: 'failed',
      label: 'Failed',
      variant: 'danger'
    }, {
      id: 'pending',
      label: 'Pending',
      variant: 'info'
    }, {
      id: 'ready',
      label: 'Ready',
      variant: 'success'
    }, {
      id: 'retrying',
      label: 'Retrying',
      variant: 'warning'
    }], []);
    return <div className="max-w-[350px] flex flex-col gap-2">
        <FilterComponent {...args}>
          <FilterComponent.BadgeMultiSelect label="Status" options={options} onApply={onApplyBadge} />
          <FilterComponent.DateFilterDropdown label="Created" onApply={onApplyDate} />
          <FilterComponent.ResetButton disabled={!date && selectedStatus.length === 0} />
        </FilterComponent>
      </div>;
  }
}`,...(N=(R=y.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const ce=["Filter"];export{y as Filter,ce as __namedExportsOrder,de as default};
