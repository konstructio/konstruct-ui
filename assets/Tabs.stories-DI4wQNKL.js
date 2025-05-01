import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-CDlOlYQx.js";import{c as W,a as q,b as N,u as G}from"./index-C1roXhr_.js";import{c as ye}from"./index-COL7JOo3.js";import{u as Y}from"./index-8pt59J0f.js";import{u as H}from"./index-Cd1lzb2-.js";import{P as A}from"./index-DQiZZjoQ.js";import{u as Ce}from"./index-BxP5C9qI.js";import{u as J}from"./index-FyCyz-nb.js";import{c as F,a as w}from"./index-C5MVsT28.js";import{T as je}from"./Typography-CFiEocFm.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";var D="rovingFocusGroup.onEntryFocus",Ie={bubbles:!1,cancelable:!0},R="RovingFocusGroup",[L,Q,Ae]=ye(R),[we,X]=W(R,[Ae]),[Re,Se]=we(R),Z=i.forwardRef((e,t)=>n.jsx(L.Provider,{scope:e.__scopeRovingFocusGroup,children:n.jsx(L.Slot,{scope:e.__scopeRovingFocusGroup,children:n.jsx(Ee,{...e,ref:t})})}));Z.displayName=R;var Ee=i.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:o,orientation:a,loop:r=!1,dir:d,currentTabStopId:l,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:m,onEntryFocus:c,preventScrollOnEntryFocus:s=!1,...u}=e,v=i.useRef(null),g=Y(t,v),j=J(d),[I,f]=q({prop:l,defaultProp:p??null,onChange:m,caller:R}),[T,_]=i.useState(!1),x=Ce(c),y=Q(o),M=i.useRef(!1),[ge,U]=i.useState(0);return i.useEffect(()=>{const b=v.current;if(b)return b.addEventListener(D,x),()=>b.removeEventListener(D,x)},[x]),n.jsx(Re,{scope:o,orientation:a,dir:j,loop:r,currentTabStopId:I,onItemFocus:i.useCallback(b=>f(b),[f]),onItemShiftTab:i.useCallback(()=>_(!0),[]),onFocusableItemAdd:i.useCallback(()=>U(b=>b+1),[]),onFocusableItemRemove:i.useCallback(()=>U(b=>b-1),[]),children:n.jsx(A.div,{tabIndex:T||ge===0?-1:0,"data-orientation":a,...u,ref:g,style:{outline:"none",...e.style},onMouseDown:N(e.onMouseDown,()=>{M.current=!0}),onFocus:N(e.onFocus,b=>{const xe=!M.current;if(b.target===b.currentTarget&&xe&&!T){const k=new CustomEvent(D,Ie);if(b.currentTarget.dispatchEvent(k),!k.defaultPrevented){const O=y().filter(C=>C.focusable),he=O.find(C=>C.active),Ne=O.find(C=>C.id===I),Te=[he,Ne,...O].filter(Boolean).map(C=>C.ref.current);ne(Te,s)}}M.current=!1}),onBlur:N(e.onBlur,()=>_(!1))})})}),ee="RovingFocusGroupItem",te=i.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:o,focusable:a=!0,active:r=!1,tabStopId:d,children:l,...p}=e,m=H(),c=d||m,s=Se(ee,o),u=s.currentTabStopId===c,v=Q(o),{onFocusableItemAdd:g,onFocusableItemRemove:j,currentTabStopId:I}=s;return i.useEffect(()=>{if(a)return g(),()=>j()},[a,g,j]),n.jsx(L.ItemSlot,{scope:o,id:c,focusable:a,active:r,children:n.jsx(A.span,{tabIndex:u?0:-1,"data-orientation":s.orientation,...p,ref:t,onMouseDown:N(e.onMouseDown,f=>{a?s.onItemFocus(c):f.preventDefault()}),onFocus:N(e.onFocus,()=>s.onItemFocus(c)),onKeyDown:N(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){s.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const T=_e(f,s.orientation,s.dir);if(T!==void 0){if(f.metaKey||f.ctrlKey||f.altKey||f.shiftKey)return;f.preventDefault();let x=v().filter(y=>y.focusable).map(y=>y.ref.current);if(T==="last")x.reverse();else if(T==="prev"||T==="next"){T==="prev"&&x.reverse();const y=x.indexOf(f.currentTarget);x=s.loop?Me(x,y+1):x.slice(y+1)}setTimeout(()=>ne(x))}}),children:typeof l=="function"?l({isCurrentTabStop:u,hasTabStop:I!=null}):l})})});te.displayName=ee;var Fe={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Pe(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function _e(e,t,o){const a=Pe(e.key,o);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return Fe[a]}function ne(e,t=!1){const o=document.activeElement;for(const a of e)if(a===o||(a.focus({preventScroll:t}),document.activeElement!==o))return}function Me(e,t){return e.map((o,a)=>e[(t+a)%e.length])}var Oe=Z,De=te;function Le(e,t){return i.useReducer((o,a)=>t[o][a]??o,e)}var ae=e=>{const{present:t,children:o}=e,a=Ve(t),r=typeof o=="function"?o({present:a.isPresent}):i.Children.only(o),d=Y(a.ref,Ue(r));return typeof o=="function"||a.isPresent?i.cloneElement(r,{ref:d}):null};ae.displayName="Presence";function Ve(e){const[t,o]=i.useState(),a=i.useRef(null),r=i.useRef(e),d=i.useRef("none"),l=e?"mounted":"unmounted",[p,m]=Le(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const c=S(a.current);d.current=p==="mounted"?c:"none"},[p]),G(()=>{const c=a.current,s=r.current;if(s!==e){const v=d.current,g=S(c);e?m("MOUNT"):g==="none"||(c==null?void 0:c.display)==="none"?m("UNMOUNT"):m(s&&v!==g?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,m]),G(()=>{if(t){let c;const s=t.ownerDocument.defaultView??window,u=g=>{const I=S(a.current).includes(g.animationName);if(g.target===t&&I&&(m("ANIMATION_END"),!r.current)){const f=t.style.animationFillMode;t.style.animationFillMode="forwards",c=s.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=f)})}},v=g=>{g.target===t&&(d.current=S(a.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{s.clearTimeout(c),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else m("ANIMATION_END")},[t,m]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:i.useCallback(c=>{a.current=c?getComputedStyle(c):null,o(c)},[])}}function S(e){return(e==null?void 0:e.animationName)||"none"}function Ue(e){var a,r;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=t&&"isReactWarning"in t&&t.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var P="Tabs",[ke,lt]=W(P,[X]),oe=X(),[Ge,V]=ke(P),re=i.forwardRef((e,t)=>{const{__scopeTabs:o,value:a,onValueChange:r,defaultValue:d,orientation:l="horizontal",dir:p,activationMode:m="automatic",...c}=e,s=J(p),[u,v]=q({prop:a,onChange:r,defaultProp:d??"",caller:P});return n.jsx(Ge,{scope:o,baseId:H(),value:u,onValueChange:v,orientation:l,dir:s,activationMode:m,children:n.jsx(A.div,{dir:s,"data-orientation":l,...c,ref:t})})});re.displayName=P;var se="TabsList",ie=i.forwardRef((e,t)=>{const{__scopeTabs:o,loop:a=!0,...r}=e,d=V(se,o),l=oe(o);return n.jsx(Oe,{asChild:!0,...l,orientation:d.orientation,dir:d.dir,loop:a,children:n.jsx(A.div,{role:"tablist","aria-orientation":d.orientation,...r,ref:t})})});ie.displayName=se;var ce="TabsTrigger",le=i.forwardRef((e,t)=>{const{__scopeTabs:o,value:a,disabled:r=!1,...d}=e,l=V(ce,o),p=oe(o),m=me(l.baseId,a),c=fe(l.baseId,a),s=a===l.value;return n.jsx(De,{asChild:!0,...p,focusable:!r,active:s,children:n.jsx(A.button,{type:"button",role:"tab","aria-selected":s,"aria-controls":c,"data-state":s?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:m,...d,ref:t,onMouseDown:N(e.onMouseDown,u=>{!r&&u.button===0&&u.ctrlKey===!1?l.onValueChange(a):u.preventDefault()}),onKeyDown:N(e.onKeyDown,u=>{[" ","Enter"].includes(u.key)&&l.onValueChange(a)}),onFocus:N(e.onFocus,()=>{const u=l.activationMode!=="manual";!s&&!r&&u&&l.onValueChange(a)})})})});le.displayName=ce;var ue="TabsContent",de=i.forwardRef((e,t)=>{const{__scopeTabs:o,value:a,forceMount:r,children:d,...l}=e,p=V(ue,o),m=me(p.baseId,a),c=fe(p.baseId,a),s=a===p.value,u=i.useRef(s);return i.useEffect(()=>{const v=requestAnimationFrame(()=>u.current=!1);return()=>cancelAnimationFrame(v)},[]),n.jsx(ae,{present:r||s,children:({present:v})=>n.jsx(A.div,{"data-state":s?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":m,hidden:!v,id:c,tabIndex:0,...l,ref:t,style:{...e.style,animationDuration:u.current?"0s":void 0},children:v&&d})})});de.displayName=ue;function me(e,t){return`${e}-trigger-${t}`}function fe(e,t){return`${e}-content-${t}`}var ze=re,$e=ie,Be=le,Ke=de;const We=F([""],{variants:{variant:{horizontal:"",vertical:"flex gap-6"}},defaultVariants:{variant:"horizontal"}}),qe=F([""],{variants:{variant:{default:""}},defaultVariants:{variant:"default"}}),z=F(["flex"],{variants:{variant:{default:"flex gap-6",horizontal:"",vertical:"flex-col min-w-[132px] h-full items-center"}},defaultVariants:{variant:"default"}}),Ye=F(["cursor-pointer","h-[27px]","w-fit"],{variants:{variant:{default:"",active:["text-zinc-700","font-[600]","civo:border-b-2","civo:border-civo-primary","kubefirst:border-b-2","kubefirst:border-kubefirst-primary","colony:border-b-2","colony:border-colony-primary"],inactive:"text-slate-500 font-[600]"}},defaultVariants:{variant:"default"}}),pe=({children:e,className:t,orientation:o,...a})=>n.jsx("div",{className:w(z({variant:"default"})),children:n.jsx($e,{className:w(z({variant:o,className:t})),...a,children:e})});pe.__docgenInfo={description:"",methods:[],displayName:"List",props:{orientation:{required:!0,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""}},composes:["PropsWithChildren"]};const ve=({tab:e,label:t,isActive:o,className:a})=>n.jsx(Be,{value:e,children:n.jsx(je,{variant:"body2",className:w(Ye({variant:o?"active":"inactive",className:a})),children:t})});ve.__docgenInfo={description:"",methods:[],displayName:"Trigger",props:{tab:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""}},composes:["VariantProps"]};const be=({children:e,className:t,...o})=>n.jsx(Ke,{...o,className:w(qe({variant:"default",className:t})),children:e});be.__docgenInfo={description:"",methods:[],displayName:"Content"};const h=({children:e,theme:t,className:o,orientation:a,...r})=>n.jsx(ze,{...r,"data-theme":t,"data-orientation":a,"aria-orientation":a,className:w(We({variant:a,className:o})),children:e});h.List=pe;h.Trigger=ve;h.Content=be;h.__docgenInfo={description:"",methods:[{name:"List",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  orientation,
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:`{
  tab,
  label,
  isActive,
  className,
}`,optional:!1,type:null}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}: ReactTabs.TabsContentProps`,optional:!1,type:{name:"ReactTabs.TabsContentProps",alias:"ReactTabs.TabsContentProps"}}],returns:null}],displayName:"Tabs"};const ut={title:"In Review/Tabs",component:h,args:{orientation:"vertical"}},E={render:e=>{const[t,o]=i.useState("tab1"),a=r=>{console.log("value",r),o(r)};return n.jsxs(h,{onValueChange:a,value:t,theme:"civo",orientation:"horizontal",...e,children:[n.jsxs(h.List,{className:"flex gap-6","aria-label":"Manage your account",orientation:e.orientation,children:[n.jsx(h.Trigger,{tab:"tab1",label:"Account",isActive:t==="tab1"}),n.jsx(h.Trigger,{tab:"tab2",label:"Billing",isActive:t==="tab2"})]}),n.jsx(h.Content,{value:"tab1",children:n.jsxs("div",{className:e.orientation==="horizontal"?"space-y-4 mt-6":"",children:[n.jsx("h3",{className:"text-lg font-semibold",children:"Account Settings"}),n.jsx("div",{className:"rounded-lg border p-4",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-sm text-gray-500",children:"Email"}),n.jsx("p",{className:"font-medium",children:"user@example.com"})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm text-gray-500",children:"Account Type"}),n.jsx("p",{className:"font-medium",children:"Personal Account"})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm text-gray-500",children:"Member Since"}),n.jsx("p",{className:"font-medium",children:"January 15, 2024"})]})]})})]})}),n.jsx(h.Content,{value:"tab2",children:n.jsxs("div",{className:e.orientation==="horizontal"?"space-y-4 mt-6":"",children:[n.jsx("h3",{className:"text-lg font-semibold",children:"Billing Overview"}),n.jsxs("div",{className:"rounded-lg border p-4",children:[n.jsxs("div",{className:"flex justify-between mb-4",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-sm text-gray-500",children:"Current Plan"}),n.jsx("p",{className:"font-medium",children:"Pro Plan"})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm text-gray-500",children:"Next Billing Date"}),n.jsx("p",{className:"font-medium",children:"May 1, 2024"})]})]}),n.jsxs("div",{className:"space-y-2",children:[n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{children:"Monthly Subscription"}),n.jsx("span",{children:"$29.99"})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{children:"Additional Users (2)"}),n.jsx("span",{children:"$10.00"})]}),n.jsx("div",{className:"border-t pt-2 mt-2",children:n.jsxs("div",{className:"flex justify-between font-semibold",children:[n.jsx("span",{children:"Total"}),n.jsx("span",{children:"$39.99"})]})})]})]})]})})]})}};var $,B,K;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const [selectedTab, setSelectedTab] = useState('tab1');
    const handleValueChange = (value: string) => {
      console.log('value', value);
      setSelectedTab(value);
    };
    return <TabsComponent onValueChange={handleValueChange} value={selectedTab} theme="civo" orientation="horizontal" {...args}>
        <TabsComponent.List className="flex gap-6" aria-label="Manage your account" orientation={args.orientation as 'horizontal' | 'vertical'}>
          <TabsComponent.Trigger tab="tab1" label="Account" isActive={selectedTab === 'tab1'} />
          <TabsComponent.Trigger tab="tab2" label="Billing" isActive={selectedTab === 'tab2'} />
        </TabsComponent.List>
        <TabsComponent.Content value="tab1">
          <div className={args.orientation === 'horizontal' ? 'space-y-4 mt-6' : ''}>
            <h3 className="text-lg font-semibold">Account Settings</h3>
            <div className="rounded-lg border p-4">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">user@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Account Type</p>
                  <p className="font-medium">Personal Account</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="font-medium">January 15, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </TabsComponent.Content>
        <TabsComponent.Content value="tab2">
          <div className={args.orientation === 'horizontal' ? 'space-y-4 mt-6' : ''}>
            <h3 className="text-lg font-semibold">Billing Overview</h3>
            <div className="rounded-lg border p-4">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Current Plan</p>
                  <p className="font-medium">Pro Plan</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Next Billing Date</p>
                  <p className="font-medium">May 1, 2024</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monthly Subscription</span>
                  <span>$29.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Additional Users (2)</span>
                  <span>$10.00</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$39.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsComponent.Content>
      </TabsComponent>;
  }
}`,...(K=(B=E.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};const dt=["Tabs"];export{E as Tabs,dt as __namedExportsOrder,ut as default};
