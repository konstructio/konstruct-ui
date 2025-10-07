import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-DksxkQKZ.js";import{B as se}from"./Button-DIonzlIz.js";import{M as H}from"./Modal-DDjkHrZy.js";import{u as ne}from"./useToggle-C-yp97Je.js";import{L as oe}from"./Loading-C8OVsqWH.js";import{T as G}from"./Typography-CDB1THk4.js";import{c as R,a as v}from"./index-CJCZd66Q.js";import{S as le}from"./index-BSI3mGir.js";import{c as K}from"./createLucideIcon-CJNUDjyQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CU3BEaXO.js";import"./index-BYoSVbcC.js";import"./index-B7m3vDt1.js";import"./index-CQvBYBJd.js";import"./Combination-IqOBZfig.js";import"./x-ChzO59XJ.js";import"./index-ChyOmCJT.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ue=K("chevron-up",ie);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],W=K("plus",ce);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],pe=K("search",de),J=t.createContext({highlightSearchEnabled:!1,isOpen:!1,searchTerm:"",value:void 0,setSearchTerm(){throw new Error("setSearchTerm function must be overridden")},setValue(){throw new Error("setValue function must be overridden")},toggleOpen(){throw new Error("toggleOpen function must be overridden")}}),L=()=>{const d=t.useContext(J);if(!d)throw new Error("useDropdownContext must be used within a DropdownProvider");return d},Q=({children:d,value:u,name:r,highlightSearch:s=!1,onChange:n,onBlur:a})=>{const i=t.useRef(s),[c,o]=ne(!1),[m,h]=t.useState(""),l=t.useCallback(p=>{n?.({target:{value:p,name:r??""}}),a?.()},[n,r,a]);return e.jsx(J.Provider,{value:{highlightSearchEnabled:i.current,isOpen:c,searchTerm:m,value:u,setSearchTerm:h,setValue:l,toggleOpen:o},children:d})};Q.__docgenInfo={description:"",methods:[],displayName:"DropdownProvider",props:{highlightSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"intersection['onChange']",raw:"DropdownProps['onChange']"},description:""},onBlur:{required:!1,tsType:{name:"intersection['onBlur']",raw:"DropdownProps['onBlur']"},description:""}}};const me=({inputRef:d,searchable:u,ulRef:r,wrapperInputRef:s,wrapperRef:n})=>{const a=t.useRef(0),{isOpen:i}=L();t.useEffect(()=>{const c=r.current?.querySelectorAll("li")??[],o=Array.from(c).filter(p=>p.getAttribute("data-action")!=="true"),m=new AbortController,h=()=>{a.current<o.length-1?(a.current=a.current+1,o[a.current].focus()):(a.current=0,o[0].focus())},l=()=>{a.current>0?(a.current=a.current-1,o[a.current].focus()):(a.current=0,d?.current&&u?d.current.focus():s.current?.focus())};return r.current?.addEventListener("keydown",p=>{switch(p.preventDefault(),p.key){case"ArrowDown":{h();break}case"Tab":{p.shiftKey?l():h();break}case"ArrowUp":{a.current===0?s.current?.focus():l();break}case"Enter":{o[a.current].querySelector("button")?.click();break}}},{signal:m.signal}),()=>{m.abort()}},[r,a,s,d,u]),t.useEffect(()=>{const c=new AbortController;return n.current?.addEventListener("mouseenter",()=>{(r.current?.querySelectorAll("li")??[]).forEach(m=>m.blur())},{signal:c.signal}),()=>{c.abort()}},[r,n]),t.useEffect(()=>{i||(a.current=0)},[i])},fe=R(["cursor-pointer","py-2","px-2","h-full","focus-visible:outline-none","m-0","w-full","flex","items-center","gap-3","transition-bg","duration-250","hover:bg-gray-50","focus:bg-gray-50","dark:hover:bg-slate-700","dark:focus:bg-slate-700"]),E=({isClickable:d,className:u,...r})=>{const{searchTerm:s,highlightSearchEnabled:n,setValue:a,toggleOpen:i}=L(),c=t.useRef(null),o=t.useCallback(l=>{a(l.value),i(!1)},[a,i]),m=t.useCallback((l,p)=>{l.key==="Enter"&&(l.stopPropagation(),o(p))},[o]),h=t.useCallback(l=>{if(typeof l!="string")return l;const p=n&&s.length>0?l.split(new RegExp(`(${s})`,"gi")).map(g=>g.toLowerCase()===s.toLowerCase()?e.jsx("mark",{className:"bg-transparent font-semibold text-slate-800 dark:text-slate-50",children:g},g):g):[l];return e.jsx(G,{variant:"body2",className:"text-zinc-700 dark:text-slate-50",children:p})},[n,s]);return e.jsxs("li",{ref:c,role:"option","data-action":"false",className:v(fe({className:u})),tabIndex:0,onClick:l=>{d&&(o(r),l.stopPropagation())},onKeyDown:l=>m(l,r),children:[r.leftIcon?e.jsx("span",{className:"w-4 h-4 flex justify-center items-center",children:r.leftIcon}):null,h(r.label)]})};E.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},leftIcon:{required:!1,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},value:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isClickable:{required:!0,tsType:{name:"boolean"},description:""}}};const ge=R(["absolute","bg-white","border","flex-col","mt-1","overflow-hidden","rounded-md","shadow-2xs","top-full","w-full","z-10","max-h-[185px]","overflow-y-auto","border-gray-200","text-zinc-700","animate-in","fade-in-50","zoom-in-95","duration-[200ms]","dark:bg-slate-800","dark:border-slate-700","dark:text-slate-50"]),X=t.forwardRef(({additionalOptions:d,className:u,inputRef:r,isLoading:s,itemClassName:n,name:a,options:i,searchable:c=!1,wrapperInputRef:o,wrapperRef:m},h)=>{const l=t.useRef(null),{isOpen:p,searchTerm:g}=L();t.useImperativeHandle(h,()=>l.current,[l]),me({ulRef:l,wrapperRef:m,wrapperInputRef:o,inputRef:r,searchable:c});const f=c?i.filter(b=>{const S=g.toLowerCase();return(typeof b.label=="string"?b.label.toLowerCase():"").includes(S)}):i,j=f.length===0;return e.jsx("ul",{ref:l,title:a,role:"listbox",className:v(ge({className:u})),"data-state":p?"open":"closed",children:s?e.jsx(E,{className:v("select-none",n),isClickable:!1,value:"Loading...",label:"Loading..."}):j?e.jsx(E,{className:v("select-none",n),isClickable:!1,value:"No options",label:"No options"}):e.jsxs(e.Fragment,{children:[f.map(b=>e.jsx(E,{className:v("select-none",n),isClickable:!0,...b},b.value)),d?.map((b,S)=>e.jsx("li",{role:"option","data-action":"true",children:e.jsx(le,{className:"flex p-2 w-full h-full gap-1 items-center text-sm [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:shrink-0 cursor-pointer select-none hover:bg-gray-50 hover:dark:bg-slate-700 focus:outline-0",children:b})},S))]})})});X.__docgenInfo={description:"",methods:[],displayName:"List",props:{className:{required:!1,tsType:{name:"string"},description:""},inputRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"ComponentRef<'input'> | null",elements:[{name:"ComponentRef",elements:[{name:"literal",value:"'input'"}],raw:"ComponentRef<'input'>"},{name:"null"}]}],raw:"RefObject<ComponentRef<'input'> | null>"},description:""},isLoading:{required:!0,tsType:{name:"boolean"},description:""},itemClassName:{required:!1,tsType:{name:"string"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},wrapperInputRef:{required:!0,tsType:{name:"RefObject",elements:[{name:"union",raw:"ComponentRef<'div'> | null",elements:[{name:"ComponentRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentRef<'div'>"},{name:"null"}]}],raw:"RefObject<ComponentRef<'div'> | null>"},description:""},wrapperRef:{required:!0,tsType:{name:"RefObject",elements:[{name:"union",raw:"ComponentRef<'div'> | null",elements:[{name:"ComponentRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentRef<'div'>"},{name:"null"}]}],raw:"RefObject<ComponentRef<'div'> | null>"},description:""}}};const he=R(["group","border","cursor-pointer","ease-in-out","flex","items-center","justify-between","px-3","py-1","relative","rounded-md","transition-all","w-full","outline-none","h-9","border-gray-200","focus-visible:bg-zinc-50","aria-expanded:border-aurora-500","aria-expanded:text-aurora-500","kubefirst:aria-expanded:border-kubefirst-primary","kubefirst:aria-expanded:text-kubefirst-secondary","dark:border-slate-600","dark:focus-visible:bg-slate-800"],{variants:{hasError:{true:["aria-expanded:border-red-600","aria-expanded:text-red-600","kubefirst:border-red-600","kubefirst:text-red-600"],false:""}},defaultVariants:{hasError:!1}}),be=R(["flex-1","bg-transparent","border-none","outline-none","text-zinc-700","text-sm","capitalize","placeholder:text-sm","placeholder:normal-case","placeholder:select-none","dark:placeholder:text-slate-400","dark:text-slate-50"]),ve=R(["mb-1","cursor-pointer","text-sm","leading-[20px]","tracking-[0.1px]","dark:text-slate-50"]),xe=({ulRef:d,inputRef:u})=>{const r=t.useRef(null),s=t.useRef(null),{toggleOpen:n}=L();t.useEffect(()=>{const i=new AbortController,c=m=>{m.key==="Escape"&&n(!1)},o=m=>{r.current?.contains(m.target)||n(!1)};return document.addEventListener("keydown",c,{signal:i.signal}),document.addEventListener("mousedown",o,{signal:i.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&n(!1)},{signal:i.signal}),s.current?.addEventListener("focus",()=>{n(!0)},{signal:i.signal}),()=>{i.abort()}},[n,r]),t.useEffect(()=>{const i=new AbortController;return s.current?.addEventListener("keydown",c=>{if(c.key==="ArrowDown"){const o=d.current?.querySelector("li");o&&o.focus()}},{signal:i.signal}),()=>{i.abort()}},[s,d]);const a=t.useCallback(()=>{n(!0),requestAnimationFrame(()=>u?.current?.focus())},[u,n]);return{wrapperRef:r,wrapperInputRef:s,handleOpen:a}},Y=t.forwardRef(({additionalOptions:d,className:u,defaultValue:r,error:s,iconClassName:n,inputClassName:a,isLoading:i,isRequired:c,label:o,labelClassName:m,listClassName:h,listItemClassName:l,name:p,options:g,placeholder:f,searchable:j=!1,showSearchIcon:b,theme:S,wrapperClassName:z,onBlur:P,...B},Z)=>{const $=t.useId(),w=t.useRef(null),F=t.useRef(null),{wrapperRef:T,wrapperInputRef:U,handleOpen:M}=xe({ulRef:F,inputRef:w}),{isOpen:O,searchTerm:ee,value:C,toggleOpen:te,setValue:_,setSearchTerm:A}=L(),q=p?`${$}-${p}`:$;t.useImperativeHandle(Z,()=>w.current,[w]);const k=t.useMemo(()=>g.find(({value:x})=>x===C),[g,C]);t.useEffect(()=>{w.current&&(w.current.value=C?k?.value:"")},[k,C]),t.useEffect(()=>{if(r&&!C){const x=g&&g.find(N=>N.value===r);x&&_(x.value)}},[r,g,_,C]),t.useEffect(()=>{const x=new AbortController;return T.current?.addEventListener("focusout",N=>{const I=N.relatedTarget;(!I||!T.current?.contains(I))&&(A(""),w.current?.value||P?.())}),()=>{x.abort()}},[te,T,A,P,C]);const ae=x=>{const N=x.target.value;A(N);const I=g.find(re=>re.value.toLocaleLowerCase()===N.toLocaleLowerCase());I&&_(I.value)};return e.jsxs("div",{ref:T,className:v("flex flex-col w-full relative",z),"data-theme":S,children:[o?e.jsxs("label",{id:q,className:v(ve({className:m})),htmlFor:q,onClick:M,children:[o,c&&e.jsx("span",{className:"text-red-600 ml-1",children:"*"})]}):null,e.jsxs("div",{ref:U,id:q,className:v(he({className:u,hasError:!!s})),role:"combobox",onClick:M,"aria-expanded":O,tabIndex:0,"aria-labelledby":q,children:[e.jsxs("div",{className:"flex gap-2.5 items-center flex-1",children:[k?.leftIcon&&!b&&e.jsx("span",{className:"w-4 h-4 flex justify-center items-center dark:text-slate-50",children:k.leftIcon}),b&&e.jsx(pe,{className:"w-4 h-4 text-zinc-500 select-none dark:text-slate-300 dark:group-focus-within:text-slate-50 transition-colors duration-300"}),j?e.jsx("input",{ref:w,type:"text",value:O?ee:k?.label||"",name:p,onChange:ae,placeholder:f,className:v(be({className:a}),{"text-red-700 placeholder:text-red-700":!!s}),onClick:x=>{x.stopPropagation(),M()},"aria-label":o||f,"aria-labelledby":q,required:c,autoComplete:"off",autoCapitalize:"words",...B}):e.jsx(G,{variant:"body2",className:v("flex-1 text-zinc-400 text-sm dark:text-slate-400",{"text-red-700":!!s,"select-none":!k,"text-slate-800 dark:text-slate-50":k}),children:k?.label||f})]}),i?e.jsx(oe,{className:"w-4 h-4 text-zinc-500 select-none"}):!b&&e.jsx(ue,{"data-state":O?"open":"closed",className:v("w-4 h-4 text-zinc-500 transition-all duration-100 data-[state=open]:rotate-0 data-[state=closed]:rotate-180 select-none dark:group-focus-within:text-slate-50",n,{"text-red-700":!!s})})]}),!j&&e.jsx("input",{ref:w,type:"text",name:p,className:"hidden","aria-hidden":"true",required:c,...B}),O&&e.jsx(X,{ref:F,additionalOptions:d,className:h,itemClassName:l,name:p,wrapperRef:T,wrapperInputRef:U,inputRef:w,options:g,isLoading:!!i,searchable:j})]})});Y.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{searchable:{defaultValue:{value:"false",computed:!1},required:!1}}};const y=t.forwardRef(({onChange:d,onBlur:u,value:r,error:s,helperText:n,name:a,highlightSearch:i,...c},o)=>e.jsx(Q,{highlightSearch:i,name:a,value:r,onBlur:u,onChange:d,children:e.jsxs("div",{className:"relative w-full",children:[e.jsx(Y,{name:a,error:s,ref:o,onBlur:u,...c}),s?e.jsx("span",{className:"text-xs text-red-700",children:s}):null,!s&&n?e.jsx("span",{className:"text-xs text-slate-600",children:n}):null]})}));y.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{additionalOptions:{required:!1,tsType:{name:"union",raw:"ReactNode[] | string[]",elements:[{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},highlightSearch:{required:!1,tsType:{name:"boolean"},description:""},iconClassName:{required:!1,tsType:{name:"string"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},listClassName:{required:!1,tsType:{name:"string"},description:""},listItemClassName:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string | ReactNode;
  leftIcon?: ReactNode | string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}],required:!0}},{key:"leftIcon",value:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}],required:!1}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},showSearchIcon:{required:!1,tsType:{name:"boolean"},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'light'
| 'kubefirst-dark'
| 'dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'light'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'dark'"},{name:"undefined"}]},description:""},value:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onBlur:{required:!1,tsType:{name:"VoidFunction"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: { target: { value: string; name: string } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string; name: string } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string; name: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]},required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const Ae={title:"In Review/Dropdown",component:y},D={args:{options:[{label:"Talos",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",required:!1,labelClassName:"",isLoading:!1,name:"dropdown"},render:function(u){const[r,s]=t.useState(),[n,a]=t.useState(),[i,c]=t.useState(),[o,m]=t.useState(),[h,l]=t.useState(),[p,g]=t.useState();return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-6 p-6",children:[e.jsx(y,{label:"Searchable dropdown with Kubefirst theme",onChange:({target:{value:f}})=>s(f),value:r,searchable:!0,theme:"kubefirst",...u}),e.jsx(y,{label:"Searchable dropdown with Civo theme",onChange:({target:{value:f}})=>a(f),value:n,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[e.jsxs("button",{className:"text-blue-600 dark:text-aurora-500",children:[e.jsx(W,{})," New Team"]})],...u}),e.jsx(y,{label:"Dropdown with Civo theme",onChange:({target:{value:f}})=>c(f),value:i,searchable:!1,...u})]}),e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-6 p-6 bg-slate-800 rounded-sm","data-theme":"dark",children:[e.jsx(y,{label:"Searchable dropdown with Kubefirst theme",onChange:({target:{value:f}})=>m(f),value:o,searchable:!0,theme:"kubefirst",...u}),e.jsx(y,{label:"Searchable dropdown with Civo theme",onChange:({target:{value:f}})=>l(f),value:h,searchable:!0,showSearchIcon:!0,inputMode:"text",highlightSearch:!0,additionalOptions:[e.jsxs("button",{className:"text-blue-600 dark:text-aurora-500",children:[e.jsx(W,{})," New Team"]})],...u}),e.jsx(y,{label:"Dropdown with Civo theme",onChange:({target:{value:f}})=>g(f),value:p,searchable:!1,...u})]})]})}},V={render:function(){const[u,r]=t.useState(!1),[s,n]=t.useState();return e.jsxs("div",{children:[e.jsx(se,{onClick:()=>r(!0),theme:"kubefirst",children:"Open Modal with Dropdown"}),e.jsx(H,{isOpen:u,onClose:()=>r(!1),theme:"kubefirst",className:"min-h-[100px]",children:e.jsx(H.Body,{children:e.jsx("div",{className:"p-6",children:e.jsx(y,{label:"Choose your distribution",options:[{label:"Talos",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",onChange:({target:{value:a}})=>{console.log("value",a),n(a)},value:s,theme:"kubefirst",name:"modal-dropdown"})})})})]})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Talos',
      value: 'talos',
      leftIcon: <img src="./talos.svg" alt="Talos Logo" />
    }, {
      label: 'K3S',
      value: 'k3s',
      leftIcon: <img src="./k3s.svg" alt="K3S Logo" />
    }],
    placeholder: 'Select an option...',
    required: false,
    labelClassName: '',
    isLoading: false,
    name: 'dropdown'
  },
  render: function DropdownStory(args) {
    const [value1, setValue1] = useState<string>();
    const [value2, setValue2] = useState<string>();
    const [value3, setValue3] = useState<string>();
    const [value4, setValue4] = useState<string>();
    const [value5, setValue5] = useState<string>();
    const [value6, setValue6] = useState<string>();
    return <div className="flex flex-col gap-6">
        <div className="max-w-[350px] flex flex-col gap-6 p-6">
          <DropdownComponent label="Searchable dropdown with Kubefirst theme" onChange={({
          target: {
            value
          }
        }) => setValue1(value)} value={value1} searchable={true} theme="kubefirst" {...args} />

          <DropdownComponent label="Searchable dropdown with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue2(value)} value={value2} searchable={true} showSearchIcon={true} inputMode="text" highlightSearch={true} additionalOptions={[<button className="text-blue-600 dark:text-aurora-500">
                <Plus /> New Team
              </button>]} {...args} />

          <DropdownComponent label="Dropdown with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue3(value)} value={value3} searchable={false} {...args} />
        </div>

        <div className="max-w-[350px] flex flex-col gap-6 p-6 bg-slate-800 rounded-sm" data-theme="dark">
          <DropdownComponent label="Searchable dropdown with Kubefirst theme" onChange={({
          target: {
            value
          }
        }) => setValue4(value)} value={value4} searchable={true} theme="kubefirst" {...args} />

          <DropdownComponent label="Searchable dropdown with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue5(value)} value={value5} searchable={true} showSearchIcon={true} inputMode="text" highlightSearch={true} additionalOptions={[<button className="text-blue-600 dark:text-aurora-500">
                <Plus /> New Team
              </button>]} {...args} />

          <DropdownComponent label="Dropdown with Civo theme" onChange={({
          target: {
            value
          }
        }) => setValue6(value)} value={value6} searchable={false} {...args} />
        </div>
      </div>;
  }
} satisfies Story`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function DropdownInModalStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState<string>();
    return <div>
        <Button onClick={() => setIsOpen(true)} theme="kubefirst">
          Open Modal with Dropdown
        </Button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} theme="kubefirst" className="min-h-[100px]">
          <Modal.Body>
            <div className="p-6">
              <DropdownComponent label="Choose your distribution" options={[{
              label: 'Talos',
              value: 'talos',
              leftIcon: <img src="./talos.svg" alt="Talos Logo" />
            }, {
              label: 'K3S',
              value: 'k3s',
              leftIcon: <img src="./k3s.svg" alt="K3S Logo" />
            }]} placeholder="Select an option..." onChange={({
              target: {
                value
              }
            }) => {
              console.log('value', value);
              setValue(value);
            }} value={value} theme="kubefirst" name="modal-dropdown" />
            </div>
          </Modal.Body>
        </Modal>
      </div>;
  }
} satisfies Story`,...V.parameters?.docs?.source}}};const Ke=["Dropdown","DropdownInModal"];export{D as Dropdown,V as DropdownInModal,Ke as __namedExportsOrder,Ae as default};
