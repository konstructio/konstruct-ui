import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{o as n,t as r}from"./iframe-BhrQdzJp.js";import{c as i,s as a,t as o}from"./dist-C5ETkqDF.js";import{a as s,n as c,r as l,t as u}from"./dist-D8TPiX_U.js";import{n as d,t as f}from"./Typography-CPsEMThR.js";import{r as p,t as m}from"./dist-C455svpB.js";var h,g,_,v=e((()=>{c(),h=u([`[&::-webkit-inner-spin-button]:appearance-none`,`[&::-webkit-outer-spin-button]:appearance-none`,`[-moz-appearance:textfield]`,`appearance-none`,`border`,`border-x-0`,`focus-visible:outline-none`,`focus-visible:ring-transparent`,`h-9`,`max-w-16`,`text-right`,`px-3`,`border-gray-300`,`text-slate-800`,`bg-white`,`dark:bg-metal-800`,`dark:border-metal-700`,`dark:text-metal-50`]),g=u([`h-9`,`w-9`,`flex`,`items-center`,`justify-center`,`border`,`text-slate-500`,`border-gray-300`,`bg-white`,`cursor-pointer`,`hover:bg-aurora-50`,`hover:text-slate-600`,`disabled:hover:bg-white`,`disabled:bg-white`,`disabled:text-slate-400`,`dark:bg-metal-800`,`dark:border-metal-700`,`dark:text-aurora-500`,`dark:hover:bg-aurora-900`,`dark:hover:text-aurora-500`,`dark:disabled:text-metal-400`,`dark:disabled:hover:bg-metal-800`,`dark:disabled:bg-metal-800`,`disabled:cursor-not-allowed`],{variants:{button:{left:[`rounded-e`],rigth:[`rounded-s`]}}}),_=u([`cursor-pointer`],{variants:{variant:{default:``}},defaultVariants:{variant:`default`}})})),y,b,x,S=e((()=>{p(),y=t(n(),1),o(),s(),v(),d(),b=r(),x=(0,y.forwardRef)(({canDecrement:e=!0,canIncrement:t=!0,className:n,decrementButtonClassName:r,incrementButtonClassName:o,isRequired:s,label:c,labelWrapperClassName:u,max:d=-1/0,min:p=1/0,name:v,theme:x,value:S,onChange:C},w)=>{let T=(0,y.useId)(),E=S??0,D=(0,y.useCallback)(()=>{let e=0;e=p===1/0?E-1:Math.max(p,E-1),C?.({target:{value:e}})},[E,p,C]),O=(0,y.useCallback)(()=>{let e=0;e=d===-1/0?E+1:Math.min(d,E+1),C?.({target:{value:e}})},[E,d,C]);return(0,b.jsxs)(`div`,{className:`flex flex-col gap-2`,"data-theme":x,children:[c?(0,b.jsx)(`div`,{className:l(u),children:(0,b.jsxs)(f,{component:`label`,htmlFor:v??T,variant:`labelLarge`,className:l(_()),children:[`Number of nodes`,` `,s&&(0,b.jsx)(`span`,{className:`text-red-600 dark:text-red-500`,children:`*`})]})}):null,(0,b.jsxs)(`div`,{className:`flex items-center`,role:`presentation`,children:[(0,b.jsxs)(`button`,{type:`button`,onClick:D,className:l(g({button:`rigth`,className:r})),disabled:!e,children:[(0,b.jsx)(i,{className:`w-4 h-4`}),(0,b.jsx)(m,{children:`Decrement`})]}),(0,b.jsx)(`input`,{ref:w,type:`number`,value:E,name:v,className:l(h({className:n})),readOnly:!0,"aria-label":typeof c==`string`?c:`number input`}),(0,b.jsxs)(`button`,{type:`button`,onClick:O,className:l(g({button:`left`,className:o})),disabled:!t,children:[(0,b.jsx)(a,{className:`w-4 h-4`}),(0,b.jsx)(m,{children:`Increment`})]})]})]})}),x.__docgenInfo={description:`A numeric input component with increment/decrement buttons.
Also exported as \`NumberInput\` for convenience.

@example
\`\`\`tsx
// Basic counter
<Counter
  label="Quantity"
  value={count}
  onChange={({ target }) => setCount(target.value)}
/>

// With min/max limits
<Counter
  label="Number of nodes"
  value={nodes}
  min={1}
  max={10}
  onChange={({ target }) => setNodes(target.value)}
/>

// Disabled increment/decrement
<Counter
  value={5}
  canIncrement={value < max}
  canDecrement={value > min}
  onChange={handleChange}
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-counter--docs Storybook}`,methods:[],displayName:`Counter`,props:{canDecrement:{required:!1,tsType:{name:`boolean`},description:`Allow decrement button to be clicked`,defaultValue:{value:`true`,computed:!1}},canIncrement:{required:!1,tsType:{name:`boolean`},description:`Allow increment button to be clicked`,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes`},decrementButtonClassName:{required:!1,tsType:{name:`string`},description:`CSS classes for decrement button`},incrementButtonClassName:{required:!1,tsType:{name:`string`},description:`CSS classes for increment button`},init:{required:!1,tsType:{name:`number`},description:`Initial value (deprecated, use value)`},isRequired:{required:!1,tsType:{name:`boolean`},description:`Show required indicator`},label:{required:!1,tsType:{name:`string`},description:`Label displayed above the counter`},labelWrapperClassName:{required:!1,tsType:{name:`string`},description:`Additional CSS classes for the label wrapper`},max:{required:!1,tsType:{name:`number`},description:`Maximum allowed value`,defaultValue:{value:`-Infinity`,computed:!1}},min:{required:!1,tsType:{name:`number`},description:`Minimum allowed value`,defaultValue:{value:`Infinity`,computed:!0}},name:{required:!1,tsType:{name:`string`},description:`Form field name`},theme:{required:!1,tsType:{name:`Theme`},description:`Theme override for this component`},value:{required:!1,tsType:{name:`number`},description:`Current numeric value`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`({ target: { value } }: { target: { value: number } }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ target: { value: number } }`,signature:{properties:[{key:`target`,value:{name:`signature`,type:`object`,raw:`{ value: number }`,signature:{properties:[{key:`value`,value:{name:`number`,required:!0}}]},required:!0}}]}},name:``}],return:{name:`void`}}},description:`Callback when value changes`}},composes:[`VariantProps`]}}));export{S as n,x as t};