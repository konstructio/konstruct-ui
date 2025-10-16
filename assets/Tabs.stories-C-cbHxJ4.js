import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-B3LTmctl.js";import{c as B,a as U,b as h}from"./index-dgA_AnJp.js";import{c as ve}from"./index-Cn1lplYL.js";import{u as be}from"./index-C_TYLyb5.js";import{u as q}from"./index-_SVTgDcf.js";import{P as j}from"./index-7lZdWwhX.js";import{u as ge}from"./index-8y8gCyoB.js";import{u as Y}from"./index-DYvf2R_5.js";import{P as xe}from"./index-Bd14uH1H.js";import{c as R,a as C}from"./index-CJCZd66Q.js";import{T as he}from"./Typography-DAUFGTs3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLoFZP86.js";import"./index-CMMb4ACv.js";var V="rovingFocusGroup.onEntryFocus",Te={bubbles:!1,cancelable:!0},I="RovingFocusGroup",[D,H,ye]=ve(I),[Ne,J]=B(I,[ye]),[je,Ce]=Ne(I),W=i.forwardRef((t,n)=>e.jsx(D.Provider,{scope:t.__scopeRovingFocusGroup,children:e.jsx(D.Slot,{scope:t.__scopeRovingFocusGroup,children:e.jsx(Ie,{...t,ref:n})})}));W.displayName=I;var Ie=i.forwardRef((t,n)=>{const{__scopeRovingFocusGroup:s,orientation:a,loop:c=!1,dir:d,currentTabStopId:r,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:x,onEntryFocus:f,preventScrollOnEntryFocus:o=!1,...l}=t,b=i.useRef(null),w=be(n,b),S=Y(d),[A,u]=U({prop:r,defaultProp:p??null,onChange:x,caller:I}),[T,E]=i.useState(!1),g=ge(f),y=H(s),P=i.useRef(!1),[de,O]=i.useState(0);return i.useEffect(()=>{const m=b.current;if(m)return m.addEventListener(V,g),()=>m.removeEventListener(V,g)},[g]),e.jsx(je,{scope:s,orientation:a,dir:S,loop:c,currentTabStopId:A,onItemFocus:i.useCallback(m=>u(m),[u]),onItemShiftTab:i.useCallback(()=>E(!0),[]),onFocusableItemAdd:i.useCallback(()=>O(m=>m+1),[]),onFocusableItemRemove:i.useCallback(()=>O(m=>m-1),[]),children:e.jsx(j.div,{tabIndex:T||de===0?-1:0,"data-orientation":a,...l,ref:w,style:{outline:"none",...t.style},onMouseDown:h(t.onMouseDown,()=>{P.current=!0}),onFocus:h(t.onFocus,m=>{const ue=!P.current;if(m.target===m.currentTarget&&ue&&!T){const z=new CustomEvent(V,Te);if(m.currentTarget.dispatchEvent(z),!z.defaultPrevented){const M=y().filter(N=>N.focusable),me=M.find(N=>N.active),pe=M.find(N=>N.id===A),fe=[me,pe,...M].filter(Boolean).map(N=>N.ref.current);Z(fe,o)}}P.current=!1}),onBlur:h(t.onBlur,()=>E(!1))})})}),Q="RovingFocusGroupItem",X=i.forwardRef((t,n)=>{const{__scopeRovingFocusGroup:s,focusable:a=!0,active:c=!1,tabStopId:d,children:r,...p}=t,x=q(),f=d||x,o=Ce(Q,s),l=o.currentTabStopId===f,b=H(s),{onFocusableItemAdd:w,onFocusableItemRemove:S,currentTabStopId:A}=o;return i.useEffect(()=>{if(a)return w(),()=>S()},[a,w,S]),e.jsx(D.ItemSlot,{scope:s,id:f,focusable:a,active:c,children:e.jsx(j.span,{tabIndex:l?0:-1,"data-orientation":o.orientation,...p,ref:n,onMouseDown:h(t.onMouseDown,u=>{a?o.onItemFocus(f):u.preventDefault()}),onFocus:h(t.onFocus,()=>o.onItemFocus(f)),onKeyDown:h(t.onKeyDown,u=>{if(u.key==="Tab"&&u.shiftKey){o.onItemShiftTab();return}if(u.target!==u.currentTarget)return;const T=Ae(u,o.orientation,o.dir);if(T!==void 0){if(u.metaKey||u.ctrlKey||u.altKey||u.shiftKey)return;u.preventDefault();let g=b().filter(y=>y.focusable).map(y=>y.ref.current);if(T==="last")g.reverse();else if(T==="prev"||T==="next"){T==="prev"&&g.reverse();const y=g.indexOf(u.currentTarget);g=o.loop?Fe(g,y+1):g.slice(y+1)}setTimeout(()=>Z(g))}}),children:typeof r=="function"?r({isCurrentTabStop:l,hasTabStop:A!=null}):r})})});X.displayName=Q;var we={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Se(t,n){return n!=="rtl"?t:t==="ArrowLeft"?"ArrowRight":t==="ArrowRight"?"ArrowLeft":t}function Ae(t,n,s){const a=Se(t.key,s);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return we[a]}function Z(t,n=!1){const s=document.activeElement;for(const a of t)if(a===s||(a.focus({preventScroll:n}),document.activeElement!==s))return}function Fe(t,n){return t.map((s,a)=>t[(n+a)%t.length])}var Re=W,_e=X,_="Tabs",[Ee,nt]=B(_,[J]),ee=J(),[Pe,K]=Ee(_),te=i.forwardRef((t,n)=>{const{__scopeTabs:s,value:a,onValueChange:c,defaultValue:d,orientation:r="horizontal",dir:p,activationMode:x="automatic",...f}=t,o=Y(p),[l,b]=U({prop:a,onChange:c,defaultProp:d??"",caller:_});return e.jsx(Pe,{scope:s,baseId:q(),value:l,onValueChange:b,orientation:r,dir:o,activationMode:x,children:e.jsx(j.div,{dir:o,"data-orientation":r,...f,ref:n})})});te.displayName=_;var ae="TabsList",ne=i.forwardRef((t,n)=>{const{__scopeTabs:s,loop:a=!0,...c}=t,d=K(ae,s),r=ee(s);return e.jsx(Re,{asChild:!0,...r,orientation:d.orientation,dir:d.dir,loop:a,children:e.jsx(j.div,{role:"tablist","aria-orientation":d.orientation,...c,ref:n})})});ne.displayName=ae;var se="TabsTrigger",oe=i.forwardRef((t,n)=>{const{__scopeTabs:s,value:a,disabled:c=!1,...d}=t,r=K(se,s),p=ee(s),x=ce(r.baseId,a),f=le(r.baseId,a),o=a===r.value;return e.jsx(_e,{asChild:!0,...p,focusable:!c,active:o,children:e.jsx(j.button,{type:"button",role:"tab","aria-selected":o,"aria-controls":f,"data-state":o?"active":"inactive","data-disabled":c?"":void 0,disabled:c,id:x,...d,ref:n,onMouseDown:h(t.onMouseDown,l=>{!c&&l.button===0&&l.ctrlKey===!1?r.onValueChange(a):l.preventDefault()}),onKeyDown:h(t.onKeyDown,l=>{[" ","Enter"].includes(l.key)&&r.onValueChange(a)}),onFocus:h(t.onFocus,()=>{const l=r.activationMode!=="manual";!o&&!c&&l&&r.onValueChange(a)})})})});oe.displayName=se;var re="TabsContent",ie=i.forwardRef((t,n)=>{const{__scopeTabs:s,value:a,forceMount:c,children:d,...r}=t,p=K(re,s),x=ce(p.baseId,a),f=le(p.baseId,a),o=a===p.value,l=i.useRef(o);return i.useEffect(()=>{const b=requestAnimationFrame(()=>l.current=!1);return()=>cancelAnimationFrame(b)},[]),e.jsx(xe,{present:c||o,children:({present:b})=>e.jsx(j.div,{"data-state":o?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":x,hidden:!b,id:f,tabIndex:0,...r,ref:n,style:{...t.style,animationDuration:l.current?"0s":void 0},children:b&&d})})});ie.displayName=re;function ce(t,n){return`${t}-trigger-${n}`}function le(t,n){return`${t}-content-${n}`}var Me=te,Ve=ne,De=oe,Ke=ie;const Le=R([""],{variants:{variant:{horizontal:"",vertical:"flex gap-6"}},defaultVariants:{variant:"horizontal"}}),Ge=R([""],{variants:{variant:{default:""}},defaultVariants:{variant:"default"}}),$=R(["flex"],{variants:{variant:{default:"flex gap-6",horizontal:"",vertical:"flex-col min-w-[132px] h-full items-center"}},defaultVariants:{variant:"default"}}),ke=R(["cursor-pointer","h-[27px]","w-fit","block","relative","after:absolute","after:bottom-0","after:left-0","after:right-0","after:h-[2px]","after:bg-aurora-500","after:origin-bottom",'after:content-[""]',"after:scale-y-0","after:transition-transform","after:duration-500","after:transform-gpu","after:will-change-transform","kubefirst:after:bg-kubefirst-primary"],{variants:{variant:{default:"",active:["text-zinc-700","font-semibold","after:scale-y-100","hover:after:scale-y-140"],inactive:"text-slate-500 font-[600]"}},defaultVariants:{variant:"default"}}),L=({children:t,className:n,...s})=>e.jsx(Ke,{...s,className:C(Ge({variant:"default",className:n})),children:t});L.displayName="KonstructTabsContent";L.__docgenInfo={description:"",methods:[],displayName:"KonstructTabsContent"};const G=({children:t,className:n,orientation:s,...a})=>e.jsx("div",{className:C($({variant:"default"})),children:e.jsx(Ve,{className:C($({variant:s,className:n})),...a,children:t})});G.displayName="KonstructTabsList";G.__docgenInfo={description:"",methods:[],displayName:"KonstructTabsList",props:{orientation:{required:!0,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""}},composes:["PropsWithChildren"]};const k=({tab:t,label:n,isActive:s,className:a})=>e.jsx(De,{value:t,children:e.jsx(he,{variant:"body2",component:"span",className:C(ke({variant:s?"active":"inactive",className:a})),children:n})});k.displayName="KonstructTabsTrigger";k.__docgenInfo={description:"",methods:[],displayName:"KonstructTabsTrigger",props:{tab:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},isActive:{required:!0,tsType:{name:"boolean"},description:""}},composes:["VariantProps"]};const v=({children:t,theme:n,className:s,orientation:a,...c})=>e.jsx(Me,{...c,"data-theme":n,"data-orientation":a,"aria-orientation":a,className:C(Le({variant:a,className:s})),children:t});v.displayName="KonstructTabs";v.Content=L;v.List=G;v.Trigger=k;v.__docgenInfo={description:"",methods:[{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children, className, ...rest }",optional:!1,type:null}],returns:null},{name:"List",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  orientation,
  ...delegated
}`,optional:!1,type:null}],returns:null},{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:"{ tab, label, isActive, className }",optional:!1,type:null}],returns:null}],displayName:"KonstructTabs"};const st={title:"In Review/Tabs",component:v,args:{orientation:"vertical"}},F={render:function(n){const[s,a]=i.useState("tab1"),c=d=>{console.log("value",d),a(d)};return e.jsxs(v,{onValueChange:c,value:s,theme:"light",orientation:"horizontal",...n,children:[e.jsxs(v.List,{className:"flex gap-6","aria-label":"Manage your account",orientation:n.orientation,children:[e.jsx(v.Trigger,{tab:"tab1",label:"Account",isActive:s==="tab1"}),e.jsx(v.Trigger,{tab:"tab2",label:"Billing",isActive:s==="tab2"})]}),e.jsx(v.Content,{value:"tab1",children:e.jsxs("div",{className:n.orientation==="horizontal"?"space-y-4 mt-6":"",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Account Settings"}),e.jsx("div",{className:"rounded-lg border p-4",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Email"}),e.jsx("p",{className:"font-medium",children:"user@example.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Account Type"}),e.jsx("p",{className:"font-medium",children:"Personal Account"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Member Since"}),e.jsx("p",{className:"font-medium",children:"January 15, 2024"})]})]})})]})}),e.jsx(v.Content,{value:"tab2",children:e.jsxs("div",{className:n.orientation==="horizontal"?"space-y-4 mt-6":"",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Billing Overview"}),e.jsxs("div",{className:"rounded-lg border p-4",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Current Plan"}),e.jsx("p",{className:"font-medium",children:"Pro Plan"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Next Billing Date"}),e.jsx("p",{className:"font-medium",children:"May 1, 2024"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Monthly Subscription"}),e.jsx("span",{children:"$29.99"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Additional Users (2)"}),e.jsx("span",{children:"$10.00"})]}),e.jsx("div",{className:"border-t pt-2 mt-2",children:e.jsxs("div",{className:"flex justify-between font-semibold",children:[e.jsx("span",{children:"Total"}),e.jsx("span",{children:"$39.99"})]})})]})]})]})})]})}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function TabsStory(args) {
    const [selectedTab, setSelectedTab] = useState('tab1');
    const handleValueChange = (value: string) => {
      console.log('value', value);
      setSelectedTab(value);
    };
    return <TabsComponent onValueChange={handleValueChange} value={selectedTab} theme="light" orientation="horizontal" {...args}>
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
}`,...F.parameters?.docs?.source}}};const ot=["Tabs"];export{F as Tabs,ot as __namedExportsOrder,st as default};
