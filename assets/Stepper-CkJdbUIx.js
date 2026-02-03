import{r as m,j as t}from"./iframe-Bp60l9al.js";import{a as f,c}from"./index-B-7A89sm.js";import{C as A}from"./check-u82iiZRm.js";import{S as B}from"./index-DnqQ_iXf.js";const j=m.forwardRef(({size:e=24,color:i="currentColor",...o},r)=>t.jsx("svg",{ref:r,xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:i,...o,children:t.jsx("g",{transform:"translate(9, 0) scale(2.76)",children:t.jsx("path",{d:"M2.00391 0L1.78125 5.87695H0.275391L0.0527344 0H2.00391ZM0 7.69922C0 7.4375 0.09375 7.2168 0.28125 7.03711C0.46875 6.85742 0.716797 6.76758 1.02539 6.76758C1.33008 6.76758 1.57422 6.85742 1.75781 7.03711C1.94531 7.2168 2.03906 7.4375 2.03906 7.69922C2.03906 7.96484 1.94531 8.1875 1.75781 8.36719C1.57422 8.54297 1.33008 8.63086 1.02539 8.63086C0.716797 8.63086 0.46875 8.54297 0.28125 8.36719C0.09375 8.1875 0 7.96484 0 7.69922Z",fill:i})})}));j.displayName="KonstructExclamationIcon";j.__docgenInfo={description:"",methods:[],displayName:"KonstructExclamationIcon",props:{size:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"24",computed:!1}},color:{defaultValue:{value:"'currentColor'",computed:!1},required:!1}},composes:["SVGProps"]};function R({clickable:e,onClick:i,step:o}){const r=o.status??"pending",d=o.disabled||r==="active",h=!!(o.onClick||i),s=e&&!d&&h,l=typeof o.label=="string"?"span":B,a=m.useCallback(()=>{s&&(o.onClick?o.onClick():i&&i())},[s,o.onClick,i]),g=m.useCallback(p=>{s&&(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),a())},[s,a]);return{isClickable:s,isDisabled:d,LabelComponent:l,status:r,handleClick:a,handleKeyDown:g}}const D=f(["flex"],{variants:{orientation:{vertical:["flex-col"],horizontal:["flex-row","items-start"]}},defaultVariants:{orientation:"vertical"}}),U=f(["flex","list-none","p-0","m-0"],{variants:{orientation:{vertical:["flex-col"],horizontal:["flex-row"]}},defaultVariants:{orientation:"vertical"}}),E=f(["list-none"],{variants:{orientation:{vertical:[],horizontal:[]}},defaultVariants:{orientation:"vertical"}}),q=f(["flex","group","relative"],{variants:{orientation:{vertical:[],horizontal:["min-w-0"]},variant:{inline:["flex-row","items-center","gap-4"],stacked:["flex-col","items-center","gap-2"],horizontal:["flex-row","items-center","gap-4"]},clickable:{true:["cursor-pointer"],false:["cursor-default"]}},defaultVariants:{orientation:"vertical",variant:"inline",clickable:!1}}),x=f(["flex","items-center","justify-center","rounded-full","shrink-0","font-medium","transition-all","duration-200"],{variants:{status:{completed:["bg-transparent","border-2","border-aurora-500","text-aurora-500","dark:border-aurora-500","dark:text-aurora-500"],active:["bg-aurora-500","text-slate-700","border-0","dark:bg-aurora-500","dark:text-metal-900"],pending:["border-2","border-slate-300","text-slate-600","bg-transparent","dark:border-metal-200","dark:text-metal-200"],error:["bg-red-600","text-white","border-0","dark:bg-red-600","dark:text-white"]},size:{sm:["w-5","h-5","text-xs","uppercase","tracking-wide"],md:["w-[37px]","h-[37px]","text-sm","font-semibold"],lg:["w-[54px]","h-[54px]","text-lg","font-semibold"]}},defaultVariants:{status:"pending",size:"sm"}}),w=f(["flex","flex-col","gap-0.5"],{variants:{variant:{inline:["items-start"],stacked:["items-center"],horizontal:["items-start"]}},defaultVariants:{variant:"inline"}}),S=f(["font-medium","transition-colors","duration-200","leading-tight","select-none"],{variants:{status:{completed:["text-slate-700","dark:text-metal-200"],active:["text-slate-700","dark:text-metal-50"],pending:["text-slate-600","dark:text-metal-50"],error:["text-red-700","dark:text-red-500"]},size:{sm:["text-sm"],md:["text-sm"],lg:["text-base"]},variant:{inline:["text-left"],stacked:["text-center"],horizontal:["text-left"]}},defaultVariants:{status:"pending",size:"sm",variant:"inline"}}),T=f(["transition-colors","duration-200","leading-tight","select-none"],{variants:{status:{completed:["text-slate-500","dark:text-slate-400"],active:["text-slate-600","dark:text-slate-300"],pending:["text-slate-400","dark:text-slate-500"],error:["text-red-500","dark:text-red-400"]},size:{sm:["text-xs"],md:["text-xs"],lg:["text-sm"]},variant:{inline:["text-left"],stacked:["text-center"],horizontal:["text-left"]}},defaultVariants:{status:"pending",size:"sm",variant:"inline"}}),H=f(["transition-colors","duration-200"],{variants:{orientation:{vertical:["w-0.5"],horizontal:["h-0.5","flex-1","min-w-4"]},status:{completed:["bg-aurora-500","dark:bg-aurora-500"],active:["bg-aurora-500","dark:bg-aurora-500"],pending:["bg-slate-300","dark:bg-metal-400"],error:["bg-red-700","dark:bg-red-600"]},size:{sm:[],md:[],lg:[]},variant:{inline:[],stacked:[],horizontal:[]}},compoundVariants:[{orientation:"vertical",variant:"inline",size:"sm",class:["h-6","ml-[9px]","my-1"]},{orientation:"vertical",variant:"inline",size:"md",class:["h-6","ml-[17px]","my-1"]},{orientation:"vertical",variant:"inline",size:"lg",class:["h-6","ml-[26px]","my-1"]},{orientation:"vertical",variant:"stacked",size:"sm",class:["h-6","mx-auto","my-1"]},{orientation:"vertical",variant:"stacked",size:"md",class:["h-7","mx-auto","my-2"]},{orientation:"vertical",variant:"stacked",size:"lg",class:["h-8","mx-auto","my-2"]}],defaultVariants:{orientation:"vertical",status:"pending",size:"sm",variant:"inline"}}),K={completed:", completed",active:", current",error:", error",pending:""};function z(e,i,o){const r=`Step ${e+1}`,d=typeof i=="string"?`: ${i}`:"";return`${r}${d}${K[o]}`}const I=({className:e,orientation:i,size:o,status:r,variant:d})=>t.jsx("div",{className:c(H({orientation:i,size:o,status:r,variant:d}),e),role:"presentation","aria-hidden":"true"}),V=m.memo(I);I.__docgenInfo={description:"",methods:[],displayName:"StepConnectorBase",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},orientation:{required:!0,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Orientation of the connector"},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the connector"},status:{required:!0,tsType:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}]},description:"Status of the step"},variant:{required:!0,tsType:{name:"union",raw:"'inline' | 'stacked' | 'horizontal'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'stacked'"},{name:"literal",value:"'horizontal'"}]},description:"Layout variant"}}};const P={sm:12,md:16,lg:24},M={sm:"h-3 w-3",md:"h-4 w-4",lg:"h-6 w-6"},W=({className:e,icons:i,index:o,size:r,status:d})=>d==="completed"?i?.completed?t.jsx("span",{className:e,children:i.completed}):t.jsx(A,{className:c(M[r],e),strokeWidth:2.5,"aria-hidden":"true"}):d==="error"?i?.error?t.jsx("span",{className:e,children:i.error}):t.jsx(j,{size:P[r],className:e}):t.jsx("span",{className:e,"aria-hidden":"true",children:o+1}),N=m.memo(W);W.__docgenInfo={description:"",methods:[],displayName:"StepIndicatorContentBase",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the content"},icons:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Custom icon for completed status */
  completed?: ReactNode;
  /** Custom icon for error status */
  error?: ReactNode;
}`,signature:{properties:[{key:"completed",value:{name:"ReactNode",required:!1},description:"Custom icon for completed status"},{key:"error",value:{name:"ReactNode",required:!1},description:"Custom icon for error status"}]}},description:"Custom icons for step statuses"},index:{required:!0,tsType:{name:"number"},description:"Step index (0-based)"},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the indicator"},status:{required:!0,tsType:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}]},description:"Status of the step"}}};const L=({classNames:e,clickable:i,icons:o,index:r,isLast:d,showConnector:h,size:s,step:l,variant:a,onClick:g})=>{const{isClickable:p,isDisabled:y,LabelComponent:b,status:n,handleClick:C,handleKeyDown:v}=R({clickable:i,step:l,onClick:g});return a==="horizontal"?t.jsxs("div",{className:"flex items-center",children:[t.jsxs("div",{className:c(q({orientation:"horizontal",variant:a,clickable:p}),e?.stepWrapper),role:p?"button":void 0,tabIndex:p?0:void 0,onClick:C,onKeyDown:v,"aria-current":n==="active"?"step":void 0,...y&&{"aria-disabled":!0},"aria-label":z(r,l.label,n),children:[t.jsx("div",{className:c(x({status:n,size:s}),e?.indicator),"aria-hidden":"true",children:t.jsx(N,{status:n,index:r,size:s,icons:o,className:e?.indicatorContent})}),t.jsxs("div",{className:c(w({variant:a}),e?.content),children:[l.label&&t.jsx(b,{className:c(S({status:n,size:s,variant:a}),e?.label),children:l.label}),l.description&&t.jsx("span",{className:c(T({status:n,size:s,variant:a}),e?.description),children:l.description})]})]}),!d&&h&&t.jsx("div",{className:c("h-0.5 w-7.5 mx-2 transition-colors duration-200",n==="completed"||n==="active"?"bg-aurora-500":n==="error"?"bg-red-700 dark:bg-red-600":"bg-slate-300 dark:bg-metal-400",e?.connector),role:"presentation","aria-hidden":"true"})]}):t.jsxs("div",{className:"flex flex-1 items-start",children:[t.jsxs("div",{className:c(q({orientation:"horizontal",variant:a,clickable:p}),e?.stepWrapper),role:p?"button":void 0,tabIndex:p?0:void 0,onClick:C,onKeyDown:v,"aria-current":n==="active"?"step":void 0,...y&&{"aria-disabled":!0},"aria-label":z(r,l.label,n),children:[t.jsx("div",{className:c(x({status:n,size:s}),e?.indicator),"aria-hidden":"true",children:t.jsx(N,{status:n,index:r,size:s,icons:o,className:e?.indicatorContent})}),t.jsxs("div",{className:c(w({variant:a}),e?.content),children:[l.label&&t.jsx(b,{className:c(S({status:n,size:s,variant:a}),e?.label),children:l.label}),l.description&&t.jsx("span",{className:c(T({status:n,size:s,variant:a}),e?.description),children:l.description})]})]}),!d&&h&&t.jsx(V,{orientation:"horizontal",status:n,size:s,variant:a,className:c("mt-6.5",e?.connector)})]})},$=m.memo(L);L.__docgenInfo={description:"",methods:[],displayName:"HorizontalStepItemBase",props:{classNames:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Class for the connector line */
  connector?: string;
  /** Class for the step content wrapper (contains label + description) */
  content?: string;
  /** Class for the step description */
  description?: string;
  /** Class for the step indicator circle */
  indicator?: string;
  /** Class for the content inside the indicator (number, icon) */
  indicatorContent?: string;
  /** Class for each li item element */
  item?: string;
  /** Class for the step label */
  label?: string;
  /** Class for the ol list element */
  list?: string;
  /** Class for the root nav element */
  root?: string;
  /** Class for the step wrapper (contains indicator + content) */
  stepWrapper?: string;
}`,signature:{properties:[{key:"connector",value:{name:"string",required:!1},description:"Class for the connector line"},{key:"content",value:{name:"string",required:!1},description:"Class for the step content wrapper (contains label + description)"},{key:"description",value:{name:"string",required:!1},description:"Class for the step description"},{key:"indicator",value:{name:"string",required:!1},description:"Class for the step indicator circle"},{key:"indicatorContent",value:{name:"string",required:!1},description:"Class for the content inside the indicator (number, icon)"},{key:"item",value:{name:"string",required:!1},description:"Class for each li item element"},{key:"label",value:{name:"string",required:!1},description:"Class for the step label"},{key:"list",value:{name:"string",required:!1},description:"Class for the ol list element"},{key:"root",value:{name:"string",required:!1},description:"Class for the root nav element"},{key:"stepWrapper",value:{name:"string",required:!1},description:"Class for the step wrapper (contains indicator + content)"}]}},description:"Custom class names"},clickable:{required:!0,tsType:{name:"boolean"},description:"Whether the step is clickable"},icons:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Custom icon for completed status */
  completed?: ReactNode;
  /** Custom icon for error status */
  error?: ReactNode;
}`,signature:{properties:[{key:"completed",value:{name:"ReactNode",required:!1},description:"Custom icon for completed status"},{key:"error",value:{name:"ReactNode",required:!1},description:"Custom icon for error status"}]}},description:"Custom icons for step statuses"},index:{required:!0,tsType:{name:"number"},description:"Step index (0-based)"},isLast:{required:!0,tsType:{name:"boolean"},description:"Whether this is the last step"},nextStepStatus:{required:!1,tsType:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}]},description:"Status of the next step (for connector coloring)"},orientation:{required:!0,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Orientation of the stepper"},showConnector:{required:!0,tsType:{name:"boolean"},description:"Show connector lines"},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the step indicator"},step:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /** Optional description for the step */
  description?: string;
  /** Whether this step is disabled (not clickable) */
  disabled?: boolean;
  /** Unique identifier for the step */
  id: string | number;
  /** Label displayed for the step (can be a string or ReactNode) */
  label?: ReactNode;
  /** Callback when this specific step is clicked */
  onClick?: () => void;
  /** Status of the step */
  status?: StepStatus;
}`,signature:{properties:[{key:"description",value:{name:"string",required:!1},description:"Optional description for the step"},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether this step is disabled (not clickable)"},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the step"},{key:"label",value:{name:"ReactNode",required:!1},description:"Label displayed for the step (can be a string or ReactNode)"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback when this specific step is clicked"},{key:"status",value:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}],required:!1},description:"Status of the step"}]}},description:"Step data"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override"},variant:{required:!0,tsType:{name:"union",raw:"'inline' | 'stacked' | 'horizontal'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'stacked'"},{name:"literal",value:"'horizontal'"}]},description:"Layout variant"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when step is clicked"}}};const _=({classNames:e,clickable:i,icons:o,index:r,isLast:d,showConnector:h,size:s,step:l,variant:a,onClick:g})=>{const{isClickable:p,isDisabled:y,LabelComponent:b,status:n,handleClick:C,handleKeyDown:v}=R({clickable:i,step:l,onClick:g}),u=a==="stacked"?"flex flex-col items-center":"flex flex-col";return t.jsxs("div",{className:u,children:[t.jsxs("div",{className:c(q({orientation:"vertical",variant:a,clickable:p}),e?.stepWrapper),role:p?"button":void 0,tabIndex:p?0:void 0,onClick:C,onKeyDown:v,"aria-current":n==="active"?"step":void 0,...y&&{"aria-disabled":!0},"aria-label":z(r,l.label,n),children:[t.jsx("div",{className:c(x({status:n,size:s}),e?.indicator),"aria-hidden":"true",children:t.jsx(N,{status:n,index:r,size:s,icons:o,className:e?.indicatorContent})}),t.jsxs("div",{className:c(w({variant:a}),e?.content),children:[l.label&&t.jsx(b,{className:c(S({status:n,size:s,variant:a}),e?.label),children:l.label}),l.description&&t.jsx("span",{className:c(T({status:n,size:s,variant:a}),e?.description),children:l.description})]})]}),!d&&h&&t.jsx(V,{orientation:"vertical",status:n,size:s,variant:a,className:e?.connector})]})},Z=m.memo(_);_.__docgenInfo={description:"",methods:[],displayName:"VerticalStepItemBase",props:{classNames:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Class for the connector line */
  connector?: string;
  /** Class for the step content wrapper (contains label + description) */
  content?: string;
  /** Class for the step description */
  description?: string;
  /** Class for the step indicator circle */
  indicator?: string;
  /** Class for the content inside the indicator (number, icon) */
  indicatorContent?: string;
  /** Class for each li item element */
  item?: string;
  /** Class for the step label */
  label?: string;
  /** Class for the ol list element */
  list?: string;
  /** Class for the root nav element */
  root?: string;
  /** Class for the step wrapper (contains indicator + content) */
  stepWrapper?: string;
}`,signature:{properties:[{key:"connector",value:{name:"string",required:!1},description:"Class for the connector line"},{key:"content",value:{name:"string",required:!1},description:"Class for the step content wrapper (contains label + description)"},{key:"description",value:{name:"string",required:!1},description:"Class for the step description"},{key:"indicator",value:{name:"string",required:!1},description:"Class for the step indicator circle"},{key:"indicatorContent",value:{name:"string",required:!1},description:"Class for the content inside the indicator (number, icon)"},{key:"item",value:{name:"string",required:!1},description:"Class for each li item element"},{key:"label",value:{name:"string",required:!1},description:"Class for the step label"},{key:"list",value:{name:"string",required:!1},description:"Class for the ol list element"},{key:"root",value:{name:"string",required:!1},description:"Class for the root nav element"},{key:"stepWrapper",value:{name:"string",required:!1},description:"Class for the step wrapper (contains indicator + content)"}]}},description:"Custom class names"},clickable:{required:!0,tsType:{name:"boolean"},description:"Whether the step is clickable"},icons:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Custom icon for completed status */
  completed?: ReactNode;
  /** Custom icon for error status */
  error?: ReactNode;
}`,signature:{properties:[{key:"completed",value:{name:"ReactNode",required:!1},description:"Custom icon for completed status"},{key:"error",value:{name:"ReactNode",required:!1},description:"Custom icon for error status"}]}},description:"Custom icons for step statuses"},index:{required:!0,tsType:{name:"number"},description:"Step index (0-based)"},isLast:{required:!0,tsType:{name:"boolean"},description:"Whether this is the last step"},nextStepStatus:{required:!1,tsType:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}]},description:"Status of the next step (for connector coloring)"},orientation:{required:!0,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Orientation of the stepper"},showConnector:{required:!0,tsType:{name:"boolean"},description:"Show connector lines"},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the step indicator"},step:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /** Optional description for the step */
  description?: string;
  /** Whether this step is disabled (not clickable) */
  disabled?: boolean;
  /** Unique identifier for the step */
  id: string | number;
  /** Label displayed for the step (can be a string or ReactNode) */
  label?: ReactNode;
  /** Callback when this specific step is clicked */
  onClick?: () => void;
  /** Status of the step */
  status?: StepStatus;
}`,signature:{properties:[{key:"description",value:{name:"string",required:!1},description:"Optional description for the step"},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether this step is disabled (not clickable)"},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the step"},{key:"label",value:{name:"ReactNode",required:!1},description:"Label displayed for the step (can be a string or ReactNode)"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback when this specific step is clicked"},{key:"status",value:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}],required:!1},description:"Status of the step"}]}},description:"Step data"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override"},variant:{required:!0,tsType:{name:"union",raw:"'inline' | 'stacked' | 'horizontal'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'stacked'"},{name:"literal",value:"'horizontal'"}]},description:"Layout variant"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when step is clicked"}}};const O=e=>e.orientation==="horizontal"||e.variant==="horizontal"?t.jsx($,{...e}):t.jsx(Z,{...e}),G=m.memo(O);O.__docgenInfo={description:"",methods:[],displayName:"StepItemBase",props:{classNames:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Class for the connector line */
  connector?: string;
  /** Class for the step content wrapper (contains label + description) */
  content?: string;
  /** Class for the step description */
  description?: string;
  /** Class for the step indicator circle */
  indicator?: string;
  /** Class for the content inside the indicator (number, icon) */
  indicatorContent?: string;
  /** Class for each li item element */
  item?: string;
  /** Class for the step label */
  label?: string;
  /** Class for the ol list element */
  list?: string;
  /** Class for the root nav element */
  root?: string;
  /** Class for the step wrapper (contains indicator + content) */
  stepWrapper?: string;
}`,signature:{properties:[{key:"connector",value:{name:"string",required:!1},description:"Class for the connector line"},{key:"content",value:{name:"string",required:!1},description:"Class for the step content wrapper (contains label + description)"},{key:"description",value:{name:"string",required:!1},description:"Class for the step description"},{key:"indicator",value:{name:"string",required:!1},description:"Class for the step indicator circle"},{key:"indicatorContent",value:{name:"string",required:!1},description:"Class for the content inside the indicator (number, icon)"},{key:"item",value:{name:"string",required:!1},description:"Class for each li item element"},{key:"label",value:{name:"string",required:!1},description:"Class for the step label"},{key:"list",value:{name:"string",required:!1},description:"Class for the ol list element"},{key:"root",value:{name:"string",required:!1},description:"Class for the root nav element"},{key:"stepWrapper",value:{name:"string",required:!1},description:"Class for the step wrapper (contains indicator + content)"}]}},description:"Custom class names"},clickable:{required:!0,tsType:{name:"boolean"},description:"Whether the step is clickable"},icons:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Custom icon for completed status */
  completed?: ReactNode;
  /** Custom icon for error status */
  error?: ReactNode;
}`,signature:{properties:[{key:"completed",value:{name:"ReactNode",required:!1},description:"Custom icon for completed status"},{key:"error",value:{name:"ReactNode",required:!1},description:"Custom icon for error status"}]}},description:"Custom icons for step statuses"},index:{required:!0,tsType:{name:"number"},description:"Step index (0-based)"},isLast:{required:!0,tsType:{name:"boolean"},description:"Whether this is the last step"},nextStepStatus:{required:!1,tsType:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}]},description:"Status of the next step (for connector coloring)"},orientation:{required:!0,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Orientation of the stepper"},showConnector:{required:!0,tsType:{name:"boolean"},description:"Show connector lines"},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the step indicator"},step:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /** Optional description for the step */
  description?: string;
  /** Whether this step is disabled (not clickable) */
  disabled?: boolean;
  /** Unique identifier for the step */
  id: string | number;
  /** Label displayed for the step (can be a string or ReactNode) */
  label?: ReactNode;
  /** Callback when this specific step is clicked */
  onClick?: () => void;
  /** Status of the step */
  status?: StepStatus;
}`,signature:{properties:[{key:"description",value:{name:"string",required:!1},description:"Optional description for the step"},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether this step is disabled (not clickable)"},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the step"},{key:"label",value:{name:"ReactNode",required:!1},description:"Label displayed for the step (can be a string or ReactNode)"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback when this specific step is clicked"},{key:"status",value:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}],required:!1},description:"Status of the step"}]}},description:"Step data"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override"},variant:{required:!0,tsType:{name:"union",raw:"'inline' | 'stacked' | 'horizontal'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'stacked'"},{name:"literal",value:"'horizontal'"}]},description:"Layout variant"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when step is clicked"}}};const F=({className:e,classNames:i,clickable:o=!1,currentStep:r,icons:d,orientation:h="vertical",showConnector:s=!0,size:l="sm",steps:a,theme:g,variant:p="inline",onStepClick:y})=>{const b=p??"inline",n=b==="horizontal"?"horizontal":h??"vertical",C=l??"sm",v=m.useMemo(()=>a.map((u,k)=>u.status?u:r!==void 0?k<r?{...u,status:"completed"}:k===r?{...u,status:"active"}:{...u,status:"pending"}:{...u,status:"pending"}),[a,r]);return t.jsx("nav",{className:c(D({orientation:n}),e,i?.root),"data-theme":g,"aria-label":"Progress steps",children:t.jsx("ol",{className:c(U({orientation:n}),i?.list),children:v.map((u,k)=>t.jsx("li",{className:c(E({orientation:n}),i?.item),children:t.jsx(G,{step:u,index:k,isLast:k===v.length-1,orientation:n,clickable:o??!1,onClick:()=>y?.(u,k),size:C,showConnector:s??!0,nextStepStatus:v[k+1]?.status,variant:b,classNames:i,icons:d})},u.id))})})};F.__docgenInfo={description:`A stepper component for displaying multi-step processes.
Supports vertical and horizontal orientations with various step states.

