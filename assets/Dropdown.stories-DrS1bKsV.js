import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-ByTEjQOg.js";import{u as ne}from"./useToggle-zCBXUH0H.js";import{L as se}from"./Loading-D7BbDfZv.js";import{c as D,a as x}from"./index-Cr-WShRT.js";import{T as Q}from"./Typography-IrjkiRsc.js";import{C as oe}from"./chevron-up-C6XQRK_2.js";import{M as U}from"./Modal-B6h2y8yi.js";import{B as le}from"./Button-BcchFpZM.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-DWFc_iEG.js";import"./index-BPKuc7VD.js";import"./index-Ca5KJtUB.js";import"./index-ytRZJbuz.js";import"./index-BYazRHd2.js";import"./index-COfZEsHp.js";import"./index-Dx_73TQd.js";import"./Combination-BQv4jzFt.js";import"./x-DP-gqlRd.js";const X=t.createContext({isOpen:!1,toggleOpen(){throw new Error("toggleOpen function must be overridden")},value:void 0,setValue(){throw new Error("setValue function must be overridden")},searchTerm:"",setSearchTerm(){throw new Error("setSearchTerm function must be overridden")}}),q=()=>{const o=t.useContext(X);if(!o)throw new Error("useDropdownContext must be used within a DropdownProvider");return o},Y=({children:o,onChange:l,value:n,name:a})=>{const[r,u]=ne(!1),[d,i]=t.useState(""),s=t.useCallback(c=>{l==null||l({target:{value:c,name:a??""}})},[l,a]);return e.jsx(X.Provider,{value:{value:n,isOpen:r,setValue:s,toggleOpen:u,searchTerm:d,setSearchTerm:i},children:o})};Y.__docgenInfo={description:"",methods:[],displayName:"DropdownProvider",props:{onChange:{required:!1,tsType:{name:"DropdownProps['onChange']",raw:"DropdownProps['onChange']"},description:""},value:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};const ie=({ulRef:o,wrapperRef:l,wrapperInputRef:n})=>{const a=t.useRef(0),{isOpen:r}=q();t.useEffect(()=>{var c,m;const u=((c=o.current)==null?void 0:c.querySelectorAll("li"))??[],d=new AbortController,i=()=>{a.current<u.length-1?(a.current=a.current+1,u[a.current].focus()):(a.current=0,u[0].focus())},s=()=>{var p;a.current>0?(a.current=a.current-1,u[a.current].focus()):(a.current=0,(p=n.current)==null||p.focus())};return(m=o.current)==null||m.addEventListener("keydown",p=>{var g;switch(p.preventDefault(),p.key){case"ArrowDown":{i();break}case"Tab":{p.shiftKey?s():i();break}case"ArrowUp":{a.current===0?(g=n.current)==null||g.focus():s();break}case"Enter":{const b=u[a.current].querySelector("button");b==null||b.click();break}}},{signal:d.signal}),()=>{d.abort()}},[o,a,n]),t.useEffect(()=>{var d;const u=new AbortController;return(d=l.current)==null||d.addEventListener("mouseenter",()=>{var s;(((s=o.current)==null?void 0:s.querySelectorAll("li"))??[]).forEach(c=>c.blur())},{signal:u.signal}),()=>{u.abort()}},[o,l]),t.useEffect(()=>{r||(a.current=0)},[r])},ce=D(["cursor-pointer","py-2","px-2","h-full","focus-visible:outline-none","m-0","w-full","flex","items-center","gap-3","hover:bg-slate-50","focus:bg-slate-50","colony:focus:bg-red-100/20","colony:hover:bg-red-100/20","civo:focus:bg-civo-primary/5","civo:hover:bg-civo-primary/5"]),L=({isClickable:o,className:l,...n})=>{const{setValue:a,toggleOpen:r}=q(),u=t.useRef(null),d=t.useCallback(s=>{a(s.value),r(!1)},[a,r]),i=t.useCallback((s,c)=>{s.key==="Enter"&&(s.stopPropagation(),d(c))},[d]);return e.jsxs("li",{ref:u,role:"option",className:x(ce({className:l})),tabIndex:0,onClick:s=>{o&&(d(n),s.stopPropagation())},onKeyDown:s=>i(s,n),children:[n.leftIcon?e.jsx("span",{className:"w-4 h-4 flex justify-center items-center",children:n.leftIcon}):null,e.jsx(Q,{variant:"body2",className:"text-zinc-700",children:n.label})]})};L.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},leftIcon:{required:!1,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},value:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isClickable:{required:!0,tsType:{name:"boolean"},description:""}}};const ue=D(["absolute","bg-white","border","duration-100","ease-in-out","flex-col","mt-1","overflow-hidden","rounded-md","shadow-2xs","top-full","transition-all","w-full","z-10","max-h-[185px]","overflow-y-auto","border-gray-200","text-zinc-700","data-[state=open]:block","data-[state=closed]:hidden"]),Z=t.forwardRef(({className:o,isLoading:l,itemClassName:n,name:a,options:r,searchable:u=!1,wrapperInputRef:d,wrapperRef:i},s)=>{const c=t.useRef(null),{isOpen:m,searchTerm:p}=q();t.useImperativeHandle(s,()=>c.current,[c]),ie({ulRef:c,wrapperRef:i,wrapperInputRef:d});const g=u?r.filter(y=>{const S=p.toLowerCase();return(typeof y.label=="string"?y.label.toLowerCase():"").includes(S)}):r,b=g.length===0;return e.jsx("ul",{ref:c,title:a,role:"listbox",className:x(ue({className:o})),"data-state":m?"open":"closed",children:l?e.jsx(L,{className:n,isClickable:!1,value:"Loading...",label:"Loading..."}):b?e.jsx(L,{className:n,isClickable:!1,value:"No options",label:"No options"}):g.map(y=>e.jsx(L,{className:n,isClickable:!0,...y},y.value))})});Z.__docgenInfo={description:"",methods:[],displayName:"List",props:{className:{required:!1,tsType:{name:"string"},description:""},itemClassName:{required:!1,tsType:{name:"string"},description:""},isLoading:{required:!0,tsType:{name:"boolean"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},wrapperInputRef:{required:!0,tsType:{name:"RefObject",elements:[{name:"union",raw:"ComponentRef<'div'> | null",elements:[{name:"ComponentRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentRef<'div'>"},{name:"null"}]}],raw:"RefObject<ComponentRef<'div'> | null>"},description:""},wrapperRef:{required:!0,tsType:{name:"RefObject",elements:[{name:"union",raw:"ComponentRef<'div'> | null",elements:[{name:"ComponentRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentRef<'div'>"},{name:"null"}]}],raw:"RefObject<ComponentRef<'div'> | null>"},description:""}}};const de=D(["border","cursor-pointer","ease-in-out","flex","items-center","justify-between","px-3","py-1","relative","rounded-md","transition-all","w-full","outline-none","h-9","border-gray-200","aria-expanded:border-kubefirst-primary","aria-expanded:text-kubefirst-secondary","focus-visible:bg-zinc-50","colony:aria-expanded:border-red-400","colony:aria-expanded:text-red-400","civo:aria-expanded:border-civo-primary","civo:aria-expanded:text-civo-primary"]),pe=D(["mb-1","cursor-pointer","text-[14px]","leading-[20px]","tracking-[0.1px]"]),me=({ulRef:o})=>{const l=t.useRef(null),n=t.useRef(null),{isOpen:a,toggleOpen:r}=q();t.useEffect(()=>{var m;const i=new AbortController,s=p=>{p.key==="Escape"&&r(!1)},c=p=>{var g;(g=l.current)!=null&&g.contains(p.target)||r(!1)};return document.addEventListener("keydown",s,{signal:i.signal}),document.addEventListener("mousedown",c,{signal:i.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&r(!1)},{signal:i.signal}),(m=n.current)==null||m.addEventListener("focus",()=>{r(!0)},{signal:i.signal}),()=>{i.abort()}},[r,l]),t.useEffect(()=>{var s;const i=new AbortController;return(s=n.current)==null||s.addEventListener("keydown",c=>{var m;if(c.key==="ArrowDown"){const p=(m=o.current)==null?void 0:m.querySelector("li");p&&p.focus()}},{signal:i.signal}),()=>{i.abort()}},[n,o]);const u=t.useCallback(()=>r(!0),[r]),d=t.useCallback(()=>{a||r(!1)},[a,r]);return{wrapperRef:l,wrapperInputRef:n,handleOpen:u,handleOpenIfClosed:d}},ee=t.forwardRef(({className:o,defaultValue:l,iconClassName:n,isLoading:a,label:r,labelClassName:u,listClassName:d,listItemClassName:i,name:s,options:c,placeholder:m,required:p,searchable:g=!1,theme:b,wrapperClassName:y},S)=>{const E=t.useId(),C=t.useRef(null),M=t.useRef(null),{wrapperRef:N,wrapperInputRef:_,handleOpen:P,handleOpenIfClosed:te}=me({ulRef:M}),{isOpen:V,toggleOpen:z,value:h,setValue:K,setSearchTerm:A,searchTerm:ae}=q(),T=s?`${E}-${s}`:E;t.useImperativeHandle(S,()=>C.current,[C]);const f=t.useMemo(()=>c.find(({value:v})=>v===h),[c,h]);t.useEffect(()=>{C.current&&(C.current.value=h?f==null?void 0:f.value:"")},[f,h]),t.useEffect(()=>{if(l&&!h){const v=c&&c.find(w=>w.value===l);v&&K(v.value)}},[l,c,K,h]),t.useEffect(()=>{var w;const v=new AbortController;return(w=N.current)==null||w.addEventListener("focusout",j=>{var B;const I=j.relatedTarget;(!I||!((B=N.current)!=null&&B.contains(I)))&&(z(!1),A(""))}),()=>{v.abort()}},[z,N,A]);const re=v=>{const w=v.target.value;A(w);const j=c.find(I=>I.value.toLocaleLowerCase()===w.toLocaleLowerCase());j&&K(j.value)};return e.jsxs("div",{ref:N,className:x("flex flex-col w-full relative",y),"data-theme":b,children:[r?e.jsxs("label",{id:T,className:x(pe({className:u})),htmlFor:T,onClick:te,children:[r,p?e.jsx("span",{className:"text-red-500 ml-1",children:"*"}):null]}):null,e.jsxs("div",{ref:_,id:T,className:x(de({className:o})),role:"combobox",onClick:P,"aria-expanded":V,tabIndex:0,"aria-labelledby":T,children:[e.jsxs("div",{className:"flex gap-3 items-center flex-1",children:[(f==null?void 0:f.leftIcon)&&e.jsx("span",{className:"w-4 h-4 flex justify-center items-center",children:f.leftIcon}),g?e.jsx("input",{type:"text",value:V?ae:(f==null?void 0:f.label)||"",onChange:re,placeholder:m,className:"flex-1 bg-transparent border-none outline-none text-zinc-700 text-base",onClick:v=>{v.stopPropagation(),P()},"aria-label":r||m,"aria-labelledby":T}):e.jsx(Q,{variant:"body2",className:"flex-1 text-zinc-700 text-base",children:(f==null?void 0:f.label)||m})]}),a?e.jsx(se,{className:"w-4 h-4 text-zinc-500"}):e.jsx(oe,{"data-state":V?"open":"closed",className:x("w-4 h-4 text-zinc-500 transition-all duration-50 data-[state=open]:rotate-0 data-[state=closed]:rotate-180",n)})]}),e.jsx("input",{ref:C,type:"text",name:s,className:"hidden","aria-hidden":"true",required:p}),e.jsx(Z,{ref:M,className:d,itemClassName:i,name:s,wrapperRef:N,wrapperInputRef:_,options:c,isLoading:!!a,searchable:g})]})});ee.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{className:{required:!1,tsType:{name:"string"},description:""},iconClassName:{required:!1,tsType:{name:"string"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},listClassName:{required:!1,tsType:{name:"string"},description:""},listItemClassName:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string | ReactNode;
  leftIcon?: ReactNode | string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}],required:!0}},{key:"leftIcon",value:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}],required:!1}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""},value:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: { target: { value: string; name: string } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string; name: string } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string; name: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]},required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}},composes:["VariantProps","Omit"]};const k=t.forwardRef(({onChange:o,value:l,name:n,...a},r)=>e.jsx(Y,{onChange:o,value:l,name:n,children:e.jsx(ee,{name:n,ref:r,...a})}));k.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{className:{required:!1,tsType:{name:"string"},description:""},iconClassName:{required:!1,tsType:{name:"string"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},listClassName:{required:!1,tsType:{name:"string"},description:""},listItemClassName:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string | ReactNode;
  leftIcon?: ReactNode | string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}],required:!0}},{key:"leftIcon",value:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}],required:!1}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'colony'
