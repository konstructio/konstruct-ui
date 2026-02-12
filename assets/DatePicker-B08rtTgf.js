import{r as s,j as r}from"./iframe-DndQCF3t.js";import{a as b,c as e}from"./index-B-7A89sm.js";import{D as k}from"./style-CGELM8Wd.js";import{C as g,a as y}from"./chevron-right-CjNdAP8v.js";const w=b("w-fit py-4 px-6"),o=({className:l,showOutsideDays:i=!0,animate:d=!0,arrowClassName:c,monthsClassName:u,defaultSelected:m,onSelect:n,...p})=>{const[f,h]=s.useState(()=>m),x=s.useCallback(t=>{t&&(h(t),n?.(t))},[n]);return r.jsx(k,{className:e(w({className:l})),animate:d,mode:"single",selected:f,onSelect:x,showOutsideDays:i,role:"dialog","aria-label":"Datepicker",classNames:{chevron:e("cursor-pointer","text-slate-500","w-5","h-5","text-slate-500","w-4","h-4","dark:text-metal-200"),day_button:e("h-[30px]","aria-selected:opacity-100","font-semibold","hover:rounded-full","cursor-pointer","rounded-full","w-[30px]"),day:"text-center text-sm leading-5",month_caption:e("text-slate-700","font-semibold","text-sm","pl-1","h-8","flex","items-center","dark:text-white"),months:e("flex","flex-col","relative","px-5","py-4","rounded-lg","shadow-md","px-6","py-4","w-[307px]","justify-center","items-center","border","border-transparent","dark:bg-metal-800","dark:border-metal-700",u),month:"flex flex-col gap-4",nav:e("absolute","right-4","top-3.5","flex","justify-center","items-center","gap-1",c),outside:"text-slate-400 dark:text-metal-500",selected:e("[&>button]:bg-blue-600","[&>button]:text-white","[&>button]:hover:bg-blue-700","[&>button]:transition-all","[&>button]:duration-300","[&>button]:rounded-full","dark:[&>button]:bg-aurora-500","dark:[&>button]:hover:bg-aurora-500","dark:[&>button]:text-metal-900"),table:"w-full",weekdays:"text-slate-500 dark:text-metal-300",weeks:e("text-slate-700","[&>tr>td]:border-transparent","[&>tr>td]:border-r-[8px]","[&>tr>td]:last:border-r-0","dark:text-white"),weekday:"font-semibold text-sm uppercase text-sm",today:"text-blue-600 dark:text-aurora-500 data-[selected=true]:text-white",month_grid:e("[&>thead]:table-header-group","[&>thead]:relative","[&>thead]:after:block",'[&>thead]:after:content-[" "]',"[&>thead]:after:h-4")},components:{Chevron:({className:t,...a})=>a.orientation==="left"?r.jsx(g,{className:e(t),...a}):r.jsx(y,{className:e(t),...a})},...p})};o.displayName="KonstructDatePicker";o.__docgenInfo={description:`A date picker component built on react-day-picker.
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

@see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-datepicker--docs Storybook}`,methods:[],displayName:"KonstructDatePicker",props:{arrowClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the navigation arrows"},monthsClassName:{required:!1,tsType:{name:"string"},description:"CSS classes for the months container"},timeZone:{required:!1,tsType:{name:"ReturnType",elements:[{name:"getAllTimezones"}],raw:"ReturnType<typeof getAllTimezones>"},description:"Timezone for date display"},defaultSelected:{required:!1,tsType:{name:"Date"},description:"Initial selected date"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:"Callback when a date is selected"},showOutsideDays:{defaultValue:{value:"true",computed:!1},required:!1},animate:{defaultValue:{value:"true",computed:!1},required:!1}}};export{o as D};
