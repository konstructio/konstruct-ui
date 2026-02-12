import{r as d,R as c,j as s}from"./iframe-CrqmAXTA.js";import{T as q}from"./Typography-CSTWAyVB.js";import{a as N,c as p}from"./index-B-7A89sm.js";import{m as A}from"./proxy-Dq547Jbg.js";import{P as v}from"./index-DoZvAR3P.js";import"./preload-helper-PPVm8Dsz.js";function B(){return B=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},B.apply(this,arguments)}function ee(e,r){if(e==null)return{};var t=te(e,r),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function te(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}var P=d.forwardRef(function(e,r){var t=e.color,n=t===void 0?"currentColor":t,a=e.size,i=a===void 0?24:a,u=ee(e,["color","size"]);return c.createElement("svg",B({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),c.createElement("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}),c.createElement("rect",{x:"9",y:"9",width:"6",height:"6"}),c.createElement("line",{x1:"9",y1:"1",x2:"9",y2:"4"}),c.createElement("line",{x1:"15",y1:"1",x2:"15",y2:"4"}),c.createElement("line",{x1:"9",y1:"20",x2:"9",y2:"23"}),c.createElement("line",{x1:"15",y1:"20",x2:"15",y2:"23"}),c.createElement("line",{x1:"20",y1:"9",x2:"23",y2:"9"}),c.createElement("line",{x1:"20",y1:"14",x2:"23",y2:"14"}),c.createElement("line",{x1:"1",y1:"9",x2:"4",y2:"9"}),c.createElement("line",{x1:"1",y1:"14",x2:"4",y2:"14"}))});P.propTypes={color:v.string,size:v.oneOfType([v.string,v.number])};P.displayName="Cpu";function E(){return E=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},E.apply(this,arguments)}function ne(e,r){if(e==null)return{};var t=re(e,r),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function re(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}var D=d.forwardRef(function(e,r){var t=e.color,n=t===void 0?"currentColor":t,a=e.size,i=a===void 0?24:a,u=ne(e,["color","size"]);return c.createElement("svg",E({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),c.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}))});D.propTypes={color:v.string,size:v.oneOfType([v.string,v.number])};D.displayName="Zap";const ae=N(["absolute","top-2","bottom-2","bg-metal-800","rounded-lg","pointer-events-none"]),se=N(["flex","flex-col","gap-2","w-full"]),ie=N(["inline-flex","items-stretch","w-full","relative","bg-metal-900","rounded-lg"],{variants:{disabled:{true:"opacity-50 cursor-not-allowed",false:""}},defaultVariants:{disabled:!1}}),oe=N(["flex","flex-1","items-start","cursor-pointer","select-none","transition-colors","p-2","border-metal-700","border-t","border-b","bg-transparent","first:border-l","first:rounded-l-lg","last:border-r","last:rounded-r-lg","focus:outline-none","focus-visible:ring-2","focus-visible:ring-aurora-500","focus-visible:ring-inset"],{variants:{disabled:{true:"pointer-events-none opacity-50",false:""}},defaultVariants:{disabled:!1}}),le=N(["flex","flex-col","flex-1","rounded-lg","px-4","py-2"],{variants:{hasDescription:{true:"items-start text-left justify-start",false:"items-center text-center justify-center"}},defaultVariants:{hasDescription:!1}}),z=N(["text-sm","font-medium","leading-5","tracking-[0.1px]","flex","items-center","gap-2","w-full","justify-between","transition-colors","ease-in-out"],{variants:{selected:{true:"text-aurora-500",false:"text-metal-50"}},defaultVariants:{selected:!1}}),ce=N(["text-sm","font-normal","leading-5","tracking-[0.15px]","text-metal-300"]),de=(e,r)=>r==="none"?e?"inset(0 0 0 0)":"inset(0 100% 0 0)":e?"inset(0 0 0 0)":r==="right"?"inset(0 0 0 100%)":"inset(0 100% 0 0)",R=d.memo(({animationDirection:e,className:r,contentClassName:t,descriptionClassName:n,duration:a=.3,hasDescription:i,index:u,isDisabled:f,isSelected:T,labelClassName:j,option:o,value:k,onKeyDown:S,onSelect:y})=>s.jsx("button",{type:"button",role:"radio","aria-checked":T,"data-value":o.value,disabled:f,tabIndex:T||u===0?0:-1,onClick:()=>!f&&y(k),onKeyDown:w=>S(w,u),className:p(oe({disabled:f}),"relative",r),children:s.jsxs("div",{className:p(le({hasDescription:i}),"relative",t),children:[s.jsxs("span",{className:"relative w-full",children:[s.jsxs("span",{className:p(z({selected:!1}),j),children:[s.jsxs("span",{className:"flex items-center gap-2",children:[o.icon,o.label]}),o.secondaryLabel&&s.jsx("span",{children:o.secondaryLabel})]}),s.jsxs(A.span,{className:p(z({selected:!0}),"absolute inset-0",j),"aria-hidden":"true",initial:!1,animate:{clipPath:de(T,e)},transition:{type:"tween",ease:"linear",duration:a},children:[s.jsxs("span",{className:"flex items-center gap-2",children:[o.icon,o.label]}),o.secondaryLabel&&s.jsx("span",{children:o.secondaryLabel})]})]}),o.description&&s.jsx("span",{className:p(ce(),n),children:o.description})]})},o.value));R.displayName="KonstructButtonGroupItem";R.__docgenInfo={description:"",methods:[],displayName:"KonstructButtonGroupItem",props:{animationDirection:{required:!0,tsType:{name:"union",raw:"'left' | 'right' | 'none'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'none'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""},descriptionClassName:{required:!1,tsType:{name:"string"},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.3",computed:!1}},hasDescription:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},isDisabled:{required:!0,tsType:{name:"boolean"},description:""},isSelected:{required:!0,tsType:{name:"boolean"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /** Optional description displayed below the label */
  description?: string;
  /** Whether this specific option is disabled */
  disabled?: boolean;
  /** Optional icon to display before the label */
  icon?: ReactNode;
  /** The label text displayed for this option */
  label: string;
  /** Optional secondary label displayed right-aligned on the same line as the label */
  secondaryLabel?: string;
  /** The value associated with this option */
  value: string;
}`,signature:{properties:[{key:"description",value:{name:"string",required:!1},description:"Optional description displayed below the label"},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether this specific option is disabled"},{key:"icon",value:{name:"ReactNode",required:!1},description:"Optional icon to display before the label"},{key:"label",value:{name:"string",required:!0},description:"The label text displayed for this option"},{key:"secondaryLabel",value:{name:"string",required:!1},description:"Optional secondary label displayed right-aligned on the same line as the label"},{key:"value",value:{name:"string",required:!0},description:"The value associated with this option"}]}},description:""},value:{required:!0,tsType:{name:"string"},description:""},onKeyDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent<HTMLButtonElement>, index: number) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"},name:"event"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const V=d.memo(({className:e,htmlFor:r,isRequired:t,label:n,requiredClassName:a})=>s.jsxs(q,{component:"label",variant:"labelLarge",htmlFor:r,className:p("cursor-pointer","flex","gap-1","text-sm","font-medium","text-metal-50",e),children:[n," ",t&&s.jsx(q,{component:"span",className:p("text-red-600","dark:text-red-500","text-xs","mt-0.5",a),children:"*"})]}));V.displayName="KonstructButtonGroupLabel";V.__docgenInfo={description:"",methods:[],displayName:"KonstructButtonGroupLabel",props:{className:{required:!1,tsType:{name:"string"},description:""},htmlFor:{required:!0,tsType:{name:"string"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},requiredClassName:{required:!1,tsType:{name:"string"},description:""}}};const W=d.memo(({error:e,errorClassName:r,helperText:t,helperTextClassName:n})=>typeof e=="string"&&e.length>0?s.jsx(q,{component:"span",className:p("text-xs","tracking-normal","text-red-400",r),children:e}):t?s.jsx(q,{component:"span",variant:"body1",className:p("text-xs","text-metal-300","select-none","tracking-normal",n),children:t}):null);W.displayName="KonstructButtonGroupMessage";W.__docgenInfo={description:"",methods:[],displayName:"KonstructButtonGroupMessage",props:{error:{required:!1,tsType:{name:"string"},description:""},errorClassName:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},helperTextClassName:{required:!1,tsType:{name:"string"},description:""}}};const pe=({defaultValue:e,disabled:r,options:t,value:n,onValueChange:a})=>{const i=d.useId(),u=d.useRef(null),f=n!==void 0,[T,j]=d.useState(()=>e),o=f?n:T,[k,S]=d.useState("none"),y=d.useCallback(l=>l?t.findIndex(h=>h.value===l):-1,[t]),w=d.useCallback(l=>{if(r)return;const h=y(o),m=y(l);h!==-1&&m!==-1&&S(m>h?"right":"left"),f||j(l),a?.(l)},[r,y,f,a,o]),L=d.useCallback((l,h)=>{const m=t.filter(b=>!b.disabled&&!r),O=m.findIndex(b=>b.value===t[h].value);let g=-1;switch(l.key){case"ArrowRight":case"ArrowDown":l.preventDefault(),g=(O+1)%m.length;break;case"ArrowLeft":case"ArrowUp":l.preventDefault(),g=(O-1+m.length)%m.length;break;case"Home":l.preventDefault(),g=0;break;case"End":l.preventDefault(),g=m.length-1;break;default:return}if(g>=0){const b=m[g];w(b.value),u.current?.querySelector(`[data-value="${b.value}"]`)?.focus()}},[r,w,t]);return{animationDirection:k,groupRef:u,id:i,selected:o,handleKeyDown:L,handleSelect:w}},C=({className:e,contentClassName:r,defaultValue:t,descriptionClassName:n,disabled:a,duration:i,error:u,errorClassName:f,helperText:T,helperTextClassName:j,isRequired:o,itemClassName:k,itemLabelClassName:S,label:y,labelClassName:w,name:L,options:l,pillClassName:h,requiredClassName:m,theme:O,value:g,wrapperClassName:b,onValueChange:K})=>{const{animationDirection:M,groupRef:H,id:_,selected:G,handleKeyDown:F,handleSelect:Z}=pe({defaultValue:t,disabled:a??void 0,options:l,value:g,onValueChange:K}),$=l.length,U=d.useMemo(()=>l.findIndex(x=>x.value===G),[l,G]);return s.jsxs("div",{className:p(se(),b),"data-theme":O,children:[y&&s.jsx(V,{className:w,htmlFor:_,isRequired:o,label:y,requiredClassName:m}),s.jsxs("div",{ref:H,role:"radiogroup","aria-labelledby":y?_:void 0,className:p(ie({disabled:a}),e),children:[U>=0&&s.jsx(A.div,{"aria-hidden":"true",className:p(ae(),h),initial:!1,animate:{left:`calc(${U} * (100% / ${$}) + 8px)`,width:`calc(100% / ${$} - 16px)`},transition:{type:"tween",ease:"linear",duration:i??.3}}),l.map((x,J)=>{const Q=G===x.value,X=a||x.disabled,Y=!!x.description;return s.jsx(R,{animationDirection:M,className:k,contentClassName:r,descriptionClassName:n,duration:i,hasDescription:Y,index:J,isDisabled:!!X,isSelected:Q,labelClassName:S,option:x,value:x.value,onKeyDown:F,onSelect:Z},x.value)})]}),s.jsx("input",{type:"hidden",name:L,value:G??""}),s.jsx(W,{error:u,errorClassName:f,helperText:T,helperTextClassName:j})]})};C.displayName="KonstructButtonGroup";C.__docgenInfo={description:`A segmented toggle button group for single selection among options.

@example
\`\`\`tsx
// Simple button group
<ButtonGroup
  name="processor"
  options={[
    { value: 'cpu', label: 'CPU' },
    { value: 'gpu', label: 'GPU' },
  ]}
  defaultValue="cpu"
  onValueChange={(value) => setProcessor(value)}
/>

// With descriptions
<ButtonGroup
  name="instance-type"
  label="Instance Type"
  isRequired
  options={[
    { value: 'standard', label: 'Standard', description: 'Balanced compute resources' },
    { value: 'spot', label: 'Spot', description: 'Cost-effective for flexible workloads' },
  ]}
  onValueChange={setInstanceType}
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-buttongroup--docs Storybook}`,methods:[],displayName:"KonstructButtonGroup",props:{className:{required:!1,tsType:{name:"string"},description:"CSS classes for the button group container"},contentClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the content wrapper inside each item"},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected value (uncontrolled mode)"},descriptionClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for description text"},duration:{required:!1,tsType:{name:"number"},description:"Animation duration in seconds (default: 0.3)"},error:{required:!1,tsType:{name:"string"},description:"Error message to display"},errorClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for error message"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the button group"},helperTextClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for helper text"},isRequired:{required:!1,tsType:{name:"boolean"},description:"Whether the field is required"},itemClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for individual button items"},itemLabelClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the label text inside items"},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Label displayed above the button group"},labelClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the label"},name:{required:!0,tsType:{name:"string"},description:"Form field name (required for form submission)"},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Optional description displayed below the label */
  description?: string;
  /** Whether this specific option is disabled */
  disabled?: boolean;
  /** Optional icon to display before the label */
  icon?: ReactNode;
  /** The label text displayed for this option */
  label: string;
  /** Optional secondary label displayed right-aligned on the same line as the label */
  secondaryLabel?: string;
  /** The value associated with this option */
  value: string;
}`,signature:{properties:[{key:"description",value:{name:"string",required:!1},description:"Optional description displayed below the label"},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether this specific option is disabled"},{key:"icon",value:{name:"ReactNode",required:!1},description:"Optional icon to display before the label"},{key:"label",value:{name:"string",required:!0},description:"The label text displayed for this option"},{key:"secondaryLabel",value:{name:"string",required:!1},description:"Optional secondary label displayed right-aligned on the same line as the label"},{key:"value",value:{name:"string",required:!0},description:"The value associated with this option"}]}}],raw:"ButtonGroupOption[]"},description:"Array of button options"},pillClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the animated pill"},requiredClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the required asterisk"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"},value:{required:!1,tsType:{name:"string"},description:"Currently selected value (controlled mode)"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the outer wrapper"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes"}}};const be={title:"In Review/ButtonGroup/Dark",component:C},I={parameters:{theme:"dark"},render:()=>s.jsxs("div",{className:"flex flex-col gap-8 w-200",children:[s.jsxs("section",{className:"flex flex-col gap-3",children:[s.jsx(q,{component:"h6",children:"Simple Toggle"}),s.jsx(C,{name:"processor",options:[{value:"cpu",label:"CPU"},{value:"gpu",label:"GPU"}],defaultValue:"cpu"})]}),s.jsxs("section",{className:"flex flex-col gap-3",children:[s.jsx(q,{component:"h6",children:"With Icons"}),s.jsx(C,{name:"processor-icons",options:[{value:"cpu",label:"CPU",icon:s.jsx(P,{className:"w-4 h-4"})},{value:"gpu",label:"GPU",icon:s.jsx(D,{className:"w-4 h-4"})}],defaultValue:"cpu"})]}),s.jsxs("section",{className:"flex flex-col gap-3",children:[s.jsx(q,{component:"h6",children:"With Descriptions"}),s.jsx(C,{name:"instance-type",label:"Instance Type",isRequired:!0,options:[{value:"standard",label:"Standard",secondaryLabel:"$0.10/hr",description:"Guaranteed availability for your workloads."},{value:"spot",label:"Spot",secondaryLabel:"$0.03/hr",description:"Lower cost, may be interrupted with 48h notice."}],defaultValue:"standard"})]})]})};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: () => <div className="flex flex-col gap-8 w-200">
      <section className="flex flex-col gap-3">
        <Typography component="h6">Simple Toggle</Typography>
        <ButtonGroupComponent name="processor" options={[{
        value: 'cpu',
        label: 'CPU'
      }, {
        value: 'gpu',
        label: 'GPU'
      }]} defaultValue="cpu" />
      </section>

      <section className="flex flex-col gap-3">
        <Typography component="h6">With Icons</Typography>
        <ButtonGroupComponent name="processor-icons" options={[{
        value: 'cpu',
        label: 'CPU',
        icon: <Cpu className="w-4 h-4" />
      }, {
        value: 'gpu',
        label: 'GPU',
        icon: <Zap className="w-4 h-4" />
      }]} defaultValue="cpu" />
      </section>

      <section className="flex flex-col gap-3">
        <Typography component="h6">With Descriptions</Typography>
        <ButtonGroupComponent name="instance-type" label="Instance Type" isRequired options={[{
        value: 'standard',
        label: 'Standard',
        secondaryLabel: '$0.10/hr',
        description: 'Guaranteed availability for your workloads.'
      }, {
        value: 'spot',
        label: 'Spot',
        secondaryLabel: '$0.03/hr',
        description: 'Lower cost, may be interrupted with 48h notice.'
      }]} defaultValue="standard" />
      </section>
    </div>
}`,...I.parameters?.docs?.source}}};const xe=["Default"];export{I as Default,xe as __namedExportsOrder,be as default};
