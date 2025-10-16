import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-B3LTmctl.js";import{a as V,c as z,b as A}from"./index-dgA_AnJp.js";import{u as N}from"./index-C_TYLyb5.js";import{a as H,u as M}from"./index-DciMqUTr.js";import{P as j}from"./index-7lZdWwhX.js";import{c as T,a as y}from"./index-CJCZd66Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLoFZP86.js";import"./index-CMMb4ACv.js";var C="Switch",[$,re]=z(C),[K,O]=$(C),R=n.forwardRef((i,a)=>{const{__scopeSwitch:s,name:l,checked:r,defaultChecked:t,required:c,disabled:o,value:d="on",onCheckedChange:v,form:h,...u}=i,[m,p]=n.useState(null),w=N(a,g=>p(g)),k=n.useRef(!1),S=m?h||!!m.closest("form"):!0,[x,I]=V({prop:r,defaultProp:t??!1,onChange:v,caller:C});return e.jsxs(K,{scope:s,checked:x,disabled:o,children:[e.jsx(j.button,{type:"button",role:"switch","aria-checked":x,"aria-required":c,"data-state":q(x),"data-disabled":o?"":void 0,disabled:o,value:d,...u,ref:w,onClick:A(i.onClick,g=>{I(B=>!B),S&&(k.current=g.isPropagationStopped(),k.current||g.stopPropagation())})}),S&&e.jsx(_,{control:m,bubbles:!k.current,name:l,value:d,checked:x,required:c,disabled:o,form:h,style:{transform:"translateX(-100%)"}})]})});R.displayName=C;var P="SwitchThumb",E=n.forwardRef((i,a)=>{const{__scopeSwitch:s,...l}=i,r=O(P,s);return e.jsx(j.span,{"data-state":q(r.checked),"data-disabled":r.disabled?"":void 0,...l,ref:a})});E.displayName=P;var U="SwitchBubbleInput",_=n.forwardRef(({__scopeSwitch:i,control:a,checked:s,bubbles:l=!0,...r},t)=>{const c=n.useRef(null),o=N(c,t),d=H(s),v=M(a);return n.useEffect(()=>{const h=c.current;if(!h)return;const u=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(u,"checked").set;if(d!==s&&p){const w=new Event("click",{bubbles:l});p.call(h,s),h.dispatchEvent(w)}},[d,s,l]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:s,...r,tabIndex:-1,ref:o,style:{...r.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});_.displayName=U;function q(i){return i?"checked":"unchecked"}var F=R,L=E;const D=T(["w-[40px]","h-[20px]","flex","items-center","rounded-full","shadow","focus:shadow-md","data-[state=unchecked]:bg-gray-300","dark:data-[state=unchecked]:bg-gray-600","transition-all","delay-10","duration-250","cursor-pointer","bg-aurora-500","kubefirst:bg-kubefirst-primary"]),W=T(["block","w-[16px]","h-[16px]","bg-white","dark:bg-gray-400","dark:data-[state=checked]:bg-white","rounded-full","shadow-md","transition-all","translate-x-1","data-[state=checked]:translate-x-5","delay-10","duration-300"]),f=n.forwardRef(({name:i,alignment:a="horizontal",theme:s,thumbClassName:l,className:r,label:t,defaultChecked:c,value:o,helperText:d,onChange:v},h)=>{const u=n.useRef(null),m=n.useId(),p=i?`${m}-${i}`:m;return n.useImperativeHandle(h,()=>u.current,[u]),n.useEffect(()=>{u.current&&(u.current.value=`${o}`)},[o]),e.jsxs("div",{className:y("w-full flex gap-3",a==="vertical"?"flex-col":"flex-row"),"data-theme":s,children:[e.jsx(F,{id:p,defaultChecked:c,checked:o,onCheckedChange:w=>v?.(w),className:y(D({className:r})),"aria-label":t,children:e.jsx(L,{className:W({className:l})})}),t?e.jsxs("label",{className:"flex flex-col text-slate-800 dark:text-white text-sm",htmlFor:p,style:{paddingRight:15},children:[t,d?e.jsx("span",{className:"text-slate-600 dark:text-slate-400 text-xs",children:d}):null]}):null,e.jsx("input",{ref:u,name:i,type:"text",className:"hidden","aria-hidden":"true"})]})});f.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{alignment:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"union",raw:`| 'kubefirst'
| 'light'
| 'kubefirst-dark'
| 'dark'
| undefined`,elements:[{name:"literal",value:"'kubefirst'"},{name:"literal",value:"'light'"},{name:"literal",value:"'kubefirst-dark'"},{name:"literal",value:"'dark'"},{name:"undefined"}]},description:""},thumbClassName:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"e"}],return:{name:"void"}}},description:""}},composes:["VariantProps"]};const ne={title:"In Review/Switch",component:f},b={args:{value:!0,helperText:"Some helper text here"},render:function(a){const[s,l]=n.useState({switch1:a.value,switch2:a.value,switch3:a.value,switch4:a.value}),r=(t,c)=>{l(o=>({...o,[t]:c}))};return e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-5 p-8",children:[e.jsx(f,{label:"Civo theme",...a,value:s.switch1,onChange:t=>r("switch1",t)}),e.jsx(f,{label:"Kubefirst theme",...a,value:s.switch2,onChange:t=>r("switch2",t),theme:"kubefirst"})]}),e.jsxs("div",{className:"max-w-[350px] flex flex-col gap-5 bg-[#10172A] p-8 rounded-sm","data-theme":"dark",children:[e.jsx(f,{label:"Civo theme",...a,value:s.switch3,onChange:t=>r("switch3",t)}),e.jsx(f,{label:"Kubefirst theme",...a,value:s.switch4,onChange:t=>r("switch4",t),theme:"kubefirst"})]})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: true,
    helperText: 'Some helper text here'
  },
  render: function SwitchStory(args) {
    const [value, setValue] = useState({
      switch1: args.value,
      switch2: args.value,
      switch3: args.value,
      switch4: args.value
    });
    const handleChange = (switchName: string, value: boolean) => {
      setValue(values => ({
        ...values,
        [switchName]: value
      }));
    };
    return <div className="flex flex-col gap-5">
        <div className="max-w-[350px] flex flex-col gap-5 p-8">
          <SwitchComponent label="Civo theme" {...args} value={value.switch1} onChange={event => handleChange('switch1', event)} />

          <SwitchComponent label="Kubefirst theme" {...args} value={value.switch2} onChange={event => handleChange('switch2', event)} theme="kubefirst" />
        </div>

        <div className="max-w-[350px] flex flex-col gap-5 bg-[#10172A] p-8 rounded-sm" data-theme="dark">
          <SwitchComponent label="Civo theme" {...args} value={value.switch3} onChange={event => handleChange('switch3', event)} />

          <SwitchComponent label="Kubefirst theme" {...args} value={value.switch4} onChange={event => handleChange('switch4', event)} theme="kubefirst" />
        </div>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};const ie=["Switch"];export{b as Switch,ie as __namedExportsOrder,ne as default};
