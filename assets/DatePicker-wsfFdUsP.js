const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DatePickerContent-C2bcmatj.js","./rolldown-runtime-BCiCTKAo.js","./react-BlIEEezU.js","./jsx-runtime-BB9-612F.js","./utils-DWfjJEhS.js","./chevron-right-DggGFtRH.js","./createLucideIcon-B2zzdHXP.js","./DayPicker-ZVWB-9TC.js","./style-B-srxsuC.js","./style-Chw94eNX.css"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{n as t,t as n}from"./preload-helper-DQzUoscV.js";import{t as r}from"./react-BlIEEezU.js";import{t as i}from"./jsx-runtime-BB9-612F.js";import{i as a,t as o}from"./utils-DWfjJEhS.js";import{n as s,t as c}from"./dist-BIkUQYOj.js";var l;function u(){return(u=e((()=>{s(),l=c(`w-fit py-4 px-6`)})))()}var d,f,p,m;function h(){return(h=e((()=>{d=r(),a(),u(),f=i(),t(),p=(0,d.lazy)(()=>n(()=>import(`./DatePickerContent-C2bcmatj.js`).then(e=>({default:e.DatePickerContent})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)),m=e=>(0,f.jsx)(d.Suspense,{fallback:(0,f.jsx)(`div`,{className:o(l({className:e.className})),"aria-busy":`true`,children:(0,f.jsx)(`div`,{className:o(`w-[307px]`,`min-h-[296px]`,`rounded-lg`,`shadow-md`,`border`,`border-transparent`,`dark:bg-metal-800`,`dark:border-metal-700`,e.monthsClassName)})}),children:(0,f.jsx)(p,{...e})}),m.displayName=`KonstructDatePicker`,m.__docgenInfo={description:`A date picker component built on react-day-picker.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-datepicker--docs Storybook}`,methods:[],displayName:`KonstructDatePicker`,props:{arrowClassName:{required:!1,tsType:{name:`string`},description:`CSS classes for the navigation arrows`},monthsClassName:{required:!1,tsType:{name:`string`},description:`CSS classes for the months container`},timeZone:{required:!1,tsType:{name:`ReturnType`,elements:[{name:`getAllTimezones`}],raw:`ReturnType<typeof getAllTimezones>`},description:`Timezone for date display`},defaultSelected:{required:!1,tsType:{name:`Date`},description:`Initial selected date`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(date: Date) => void`,signature:{arguments:[{type:{name:`Date`},name:`date`}],return:{name:`void`}}},description:`Callback when a date is selected`}}}})))()}export{u as i,h as n,l as r,m as t};