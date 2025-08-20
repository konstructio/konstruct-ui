import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-B65xdvOA.js";import{c as K,a as U,b as h}from"./index-CCLCWJ1v.js";import{c as xe}from"./index-CB1iFdkS.js";import{u as he}from"./index-W656D1qK.js";import{u as q}from"./index-C9ZG7AVc.js";import{P as C}from"./index-C3Nu-GY8.js";import{u as Te}from"./index-CwzuVqMA.js";import{u as Y}from"./index-B4dRu9ww.js";import{P as ye}from"./index-BIYBs4FF.js";import{c as F,a as j}from"./index-Cr-WShRT.js";import{T as Ne}from"./Typography-BO5z0O4G.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B2N2wo0g.js";import"./index-BqoztgQr.js";var V="rovingFocusGroup.onEntryFocus",Ce={bubbles:!1,cancelable:!0},I="RovingFocusGroup",[D,H,je]=xe(I),[Ie,J]=K(I,[je]),[we,Ae]=Ie(I),W=c.forwardRef((t,n)=>e.jsx(D.Provider,{scope:t.__scopeRovingFocusGroup,children:e.jsx(D.Slot,{scope:t.__scopeRovingFocusGroup,children:e.jsx(Re,{...t,ref:n})})}));W.displayName=I;var Re=c.forwardRef((t,n)=>{const{__scopeRovingFocusGroup:s,orientation:a,loop:r=!1,dir:u,currentTabStopId:i,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:x,onEntryFocus:f,preventScrollOnEntryFocus:o=!1,...l}=t,v=c.useRef(null),w=he(n,v),A=Y(u),[R,d]=U({prop:i,defaultProp:p??null,onChange:x,caller:I}),[T,E]=c.useState(!1),b=Te(f),y=H(s),P=c.useRef(!1),[pe,G]=c.useState(0);return c.useEffect(()=>{const m=v.current;if(m)return m.addEventListener(V,b),()=>m.removeEventListener(V,b)},[b]),e.jsx(we,{scope:s,orientation:a,dir:A,loop:r,currentTabStopId:R,onItemFocus:c.useCallback(m=>d(m),[d]),onItemShiftTab:c.useCallback(()=>E(!0),[]),onFocusableItemAdd:c.useCallback(()=>G(m=>m+1),[]),onFocusableItemRemove:c.useCallback(()=>G(m=>m-1),[]),children:e.jsx(C.div,{tabIndex:T||pe===0?-1:0,"data-orientation":a,...l,ref:w,style:{outline:"none",...t.style},onMouseDown:h(t.onMouseDown,()=>{P.current=!0}),onFocus:h(t.onFocus,m=>{const fe=!P.current;if(m.target===m.currentTarget&&fe&&!T){const k=new CustomEvent(V,Ce);if(m.currentTarget.dispatchEvent(k),!k.defaultPrevented){const M=y().filter(N=>N.focusable),ve=M.find(N=>N.active),be=M.find(N=>N.id===R),ge=[ve,be,...M].filter(Boolean).map(N=>N.ref.current);Z(ge,o)}}P.current=!1}),onBlur:h(t.onBlur,()=>E(!1))})})}),Q="RovingFocusGroupItem",X=c.forwardRef((t,n)=>{const{__scopeRovingFocusGroup:s,focusable:a=!0,active:r=!1,tabStopId:u,children:i,...p}=t,x=q(),f=u||x,o=Ae(Q,s),l=o.currentTabStopId===f,v=H(s),{onFocusableItemAdd:w,onFocusableItemRemove:A,currentTabStopId:R}=o;return c.useEffect(()=>{if(a)return w(),()=>A()},[a,w,A]),e.jsx(D.ItemSlot,{scope:s,id:f,focusable:a,active:r,children:e.jsx(C.span,{tabIndex:l?0:-1,"data-orientation":o.orientation,...p,ref:n,onMouseDown:h(t.onMouseDown,d=>{a?o.onItemFocus(f):d.preventDefault()}),onFocus:h(t.onFocus,()=>o.onItemFocus(f)),onKeyDown:h(t.onKeyDown,d=>{if(d.key==="Tab"&&d.shiftKey){o.onItemShiftTab();return}if(d.target!==d.currentTarget)return;const T=_e(d,o.orientation,o.dir);if(T!==void 0){if(d.metaKey||d.ctrlKey||d.altKey||d.shiftKey)return;d.preventDefault();let b=v().filter(y=>y.focusable).map(y=>y.ref.current);if(T==="last")b.reverse();else if(T==="prev"||T==="next"){T==="prev"&&b.reverse();const y=b.indexOf(d.currentTarget);b=o.loop?Ee(b,y+1):b.slice(y+1)}setTimeout(()=>Z(b))}}),children:typeof i=="function"?i({isCurrentTabStop:l,hasTabStop:R!=null}):i})})});X.displayName=Q;var Se={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Fe(t,n){return n!=="rtl"?t:t==="ArrowLeft"?"ArrowRight":t==="ArrowRight"?"ArrowLeft":t}function _e(t,n,s){const a=Fe(t.key,s);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return Se[a]}function Z(t,n=!1){const s=document.activeElement;for(const a of t)if(a===s||(a.focus({preventScroll:n}),document.activeElement!==s))return}function Ee(t,n){return t.map((s,a)=>t[(n+a)%t.length])}var Pe=W,Me=X,_="Tabs",[Ve,rt]=K(_,[J]),ee=J(),[De,L]=Ve(_),te=c.forwardRef((t,n)=>{const{__scopeTabs:s,value:a,onValueChange:r,defaultValue:u,orientation:i="horizontal",dir:p,activationMode:x="automatic",...f}=t,o=Y(p),[l,v]=U({prop:a,onChange:r,defaultProp:u??"",caller:_});return e.jsx(De,{scope:s,baseId:q(),value:l,onValueChange:v,orientation:i,dir:o,activationMode:x,children:e.jsx(C.div,{dir:o,"data-orientation":i,...f,ref:n})})});te.displayName=_;var ae="TabsList",ne=c.forwardRef((t,n)=>{const{__scopeTabs:s,loop:a=!0,...r}=t,u=L(ae,s),i=ee(s);return e.jsx(Pe,{asChild:!0,...i,orientation:u.orientation,dir:u.dir,loop:a,children:e.jsx(C.div,{role:"tablist","aria-orientation":u.orientation,...r,ref:n})})});ne.displayName=ae;var se="TabsTrigger",oe=c.forwardRef((t,n)=>{const{__scopeTabs:s,value:a,disabled:r=!1,...u}=t,i=L(se,s),p=ee(s),x=ce(i.baseId,a),f=le(i.baseId,a),o=a===i.value;return e.jsx(Me,{asChild:!0,...p,focusable:!r,active:o,children:e.jsx(C.button,{type:"button",role:"tab","aria-selected":o,"aria-controls":f,"data-state":o?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:x,...u,ref:n,onMouseDown:h(t.onMouseDown,l=>{!r&&l.button===0&&l.ctrlKey===!1?i.onValueChange(a):l.preventDefault()}),onKeyDown:h(t.onKeyDown,l=>{[" ","Enter"].includes(l.key)&&i.onValueChange(a)}),onFocus:h(t.onFocus,()=>{const l=i.activationMode!=="manual";!o&&!r&&l&&i.onValueChange(a)})})})});oe.displayName=se;var re="TabsContent",ie=c.forwardRef((t,n)=>{const{__scopeTabs:s,value:a,forceMount:r,children:u,...i}=t,p=L(re,s),x=ce(p.baseId,a),f=le(p.baseId,a),o=a===p.value,l=c.useRef(o);return c.useEffect(()=>{const v=requestAnimationFrame(()=>l.current=!1);return()=>cancelAnimationFrame(v)},[]),e.jsx(ye,{present:r||o,children:({present:v})=>e.jsx(C.div,{"data-state":o?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":x,hidden:!v,id:f,tabIndex:0,...i,ref:n,style:{...t.style,animationDuration:l.current?"0s":void 0},children:v&&u})})});ie.displayName=re;function ce(t,n){return`${t}-trigger-${n}`}function le(t,n){return`${t}-content-${n}`}var Le=te,Ge=ne,ke=oe,Oe=ie;const ze=F([""],{variants:{variant:{horizontal:"",vertical:"flex gap-6"}},defaultVariants:{variant:"horizontal"}}),$e=F([""],{variants:{variant:{default:""}},defaultVariants:{variant:"default"}}),O=F(["flex"],{variants:{variant:{default:"flex gap-6",horizontal:"",vertical:"flex-col min-w-[132px] h-full items-center"}},defaultVariants:{variant:"default"}}),Be=F(["cursor-pointer","h-[27px]","w-fit"],{variants:{variant:{default:"",active:["text-zinc-700","font-[600]","civo:border-b-2","civo:border-civo-primary","kubefirst:border-b-2","kubefirst:border-kubefirst-primary","colony:border-b-2","colony:border-colony-primary"],inactive:"text-slate-500 font-[600]"}},defaultVariants:{variant:"default"}}),de=({children:t,className:n,...s})=>e.jsx(Oe,{...s,className:j($e({variant:"default",className:n})),children:t});de.__docgenInfo={description:"",methods:[],displayName:"Content"};const ue=({children:t,className:n,orientation:s,...a})=>e.jsx("div",{className:j(O({variant:"default"})),children:e.jsx(Ge,{className:j(O({variant:s,className:n})),...a,children:t})});ue.__docgenInfo={description:"",methods:[],displayName:"List",props:{orientation:{required:!0,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""}},composes:["PropsWithChildren"]};const me=({tab:t,label:n,isActive:s,className:a})=>e.jsx(ke,{value:t,children:e.jsx(Ne,{variant:"body2",className:j(Be({variant:s?"active":"inactive",className:a})),children:n})});me.__docgenInfo={description:"",methods:[],displayName:"Trigger",props:{tab:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""}},composes:["VariantProps"]};const g=({children:t,theme:n,className:s,orientation:a,...r})=>e.jsx(Le,{...r,"data-theme":n,"data-orientation":a,"aria-orientation":a,className:j(ze({variant:a,className:s})),children:t});g.List=ue;g.Trigger=me;g.Content=de;g.__docgenInfo={description:"",methods:[{name:"List",docblock:null,modifiers:["static"],params:[{name:`{
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
}: ReactTabs.TabsContentProps`,optional:!1,type:{name:"ReactTabs.TabsContentProps",alias:"ReactTabs.TabsContentProps"}}],returns:null}],displayName:"Tabs"};const it={title:"In Review/Tabs",component:g,args:{orientation:"vertical"}},S={render:t=>{const[n,s]=c.useState("tab1"),a=r=>{console.log("value",r),s(r)};return e.jsxs(g,{onValueChange:a,value:n,theme:"civo",orientation:"horizontal",...t,children:[e.jsxs(g.List,{className:"flex gap-6","aria-label":"Manage your account",orientation:t.orientation,children:[e.jsx(g.Trigger,{tab:"tab1",label:"Account",isActive:n==="tab1"}),e.jsx(g.Trigger,{tab:"tab2",label:"Billing",isActive:n==="tab2"})]}),e.jsx(g.Content,{value:"tab1",children:e.jsxs("div",{className:t.orientation==="horizontal"?"space-y-4 mt-6":"",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Account Settings"}),e.jsx("div",{className:"rounded-lg border p-4",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Email"}),e.jsx("p",{className:"font-medium",children:"user@example.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Account Type"}),e.jsx("p",{className:"font-medium",children:"Personal Account"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Member Since"}),e.jsx("p",{className:"font-medium",children:"January 15, 2024"})]})]})})]})}),e.jsx(g.Content,{value:"tab2",children:e.jsxs("div",{className:t.orientation==="horizontal"?"space-y-4 mt-6":"",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Billing Overview"}),e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Current Plan"}),e.jsx("p",{className:"font-medium",children:"Pro Plan"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Next Billing Date"}),e.jsx("p",{className:"font-medium",children:"May 1, 2024"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Monthly Subscription"}),e.jsx("span",{children:"$29.99"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Additional Users (2)"}),e.jsx("span",{children:"$10.00"})]}),e.jsx("div",{className:"border-t pt-2 mt-2",children:e.jsxs("div",{className:"flex justify-between font-semibold",children:[e.jsx("span",{children:"Total"}),e.jsx("span",{children:"$39.99"})]})})]})]})]})})]})}};var z,$,B;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(B=($=S.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const ct=["Tabs"];export{S as Tabs,ct as __namedExportsOrder,it as default};
