import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-Chq8riCL.js";import{c as j,a as w}from"./index-Cr-WShRT.js";import{B as O}from"./Badge-pZfJOqG7.js";import{B as S}from"./Button-B-x8XArW.js";import{C as I}from"./Checkbox-B6qtH0-2.js";import{C as B}from"./chevron-down-Dv-G_u-0.js";import{D as L}from"./DatePicker-CLI8JD6Z.js";import"./createLucideIcon-DDV_8qN1.js";import"./index-C2_GdNeV.js";import"./index-DVzhIAbm.js";import"./index-BIxGmdJY.js";import"./index-DeZt_HR4.js";import"./index-DU5vG1e5.js";import"./index-D6Kz-ZXA.js";import"./index-Bsu0kicG.js";import"./useToggle-C_w3bJiU.js";import"./check-CdVLXg4I.js";import"./index-D3UakB87.js";const V=j(["flex","gap-8","items-center"]),F=j(["flex","items-center","gap-1","text-slate-500","cursor-pointer","text-sm","w-max"]),q=j(["text-slate-400","h-[20px]","w-[20px]","transition-all","duration-150","ease-in-out"]);var C=(e=>(e.OPEN="@konstrtuctio/Filter/event-OPEN",e.RESET="@konstrtuctio/Filter/event-RESET",e))(C||{});const T=e=>document.dispatchEvent(new CustomEvent("@konstrtuctio/Filter/event-OPEN",{detail:e})),$=()=>document.dispatchEvent(new CustomEvent("@konstrtuctio/Filter/event-RESET")),z=({onApply:e})=>{const i=t.useId(),l=t.useRef(null),[g,c]=t.useState(!1),[r,o]=t.useState([]);t.useEffect(()=>{const n=new AbortController;return document.addEventListener(C.OPEN,d=>{d.detail!==i&&c(!1)},{signal:n.signal}),document.addEventListener(C.RESET,()=>{o([]),e==null||e([])},{signal:n.signal}),()=>{n.abort()}},[i,e]);const m=t.useCallback(()=>c(n=>(n||(T(i),o(d=>d.filter(s=>s.isApplied))),!n)),[i,c]),u=t.useCallback(()=>c(!1),[]),h=t.useCallback((n,d)=>{o(d?[...r,{...n,isApplied:!1}]:r.map(s=>s.id===n.id?{...s,isRemoved:!0}:s))},[o,r]),b=t.useCallback(()=>{o([]),e==null||e([])},[e]),x=t.useCallback(()=>{o(n=>n==null?void 0:n.filter(d=>!d.isRemoved).map(d=>({...d,isApplied:!0}))),e==null||e(r.map(({isApplied:n,isRemoved:d,...s})=>s))},[e,r,o]),p=t.useMemo(()=>r.filter(n=>n.isApplied),[r]);return t.useEffect(()=>{const n=new AbortController,d=s=>{var v;(v=l.current)!=null&&v.contains(s.target)||u()};return document.addEventListener("mousedown",d,{signal:n.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&u()},{signal:n.signal}),()=>{n.abort()}},[u,l]),{isOpen:g,selectedCount:p,selectedOptions:r,wrapperRef:l,handleApplyOptions:x,handleOpen:m,handleResetOptions:b,handleSelectOption:h}},P=({options:e,label:i,position:l="left",onApply:g})=>{const{wrapperRef:c,isOpen:r,selectedOptions:o,selectedCount:m,handleOpen:u,handleResetOptions:h,handleApplyOptions:b,handleSelectOption:x}=z({onApply:g});return e.length===0?null:a.jsxs("div",{ref:c,className:"relative",children:[a.jsxs("button",{className:w(F(),{"text-slate-700":r}),onClick:u,children:[i,m.length>0&&a.jsx(O,{label:m.length.toString()}),a.jsx(B,{className:w(q(),{"rotate-180":r,"text-blue-600":r})})]}),r&&a.jsxs("div",{className:w("absolute top-full mt-1 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200",{"left-0":l==="left","right-0":l==="right"}),children:[a.jsx("div",{className:"py-4",children:a.jsx("div",{className:"flex flex-col gap-2",children:e.map(p=>{const n=!!o.find(d=>d.id===p.id);return a.jsxs("div",{className:"flex gap-4 px-6",children:[a.jsx(I,{defaultChecked:n,"data-label":p.id,onChange:d=>x(p,d)},`${p.id}-${n}`),a.jsx(O,{label:p.label,variant:p.variant})]},p.id)})})}),a.jsxs("div",{className:"flex justify-center items-center gap-4 py-4 border-t border-gray-200",children:[a.jsx(S,{variant:"secondary",appearance:"compact",onClick:h,children:"Reset"}),a.jsx(S,{appearance:"compact",onClick:b,children:"Apply"})]})]})]})};P.__docgenInfo={description:"",methods:[],displayName:"BadgeMultiSelect",props:{label:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"intersection['variant']",raw:"BadgeProps['variant']",required:!1}}]}}],raw:"Option[]"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedOptions: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"intersection['variant']",raw:"BadgeProps['variant']",required:!1}}]}}],raw:"Option[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""}}};const G=({onApply:e})=>{const i=t.useRef(null),l=t.useId(),[g,c]=t.useState(!1),[r,o]=t.useState(),[m,u]=t.useState(),h=t.useMemo(()=>m==null?void 0:m.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),[m]),b=t.useCallback(()=>c(s=>(s||T(l),!s)),[l]),x=t.useCallback(()=>{u(r),e==null||e(r)},[e,r]),p=t.useCallback(s=>o(s),[]),n=t.useCallback(()=>c(!1),[]),d=t.useCallback(()=>{o(void 0),u(void 0),e==null||e()},[e]);return t.useEffect(()=>{const s=new AbortController;return document.addEventListener(C.OPEN,v=>{v.detail!==l&&c(!1)},{signal:s.signal}),()=>{s.abort()}},[l]),t.useEffect(()=>{const s=new AbortController;return document.addEventListener(C.OPEN,v=>{v.detail!==l&&c(!1)},{signal:s.signal}),document.addEventListener(C.RESET,()=>{o(void 0),u(void 0),e==null||e()},{signal:s.signal}),()=>{s.abort()}},[l,e]),t.useEffect(()=>{const s=new AbortController,v=E=>{var k;(k=i.current)!=null&&k.contains(E.target)||n()};return document.addEventListener("mousedown",v,{signal:s.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&n()},{signal:s.signal}),()=>{s.abort()}},[n,i]),{id:l,appliedDay:h,isOpen:g,selectedDay:r,wrapperRef:i,handleApply:x,handleOpen:b,handleSelect:p,handleReset:d}},M=({label:e,position:i="left",onApply:l})=>{const{id:g,appliedDay:c,isOpen:r,selectedDay:o,wrapperRef:m,handleApply:u,handleOpen:h,handleSelect:b,handleReset:x}=G({onApply:l});return a.jsxs("div",{ref:m,className:"relative",children:[a.jsxs("button",{className:w(F(),{"text-slate-700":r}),onClick:h,children:[e,c&&a.jsx(O,{label:c}),a.jsx(B,{className:w(q(),{"rotate-180":r,"text-blue-600":r})})]}),r&&a.jsxs("div",{className:w("absolute top-full mt-1 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200 flex flex-col gap-4 py-4 px-6",{"left-0":i==="left","right-0":i==="right"}),children:[a.jsx(L,{className:"p-0",arrowClassName:"-top-1 right-0",monthsClassName:"shadow-none p-0 w-auto",defaultSelected:o,defaultMonth:o,onSelect:b},(o==null?void 0:o.toISOString())??g),a.jsxs("div",{className:"flex justify-end items-center gap-4 py-2",children:[a.jsx(S,{variant:"secondary",appearance:"compact",onClick:x,children:"Reset"}),a.jsx(S,{appearance:"compact",onClick:u,children:"Apply"})]})]})]})};M.__docgenInfo={description:"",methods:[],displayName:"DateFilterDropdown",props:{label:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(date?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const _=({disabled:e,onClick:i})=>{const l=t.useCallback(()=>{$(),i==null||i()},[i]);return a.jsx(S,{type:"button",variant:"text",appearance:"compact",version:"alternate",onClick:l,disabled:e,children:"Reset"})};_.__docgenInfo={description:"",methods:[],displayName:"ResetButton",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"VoidFunction"},description:""}}};const f=({className:e,theme:i="civo",children:l})=>a.jsx("div",{className:w(V({className:e})),"data-theme":i,children:l});f.displayName="Filter";f.BadgeMultiSelect=P;f.DateFilterDropdown=M;f.ResetButton=_;f.__docgenInfo={description:"",methods:[{name:"BadgeMultiSelect",docblock:null,modifiers:["static"],params:[{name:`{
  options,
  label,
  position = 'left',
  onApply,
}`,optional:!1,type:null}],returns:null},{name:"DateFilterDropdown",docblock:null,modifiers:["static"],params:[{name:`{
  label,
  position = 'left',
  onApply,
}`,optional:!1,type:null}],returns:null},{name:"ResetButton",docblock:null,modifiers:["static"],params:[{name:"{ disabled, onClick }",optional:!1,type:null}],returns:null}],displayName:"Filter",props:{theme:{defaultValue:{value:"'civo'",computed:!1},required:!1}}};const de={title:"In Review/Filter",component:f},y={render:e=>{const[i,l]=t.useState([]),[g,c]=t.useState(),r=u=>c(u),o=u=>{l(u)},m=t.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return a.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:a.jsxs(f,{...e,children:[a.jsx(f.BadgeMultiSelect,{label:"Status",options:m,onApply:o}),a.jsx(f.DateFilterDropdown,{label:"Created",onApply:r}),a.jsx(f.ResetButton,{disabled:!g&&i.length===0})]})})}};var D,R,N;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
