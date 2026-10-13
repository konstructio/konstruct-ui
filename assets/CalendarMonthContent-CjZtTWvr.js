import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{i,t as a}from"./utils-Bwr2iEcD.js";import{n as o,t as s}from"./DayPicker-qbnKEa3l.js";import{n as c}from"./constants-C6jAcXvA.js";var l;function u(){return(u=e((()=>{i(),c(),l=e=>({root:a(`w-fit`,e?.root),months:a(`flex`,e?.months),month:a(`flex flex-col w-[259px]`,e?.month),month_caption:`hidden`,nav:`hidden`,day_button:a(`size-7.5`,`flex`,`items-center`,`justify-center`,`text-sm`,`font-semibold`,`cursor-pointer`,`rounded-full`,`hover:bg-slate-100`,`dark:hover:bg-metal-700`,`transition-colors`,`text-slate-700`,`dark:text-white`,`focus:outline-none`,`focus-visible:outline-none`,e?.dayButton),day:a(`p-0`,`w-[37px]`,`h-9.5`,`text-center`,`align-middle`,e?.day),selected:a(`[&>button]:bg-blue-600`,`[&>button]:text-white`,`[&>button]:hover:bg-blue-700`,`dark:[&>button]:bg-aurora-500`,`dark:[&>button]:hover:bg-aurora-500`,`dark:[&>button]:text-metal-900`,e?.selected),range_start:a(`drp-range-start`,`[&>button]:!bg-blue-600`,`[&>button]:!text-white`,`[&>button]:!rounded-full`,`[&>button]:hover:!bg-blue-700`,`[&>button]:relative`,`[&>button]:z-10`,`dark:[&>button]:!bg-aurora-500`,`dark:[&>button]:hover:!bg-aurora-500`,`dark:[&>button]:!text-metal-900`,`!relative`,`before:absolute`,`before:top-1`,`before:bottom-1`,`before:left-1/2`,`before:right-0`,`before:!bg-blue-50`,`dark:before:!bg-aurora-500/10`,`last:before:!hidden`,e?.rangeStart),range_end:a(`drp-range-end`,`[&>button]:!bg-blue-600`,`[&>button]:!text-white`,`[&>button]:!rounded-full`,`[&>button]:hover:!bg-blue-700`,`[&>button]:relative`,`[&>button]:z-10`,`dark:[&>button]:!bg-aurora-500`,`dark:[&>button]:hover:!bg-aurora-500`,`dark:[&>button]:!text-metal-900`,`!relative`,`before:absolute`,`before:top-1`,`before:bottom-1`,`before:left-0`,`before:right-1/2`,`before:!bg-blue-50`,`dark:before:!bg-aurora-500/10`,`first:before:!hidden`,e?.rangeEnd),range_middle:a(`drp-range-middle`,`!relative`,`before:absolute`,`before:top-1`,`before:bottom-1`,`before:left-0`,`before:right-0`,`before:!bg-blue-50`,`dark:before:!bg-aurora-500/10`,`first:before:rounded-l-full`,`last:before:rounded-r-full`,`[&>button]:!text-slate-700`,`[&>button]:!bg-transparent`,`[&>button]:!rounded-full`,`[&>button]:relative`,`[&>button]:z-10`,`[&>button]:hover:!bg-blue-100`,`dark:[&>button]:!text-white`,`dark:[&>button]:hover:!bg-aurora-500/20`,e?.rangeMiddle),table:a(`w-full border-collapse table-fixed`,e?.table),weekdays:a(`text-slate-500`,`dark:text-metal-400`,e?.weekdays),weeks:a(`[&>tr>td]:p-0`,`[&>tr]:h-9.5`,e?.weeks),weekday:a(`font-semibold`,`text-xs`,`uppercase`,`text-slate-500`,`dark:text-metal-400`,`pb-4`,`w-[37px]`,e?.weekday),today:a(`[&>button]:text-blue-600`,`dark:[&>button]:text-aurora-500`,e?.today),month_grid:`w-full`,disabled:a(`[&>button]:opacity-50`,`[&>button]:cursor-not-allowed`,e?.disabled),outside:a(`[&>button]:!text-slate-400`,`dark:[&>button]:!text-metal-500`,e?.outside)})})))()}var d=t({CalendarMonthContent:()=>m}),f,p,m;function h(){return(h=e((()=>{f=n(),o(),c(),p=r(),m=({month:e,range:t,onRangeSelect:n,disabled:r,disabledMatcher:i,showOutsideDays:a,classNames:o})=>{let c=(0,f.useMemo)(()=>l(o?.dayPicker),[o?.dayPicker]);return(0,p.jsx)(s,{mode:`range`,selected:{from:t.from,to:t.to},onSelect:n,month:e,numberOfMonths:1,disabled:i||r,hideNavigation:!0,animate:!1,showOutsideDays:a,classNames:c})},m.displayName=`CalendarMonthContent`,m.__docgenInfo={description:``,methods:[],displayName:`CalendarMonthContent`,props:{month:{required:!0,tsType:{name:`Date`},description:``},range:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ from?: Date; to?: Date }`,signature:{properties:[{key:`from`,value:{name:`Date`,required:!1}},{key:`to`,value:{name:`Date`,required:!1}}]}},description:``},onRangeSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(range: DateRange | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`DateRange | undefined`,elements:[{name:`DateRange`},{name:`undefined`}]},name:`range`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},disabledMatcher:{required:!1,tsType:{name:`union`,raw:`Matcher | Matcher[]`,elements:[{name:`Matcher`},{name:`Array`,elements:[{name:`Matcher`}],raw:`Matcher[]`}]},description:``},showOutsideDays:{required:!1,tsType:{name:`boolean`},description:``},classNames:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  monthTitle?: string;
  dayPicker?: DayPickerClassNames;
}`,signature:{properties:[{key:`monthTitle`,value:{name:`string`,required:!1}},{key:`dayPicker`,value:{name:`signature`,type:`object`,raw:`{
  /** Root container of the day picker */
  root?: string;
  /** Months container */
  months?: string;
  /** Individual month container */
  month?: string;
  /** Calendar table */
  table?: string;
  /** Table head with weekday names */
  weekdays?: string;
  /** Individual weekday header cell */
  weekday?: string;
  /** Table body with weeks */
  weeks?: string;
  /** Individual day cell */
  day?: string;
  /** Day button inside each cell */
  dayButton?: string;
  /** Selected day(s) */
  selected?: string;
  /** Start of the selected range */
  rangeStart?: string;
  /** End of the selected range */
  rangeEnd?: string;
  /** Days between range start and end */
  rangeMiddle?: string;
  /** Today's date */
  today?: string;
  /** Disabled days */
  disabled?: string;
  /** Days outside the current month */
  outside?: string;
}`,signature:{properties:[{key:`root`,value:{name:`string`,required:!1},description:`Root container of the day picker`},{key:`months`,value:{name:`string`,required:!1},description:`Months container`},{key:`month`,value:{name:`string`,required:!1},description:`Individual month container`},{key:`table`,value:{name:`string`,required:!1},description:`Calendar table`},{key:`weekdays`,value:{name:`string`,required:!1},description:`Table head with weekday names`},{key:`weekday`,value:{name:`string`,required:!1},description:`Individual weekday header cell`},{key:`weeks`,value:{name:`string`,required:!1},description:`Table body with weeks`},{key:`day`,value:{name:`string`,required:!1},description:`Individual day cell`},{key:`dayButton`,value:{name:`string`,required:!1},description:`Day button inside each cell`},{key:`selected`,value:{name:`string`,required:!1},description:`Selected day(s)`},{key:`rangeStart`,value:{name:`string`,required:!1},description:`Start of the selected range`},{key:`rangeEnd`,value:{name:`string`,required:!1},description:`End of the selected range`},{key:`rangeMiddle`,value:{name:`string`,required:!1},description:`Days between range start and end`},{key:`today`,value:{name:`string`,required:!1},description:`Today's date`},{key:`disabled`,value:{name:`string`,required:!1},description:`Disabled days`},{key:`outside`,value:{name:`string`,required:!1},description:`Days outside the current month`}]},required:!1}}]}},description:``}}}})))()}export{h as n,u as r,d as t};