@example
\`\`\`tsx
// Basic vertical stepper (inline variant - text beside indicator)
<Stepper
  steps={[
    { id: 1, label: 'Select platform', status: 'completed' },
    { id: 2, label: 'Set up cluster', status: 'active' },
    { id: 3, label: 'Preparing', status: 'pending' },
  ]}
/>

// Stacked variant (text below indicator, larger circles)
<Stepper
  variant="stacked"
  steps={[
    { id: 1, label: 'Step 1', status: 'completed' },
    { id: 2, label: 'Step 2', status: 'active' },
    { id: 3, label: 'Step 3', status: 'pending' },
  ]}
/>

// Horizontal stepper
<Stepper
  orientation="horizontal"
  steps={[
    { id: 1, label: 'Step 1', status: 'completed' },
    { id: 2, label: 'Step 2', status: 'active' },
    { id: 3, label: 'Step 3', status: 'pending' },
  ]}
/>

// Auto-calculated statuses with currentStep
<Stepper
  steps={[
    { id: 1, label: 'Step 1' },
    { id: 2, label: 'Step 2' },
    { id: 3, label: 'Step 3' },
  ]}
  currentStep={1}
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-stepper--docs Storybook}`,methods:[],displayName:"Stepper",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the wrapper"},classNames:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Class for the connector line */
  connector?: string;
  /** Class for the step content wrapper (contains label + description) */
  content?: string;
  /** Class for the step description */
  description?: string;
  /** Class for the step indicator circle */
  indicator?: string;
  /** Class for the content inside the indicator (number, icon) */
  indicatorContent?: string;
  /** Class for each li item element */
  item?: string;
  /** Class for the step label */
  label?: string;
  /** Class for the ol list element */
  list?: string;
  /** Class for the root nav element */
  root?: string;
  /** Class for the step wrapper (contains indicator + content) */
  stepWrapper?: string;
}`,signature:{properties:[{key:"connector",value:{name:"string",required:!1},description:"Class for the connector line"},{key:"content",value:{name:"string",required:!1},description:"Class for the step content wrapper (contains label + description)"},{key:"description",value:{name:"string",required:!1},description:"Class for the step description"},{key:"indicator",value:{name:"string",required:!1},description:"Class for the step indicator circle"},{key:"indicatorContent",value:{name:"string",required:!1},description:"Class for the content inside the indicator (number, icon)"},{key:"item",value:{name:"string",required:!1},description:"Class for each li item element"},{key:"label",value:{name:"string",required:!1},description:"Class for the step label"},{key:"list",value:{name:"string",required:!1},description:"Class for the ol list element"},{key:"root",value:{name:"string",required:!1},description:"Class for the root nav element"},{key:"stepWrapper",value:{name:"string",required:!1},description:"Class for the step wrapper (contains indicator + content)"}]}},description:"Custom class names for each element"},clickable:{required:!1,tsType:{name:"boolean"},description:"Whether steps are clickable",defaultValue:{value:"false",computed:!1}},currentStep:{required:!1,tsType:{name:"number"},description:"Index of the current active step (0-based). When provided, step statuses are auto-calculated."},icons:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Custom icon for completed status */
  completed?: ReactNode;
  /** Custom icon for error status */
  error?: ReactNode;
}`,signature:{properties:[{key:"completed",value:{name:"ReactNode",required:!1},description:"Custom icon for completed status"},{key:"error",value:{name:"ReactNode",required:!1},description:"Custom icon for error status"}]}},description:"Custom icons for step statuses"},showConnector:{required:!1,tsType:{name:"boolean"},description:"Show connector lines between steps",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the step indicators",defaultValue:{value:"'sm'",computed:!1}},steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Optional description for the step */
  description?: string;
  /** Whether this step is disabled (not clickable) */
  disabled?: boolean;
  /** Unique identifier for the step */
  id: string | number;
  /** Label displayed for the step (can be a string or ReactNode) */
  label?: ReactNode;
  /** Callback when this specific step is clicked */
  onClick?: () => void;
  /** Status of the step */
  status?: StepStatus;
}`,signature:{properties:[{key:"description",value:{name:"string",required:!1},description:"Optional description for the step"},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether this step is disabled (not clickable)"},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the step"},{key:"label",value:{name:"ReactNode",required:!1},description:"Label displayed for the step (can be a string or ReactNode)"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback when this specific step is clicked"},{key:"status",value:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}],required:!1},description:"Status of the step"}]}}],raw:"Step[]"},description:"Array of steps to display"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override for this component"},variant:{required:!1,tsType:{name:"union",raw:"'inline' | 'stacked' | 'horizontal'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'stacked'"},{name:"literal",value:"'horizontal'"}]},description:"Layout variant: 'inline' (text beside indicator) or 'stacked' (text below indicator)",defaultValue:{value:"'inline'",computed:!1}},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(step: Step, index: number) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /** Optional description for the step */
  description?: string;
  /** Whether this step is disabled (not clickable) */
  disabled?: boolean;
  /** Unique identifier for the step */
  id: string | number;
  /** Label displayed for the step (can be a string or ReactNode) */
  label?: ReactNode;
  /** Callback when this specific step is clicked */
  onClick?: () => void;
  /** Status of the step */
  status?: StepStatus;
}`,signature:{properties:[{key:"description",value:{name:"string",required:!1},description:"Optional description for the step"},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether this step is disabled (not clickable)"},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the step"},{key:"label",value:{name:"ReactNode",required:!1},description:"Label displayed for the step (can be a string or ReactNode)"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback when this specific step is clicked"},{key:"status",value:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}],required:!1},description:"Status of the step"}]}},name:"step"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Callback when a step is clicked"},orientation:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};export{F as S};
