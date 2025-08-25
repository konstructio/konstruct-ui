import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-C1xpHuwn.js";import{c as j,a as w}from"./index-Cr-WShRT.js";import{B as O}from"./Badge-ChA32hSU.js";import{B as S}from"./Button-eYJOb9BC.js";import{C as I}from"./Checkbox-CxL2NH39.js";import{C as B}from"./chevron-down-D15NhHbu.js";import{D as L}from"./DatePicker-qY42-_TT.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-DH9tV0eW.js";import"./index-6l3NbNTq.js";import"./index-CAe6kgd7.js";import"./index-CTUpF5OU.js";import"./index-C_Omabb0.js";import"./index-DFIU_Ku5.js";import"./index-Dt6qf5E9.js";import"./index-yYiBZ6x1.js";import"./useToggle-DeLw8G6K.js";import"./check-BFGaQSXH.js";import"./index-CmCqJHqr.js";const V=j(["flex","gap-8","items-center"]),F=j(["flex","items-center","gap-1","text-slate-500","cursor-pointer","text-sm","w-max"]),q=j(["text-slate-400","h-[20px]","w-[20px]","transition-all","duration-150","ease-in-out"]);var C=(e=>(e.OPEN="@konstrtuctio/Filter/event-OPEN",e.RESET="@konstrtuctio/Filter/event-RESET",e))(C||{});const T=e=>document.dispatchEvent(new CustomEvent("@konstrtuctio/Filter/event-OPEN",{detail:e})),$=()=>document.dispatchEvent(new CustomEvent("@konstrtuctio/Filter/event-RESET")),z=({onApply:e})=>{const i=t.useId(),l=t.useRef(null),[v,c]=t.useState(!1),[n,o]=t.useState([]);t.useEffect(()=>{const s=new AbortController;return document.addEventListener(C.OPEN,d=>{d.detail!==i&&c(!1)},{signal:s.signal}),document.addEventListener(C.RESET,()=>{o([]),e==null||e([])},{signal:s.signal}),()=>{s.abort()}},[i,e]);const m=t.useCallback(()=>c(s=>(s||(T(i),o(d=>d.filter(r=>r.isApplied))),!s)),[i,c]),u=t.useCallback(()=>c(!1),[]),h=t.useCallback((s,d)=>{o(d?[...n,{...s,isApplied:!1}]:n.map(r=>r.id===s.id?{...r,isRemoved:!0}:r))},[o,n]),b=t.useCallback(()=>{o([]),e==null||e([])},[e]),x=t.useCallback(()=>{const s=n==null?void 0:n.filter(d=>!d.isRemoved).map(d=>({...d,isApplied:!0}));o(s),e==null||e(s.map(({isApplied:d,isRemoved:r,...f})=>f))},[e,n,o]),p=t.useMemo(()=>n.filter(s=>s.isApplied),[n]);return t.useEffect(()=>{const s=new AbortController,d=r=>{var f;(f=l.current)!=null&&f.contains(r.target)||u()};return document.addEventListener("mousedown",d,{signal:s.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&u()},{signal:s.signal}),()=>{s.abort()}},[u,l]),{isOpen:v,selectedCount:p,selectedOptions:n,wrapperRef:l,handleApplyOptions:x,handleOpen:m,handleResetOptions:b,handleSelectOption:h}},P=({options:e,label:i,position:l="left",onApply:v})=>{const{wrapperRef:c,isOpen:n,selectedOptions:o,selectedCount:m,handleOpen:u,handleResetOptions:h,handleApplyOptions:b,handleSelectOption:x}=z({onApply:v});return e.length===0?null:a.jsxs("div",{ref:c,className:"relative",children:[a.jsxs("button",{className:w(F(),{"text-slate-700":n}),onClick:u,children:[i,m.length>0&&a.jsx(O,{label:m.length.toString()}),a.jsx(B,{className:w(q(),{"rotate-180":n,"text-blue-600":n})})]}),n&&a.jsxs("div",{className:w("absolute top-full mt-1 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200",{"left-0":l==="left","right-0":l==="right"}),children:[a.jsx("div",{className:"py-4",children:a.jsx("div",{className:"flex flex-col gap-2",children:e.map(p=>{const s=!!o.find(d=>d.id===p.id);return a.jsxs("div",{className:"flex gap-4 px-6",children:[a.jsx(I,{defaultChecked:s,"data-label":p.id,onChange:d=>x(p,d)},`${p.id}-${s}`),a.jsx(O,{label:p.label,variant:p.variant})]},p.id)})})}),a.jsxs("div",{className:"flex justify-center items-center gap-4 py-4 border-t border-gray-200",children:[a.jsx(S,{variant:"secondary",appearance:"compact",onClick:h,children:"Reset"}),a.jsx(S,{appearance:"compact",onClick:b,children:"Apply"})]})]})]})};P.__docgenInfo={description:"",methods:[],displayName:"BadgeMultiSelect",props:{label:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"intersection['variant']",raw:"BadgeProps['variant']",required:!1}}]}}],raw:"Option[]"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedOptions: Option[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  variant?: BadgeProps['variant'];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"variant",value:{name:"intersection['variant']",raw:"BadgeProps['variant']",required:!1}}]}}],raw:"Option[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""}}};const G=({onApply:e})=>{const i=t.useRef(null),l=t.useId(),[v,c]=t.useState(!1),[n,o]=t.useState(),[m,u]=t.useState(),h=t.useMemo(()=>m==null?void 0:m.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),[m]),b=t.useCallback(()=>c(r=>(r||T(l),!r)),[l]),x=t.useCallback(()=>{u(n),e==null||e(n)},[e,n]),p=t.useCallback(r=>o(r),[]),s=t.useCallback(()=>c(!1),[]),d=t.useCallback(()=>{o(void 0),u(void 0),e==null||e()},[e]);return t.useEffect(()=>{const r=new AbortController;return document.addEventListener(C.OPEN,f=>{f.detail!==l&&c(!1)},{signal:r.signal}),()=>{r.abort()}},[l]),t.useEffect(()=>{const r=new AbortController;return document.addEventListener(C.OPEN,f=>{f.detail!==l&&c(!1)},{signal:r.signal}),document.addEventListener(C.RESET,()=>{o(void 0),u(void 0),e==null||e()},{signal:r.signal}),()=>{r.abort()}},[l,e]),t.useEffect(()=>{const r=new AbortController,f=E=>{var k;(k=i.current)!=null&&k.contains(E.target)||s()};return document.addEventListener("mousedown",f,{signal:r.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&s()},{signal:r.signal}),()=>{r.abort()}},[s,i]),{id:l,appliedDay:h,isOpen:v,selectedDay:n,wrapperRef:i,handleApply:x,handleOpen:b,handleSelect:p,handleReset:d}},M=({label:e,position:i="left",onApply:l})=>{const{id:v,appliedDay:c,isOpen:n,selectedDay:o,wrapperRef:m,handleApply:u,handleOpen:h,handleSelect:b,handleReset:x}=G({onApply:l});return a.jsxs("div",{ref:m,className:"relative",children:[a.jsxs("button",{className:w(F(),{"text-slate-700":n}),onClick:h,children:[e,c&&a.jsx(O,{label:c}),a.jsx(B,{className:w(q(),{"rotate-180":n,"text-blue-600":n})})]}),n&&a.jsxs("div",{className:w("absolute top-full mt-1 bg-white rounded-md shadow-md animate-in fade-in-0 z-10 border border-gray-200 flex flex-col gap-4 py-4 px-6",{"left-0":i==="left","right-0":i==="right"}),children:[a.jsx(L,{className:"p-0",arrowClassName:"-top-1 right-0",monthsClassName:"shadow-none p-0 w-auto",defaultSelected:o,defaultMonth:o,onSelect:b},(o==null?void 0:o.toISOString())??v),a.jsxs("div",{className:"flex justify-end items-center gap-4 py-2",children:[a.jsx(S,{variant:"secondary",appearance:"compact",onClick:x,children:"Reset"}),a.jsx(S,{appearance:"compact",onClick:u,children:"Apply"})]})]})]})};M.__docgenInfo={description:"",methods:[],displayName:"DateFilterDropdown",props:{label:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},onApply:{required:!1,tsType:{name:"signature",type:"function",raw:"(date?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const _=({disabled:e,onClick:i})=>{const l=t.useCallback(()=>{$(),i==null||i()},[i]);return a.jsx(S,{type:"button",variant:"text",appearance:"compact",version:"alternate",onClick:l,disabled:e,children:"Reset"})};_.__docgenInfo={description:"",methods:[],displayName:"ResetButton",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"VoidFunction"},description:""}}};const g=({className:e,theme:i="civo",children:l})=>a.jsx("div",{className:w(V({className:e})),"data-theme":i,children:l});g.displayName="Filter";g.BadgeMultiSelect=P;g.DateFilterDropdown=M;g.ResetButton=_;g.__docgenInfo={description:"",methods:[{name:"BadgeMultiSelect",docblock:null,modifiers:["static"],params:[{name:`{
  options,
  label,
  position = 'left',
  onApply,
}`,optional:!1,type:null}],returns:null},{name:"DateFilterDropdown",docblock:null,modifiers:["static"],params:[{name:`{
  label,
  position = 'left',
  onApply,
}`,optional:!1,type:null}],returns:null},{name:"ResetButton",docblock:null,modifiers:["static"],params:[{name:"{ disabled, onClick }",optional:!1,type:null}],returns:null}],displayName:"Filter",props:{theme:{defaultValue:{value:"'civo'",computed:!1},required:!1}}};const ce={title:"In Review/Filter",component:g},y={render:e=>{const[i,l]=t.useState([]),[v,c]=t.useState(),n=u=>c(u),o=u=>{l(u)},m=t.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return a.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:a.jsxs(g,{...e,children:[a.jsx(g.BadgeMultiSelect,{label:"Status",options:m,onApply:o}),a.jsx(g.DateFilterDropdown,{label:"Created",onApply:n}),a.jsx(g.ResetButton,{disabled:!v&&i.length===0})]})})}};var D,R,N;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(R=y.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const ue=["Filter"];export{y as Filter,ue as __namedExportsOrder,ce as default};
