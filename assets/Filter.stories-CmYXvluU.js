import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as e}from"./iframe-eccQySpR.js";import{c as O,a as x}from"./index-CJCZd66Q.js";import{B as E}from"./Badge-CaOs9vss.js";import{B as w}from"./Button-BP9ta_1f.js";import{C as q}from"./Checkbox-FzW-HGs_.js";import{C as D}from"./chevron-down-BbO0Xw-h.js";import{D as T}from"./DatePicker-BeZOftJQ.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DvfXwkIe.js";import"./index-qnowUes8.js";import"./index-CB8iPyw_.js";import"./index-BI7naN6k.js";import"./index-iyBZecI8.js";import"./index-BVS1eaf7.js";import"./index-DrokQNWJ.js";import"./index-CKW09fxJ.js";import"./useToggle-C2Cwshzx.js";import"./check-BsMTmECM.js";import"./index-BeBfjjF7.js";const M=O(["flex","gap-8","items-center"]),R=O(["flex","items-center","gap-1","text-slate-500","cursor-pointer","text-sm","w-max"]),j=O(["text-slate-400","h-[20px]","w-[20px]","transition-all","duration-150","ease-in-out"]);var C=(t=>(t.OPEN="@konstrtuctio/Filter/event-OPEN",t.RESET="@konstrtuctio/Filter/event-RESET",t))(C||{});const N=t=>document.dispatchEvent(new CustomEvent("@konstrtuctio/Filter/event-OPEN",{detail:t})),P=()=>document.dispatchEvent(new CustomEvent("@konstrtuctio/Filter/event-RESET")),L=({onApply:t})=>{const r=e.useId(),i=e.useRef(null),[u,c]=e.useState(!1),[a,o]=e.useState([]);e.useEffect(()=>{const s=new AbortController;return document.addEventListener(C.OPEN,d=>{d.detail!==r&&c(!1)},{signal:s.signal}),document.addEventListener(C.RESET,()=>{o([]),t?.([])},{signal:s.signal}),()=>{s.abort()}},[r,t]);const m=e.useCallback(()=>c(s=>(s||(N(r),o(d=>d.filter(l=>l.isApplied))),!s)),[r,c]),p=e.useCallback(()=>c(!1),[]),f=e.useCallback((s,d)=>{o(d?[...a,{...s,isApplied:!1}]:a.map(l=>l.id===s.id?{...l,isRemoved:!0}:l))},[o,a]),b=e.useCallback(()=>{o([]),t?.([])},[t]),h=e.useCallback(()=>{const s=a?.filter(d=>!d.isRemoved).map(d=>({...d,isApplied:!0}));o(s),t?.(s.map(({isApplied:d,isRemoved:l,...y})=>y))},[t,a,o]),g=e.useMemo(()=>a.filter(s=>s.isApplied),[a]);return e.useEffect(()=>{const s=new AbortController,d=l=>{i.current?.contains(l.target)||p()};return document.addEventListener("mousedown",d,{signal:s.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&p()},{signal:s.signal}),()=>{s.abort()}},[p,i]),{isOpen:u,selectedCount:g,selectedOptions:a,wrapperRef:i,handleApplyOptions:h,handleOpen:m,handleResetOptions:b,handleSelectOption:f}},B=({options:t,label:r,position:i="left",onApply:u})=>{const{wrapperRef:c,isOpen:a,selectedOptions:o,selectedCount:m,handleOpen:p,handleResetOptions:f,handleApplyOptions:b,handleSelectOption:h}=L({onApply:u});return t.length===0?null:n.jsxs("div",{ref:c,className:"relative",children:[n.jsxs("button",{className:x(R(),{"text-slate-700":a}),onClick:p,children:[r,m.length>0&&n.jsx(E,{label:m.length.toString()}),n.jsx(D,{className:x(j(),{"rotate-180":a,"text-blue-600":a})})]}),a&&n.jsxs("div",{className:x("absolute top-full mt-1 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200",{"left-0":i==="left","right-0":i==="right"}),children:[n.jsx("div",{className:"py-4",children:n.jsx("div",{className:"flex flex-col gap-2",children:t.map(g=>{const s=!!o.find(d=>d.id===g.id);return n.jsxs("div",{className:"flex gap-4 px-6",children:[n.jsx(q,{defaultChecked:s,"data-label":g.id,onChange:d=>h(g,d)},`${g.id}-${s}`),n.jsx(E,{label:g.label,variant:g.variant})]},g.id)})})}),n.jsxs("div",{className:"flex justify-center items-center gap-4 py-4 border-t border-gray-200",children:[n.jsx(w,{variant:"secondary",appearance:"compact",onClick:f,children:"Reset"}),n.jsx(w,{appearance:"compact",onClick:b,children:"Apply"})]})]})]})};B.__docgenInfo={description:"",methods:[],displayName:"BadgeMultiSelect",props:{label:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"intersection['variant']",raw:"BadgeProps['variant']",required:!1}}]}}],raw:"Option[]"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedOptions: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"intersection['variant']",raw:"BadgeProps['variant']",required:!1}}]}}],raw:"Option[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""}}};const _=({onApply:t})=>{const r=e.useRef(null),i=e.useId(),[u,c]=e.useState(!1),[a,o]=e.useState(),[m,p]=e.useState(),f=e.useMemo(()=>m?.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),[m]),b=e.useCallback(()=>c(l=>(l||N(i),!l)),[i]),h=e.useCallback(()=>{p(a),t?.(a)},[t,a]),g=e.useCallback(l=>o(l),[]),s=e.useCallback(()=>c(!1),[]),d=e.useCallback(()=>{o(void 0),p(void 0),t?.()},[t]);return e.useEffect(()=>{const l=new AbortController;return document.addEventListener(C.OPEN,y=>{y.detail!==i&&c(!1)},{signal:l.signal}),()=>{l.abort()}},[i]),e.useEffect(()=>{const l=new AbortController;return document.addEventListener(C.OPEN,y=>{y.detail!==i&&c(!1)},{signal:l.signal}),document.addEventListener(C.RESET,()=>{o(void 0),p(void 0),t?.()},{signal:l.signal}),()=>{l.abort()}},[i,t]),e.useEffect(()=>{const l=new AbortController,y=k=>{r.current?.contains(k.target)||s()};return document.addEventListener("mousedown",y,{signal:l.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&s()},{signal:l.signal}),()=>{l.abort()}},[s,r]),{id:i,appliedDay:f,isOpen:u,selectedDay:a,wrapperRef:r,handleApply:h,handleOpen:b,handleSelect:g,handleReset:d}},F=({label:t,position:r="left",onApply:i})=>{const{id:u,appliedDay:c,isOpen:a,selectedDay:o,wrapperRef:m,handleApply:p,handleOpen:f,handleSelect:b,handleReset:h}=_({onApply:i});return n.jsxs("div",{ref:m,className:"relative",children:[n.jsxs("button",{className:x(R(),{"text-slate-700":a}),onClick:f,children:[t,c&&n.jsx(E,{label:c}),n.jsx(D,{className:x(j(),{"rotate-180":a,"text-blue-600":a})})]}),a&&n.jsxs("div",{className:x("absolute top-full mt-1 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200 flex flex-col gap-4 py-4 px-6",{"left-0":r==="left","right-0":r==="right"}),children:[n.jsx(T,{className:"p-0",arrowClassName:"-top-1 right-0",monthsClassName:"shadow-none p-0 w-auto",defaultSelected:o,defaultMonth:o,onSelect:b},o?.toISOString()??u),n.jsxs("div",{className:"flex justify-end items-center gap-4 py-2",children:[n.jsx(w,{variant:"secondary",appearance:"compact",onClick:h,children:"Reset"}),n.jsx(w,{appearance:"compact",onClick:p,children:"Apply"})]})]})]})};F.__docgenInfo={description:"",methods:[],displayName:"DateFilterDropdown",props:{label:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(date?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const A=({disabled:t,onClick:r,...i})=>{const u=e.useCallback(()=>{P(),r?.()},[r]);return n.jsx(w,{type:"button",variant:"text",appearance:"compact",version:"alternate",onClick:u,disabled:t,...i,children:"Reset"})};A.__docgenInfo={description:"",methods:[],displayName:"ResetButton",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLButtonElement"}],raw:"Ref<HTMLButtonElement>"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'light'
| 'kubefirst-dark'
| 'dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'light'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'dark'"},{name:"undefined"}]},description:""},onClick:{required:!1,tsType:{name:"VoidFunction"},description:""}},composes:["Omit","VariantProps"]};const v=({className:t,theme:r="civo",children:i})=>n.jsx("div",{className:x(M({className:t})),"data-theme":r,children:i});v.displayName="Filter";v.BadgeMultiSelect=B;v.DateFilterDropdown=F;v.ResetButton=A;v.__docgenInfo={description:"",methods:[{name:"BadgeMultiSelect",docblock:null,modifiers:["static"],params:[{name:`{
  options,
  label,
  position = 'left',
  onApply,
}`,optional:!1,type:null}],returns:null},{name:"DateFilterDropdown",docblock:null,modifiers:["static"],params:[{name:`{
  label,
  position = 'left',
  onApply,
}`,optional:!1,type:null}],returns:null},{name:"ResetButton",docblock:null,modifiers:["static"],params:[{name:`{
  disabled,
  onClick,
  ...delegated
}`,optional:!1,type:null}],returns:null}],displayName:"Filter",props:{theme:{defaultValue:{value:"'civo'",computed:!1},required:!1}}};const ie={title:"In Review/Filter",component:v},S={render:function(r){const[i,u]=e.useState([]),[c,a]=e.useState(),o=f=>a(f),m=f=>{u(f)},p=e.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return n.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:n.jsxs(v,{...r,children:[n.jsx(v.BadgeMultiSelect,{label:"Status",options:p,onApply:m}),n.jsx(v.DateFilterDropdown,{label:"Created",onApply:o}),n.jsx(v.ResetButton,{disabled:!c&&i.length===0})]})})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function FilterStory(args) {
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
}`,...S.parameters?.docs?.source}}};const re=["Filter"];export{S as Filter,re as __namedExportsOrder,ie as default};
