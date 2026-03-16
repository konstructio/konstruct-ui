import{r as U,j as o}from"./iframe-DLrn8Gk9.js";import{c as Y}from"./compiler-runtime-DxXHijtq.js";import{a as D,c as v}from"./index-CwGTy2we.js";import{E as ke}from"./Exclamation-Bp1A8TaC.js";import{C as ye}from"./check-Dc3RuNkG.js";import{S as Ce}from"./index-y1nNICkM.js";function ue({clickable:f,onClick:e,step:t}){const s=t.status??"pending",u=t.disabled||s==="active",l=!!(t.onClick||e),c=f&&!u&&l,d=typeof t.label=="string"?"span":Ce,a=U.useCallback(()=>{c&&(t.onClick?t.onClick():e&&e())},[c,t.onClick,e]),r=U.useCallback(n=>{c&&(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),a())},[c,a]);return{isClickable:c,isDisabled:u,LabelComponent:d,status:s,handleClick:a,handleKeyDown:r}}const qe=D(["flex"],{variants:{orientation:{vertical:["flex-col"],horizontal:["flex-row","items-start"]}},defaultVariants:{orientation:"vertical"}}),xe=D(["flex","list-none","p-0","m-0"],{variants:{orientation:{vertical:["flex-col"],horizontal:["flex-row"]}},defaultVariants:{orientation:"vertical"}}),we=D(["list-none"],{variants:{orientation:{vertical:[],horizontal:[]}},defaultVariants:{orientation:"vertical"}}),re=D(["flex","group","relative"],{variants:{orientation:{vertical:[],horizontal:["min-w-0"]},variant:{inline:["flex-row","items-center","gap-4"],stacked:["flex-col","items-center","gap-2"],horizontal:["flex-row","items-center","gap-4"]},clickable:{true:["cursor-pointer"],false:["cursor-default"]}},defaultVariants:{orientation:"vertical",variant:"inline",clickable:!1}}),se=D(["flex","items-center","justify-center","rounded-full","shrink-0","font-medium","transition-all","duration-200"],{variants:{status:{completed:["bg-transparent","border-2","border-aurora-500","text-aurora-500","dark:border-aurora-500","dark:text-aurora-500"],active:["bg-aurora-500","text-slate-700","border-0","dark:bg-aurora-500","dark:text-metal-900"],pending:["border-2","border-slate-300","text-slate-600","bg-transparent","dark:border-metal-200","dark:text-metal-200"],error:["bg-red-600","text-white","border-0","dark:bg-red-600","dark:text-white"]},size:{sm:["w-5","h-5","text-xs","uppercase","tracking-wide"],md:["w-[37px]","h-[37px]","text-sm","font-semibold"],lg:["w-[54px]","h-[54px]","text-lg","font-semibold"]}},defaultVariants:{status:"pending",size:"sm"}}),le=D(["flex","flex-col","gap-0.5"],{variants:{variant:{inline:["items-start"],stacked:["items-center"],horizontal:["items-start"]}},defaultVariants:{variant:"inline"}}),oe=D(["font-medium","transition-colors","duration-200","leading-tight","select-none"],{variants:{status:{completed:["text-slate-700","dark:text-metal-200"],active:["text-slate-700","dark:text-metal-50"],pending:["text-slate-600","dark:text-metal-50"],error:["text-red-700","dark:text-red-500"]},size:{sm:["text-sm"],md:["text-sm"],lg:["text-base"]},variant:{inline:["text-left"],stacked:["text-center"],horizontal:["text-left"]}},defaultVariants:{status:"pending",size:"sm",variant:"inline"}}),ce=D(["transition-colors","duration-200","leading-tight","select-none"],{variants:{status:{completed:["text-slate-500","dark:text-slate-400"],active:["text-slate-600","dark:text-slate-300"],pending:["text-slate-400","dark:text-slate-500"],error:["text-red-500","dark:text-red-400"]},size:{sm:["text-xs"],md:["text-xs"],lg:["text-sm"]},variant:{inline:["text-left"],stacked:["text-center"],horizontal:["text-left"]}},defaultVariants:{status:"pending",size:"sm",variant:"inline"}}),Se=D(["transition-colors","duration-200"],{variants:{orientation:{vertical:["w-0.5"],horizontal:["h-0.5","flex-1","min-w-4"]},status:{completed:["bg-aurora-500","dark:bg-aurora-500"],active:["bg-aurora-500","dark:bg-aurora-500"],pending:["bg-slate-300","dark:bg-metal-400"],error:["bg-red-700","dark:bg-red-600"]},size:{sm:[],md:[],lg:[]},variant:{inline:[],stacked:[],horizontal:[]}},compoundVariants:[{orientation:"vertical",variant:"inline",size:"sm",class:["h-6","ml-[9px]","my-1"]},{orientation:"vertical",variant:"inline",size:"md",class:["h-6","ml-[17px]","my-1"]},{orientation:"vertical",variant:"inline",size:"lg",class:["h-6","ml-[26px]","my-1"]},{orientation:"vertical",variant:"stacked",size:"sm",class:["h-6","mx-auto","my-1"]},{orientation:"vertical",variant:"stacked",size:"md",class:["h-7","mx-auto","my-2"]},{orientation:"vertical",variant:"stacked",size:"lg",class:["h-8","mx-auto","my-2"]}],defaultVariants:{orientation:"vertical",status:"pending",size:"sm",variant:"inline"}}),Ne={completed:", completed",active:", current",error:", error",pending:""};function de(f,e,t){const s=`Step ${f+1}`,u=typeof e=="string"?`: ${e}`:"";return`${s}${u}${Ne[t]}`}const me=f=>{const e=Y.c(8),{className:t,orientation:s,size:u,status:l,variant:c}=f;let d;e[0]!==t||e[1]!==s||e[2]!==u||e[3]!==l||e[4]!==c?(d=v(Se({orientation:s,size:u,status:l,variant:c}),t),e[0]=t,e[1]=s,e[2]=u,e[3]=l,e[4]=c,e[5]=d):d=e[5];let a;return e[6]!==d?(a=o.jsx("div",{className:d,role:"presentation","aria-hidden":"true"}),e[6]=d,e[7]=a):a=e[7],a},fe=U.memo(me);me.__docgenInfo={description:"",methods:[],displayName:"StepConnectorBase",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},orientation:{required:!0,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Orientation of the connector"},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the connector"},status:{required:!0,tsType:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}]},description:"Status of the step"},variant:{required:!0,tsType:{name:"union",raw:"'inline' | 'stacked' | 'horizontal'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'stacked'"},{name:"literal",value:"'horizontal'"}]},description:"Layout variant"}}};const ze={sm:12,md:16,lg:24},Te={sm:"h-3 w-3",md:"h-4 w-4",lg:"h-6 w-6"},he=f=>{const e=Y.c(17),{className:t,icons:s,index:u,size:l,status:c}=f;if(c==="completed"){if(s?.completed){let x;return e[0]!==t||e[1]!==s.completed?(x=o.jsx("span",{className:t,children:s.completed}),e[0]=t,e[1]=s.completed,e[2]=x):x=e[2],x}const r=Te[l];let n;e[3]!==t||e[4]!==r?(n=v(r,t),e[3]=t,e[4]=r,e[5]=n):n=e[5];let b;return e[6]!==n?(b=o.jsx(ye,{className:n,strokeWidth:2.5,"aria-hidden":"true"}),e[6]=n,e[7]=b):b=e[7],b}if(c==="error"){if(s?.error){let b;return e[8]!==t||e[9]!==s.error?(b=o.jsx("span",{className:t,children:s.error}),e[8]=t,e[9]=s.error,e[10]=b):b=e[10],b}const r=ze[l];let n;return e[11]!==t||e[12]!==r?(n=o.jsx(ke,{size:r,className:t}),e[11]=t,e[12]=r,e[13]=n):n=e[13],n}const d=u+1;let a;return e[14]!==t||e[15]!==d?(a=o.jsx("span",{className:t,"aria-hidden":"true",children:d}),e[14]=t,e[15]=d,e[16]=a):a=e[16],a},pe=U.memo(he);he.__docgenInfo={description:"",methods:[],displayName:"StepIndicatorContentBase",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the content"},icons:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Custom icon for completed status */
  completed?: ReactNode;
  /** Custom icon for error status */
  error?: ReactNode;
}`,signature:{properties:[{key:"completed",value:{name:"ReactNode",required:!1},description:"Custom icon for completed status"},{key:"error",value:{name:"ReactNode",required:!1},description:"Custom icon for error status"}]}},description:"Custom icons for step statuses"},index:{required:!0,tsType:{name:"number"},description:"Step index (0-based)"},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the indicator"},status:{required:!0,tsType:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}]},description:"Status of the step"}}};const ve=f=>{const e=Y.c(130),{classNames:t,clickable:s,icons:u,index:l,isLast:c,showConnector:d,size:a,step:r,variant:n,onClick:b}=f;let x;e[0]!==s||e[1]!==b||e[2]!==r?(x={clickable:s,step:r,onClick:b},e[0]=s,e[1]=b,e[2]=r,e[3]=x):x=e[3];const{isClickable:g,isDisabled:S,LabelComponent:I,status:i,handleClick:L,handleKeyDown:O}=ue(x);if(n==="horizontal"){let $;e[4]!==t?.stepWrapper||e[5]!==g||e[6]!==n?($=v(re({orientation:"horizontal",variant:n,clickable:g}),t?.stepWrapper),e[4]=t?.stepWrapper,e[5]=g,e[6]=n,e[7]=$):$=e[7];const te=g?"button":void 0,ne=g?0:void 0,ie=i==="active"?"step":void 0;let E;e[8]!==S?(E=S&&{"aria-disabled":!0},e[8]=S,e[9]=E):E=e[9];let H;e[10]!==l||e[11]!==i||e[12]!==r.label?(H=de(l,r.label,i),e[10]=l,e[11]=i,e[12]=r.label,e[13]=H):H=e[13];let K;e[14]!==t?.indicator||e[15]!==a||e[16]!==i?(K=v(se({status:i,size:a}),t?.indicator),e[14]=t?.indicator,e[15]=a,e[16]=i,e[17]=K):K=e[17];const ae=t?.indicatorContent;let P;e[18]!==u||e[19]!==l||e[20]!==a||e[21]!==i||e[22]!==ae?(P=o.jsx(pe,{status:i,index:l,size:a,icons:u,className:ae}),e[18]=u,e[19]=l,e[20]=a,e[21]=i,e[22]=ae,e[23]=P):P=e[23];let M;e[24]!==P||e[25]!==K?(M=o.jsx("div",{className:K,"aria-hidden":"true",children:P}),e[24]=P,e[25]=K,e[26]=M):M=e[26];let Z;e[27]!==t?.content||e[28]!==n?(Z=v(le({variant:n}),t?.content),e[27]=t?.content,e[28]=n,e[29]=Z):Z=e[29];let F;e[30]!==I||e[31]!==t?.label||e[32]!==a||e[33]!==i||e[34]!==r.label||e[35]!==n?(F=r.label&&o.jsx(I,{className:v(oe({status:i,size:a,variant:n}),t?.label),children:r.label}),e[30]=I,e[31]=t?.label,e[32]=a,e[33]=i,e[34]=r.label,e[35]=n,e[36]=F):F=e[36];let G;e[37]!==t?.description||e[38]!==a||e[39]!==i||e[40]!==r.description||e[41]!==n?(G=r.description&&o.jsx("span",{className:v(ce({status:i,size:a,variant:n}),t?.description),children:r.description}),e[37]=t?.description,e[38]=a,e[39]=i,e[40]=r.description,e[41]=n,e[42]=G):G=e[42];let J;e[43]!==Z||e[44]!==F||e[45]!==G?(J=o.jsxs("div",{className:Z,children:[F,G]}),e[43]=Z,e[44]=F,e[45]=G,e[46]=J):J=e[46];let Q;e[47]!==L||e[48]!==O||e[49]!==M||e[50]!==J||e[51]!==$||e[52]!==te||e[53]!==ne||e[54]!==ie||e[55]!==E||e[56]!==H?(Q=o.jsxs("div",{className:$,role:te,tabIndex:ne,onClick:L,onKeyDown:O,"aria-current":ie,...E,"aria-label":H,children:[M,J]}),e[47]=L,e[48]=O,e[49]=M,e[50]=J,e[51]=$,e[52]=te,e[53]=ne,e[54]=ie,e[55]=E,e[56]=H,e[57]=Q):Q=e[57];let X;e[58]!==t?.connector||e[59]!==c||e[60]!==d||e[61]!==i?(X=!c&&d&&o.jsx("div",{className:v("h-0.5 w-7.5 mx-2 transition-colors duration-200",i==="completed"||i==="active"?"bg-aurora-500":i==="error"?"bg-red-700 dark:bg-red-600":"bg-slate-300 dark:bg-metal-400",t?.connector),role:"presentation","aria-hidden":"true"}),e[58]=t?.connector,e[59]=c,e[60]=d,e[61]=i,e[62]=X):X=e[62];let ee;return e[63]!==Q||e[64]!==X?(ee=o.jsxs("div",{className:"flex items-center",children:[Q,X]}),e[63]=Q,e[64]=X,e[65]=ee):ee=e[65],ee}let m;e[66]!==t?.stepWrapper||e[67]!==g||e[68]!==n?(m=v(re({orientation:"horizontal",variant:n,clickable:g}),t?.stepWrapper),e[66]=t?.stepWrapper,e[67]=g,e[68]=n,e[69]=m):m=e[69];const A=g?"button":void 0,V=g?0:void 0,z=i==="active"?"step":void 0;let k;e[70]!==S?(k=S&&{"aria-disabled":!0},e[70]=S,e[71]=k):k=e[71];let y;e[72]!==l||e[73]!==i||e[74]!==r.label?(y=de(l,r.label,i),e[72]=l,e[73]=i,e[74]=r.label,e[75]=y):y=e[75];let C;e[76]!==t?.indicator||e[77]!==a||e[78]!==i?(C=v(se({status:i,size:a}),t?.indicator),e[76]=t?.indicator,e[77]=a,e[78]=i,e[79]=C):C=e[79];const N=t?.indicatorContent;let q;e[80]!==u||e[81]!==l||e[82]!==a||e[83]!==i||e[84]!==N?(q=o.jsx(pe,{status:i,index:l,size:a,icons:u,className:N}),e[80]=u,e[81]=l,e[82]=a,e[83]=i,e[84]=N,e[85]=q):q=e[85];let h;e[86]!==q||e[87]!==C?(h=o.jsx("div",{className:C,"aria-hidden":"true",children:q}),e[86]=q,e[87]=C,e[88]=h):h=e[88];let p;e[89]!==t?.content||e[90]!==n?(p=v(le({variant:n}),t?.content),e[89]=t?.content,e[90]=n,e[91]=p):p=e[91];let w;e[92]!==I||e[93]!==t?.label||e[94]!==a||e[95]!==i||e[96]!==r.label||e[97]!==n?(w=r.label&&o.jsx(I,{className:v(oe({status:i,size:a,variant:n}),t?.label),children:r.label}),e[92]=I,e[93]=t?.label,e[94]=a,e[95]=i,e[96]=r.label,e[97]=n,e[98]=w):w=e[98];let T;e[99]!==t?.description||e[100]!==a||e[101]!==i||e[102]!==r.description||e[103]!==n?(T=r.description&&o.jsx("span",{className:v(ce({status:i,size:a,variant:n}),t?.description),children:r.description}),e[99]=t?.description,e[100]=a,e[101]=i,e[102]=r.description,e[103]=n,e[104]=T):T=e[104];let j;e[105]!==p||e[106]!==w||e[107]!==T?(j=o.jsxs("div",{className:p,children:[w,T]}),e[105]=p,e[106]=w,e[107]=T,e[108]=j):j=e[108];let R;e[109]!==L||e[110]!==O||e[111]!==h||e[112]!==j||e[113]!==m||e[114]!==A||e[115]!==V||e[116]!==z||e[117]!==k||e[118]!==y?(R=o.jsxs("div",{className:m,role:A,tabIndex:V,onClick:L,onKeyDown:O,"aria-current":z,...k,"aria-label":y,children:[h,j]}),e[109]=L,e[110]=O,e[111]=h,e[112]=j,e[113]=m,e[114]=A,e[115]=V,e[116]=z,e[117]=k,e[118]=y,e[119]=R):R=e[119];let W;e[120]!==t?.connector||e[121]!==c||e[122]!==d||e[123]!==a||e[124]!==i||e[125]!==n?(W=!c&&d&&o.jsx(fe,{orientation:"horizontal",status:i,size:a,variant:n,className:v("mt-6.5",t?.connector)}),e[120]=t?.connector,e[121]=c,e[122]=d,e[123]=a,e[124]=i,e[125]=n,e[126]=W):W=e[126];let B;return e[127]!==R||e[128]!==W?(B=o.jsxs("div",{className:"flex flex-1 items-start",children:[R,W]}),e[127]=R,e[128]=W,e[129]=B):B=e[129],B},je=U.memo(ve);ve.__docgenInfo={description:"",methods:[],displayName:"HorizontalStepItemBase",props:{classNames:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"description",value:{name:"string",required:!1},description:"Optional description for the step"},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether this step is disabled (not clickable)"},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the step"},{key:"label",value:{name:"ReactNode",required:!1},description:"Label displayed for the step (can be a string or ReactNode)"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback when this specific step is clicked"},{key:"status",value:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}],required:!1},description:"Status of the step"}]}},description:"Step data"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override"},variant:{required:!0,tsType:{name:"union",raw:"'inline' | 'stacked' | 'horizontal'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'stacked'"},{name:"literal",value:"'horizontal'"}]},description:"Layout variant"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when step is clicked"}}};const be=f=>{const e=Y.c(69),{classNames:t,clickable:s,icons:u,index:l,isLast:c,showConnector:d,size:a,step:r,variant:n,onClick:b}=f;let x;e[0]!==s||e[1]!==b||e[2]!==r?(x={clickable:s,step:r,onClick:b},e[0]=s,e[1]=b,e[2]=r,e[3]=x):x=e[3];const{isClickable:g,isDisabled:S,LabelComponent:I,status:i,handleClick:L,handleKeyDown:O}=ue(x),_=n==="stacked"?"flex flex-col items-center":"flex flex-col";let m;e[4]!==t?.stepWrapper||e[5]!==g||e[6]!==n?(m=v(re({orientation:"vertical",variant:n,clickable:g}),t?.stepWrapper),e[4]=t?.stepWrapper,e[5]=g,e[6]=n,e[7]=m):m=e[7];const A=g?"button":void 0,V=g?0:void 0,z=i==="active"?"step":void 0;let k;e[8]!==S?(k=S&&{"aria-disabled":!0},e[8]=S,e[9]=k):k=e[9];let y;e[10]!==l||e[11]!==i||e[12]!==r.label?(y=de(l,r.label,i),e[10]=l,e[11]=i,e[12]=r.label,e[13]=y):y=e[13];let C;e[14]!==t?.indicator||e[15]!==a||e[16]!==i?(C=v(se({status:i,size:a}),t?.indicator),e[14]=t?.indicator,e[15]=a,e[16]=i,e[17]=C):C=e[17];const N=t?.indicatorContent;let q;e[18]!==u||e[19]!==l||e[20]!==a||e[21]!==i||e[22]!==N?(q=o.jsx(pe,{status:i,index:l,size:a,icons:u,className:N}),e[18]=u,e[19]=l,e[20]=a,e[21]=i,e[22]=N,e[23]=q):q=e[23];let h;e[24]!==q||e[25]!==C?(h=o.jsx("div",{className:C,"aria-hidden":"true",children:q}),e[24]=q,e[25]=C,e[26]=h):h=e[26];let p;e[27]!==t?.content||e[28]!==n?(p=v(le({variant:n}),t?.content),e[27]=t?.content,e[28]=n,e[29]=p):p=e[29];let w;e[30]!==I||e[31]!==t?.label||e[32]!==a||e[33]!==i||e[34]!==r.label||e[35]!==n?(w=r.label&&o.jsx(I,{className:v(oe({status:i,size:a,variant:n}),t?.label),children:r.label}),e[30]=I,e[31]=t?.label,e[32]=a,e[33]=i,e[34]=r.label,e[35]=n,e[36]=w):w=e[36];let T;e[37]!==t?.description||e[38]!==a||e[39]!==i||e[40]!==r.description||e[41]!==n?(T=r.description&&o.jsx("span",{className:v(ce({status:i,size:a,variant:n}),t?.description),children:r.description}),e[37]=t?.description,e[38]=a,e[39]=i,e[40]=r.description,e[41]=n,e[42]=T):T=e[42];let j;e[43]!==p||e[44]!==w||e[45]!==T?(j=o.jsxs("div",{className:p,children:[w,T]}),e[43]=p,e[44]=w,e[45]=T,e[46]=j):j=e[46];let R;e[47]!==L||e[48]!==O||e[49]!==h||e[50]!==j||e[51]!==m||e[52]!==A||e[53]!==V||e[54]!==z||e[55]!==k||e[56]!==y?(R=o.jsxs("div",{className:m,role:A,tabIndex:V,onClick:L,onKeyDown:O,"aria-current":z,...k,"aria-label":y,children:[h,j]}),e[47]=L,e[48]=O,e[49]=h,e[50]=j,e[51]=m,e[52]=A,e[53]=V,e[54]=z,e[55]=k,e[56]=y,e[57]=R):R=e[57];let W;e[58]!==t?.connector||e[59]!==c||e[60]!==d||e[61]!==a||e[62]!==i||e[63]!==n?(W=!c&&d&&o.jsx(fe,{orientation:"vertical",status:i,size:a,variant:n,className:t?.connector}),e[58]=t?.connector,e[59]=c,e[60]=d,e[61]=a,e[62]=i,e[63]=n,e[64]=W):W=e[64];let B;return e[65]!==R||e[66]!==W||e[67]!==_?(B=o.jsxs("div",{className:_,children:[R,W]}),e[65]=R,e[66]=W,e[67]=_,e[68]=B):B=e[68],B},Re=U.memo(be);be.__docgenInfo={description:"",methods:[],displayName:"VerticalStepItemBase",props:{classNames:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"description",value:{name:"string",required:!1},description:"Optional description for the step"},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether this step is disabled (not clickable)"},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the step"},{key:"label",value:{name:"ReactNode",required:!1},description:"Label displayed for the step (can be a string or ReactNode)"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback when this specific step is clicked"},{key:"status",value:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}],required:!1},description:"Status of the step"}]}},description:"Step data"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override"},variant:{required:!0,tsType:{name:"union",raw:"'inline' | 'stacked' | 'horizontal'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'stacked'"},{name:"literal",value:"'horizontal'"}]},description:"Layout variant"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when step is clicked"}}};const ge=f=>{const e=Y.c(4);if(f.orientation==="horizontal"||f.variant==="horizontal"){let s;return e[0]!==f?(s=o.jsx(je,{...f}),e[0]=f,e[1]=s):s=e[1],s}let t;return e[2]!==f?(t=o.jsx(Re,{...f}),e[2]=f,e[3]=t):t=e[3],t},We=U.memo(ge);ge.__docgenInfo={description:"",methods:[],displayName:"StepItemBase",props:{classNames:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"description",value:{name:"string",required:!1},description:"Optional description for the step"},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether this step is disabled (not clickable)"},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the step"},{key:"label",value:{name:"ReactNode",required:!1},description:"Label displayed for the step (can be a string or ReactNode)"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback when this specific step is clicked"},{key:"status",value:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}],required:!1},description:"Status of the step"}]}},description:"Step data"},theme:{required:!1,tsType:{name:"Theme"},description:"Theme override"},variant:{required:!0,tsType:{name:"union",raw:"'inline' | 'stacked' | 'horizontal'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'stacked'"},{name:"literal",value:"'horizontal'"}]},description:"Layout variant"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when step is clicked"}}};const Ie=f=>{const e=Y.c(29),{className:t,classNames:s,clickable:u,currentStep:l,icons:c,orientation:d,showConnector:a,size:r,steps:n,theme:b,variant:x,onStepClick:g}=f,S=u===void 0?!1:u,I=d===void 0?"vertical":d,i=a===void 0?!0:a,L=r===void 0?"sm":r,_=(x===void 0?"inline":x)??"inline",m=_==="horizontal"?"horizontal":I??"vertical",A=L??"sm";let V;if(e[0]!==l||e[1]!==n){let h;e[3]!==l?(h=(p,w)=>p.status?p:l!==void 0?w<l?{...p,status:"completed"}:w===l?{...p,status:"active"}:{...p,status:"pending"}:{...p,status:"pending"},e[3]=l,e[4]=h):h=e[4],V=n.map(h),e[0]=l,e[1]=n,e[2]=V}else V=e[2];const z=V;let k;e[5]!==t||e[6]!==s?.root||e[7]!==m?(k=v(qe({orientation:m}),t,s?.root),e[5]=t,e[6]=s?.root,e[7]=m,e[8]=k):k=e[8];let y;e[9]!==s?.list||e[10]!==m?(y=v(xe({orientation:m}),s?.list),e[9]=s?.list,e[10]=m,e[11]=y):y=e[11];let C;e[12]!==s||e[13]!==S||e[14]!==c||e[15]!==g||e[16]!==m||e[17]!==A||e[18]!==_||e[19]!==i||e[20]!==z?(C=z.map((h,p)=>o.jsx("li",{className:v(we({orientation:m}),s?.item),children:o.jsx(We,{step:h,index:p,isLast:p===z.length-1,orientation:m,clickable:S??!1,onClick:()=>g?.(h,p),size:A,showConnector:i??!0,nextStepStatus:z[p+1]?.status,variant:_,classNames:s,icons:c})},h.id)),e[12]=s,e[13]=S,e[14]=c,e[15]=g,e[16]=m,e[17]=A,e[18]=_,e[19]=i,e[20]=z,e[21]=C):C=e[21];let N;e[22]!==y||e[23]!==C?(N=o.jsx("ol",{className:y,children:C}),e[22]=y,e[23]=C,e[24]=N):N=e[24];let q;return e[25]!==N||e[26]!==k||e[27]!==b?(q=o.jsx("nav",{className:k,"data-theme":b,"aria-label":"Progress steps",children:N}),e[25]=N,e[26]=k,e[27]=b,e[28]=q):q=e[28],q};Ie.__docgenInfo={description:`A stepper component for displaying multi-step processes.
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
}`,signature:{properties:[{key:"description",value:{name:"string",required:!1},description:"Optional description for the step"},{key:"disabled",value:{name:"boolean",required:!1},description:"Whether this step is disabled (not clickable)"},{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Unique identifier for the step"},{key:"label",value:{name:"ReactNode",required:!1},description:"Label displayed for the step (can be a string or ReactNode)"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback when this specific step is clicked"},{key:"status",value:{name:"union",raw:"'completed' | 'active' | 'pending' | 'error'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'error'"}],required:!1},description:"Status of the step"}]}},name:"step"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Callback when a step is clicked"},orientation:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};export{Ie as S};
