import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BlIEEezU.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./DayPicker-ZVWB-9TC.js";import{i as a,r as o}from"./DateRangePicker-DETMMAYR.js";var s,c,l;function u(){return(u=e((()=>{s=t(),r(),o(),c=n(),l=({month:e,range:t,onRangeSelect:n,disabled:r,disabledMatcher:o,showOutsideDays:l,classNames:u})=>{let d=(0,s.useMemo)(()=>a(u?.dayPicker),[u?.dayPicker]);return(0,c.jsx)(i,{mode:`range`,selected:{from:t.from,to:t.to},onSelect:n,month:e,numberOfMonths:1,disabled:o||r,hideNavigation:!0,animate:!1,showOutsideDays:l,classNames:d})},l.displayName=`CalendarMonthContent`,l.__docgenInfo={description:``,methods:[],displayName:`CalendarMonthContent`,props:{month:{required:!0,tsType:{name:`Date`},description:``},range:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ from?: Date; to?: Date }`,signature:{properties:[{key:`from`,value:{name:`Date`,required:!1}},{key:`to`,value:{name:`Date`,required:!1}}]}},description:``},onRangeSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(range: DateRange | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`DateRange | undefined`,elements:[{name:`DateRange`},{name:`undefined`}]},name:`range`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},disabledMatcher:{required:!1,tsType:{name:`union`,raw:`Matcher | Matcher[]`,elements:[{name:`Matcher`},{name:`Array`,elements:[{name:`Matcher`}],raw:`Matcher[]`}]},description:``},showOutsideDays:{required:!1,tsType:{name:`boolean`},description:``},classNames:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
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
}`,signature:{properties:[{key:`root`,value:{name:`string`,required:!1},description:`Root container of the day picker`},{key:`months`,value:{name:`string`,required:!1},description:`Months container`},{key:`month`,value:{name:`string`,required:!1},description:`Individual month container`},{key:`table`,value:{name:`string`,required:!1},description:`Calendar table`},{key:`weekdays`,value:{name:`string`,required:!1},description:`Table head with weekday names`},{key:`weekday`,value:{name:`string`,required:!1},description:`Individual weekday header cell`},{key:`weeks`,value:{name:`string`,required:!1},description:`Table body with weeks`},{key:`day`,value:{name:`string`,required:!1},description:`Individual day cell`},{key:`dayButton`,value:{name:`string`,required:!1},description:`Day button inside each cell`},{key:`selected`,value:{name:`string`,required:!1},description:`Selected day(s)`},{key:`rangeStart`,value:{name:`string`,required:!1},description:`Start of the selected range`},{key:`rangeEnd`,value:{name:`string`,required:!1},description:`End of the selected range`},{key:`rangeMiddle`,value:{name:`string`,required:!1},description:`Days between range start and end`},{key:`today`,value:{name:`string`,required:!1},description:`Today's date`},{key:`disabled`,value:{name:`string`,required:!1},description:`Disabled days`},{key:`outside`,value:{name:`string`,required:!1},description:`Days outside the current month`}]},required:!1}}]}},description:``}}}})))()}u();export{l as CalendarMonthContent};