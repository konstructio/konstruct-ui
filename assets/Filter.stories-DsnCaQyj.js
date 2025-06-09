import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-CAwzvMtO.js";import{c as j,a as S}from"./index-DJQVxuCM.js";import{B as O}from"./Badge-C1cw49aZ.js";import{B as w}from"./Button-B8RzvpCV.js";import{C as T}from"./Checkbox-Cj4mMJCt.js";import{C as B}from"./chevron-down-I-1Y4I9Z.js";import{D as L}from"./DatePicker-nehWdsS_.js";import"./createLucideIcon-BfGUkT19.js";import"./index-BQR4kOJ0.js";import"./index-Bk1pMixs.js";import"./index-CyW7J53j.js";import"./index-C0KeMpLV.js";import"./index-Bqjb5wbp.js";import"./index-DQaFVy94.js";import"./index-BvJvpmEd.js";import"./useToggle-Bd1y3W2I.js";import"./check-vx4uHPzF.js";import"./index-vYKAL2RV.js";const V=j(["flex","gap-8","items-center"]),F=j(["flex","items-center","gap-1","text-slate-500","cursor-pointer","text-sm","w-max"]),q=j(["text-slate-400","h-[20px]","w-[20px]","transition-all","duration-150","ease-in-out"]);var C=(e=>(e.OPEN="@konstrtuctio/Filter/event-OPEN",e.RESET="@konstrtuctio/Filter/event-RESET",e))(C||{});const P=e=>document.dispatchEvent(new CustomEvent("@konstrtuctio/Filter/event-OPEN",{detail:e})),$=()=>document.dispatchEvent(new CustomEvent("@konstrtuctio/Filter/event-RESET")),z=({onApply:e})=>{const d=t.useId(),l=t.useRef(null),[g,i]=t.useState(!1),[r,o]=t.useState([]);t.useEffect(()=>{const n=new AbortController;return document.addEventListener(C.OPEN,u=>{u.detail!==d&&i(!1)},{signal:n.signal}),document.addEventListener(C.RESET,()=>{o([]),e==null||e([])},{signal:n.signal}),()=>{n.abort()}},[d,e]);const m=t.useCallback(()=>i(n=>(n||(P(d),o(u=>u.filter(s=>s.isApplied))),!n)),[d,i]),c=t.useCallback(()=>i(!1),[]),b=t.useCallback((n,u)=>{o(u?[...r,{...n,isApplied:!1}]:r.map(s=>s.id===n.id?{...s,isRemoved:!0}:s))},[o,r]),h=t.useCallback(()=>{o([]),e==null||e([])},[e]),p=t.useCallback(()=>{o(n=>n==null?void 0:n.filter(u=>!u.isRemoved).map(u=>({...u,isApplied:!0}))),e==null||e(r.map(({isApplied:n,isRemoved:u,...s})=>s))},[e,r,o]),x=t.useMemo(()=>r.filter(n=>n.isApplied),[r]);return t.useEffect(()=>{const n=new AbortController,u=s=>{var v;(v=l.current)!=null&&v.contains(s.target)||c()};return document.addEventListener("mousedown",u,{signal:n.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&c()},{signal:n.signal}),()=>{n.abort()}},[c,l]),{isOpen:g,selectedCount:x,selectedOptions:r,wrapperRef:l,handleApplyOptions:p,handleOpen:m,handleResetOptions:h,handleSelectOption:b}},M=({options:e,label:d,onApply:l})=>{const{wrapperRef:g,isOpen:i,selectedOptions:r,selectedCount:o,handleOpen:m,handleResetOptions:c,handleApplyOptions:b,handleSelectOption:h}=z({onApply:l});return e.length===0?null:a.jsxs("div",{ref:g,className:"relative",children:[a.jsxs("button",{className:S(F(),{"text-slate-700":i}),onClick:m,children:[d,o.length>0&&a.jsx(O,{label:o.length.toString()}),a.jsx(B,{className:S(q(),{"rotate-180":i,"text-blue-600":i})})]}),i&&a.jsxs("div",{className:"absolute top-full mt-1 left-0 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200",children:[a.jsx("div",{className:"py-4",children:a.jsx("div",{className:"flex flex-col gap-2",children:e.map(p=>{const x=!!r.find(n=>n.id===p.id);return a.jsxs("div",{className:"flex gap-4 px-6",children:[a.jsx(T,{defaultChecked:x,"data-label":p.id,onChange:n=>h(p,n)},`${p.id}-${x}`),a.jsx(O,{label:p.label,variant:p.variant})]},p.id)})})}),a.jsxs("div",{className:"flex justify-center items-center gap-4 py-4 border-t border-gray-200",children:[a.jsx(w,{variant:"secondary",appearance:"compact",onClick:c,children:"Reset"}),a.jsx(w,{appearance:"compact",onClick:b,children:"Apply"})]})]})]})};M.__docgenInfo={description:"",methods:[],displayName:"BadgeMultiSelect",props:{label:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"intersection['variant']",raw:"BadgeProps['variant']",required:!1}}]}}],raw:"Option[]"},description:""},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedOptions: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"intersection['variant']",raw:"BadgeProps['variant']",required:!1}}]}}],raw:"Option[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""}}};const G=({onApply:e})=>{const d=t.useRef(null),l=t.useId(),[g,i]=t.useState(!1),[r,o]=t.useState(),[m,c]=t.useState(),b=t.useMemo(()=>m==null?void 0:m.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),[m]),h=t.useCallback(()=>i(s=>(s||P(l),!s)),[l]),p=t.useCallback(()=>{c(r),e==null||e(r)},[e,r]),x=t.useCallback(s=>o(s),[]),n=t.useCallback(()=>i(!1),[]),u=t.useCallback(()=>{o(void 0),c(void 0),e==null||e()},[e]);return t.useEffect(()=>{const s=new AbortController;return document.addEventListener(C.OPEN,v=>{v.detail!==l&&i(!1)},{signal:s.signal}),()=>{s.abort()}},[l]),t.useEffect(()=>{const s=new AbortController;return document.addEventListener(C.OPEN,v=>{v.detail!==l&&i(!1)},{signal:s.signal}),document.addEventListener(C.RESET,()=>{o(void 0),c(void 0),e==null||e()},{signal:s.signal}),()=>{s.abort()}},[l,e]),t.useEffect(()=>{const s=new AbortController,v=y=>{var k;(k=d.current)!=null&&k.contains(y.target)||n()};return document.addEventListener("mousedown",v,{signal:s.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&n()},{signal:s.signal}),()=>{s.abort()}},[n,d]),{id:l,appliedDay:b,isOpen:g,selectedDay:r,wrapperRef:d,handleApply:p,handleOpen:h,handleSelect:x,handleReset:u}},_=({label:e,onApply:d})=>{const{id:l,appliedDay:g,isOpen:i,selectedDay:r,wrapperRef:o,handleApply:m,handleOpen:c,handleSelect:b,handleReset:h}=G({onApply:d});return a.jsxs("div",{ref:o,className:"relative",children:[a.jsxs("button",{className:S(F(),{"text-slate-700":i}),onClick:c,children:[e,g&&a.jsx(O,{label:g}),a.jsx(B,{className:S(q(),{"rotate-180":i,"text-blue-600":i})})]}),i&&a.jsxs("div",{className:"absolute top-full mt-1 left-0 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200 flex flex-col gap-4 py-4 px-6",children:[a.jsx(L,{className:"p-0",arrowClassName:"-top-1 right-0",monthsClassName:"shadow-none p-0 w-auto",defaultSelected:r,defaultMonth:r,onSelect:b},(r==null?void 0:r.toISOString())??l),a.jsxs("div",{className:"flex justify-end items-center gap-4 py-2",children:[a.jsx(w,{variant:"secondary",appearance:"compact",onClick:h,children:"Reset"}),a.jsx(w,{appearance:"compact",onClick:m,children:"Apply"})]})]})]})};_.__docgenInfo={description:"",methods:[],displayName:"DateFilterDropdown",props:{label:{required:!0,tsType:{name:"string"},description:""},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(date?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const I=({disabled:e})=>a.jsx(w,{type:"button",variant:"text",appearance:"compact",version:"alternate",onClick:$,disabled:e,children:"Reset"});I.__docgenInfo={description:"",methods:[],displayName:"ResetButton",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const f=({className:e,theme:d="civo",children:l})=>a.jsx("div",{className:S(V({className:e})),"data-theme":d,children:l});f.displayName="Filter";f.BadgeMultiSelect=M;f.DateFilterDropdown=_;f.ResetButton=I;f.__docgenInfo={description:"",methods:[{name:"BadgeMultiSelect",docblock:null,modifiers:["static"],params:[{name:`{
  options,
  label,
  onApply,
}`,optional:!1,type:null}],returns:null},{name:"DateFilterDropdown",docblock:null,modifiers:["static"],params:[{name:`{
  label,
  onApply,
}`,optional:!1,type:null}],returns:null},{name:"ResetButton",docblock:null,modifiers:["static"],params:[{name:"{ disabled }",optional:!1,type:null}],returns:null}],displayName:"Filter",props:{theme:{defaultValue:{value:"'civo'",computed:!1},required:!1}}};const de={title:"In Review/Filter",component:f},E={render:e=>{const[d,l]=t.useState([]),[g,i]=t.useState(),r=c=>i(c),o=c=>{l(c)},m=t.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return a.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:a.jsxs(f,{...e,children:[a.jsx(f.BadgeMultiSelect,{label:"Status",options:m,onApply:o}),a.jsx(f.DateFilterDropdown,{label:"Created",onApply:r}),a.jsx(f.ResetButton,{disabled:!g&&d.length===0})]})})}};var D,R,N;E.parameters={...E.parameters,docs:{...(D=E.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(R=E.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const ce=["Filter"];export{E as Filter,ce as __namedExportsOrder,de as default};
