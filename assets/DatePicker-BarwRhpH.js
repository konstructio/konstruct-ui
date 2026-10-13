const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DatePickerContent-ks9J0hNC.js","./rolldown-runtime-C0FnF6B9.js","./react-DiVRNtpo.js","./jsx-runtime-BdxMnOeJ.js","./utils-Bwr2iEcD.js","./chevron-right-D_Rs9dne.js","./createLucideIcon-CBdjKgCL.js","./DayPicker-qbnKEa3l.js","./style-B5oQKw1D.js","./style-Chw94eNX.css","./DatePicker.variants-Bp-8qjZf.js","./dist-BQzpIf2-.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./preload-helper-CEvSt6_I.js";import{t as r}from"./react-DiVRNtpo.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{i as a,t as o}from"./utils-Bwr2iEcD.js";import{n as s,t as c}from"./DatePicker.variants-Bp-8qjZf.js";var l,u,d,f;function p(){return(p=e((()=>{l=r(),a(),s(),u=i(),t(),d=(0,l.lazy)(()=>n(()=>import(`./DatePickerContent-ks9J0hNC.js`).then(e=>({default:e.DatePickerContent})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url)),f=e=>(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(`div`,{className:o(c({className:e.className})),"aria-busy":`true`,children:(0,u.jsx)(`div`,{className:o(`w-[307px]`,`min-h-[296px]`,`rounded-lg`,`shadow-md`,`border`,`border-transparent`,`dark:bg-metal-800`,`dark:border-metal-700`,e.monthsClassName)})}),children:(0,u.jsx)(d,{...e})}),f.displayName=`KonstructDatePicker`,f.__docgenInfo={description:`A date picker component built on react-day-picker.
Allows single date selection with calendar navigation.

@example
\`\`\`tsx
// Basic date picker
<DatePicker
  defaultSelected={new Date()}
  onSelect={(date) => console.log(date)}
/>

// With custom styling
<DatePicker
  defaultSelected={startDate}
  onSelect={setStartDate}
  monthsClassName="custom-months"
/>
\`\`\`

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-datepicker--docs Storybook}`,methods:[],displayName:`KonstructDatePicker`,props:{arrowClassName:{required:!1,tsType:{name:`string`},description:`CSS classes for the navigation arrows`},monthsClassName:{required:!1,tsType:{name:`string`},description:`CSS classes for the months container`},timeZone:{required:!1,tsType:{name:`ReturnType`,elements:[{name:`getAllTimezones`}],raw:`ReturnType<typeof getAllTimezones>`},description:`Timezone for date display`},defaultSelected:{required:!1,tsType:{name:`Date`},description:`Initial selected date`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(date: Date) => void`,signature:{arguments:[{type:{name:`Date`},name:`date`}],return:{name:`void`}}},description:`Callback when a date is selected`}}}})))()}export{p as n,f as t};