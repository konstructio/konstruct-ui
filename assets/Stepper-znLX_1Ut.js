import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{o as n,t as r}from"./iframe-Cmi29qjC.js";import{L as i,t as a}from"./components-kNyAXuxa.js";import{a as o,n as s,r as c,t as l}from"./dist-D8TPiX_U.js";import{r as u,t as d}from"./dist-pBH6xNED.js";import{f,t as p}from"./lucide-react-CVZIDnbc.js";function m({clickable:e,onClick:t,step:n}){let r=n.status??`pending`,i=n.disabled||r===`active`,a=!!(n.onClick||t),o=e&&!i&&a,s=typeof n.label==`string`?`span`:d,c=(0,h.useCallback)(()=>{o&&(n.onClick?n.onClick():t&&t())},[o,n.onClick,t]);return{isClickable:o,isDisabled:i,LabelComponent:s,status:r,handleClick:c,handleKeyDown:(0,h.useCallback)(e=>{o&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),c())},[o,c])}}var h,g=e((()=>{u(),h=t(n(),1)})),_=e((()=>{g()})),v,y,b,x,S,C,w,T,E,D=e((()=>{s(),v=l([`flex`],{variants:{orientation:{vertical:[`flex-col`],horizontal:[`flex-row`,`items-start`]}},defaultVariants:{orientation:`vertical`}}),y=l([`flex`,`list-none`,`p-0`,`m-0`],{variants:{orientation:{vertical:[`flex-col`],horizontal:[`flex-row`]}},defaultVariants:{orientation:`vertical`}}),b=l([`list-none`],{variants:{orientation:{vertical:[],horizontal:[]}},defaultVariants:{orientation:`vertical`}}),x=l([`flex`,`group`,`relative`],{variants:{orientation:{vertical:[],horizontal:[`min-w-0`]},variant:{inline:[`flex-row`,`items-center`,`gap-4`],stacked:[`flex-col`,`items-center`,`gap-2`],horizontal:[`flex-row`,`items-center`,`gap-4`]},clickable:{true:[`cursor-pointer`],false:[`cursor-default`]}},defaultVariants:{orientation:`vertical`,variant:`inline`,clickable:!1}}),S=l([`flex`,`items-center`,`justify-center`,`rounded-full`,`shrink-0`,`font-medium`,`transition-all`,`duration-200`],{variants:{status:{completed:[`bg-transparent`,`border-2`,`border-aurora-500`,`text-aurora-500`,`dark:border-aurora-500`,`dark:text-aurora-500`],active:[`bg-aurora-500`,`text-slate-700`,`border-0`,`dark:bg-aurora-500`,`dark:text-metal-900`],pending:[`border-2`,`border-slate-300`,`text-slate-600`,`bg-transparent`,`dark:border-metal-200`,`dark:text-metal-200`],error:[`bg-red-600`,`text-white`,`border-0`,`dark:bg-red-600`,`dark:text-white`]},size:{sm:[`w-5`,`h-5`,`text-xs`,`uppercase`,`tracking-wide`],md:[`w-[37px]`,`h-[37px]`,`text-sm`,`font-semibold`],lg:[`w-[54px]`,`h-[54px]`,`text-lg`,`font-semibold`]}},defaultVariants:{status:`pending`,size:`sm`}}),C=l([`flex`,`flex-col`,`gap-0.5`],{variants:{variant:{inline:[`items-start`],stacked:[`items-center`],horizontal:[`items-start`]}},defaultVariants:{variant:`inline`}}),w=l([`font-medium`,`transition-colors`,`duration-200`,`leading-tight`,`select-none`],{variants:{status:{completed:[`text-slate-700`,`dark:text-metal-200`],active:[`text-slate-700`,`dark:text-metal-50`],pending:[`text-slate-600`,`dark:text-metal-50`],error:[`text-red-700`,`dark:text-red-500`]},size:{sm:[`text-sm`],md:[`text-sm`],lg:[`text-base`]},variant:{inline:[`text-left`],stacked:[`text-center`],horizontal:[`text-left`]}},defaultVariants:{status:`pending`,size:`sm`,variant:`inline`}}),T=l([`transition-colors`,`duration-200`,`leading-tight`,`select-none`],{variants:{status:{completed:[`text-slate-500`,`dark:text-slate-400`],active:[`text-slate-600`,`dark:text-slate-300`],pending:[`text-slate-400`,`dark:text-slate-500`],error:[`text-red-500`,`dark:text-red-400`]},size:{sm:[`text-xs`],md:[`text-xs`],lg:[`text-sm`]},variant:{inline:[`text-left`],stacked:[`text-center`],horizontal:[`text-left`]}},defaultVariants:{status:`pending`,size:`sm`,variant:`inline`}}),E=l([`transition-colors`,`duration-200`],{variants:{orientation:{vertical:[`w-0.5`],horizontal:[`h-0.5`,`flex-1`,`min-w-4`]},status:{completed:[`bg-aurora-500`,`dark:bg-aurora-500`],active:[`bg-aurora-500`,`dark:bg-aurora-500`],pending:[`bg-slate-300`,`dark:bg-metal-400`],error:[`bg-red-700`,`dark:bg-red-600`]},size:{sm:[],md:[],lg:[]},variant:{inline:[],stacked:[],horizontal:[]}},compoundVariants:[{orientation:`vertical`,variant:`inline`,size:`sm`,class:[`h-6`,`ml-[9px]`,`my-1`]},{orientation:`vertical`,variant:`inline`,size:`md`,class:[`h-6`,`ml-[17px]`,`my-1`]},{orientation:`vertical`,variant:`inline`,size:`lg`,class:[`h-6`,`ml-[26px]`,`my-1`]},{orientation:`vertical`,variant:`stacked`,size:`sm`,class:[`h-6`,`mx-auto`,`my-1`]},{orientation:`vertical`,variant:`stacked`,size:`md`,class:[`h-7`,`mx-auto`,`my-2`]},{orientation:`vertical`,variant:`stacked`,size:`lg`,class:[`h-8`,`mx-auto`,`my-2`]}],defaultVariants:{orientation:`vertical`,status:`pending`,size:`sm`,variant:`inline`}}),l([`flex`,`items-center`,`flex-1`],{variants:{variant:{inline:[`mt-2.5`],stacked:[`mt-[26px]`],horizontal:[`mt-0`]}},defaultVariants:{variant:`inline`}})}));function O(e,t,n){return`${`Step ${e+1}`}${typeof t==`string`?`: ${t}`:``}${ee[n]}`}var ee,k=e((()=>{ee={completed:`, completed`,active:`, current`,error:`, error`,pending:``}})),A,j,M,N,P=e((()=>{A=t(n(),1),o(),D(),j=r(),M=({className:e,orientation:t,size:n,status:r,variant:i})=>(0,j.jsx)(`div`,{className:c(E({orientation:t,size:n,status:r,variant:i}),e),role:`presentation`,"aria-hidden":`true`}),N=(0,A.memo)(M),M.__docgenInfo={description:``,methods:[],displayName:`StepConnectorBase`,props:{className:{required:!1,tsType:{name:`string`},description:`Additional CSS class`},orientation:{required:!0,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:`Orientation of the connector`},size:{required:!0,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size of the connector`},status:{required:!0,tsType:{name:`union`,raw:`'completed' | 'active' | 'pending' | 'error'`,elements:[{name:`literal`,value:`'completed'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'pending'`},{name:`literal`,value:`'error'`}]},description:`Status of the step`},variant:{required:!0,tsType:{name:`union`,raw:`'inline' | 'stacked' | 'horizontal'`,elements:[{name:`literal`,value:`'inline'`},{name:`literal`,value:`'stacked'`},{name:`literal`,value:`'horizontal'`}]},description:`Layout variant`}}}})),F,I,te=e((()=>{F={sm:12,md:16,lg:24},I={sm:`h-3 w-3`,md:`h-4 w-4`,lg:`h-6 w-6`}})),ne,L,R,z,B=e((()=>{p(),ne=t(n(),1),a(),o(),te(),L=r(),R=({className:e,icons:t,index:n,size:r,status:a})=>a===`completed`?t?.completed?(0,L.jsx)(`span`,{className:e,children:t.completed}):(0,L.jsx)(f,{className:c(I[r],e),strokeWidth:2.5,"aria-hidden":`true`}):a===`error`?t?.error?(0,L.jsx)(`span`,{className:e,children:t.error}):(0,L.jsx)(i,{size:F[r],className:e}):(0,L.jsx)(`span`,{className:e,"aria-hidden":`true`,children:n+1}),z=(0,ne.memo)(R),R.__docgenInfo={description:``,methods:[],displayName:`StepIndicatorContentBase`,props:{className:{required:!1,tsType:{name:`string`},description:`Additional CSS class for the content`},icons:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  /** Custom icon for completed status */
  completed?: ReactNode;
  /** Custom icon for error status */
  error?: ReactNode;
}`,signature:{properties:[{key:`completed`,value:{name:`ReactNode`,required:!1},description:`Custom icon for completed status`},{key:`error`,value:{name:`ReactNode`,required:!1},description:`Custom icon for error status`}]}},description:`Custom icons for step statuses`},index:{required:!0,tsType:{name:`number`},description:`Step index (0-based)`},size:{required:!0,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size of the indicator`},status:{required:!0,tsType:{name:`union`,raw:`'completed' | 'active' | 'pending' | 'error'`,elements:[{name:`literal`,value:`'completed'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'pending'`},{name:`literal`,value:`'error'`}]},description:`Status of the step`}}}})),V,H,U,W,re=e((()=>{V=t(n(),1),o(),_(),D(),k(),P(),B(),H=r(),U=({classNames:e,clickable:t,icons:n,index:r,isLast:i,showConnector:a,size:o,step:s,variant:l,onClick:u})=>{let{isClickable:d,isDisabled:f,LabelComponent:p,status:h,handleClick:g,handleKeyDown:_}=m({clickable:t,step:s,onClick:u});return l===`horizontal`?(0,H.jsxs)(`div`,{className:`flex items-center`,children:[(0,H.jsxs)(`div`,{className:c(x({orientation:`horizontal`,variant:l,clickable:d}),e?.stepWrapper),role:d?`button`:void 0,tabIndex:d?0:void 0,onClick:g,onKeyDown:_,"aria-current":h===`active`?`step`:void 0,...f&&{"aria-disabled":!0},"aria-label":O(r,s.label,h),children:[(0,H.jsx)(`div`,{className:c(S({status:h,size:o}),e?.indicator),"aria-hidden":`true`,children:(0,H.jsx)(z,{status:h,index:r,size:o,icons:n,className:e?.indicatorContent})}),(0,H.jsxs)(`div`,{className:c(C({variant:l}),e?.content),children:[s.label&&(0,H.jsx)(p,{className:c(w({status:h,size:o,variant:l}),e?.label),children:s.label}),s.description&&(0,H.jsx)(`span`,{className:c(T({status:h,size:o,variant:l}),e?.description),children:s.description})]})]}),!i&&a&&(0,H.jsx)(`div`,{className:c(`h-0.5 w-7.5 mx-2 transition-colors duration-200`,h===`completed`||h===`active`?`bg-aurora-500`:h===`error`?`bg-red-700 dark:bg-red-600`:`bg-slate-300 dark:bg-metal-400`,e?.connector),role:`presentation`,"aria-hidden":`true`})]}):(0,H.jsxs)(`div`,{className:`flex flex-1 items-start`,children:[(0,H.jsxs)(`div`,{className:c(x({orientation:`horizontal`,variant:l,clickable:d}),e?.stepWrapper),role:d?`button`:void 0,tabIndex:d?0:void 0,onClick:g,onKeyDown:_,"aria-current":h===`active`?`step`:void 0,...f&&{"aria-disabled":!0},"aria-label":O(r,s.label,h),children:[(0,H.jsx)(`div`,{className:c(S({status:h,size:o}),e?.indicator),"aria-hidden":`true`,children:(0,H.jsx)(z,{status:h,index:r,size:o,icons:n,className:e?.indicatorContent})}),(0,H.jsxs)(`div`,{className:c(C({variant:l}),e?.content),children:[s.label&&(0,H.jsx)(p,{className:c(w({status:h,size:o,variant:l}),e?.label),children:s.label}),s.description&&(0,H.jsx)(`span`,{className:c(T({status:h,size:o,variant:l}),e?.description),children:s.description})]})]}),!i&&a&&(0,H.jsx)(N,{orientation:`horizontal`,status:h,size:o,variant:l,className:c(`mt-6.5`,e?.connector)})]})},W=(0,V.memo)(U),U.__docgenInfo={description:``,methods:[],displayName:`HorizontalStepItemBase`,props:{classNames:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`connector`,value:{name:`string`,required:!1},description:`Class for the connector line`},{key:`content`,value:{name:`string`,required:!1},description:`Class for the step content wrapper (contains label + description)`},{key:`description`,value:{name:`string`,required:!1},description:`Class for the step description`},{key:`indicator`,value:{name:`string`,required:!1},description:`Class for the step indicator circle`},{key:`indicatorContent`,value:{name:`string`,required:!1},description:`Class for the content inside the indicator (number, icon)`},{key:`item`,value:{name:`string`,required:!1},description:`Class for each li item element`},{key:`label`,value:{name:`string`,required:!1},description:`Class for the step label`},{key:`list`,value:{name:`string`,required:!1},description:`Class for the ol list element`},{key:`root`,value:{name:`string`,required:!1},description:`Class for the root nav element`},{key:`stepWrapper`,value:{name:`string`,required:!1},description:`Class for the step wrapper (contains indicator + content)`}]}},description:`Custom class names`},clickable:{required:!0,tsType:{name:`boolean`},description:`Whether the step is clickable`},icons:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  /** Custom icon for completed status */
  completed?: ReactNode;
  /** Custom icon for error status */
  error?: ReactNode;
}`,signature:{properties:[{key:`completed`,value:{name:`ReactNode`,required:!1},description:`Custom icon for completed status`},{key:`error`,value:{name:`ReactNode`,required:!1},description:`Custom icon for error status`}]}},description:`Custom icons for step statuses`},index:{required:!0,tsType:{name:`number`},description:`Step index (0-based)`},isLast:{required:!0,tsType:{name:`boolean`},description:`Whether this is the last step`},nextStepStatus:{required:!1,tsType:{name:`union`,raw:`'completed' | 'active' | 'pending' | 'error'`,elements:[{name:`literal`,value:`'completed'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'pending'`},{name:`literal`,value:`'error'`}]},description:`Status of the next step (for connector coloring)`},orientation:{required:!0,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:`Orientation of the stepper`},showConnector:{required:!0,tsType:{name:`boolean`},description:`Show connector lines`},size:{required:!0,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size of the step indicator`},step:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`description`,value:{name:`string`,required:!1},description:`Optional description for the step`},{key:`disabled`,value:{name:`boolean`,required:!1},description:`Whether this step is disabled (not clickable)`},{key:`id`,value:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}],required:!0},description:`Unique identifier for the step`},{key:`label`,value:{name:`ReactNode`,required:!1},description:`Label displayed for the step (can be a string or ReactNode)`},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1},description:`Callback when this specific step is clicked`},{key:`status`,value:{name:`union`,raw:`'completed' | 'active' | 'pending' | 'error'`,elements:[{name:`literal`,value:`'completed'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'pending'`},{name:`literal`,value:`'error'`}],required:!1},description:`Status of the step`}]}},description:`Step data`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override`},variant:{required:!0,tsType:{name:`union`,raw:`'inline' | 'stacked' | 'horizontal'`,elements:[{name:`literal`,value:`'inline'`},{name:`literal`,value:`'stacked'`},{name:`literal`,value:`'horizontal'`}]},description:`Layout variant`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when step is clicked`}}}})),G,K,q,J,ie=e((()=>{G=t(n(),1),o(),_(),D(),k(),P(),B(),K=r(),q=({classNames:e,clickable:t,icons:n,index:r,isLast:i,showConnector:a,size:o,step:s,variant:l,onClick:u})=>{let{isClickable:d,isDisabled:f,LabelComponent:p,status:h,handleClick:g,handleKeyDown:_}=m({clickable:t,step:s,onClick:u});return(0,K.jsxs)(`div`,{className:l===`stacked`?`flex flex-col items-center`:`flex flex-col`,children:[(0,K.jsxs)(`div`,{className:c(x({orientation:`vertical`,variant:l,clickable:d}),e?.stepWrapper),role:d?`button`:void 0,tabIndex:d?0:void 0,onClick:g,onKeyDown:_,"aria-current":h===`active`?`step`:void 0,...f&&{"aria-disabled":!0},"aria-label":O(r,s.label,h),children:[(0,K.jsx)(`div`,{className:c(S({status:h,size:o}),e?.indicator),"aria-hidden":`true`,children:(0,K.jsx)(z,{status:h,index:r,size:o,icons:n,className:e?.indicatorContent})}),(0,K.jsxs)(`div`,{className:c(C({variant:l}),e?.content),children:[s.label&&(0,K.jsx)(p,{className:c(w({status:h,size:o,variant:l}),e?.label),children:s.label}),s.description&&(0,K.jsx)(`span`,{className:c(T({status:h,size:o,variant:l}),e?.description),children:s.description})]})]}),!i&&a&&(0,K.jsx)(N,{orientation:`vertical`,status:h,size:o,variant:l,className:e?.connector})]})},J=(0,G.memo)(q),q.__docgenInfo={description:``,methods:[],displayName:`VerticalStepItemBase`,props:{classNames:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`connector`,value:{name:`string`,required:!1},description:`Class for the connector line`},{key:`content`,value:{name:`string`,required:!1},description:`Class for the step content wrapper (contains label + description)`},{key:`description`,value:{name:`string`,required:!1},description:`Class for the step description`},{key:`indicator`,value:{name:`string`,required:!1},description:`Class for the step indicator circle`},{key:`indicatorContent`,value:{name:`string`,required:!1},description:`Class for the content inside the indicator (number, icon)`},{key:`item`,value:{name:`string`,required:!1},description:`Class for each li item element`},{key:`label`,value:{name:`string`,required:!1},description:`Class for the step label`},{key:`list`,value:{name:`string`,required:!1},description:`Class for the ol list element`},{key:`root`,value:{name:`string`,required:!1},description:`Class for the root nav element`},{key:`stepWrapper`,value:{name:`string`,required:!1},description:`Class for the step wrapper (contains indicator + content)`}]}},description:`Custom class names`},clickable:{required:!0,tsType:{name:`boolean`},description:`Whether the step is clickable`},icons:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  /** Custom icon for completed status */
  completed?: ReactNode;
  /** Custom icon for error status */
  error?: ReactNode;
}`,signature:{properties:[{key:`completed`,value:{name:`ReactNode`,required:!1},description:`Custom icon for completed status`},{key:`error`,value:{name:`ReactNode`,required:!1},description:`Custom icon for error status`}]}},description:`Custom icons for step statuses`},index:{required:!0,tsType:{name:`number`},description:`Step index (0-based)`},isLast:{required:!0,tsType:{name:`boolean`},description:`Whether this is the last step`},nextStepStatus:{required:!1,tsType:{name:`union`,raw:`'completed' | 'active' | 'pending' | 'error'`,elements:[{name:`literal`,value:`'completed'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'pending'`},{name:`literal`,value:`'error'`}]},description:`Status of the next step (for connector coloring)`},orientation:{required:!0,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:`Orientation of the stepper`},showConnector:{required:!0,tsType:{name:`boolean`},description:`Show connector lines`},size:{required:!0,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size of the step indicator`},step:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`description`,value:{name:`string`,required:!1},description:`Optional description for the step`},{key:`disabled`,value:{name:`boolean`,required:!1},description:`Whether this step is disabled (not clickable)`},{key:`id`,value:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}],required:!0},description:`Unique identifier for the step`},{key:`label`,value:{name:`ReactNode`,required:!1},description:`Label displayed for the step (can be a string or ReactNode)`},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1},description:`Callback when this specific step is clicked`},{key:`status`,value:{name:`union`,raw:`'completed' | 'active' | 'pending' | 'error'`,elements:[{name:`literal`,value:`'completed'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'pending'`},{name:`literal`,value:`'error'`}],required:!1},description:`Status of the step`}]}},description:`Step data`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override`},variant:{required:!0,tsType:{name:`union`,raw:`'inline' | 'stacked' | 'horizontal'`,elements:[{name:`literal`,value:`'inline'`},{name:`literal`,value:`'stacked'`},{name:`literal`,value:`'horizontal'`}]},description:`Layout variant`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when step is clicked`}}}})),Y,X,Z,ae,oe=e((()=>{Y=t(n(),1),re(),ie(),X=r(),Z=e=>e.orientation===`horizontal`||e.variant===`horizontal`?(0,X.jsx)(W,{...e}):(0,X.jsx)(J,{...e}),ae=(0,Y.memo)(Z),Z.__docgenInfo={description:``,methods:[],displayName:`StepItemBase`,props:{classNames:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`connector`,value:{name:`string`,required:!1},description:`Class for the connector line`},{key:`content`,value:{name:`string`,required:!1},description:`Class for the step content wrapper (contains label + description)`},{key:`description`,value:{name:`string`,required:!1},description:`Class for the step description`},{key:`indicator`,value:{name:`string`,required:!1},description:`Class for the step indicator circle`},{key:`indicatorContent`,value:{name:`string`,required:!1},description:`Class for the content inside the indicator (number, icon)`},{key:`item`,value:{name:`string`,required:!1},description:`Class for each li item element`},{key:`label`,value:{name:`string`,required:!1},description:`Class for the step label`},{key:`list`,value:{name:`string`,required:!1},description:`Class for the ol list element`},{key:`root`,value:{name:`string`,required:!1},description:`Class for the root nav element`},{key:`stepWrapper`,value:{name:`string`,required:!1},description:`Class for the step wrapper (contains indicator + content)`}]}},description:`Custom class names`},clickable:{required:!0,tsType:{name:`boolean`},description:`Whether the step is clickable`},icons:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  /** Custom icon for completed status */
  completed?: ReactNode;
  /** Custom icon for error status */
  error?: ReactNode;
}`,signature:{properties:[{key:`completed`,value:{name:`ReactNode`,required:!1},description:`Custom icon for completed status`},{key:`error`,value:{name:`ReactNode`,required:!1},description:`Custom icon for error status`}]}},description:`Custom icons for step statuses`},index:{required:!0,tsType:{name:`number`},description:`Step index (0-based)`},isLast:{required:!0,tsType:{name:`boolean`},description:`Whether this is the last step`},nextStepStatus:{required:!1,tsType:{name:`union`,raw:`'completed' | 'active' | 'pending' | 'error'`,elements:[{name:`literal`,value:`'completed'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'pending'`},{name:`literal`,value:`'error'`}]},description:`Status of the next step (for connector coloring)`},orientation:{required:!0,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:`Orientation of the stepper`},showConnector:{required:!0,tsType:{name:`boolean`},description:`Show connector lines`},size:{required:!0,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size of the step indicator`},step:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`description`,value:{name:`string`,required:!1},description:`Optional description for the step`},{key:`disabled`,value:{name:`boolean`,required:!1},description:`Whether this step is disabled (not clickable)`},{key:`id`,value:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}],required:!0},description:`Unique identifier for the step`},{key:`label`,value:{name:`ReactNode`,required:!1},description:`Label displayed for the step (can be a string or ReactNode)`},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1},description:`Callback when this specific step is clicked`},{key:`status`,value:{name:`union`,raw:`'completed' | 'active' | 'pending' | 'error'`,elements:[{name:`literal`,value:`'completed'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'pending'`},{name:`literal`,value:`'error'`}],required:!1},description:`Status of the step`}]}},description:`Step data`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override`},variant:{required:!0,tsType:{name:`union`,raw:`'inline' | 'stacked' | 'horizontal'`,elements:[{name:`literal`,value:`'inline'`},{name:`literal`,value:`'stacked'`},{name:`literal`,value:`'horizontal'`}]},description:`Layout variant`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when step is clicked`}}}})),se,Q,$,ce=e((()=>{se=t(n(),1),o(),oe(),D(),Q=r(),$=({className:e,classNames:t,clickable:n=!1,currentStep:r,icons:i,orientation:a=`vertical`,showConnector:o=!0,size:s=`sm`,steps:l,theme:u,variant:d=`inline`,onStepClick:f})=>{let p=d??`inline`,m=p===`horizontal`?`horizontal`:a??`vertical`,h=s??`sm`,g=(0,se.useMemo)(()=>l.map((e,t)=>e.status?e:r===void 0?{...e,status:`pending`}:t<r?{...e,status:`completed`}:t===r?{...e,status:`active`}:{...e,status:`pending`}),[l,r]);return(0,Q.jsx)(`nav`,{className:c(v({orientation:m}),e,t?.root),"data-theme":u,"aria-label":`Progress steps`,children:(0,Q.jsx)(`ol`,{className:c(y({orientation:m}),t?.list),children:g.map((e,r)=>(0,Q.jsx)(`li`,{className:c(b({orientation:m}),t?.item),children:(0,Q.jsx)(ae,{step:e,index:r,isLast:r===g.length-1,orientation:m,clickable:n??!1,onClick:()=>f?.(e,r),size:h,showConnector:o??!0,nextStepStatus:g[r+1]?.status,variant:p,classNames:t,icons:i})},e.id))})})},$.__docgenInfo={description:`A stepper component for displaying multi-step processes.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-stepper--docs Storybook}`,methods:[],displayName:`Stepper`,props:{className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the wrapper`},classNames:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`connector`,value:{name:`string`,required:!1},description:`Class for the connector line`},{key:`content`,value:{name:`string`,required:!1},description:`Class for the step content wrapper (contains label + description)`},{key:`description`,value:{name:`string`,required:!1},description:`Class for the step description`},{key:`indicator`,value:{name:`string`,required:!1},description:`Class for the step indicator circle`},{key:`indicatorContent`,value:{name:`string`,required:!1},description:`Class for the content inside the indicator (number, icon)`},{key:`item`,value:{name:`string`,required:!1},description:`Class for each li item element`},{key:`label`,value:{name:`string`,required:!1},description:`Class for the step label`},{key:`list`,value:{name:`string`,required:!1},description:`Class for the ol list element`},{key:`root`,value:{name:`string`,required:!1},description:`Class for the root nav element`},{key:`stepWrapper`,value:{name:`string`,required:!1},description:`Class for the step wrapper (contains indicator + content)`}]}},description:`Custom class names for each element`},clickable:{required:!1,tsType:{name:`boolean`},description:`Whether steps are clickable`,defaultValue:{value:`false`,computed:!1}},currentStep:{required:!1,tsType:{name:`number`},description:`Index of the current active step (0-based). When provided, step statuses are auto-calculated.`},icons:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  /** Custom icon for completed status */
  completed?: ReactNode;
  /** Custom icon for error status */
  error?: ReactNode;
}`,signature:{properties:[{key:`completed`,value:{name:`ReactNode`,required:!1},description:`Custom icon for completed status`},{key:`error`,value:{name:`ReactNode`,required:!1},description:`Custom icon for error status`}]}},description:`Custom icons for step statuses`},showConnector:{required:!1,tsType:{name:`boolean`},description:`Show connector lines between steps`,defaultValue:{value:`true`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size of the step indicators`,defaultValue:{value:`'sm'`,computed:!1}},steps:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`description`,value:{name:`string`,required:!1},description:`Optional description for the step`},{key:`disabled`,value:{name:`boolean`,required:!1},description:`Whether this step is disabled (not clickable)`},{key:`id`,value:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}],required:!0},description:`Unique identifier for the step`},{key:`label`,value:{name:`ReactNode`,required:!1},description:`Label displayed for the step (can be a string or ReactNode)`},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1},description:`Callback when this specific step is clicked`},{key:`status`,value:{name:`union`,raw:`'completed' | 'active' | 'pending' | 'error'`,elements:[{name:`literal`,value:`'completed'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'pending'`},{name:`literal`,value:`'error'`}],required:!1},description:`Status of the step`}]}}],raw:`Step[]`},description:`Array of steps to display`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},variant:{required:!1,tsType:{name:`union`,raw:`'inline' | 'stacked' | 'horizontal'`,elements:[{name:`literal`,value:`'inline'`},{name:`literal`,value:`'stacked'`},{name:`literal`,value:`'horizontal'`}]},description:`Layout variant: 'inline' (text beside indicator) or 'stacked' (text below indicator)`,defaultValue:{value:`'inline'`,computed:!1}},onStepClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(step: Step, index: number) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`description`,value:{name:`string`,required:!1},description:`Optional description for the step`},{key:`disabled`,value:{name:`boolean`,required:!1},description:`Whether this step is disabled (not clickable)`},{key:`id`,value:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}],required:!0},description:`Unique identifier for the step`},{key:`label`,value:{name:`ReactNode`,required:!1},description:`Label displayed for the step (can be a string or ReactNode)`},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1},description:`Callback when this specific step is clicked`},{key:`status`,value:{name:`union`,raw:`'completed' | 'active' | 'pending' | 'error'`,elements:[{name:`literal`,value:`'completed'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'pending'`},{name:`literal`,value:`'error'`}],required:!1},description:`Status of the step`}]}},name:`step`},{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Callback when a step is clicked`},orientation:{defaultValue:{value:`'vertical'`,computed:!1},required:!1}}}}));export{ce as n,$ as t};