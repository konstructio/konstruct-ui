import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as e}from"./iframe-D01DnpOT.js";import{c as k,a as x}from"./index-CJCZd66Q.js";import{B as O}from"./Badge-DhsMHLKh.js";import{B as w}from"./Button-DpnKiw0n.js";import{C as q}from"./Checkbox-B-BSFFcH.js";import{C as D}from"./chevron-down-BIzxA5gs.js";import{D as T}from"./DatePicker-DesMZUdL.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-olUwYCFx.js";import"./index-D60xDcd1.js";import"./index-B828Y_RN.js";import"./index-D_7VcE6Z.js";import"./index-CvqYmrir.js";import"./index-DT-OuMj9.js";import"./index-Bik-xiTe.js";import"./index-CkWzIIhm.js";import"./useToggle-C8QLhViD.js";import"./check-BRemKMXz.js";import"./index-BczJ4cjc.js";const P=k(["flex","gap-8","items-center"]),j=k(["flex","items-center","gap-1","text-slate-500","cursor-pointer","text-sm","w-max"]),R=k(["text-slate-400","h-[20px]","w-[20px]","transition-all","duration-150","ease-in-out"]);var C=(t=>(t.OPEN="@konstrtuctio/Filter/event-OPEN",t.RESET="@konstrtuctio/Filter/event-RESET",t))(C||{});const N=t=>document.dispatchEvent(new CustomEvent("@konstrtuctio/Filter/event-OPEN",{detail:t})),M=()=>document.dispatchEvent(new CustomEvent("@konstrtuctio/Filter/event-RESET")),_=({onApply:t})=>{const r=e.useId(),i=e.useRef(null),[v,c]=e.useState(!1),[a,o]=e.useState([]);e.useEffect(()=>{const s=new AbortController;return document.addEventListener(C.OPEN,d=>{d.detail!==r&&c(!1)},{signal:s.signal}),document.addEventListener(C.RESET,()=>{o([]),t?.([])},{signal:s.signal}),()=>{s.abort()}},[r,t]);const u=e.useCallback(()=>c(s=>(s||(N(r),o(d=>d.filter(l=>l.isApplied))),!s)),[r,c]),p=e.useCallback(()=>c(!1),[]),m=e.useCallback((s,d)=>{o(d?[...a,{...s,isApplied:!1}]:a.map(l=>l.id===s.id?{...l,isRemoved:!0}:l))},[o,a]),h=e.useCallback(()=>{o([]),t?.([])},[t]),b=e.useCallback(()=>{const s=a?.filter(d=>!d.isRemoved).map(d=>({...d,isApplied:!0}));o(s),t?.(s.map(({isApplied:d,isRemoved:l,...y})=>y))},[t,a,o]),f=e.useMemo(()=>a.filter(s=>s.isApplied),[a]);return e.useEffect(()=>{const s=new AbortController,d=l=>{i.current?.contains(l.target)||p()};return document.addEventListener("mousedown",d,{signal:s.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&p()},{signal:s.signal}),()=>{s.abort()}},[p,i]),{isOpen:v,selectedCount:f,selectedOptions:a,wrapperRef:i,handleApplyOptions:b,handleOpen:u,handleResetOptions:h,handleSelectOption:m}},F=({options:t,label:r,position:i="left",onApply:v})=>{const{wrapperRef:c,isOpen:a,selectedOptions:o,selectedCount:u,handleOpen:p,handleResetOptions:m,handleApplyOptions:h,handleSelectOption:b}=_({onApply:v});return t.length===0?null:n.jsxs("div",{ref:c,className:"relative",children:[n.jsxs("button",{className:x(j(),{"text-slate-700":a}),onClick:p,children:[r,u.length>0&&n.jsx(O,{label:u.length.toString()}),n.jsx(D,{className:x(R(),{"rotate-180":a,"text-blue-600":a})})]}),a&&n.jsxs("div",{className:x("absolute top-full mt-1 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200",{"left-0":i==="left","right-0":i==="right"}),children:[n.jsx("div",{className:"py-4",children:n.jsx("div",{className:"flex flex-col gap-2",children:t.map(f=>{const s=!!o.find(d=>d.id===f.id);return n.jsxs("div",{className:"flex gap-4 px-6",children:[n.jsx(q,{defaultChecked:s,"data-label":f.id,onChange:d=>b(f,d)},`${f.id}-${s}`),n.jsx(O,{label:f.label,variant:f.variant})]},f.id)})})}),n.jsxs("div",{className:"flex justify-center items-center gap-4 py-4 border-t border-gray-200",children:[n.jsx(w,{variant:"secondary",appearance:"compact",onClick:m,children:"Reset"}),n.jsx(w,{appearance:"compact",onClick:h,children:"Apply"})]})]})]})};F.__docgenInfo={description:"",methods:[],displayName:"BadgeMultiSelect",props:{label:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"intersection['variant']",raw:"BadgeProps['variant']",required:!1}}]}}],raw:"Option[]"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedOptions: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"intersection['variant']",raw:"BadgeProps['variant']",required:!1}}]}}],raw:"Option[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""}}};const I=({onApply:t})=>{const r=e.useRef(null),i=e.useId(),[v,c]=e.useState(!1),[a,o]=e.useState(),[u,p]=e.useState(),m=e.useMemo(()=>u?.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),[u]),h=e.useCallback(()=>c(l=>(l||N(i),!l)),[i]),b=e.useCallback(()=>{p(a),t?.(a)},[t,a]),f=e.useCallback(l=>o(l),[]),s=e.useCallback(()=>c(!1),[]),d=e.useCallback(()=>{o(void 0),p(void 0),t?.()},[t]);return e.useEffect(()=>{const l=new AbortController;return document.addEventListener(C.OPEN,y=>{y.detail!==i&&c(!1)},{signal:l.signal}),()=>{l.abort()}},[i]),e.useEffect(()=>{const l=new AbortController;return document.addEventListener(C.OPEN,y=>{y.detail!==i&&c(!1)},{signal:l.signal}),document.addEventListener(C.RESET,()=>{o(void 0),p(void 0),t?.()},{signal:l.signal}),()=>{l.abort()}},[i,t]),e.useEffect(()=>{const l=new AbortController,y=E=>{r.current?.contains(E.target)||s()};return document.addEventListener("mousedown",y,{signal:l.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&s()},{signal:l.signal}),()=>{l.abort()}},[s,r]),{id:i,appliedDay:m,isOpen:v,selectedDay:a,wrapperRef:r,handleApply:b,handleOpen:h,handleSelect:f,handleReset:d}},B=({label:t,position:r="left",onApply:i})=>{const{id:v,appliedDay:c,isOpen:a,selectedDay:o,wrapperRef:u,handleApply:p,handleOpen:m,handleSelect:h,handleReset:b}=I({onApply:i});return n.jsxs("div",{ref:u,className:"relative",children:[n.jsxs("button",{className:x(j(),{"text-slate-700":a}),onClick:m,children:[t,c&&n.jsx(O,{label:c}),n.jsx(D,{className:x(R(),{"rotate-180":a,"text-blue-600":a})})]}),a&&n.jsxs("div",{className:x("absolute top-full mt-1 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200 flex flex-col gap-4 py-4 px-6",{"left-0":r==="left","right-0":r==="right"}),children:[n.jsx(T,{className:"p-0",arrowClassName:"-top-1 right-0",monthsClassName:"shadow-none p-0 w-auto",defaultSelected:o,defaultMonth:o,onSelect:h},o?.toISOString()??v),n.jsxs("div",{className:"flex justify-end items-center gap-4 py-2",children:[n.jsx(w,{variant:"secondary",appearance:"compact",onClick:b,children:"Reset"}),n.jsx(w,{appearance:"compact",onClick:p,children:"Apply"})]})]})]})};B.__docgenInfo={description:"",methods:[],displayName:"DateFilterDropdown",props:{label:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(date?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const A=({disabled:t,onClick:r})=>{const i=e.useCallback(()=>{M(),r?.()},[r]);return n.jsx(w,{type:"button",variant:"text",appearance:"compact",version:"alternate",onClick:i,disabled:t,children:"Reset"})};A.__docgenInfo={description:"",methods:[],displayName:"ResetButton",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"VoidFunction"},description:""}}};const g=({className:t,theme:r="civo",children:i})=>n.jsx("div",{className:x(P({className:t})),"data-theme":r,children:i});g.displayName="Filter";g.BadgeMultiSelect=F;g.DateFilterDropdown=B;g.ResetButton=A;g.__docgenInfo={description:"",methods:[{name:"BadgeMultiSelect",docblock:null,modifiers:["static"],params:[{name:`{
  options,
  label,
  position = 'left',
  onApply,
}`,optional:!1,type:null}],returns:null},{name:"DateFilterDropdown",docblock:null,modifiers:["static"],params:[{name:`{
  label,
  position = 'left',
  onApply,
}`,optional:!1,type:null}],returns:null},{name:"ResetButton",docblock:null,modifiers:["static"],params:[{name:"{ disabled, onClick }",optional:!1,type:null}],returns:null}],displayName:"Filter",props:{theme:{defaultValue:{value:"'civo'",computed:!1},required:!1}}};const ie={title:"In Review/Filter",component:g},S={render:function(r){const[i,v]=e.useState([]),[c,a]=e.useState(),o=m=>a(m),u=m=>{v(m)},p=e.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return n.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:n.jsxs(g,{...r,children:[n.jsx(g.BadgeMultiSelect,{label:"Status",options:p,onApply:u}),n.jsx(g.DateFilterDropdown,{label:"Created",onApply:o}),n.jsx(g.ResetButton,{disabled:!c&&i.length===0})]})})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