| 'civo'
| 'kubefirst-dark'
| 'colony-dark'
| 'civo-dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'colony'"},{name:"literal",value:"'civo'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'colony-dark'"},{name:"literal",value:"'civo-dark'"},{name:"undefined"}]},description:""},value:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: { target: { value: string; name: string } }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ target: { value: string; name: string } }",signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:"{ value: string; name: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]},required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}},composes:["VariantProps","Omit"]};const Se={title:"In Review/Dropdown",component:k},R={args:{options:[{label:"Talos",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",required:!1,labelClassName:"",isLoading:!1,name:"dropdown",searchable:!0},render:o=>{const[l,n]=t.useState(),[a,r]=t.useState(),[u,d]=t.useState();return e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-6",children:[e.jsx(k,{label:"Dropdown with Kubefirst theme",onChange:({target:{value:i}})=>n(i),value:l,...o}),e.jsx(k,{label:"Dropdown with Colony theme",onChange:({target:{value:i}})=>r(i),theme:"colony",value:a,...o}),e.jsx(k,{label:"Dropdown with Civo theme",onChange:({target:{value:i}})=>d(i),theme:"civo",value:u,...o})]})}},O={render:()=>{const[o,l]=t.useState(!1),[n,a]=t.useState();return e.jsxs("div",{children:[e.jsx(le,{onClick:()=>l(!0),theme:"kubefirst",children:"Open Modal with Dropdown"}),e.jsx(U,{isOpen:o,onClose:()=>l(!1),theme:"kubefirst",className:"min-h-[100px]",children:e.jsx(U.Body,{children:e.jsx("div",{className:"p-6",children:e.jsx(k,{label:"Choose your distribution",options:[{label:"Talos",value:"talos",leftIcon:e.jsx("img",{src:"./talos.svg",alt:"Talos Logo"})},{label:"K3S",value:"k3s",leftIcon:e.jsx("img",{src:"./k3s.svg",alt:"K3S Logo"})}],placeholder:"Select an option...",onChange:({target:{value:r}})=>{console.log("value",r),a(r)},value:n,theme:"kubefirst",name:"modal-dropdown"})})})})]})}};var $,F,H;R.parameters={...R.parameters,docs:{...($=R.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    name: 'dropdown',
    searchable: true
  },
  render: args => {
    const [value1, setValue1] = useState<string>();
    const [value2, setValue2] = useState<string>();
    const [value3, setValue3] = useState<string>();
    return <div className="max-w-[350px] flex flex-col gap-6">
        <DropdownComponent label="Dropdown with Kubefirst theme" onChange={({
        target: {
          value
        }
      }) => setValue1(value)} value={value1} {...args} />

        <DropdownComponent label="Dropdown with Colony theme" onChange={({
        target: {
          value
        }
      }) => setValue2(value)} theme="colony" value={value2} {...args} />

        <DropdownComponent label="Dropdown with Civo theme" onChange={({
        target: {
          value
        }
      }) => setValue3(value)} theme="civo" value={value3} {...args} />
      </div>;
  }
}`,...(H=(F=R.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var W,G,J;O.parameters={...O.parameters,docs:{...(W=O.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
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
}`,...(J=(G=O.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Ee=["Dropdown","DropdownInModal"];export{R as Dropdown,O as DropdownInModal,Ee as __namedExportsOrder,Se as default};
