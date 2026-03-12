import{r as n,j as t}from"./iframe-Bx7A06S6.js";import{F as a}from"./Filter-DkGUYnEa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CwGTy2we.js";import"./Badge-uutf6F8U.js";import"./Loader-DkRYb8L5.js";import"./index-BvAy6IBt.js";import"./index-D1FIWJZM.js";import"./x-CWM7iKI1.js";import"./createLucideIcon-BUjuW9lK.js";import"./Button-43eHLI6h.js";import"./Checkbox-CqgTRR9N.js";import"./index-DJyansmc.js";import"./index-DUBB8pZe.js";import"./index-Da4694XD.js";import"./index-8B2YTAQD.js";import"./index-BtcbTGcW.js";import"./index-D46p-S_A.js";import"./useToggle-DYsG1k89.js";import"./check-D37yFGKk.js";import"./index-1gMRQfLf.js";import"./TimePicker-hviDk6BJ.js";import"./Typography-CVipnvyR.js";import"./DatePicker-By73t-DA.js";import"./style-lcDvV3Lr.js";import"./chevron-right-DzVzHSjJ.js";import"./isObject-CT5Z9LJi.js";import"./DateRangePicker-CWDxpiQV.js";import"./RadioGroup-BbFYg2We.js";import"./Radio-BYBR6r5v.js";import"./Input-CsAV1yfC.js";import"./Warning-CJT5tg2V.js";import"./proxy-L-cjAPQv.js";const ee={title:"In Review/Filter/Dark",component:a},o={parameters:{theme:"dark"},render:function(r){const[i,l]=n.useState([]),[s,p]=n.useState([]),[d,c]=n.useState(),[g,m]=n.useState(),u=e=>m(e),y=e=>c(e),D=e=>{l(e)},S=e=>{p(e)},b=n.useMemo(()=>[{id:"infrastructure",label:"Infrastructure"},{id:"networking",label:"Networking"},{id:"security",label:"Security"},{id:"monitoring",label:"Monitoring"}],[]),R=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return t.jsx("div",{className:"flex flex-col gap-2",children:t.jsxs(a,{...r,children:[t.jsx(a.BadgeMultiSelect,{label:"Status",options:R,onApply:D}),t.jsx(a.TextMultiSelect,{label:"Category",options:b,onApply:S}),t.jsx(a.DateFilterDropdown,{label:"Created",onApply:y}),t.jsx(a.DateRangeFilterDropdown,{label:"Date Range",onApply:u}),t.jsx(a.ResetButton,{disabled:!d&&!g&&i.length===0&&s.length===0})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: function FilterStory(args) {
    const [selectedStatus, setSelectedStatus] = useState<Option[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Option[]>([]);
    const [date, setDate] = useState<Date | undefined>();
    const [dateRange, setDateRange] = useState<DateRangeWithTime | undefined>();
    const onApplyDateRange = (range?: DateRangeWithTime) => setDateRange(range);
    const onApplyDate = (date?: Date) => setDate(date);
    const onApplyBadge = (selectedOptions: Option[]) => {
      setSelectedStatus(selectedOptions);
    };
    const onApplyText = (selectedOptions: Option[]) => {
      setSelectedCategory(selectedOptions);
    };
    const categoryOptions = useMemo<Option[]>(() => [{
      id: 'infrastructure',
      label: 'Infrastructure'
    }, {
      id: 'networking',
      label: 'Networking'
    }, {
      id: 'security',
      label: 'Security'
    }, {
      id: 'monitoring',
      label: 'Monitoring'
    }], []);
    const options = useMemo<Option[]>(() => [{
      id: 'creating',
      label: 'Creating',
      variant: 'warning'
    }, {
      id: 'deleting',
      label: 'Deleting',
      variant: 'danger'
    }, {
      id: 'failed',
      label: 'Failed',
      variant: 'danger'
    }, {
      id: 'pending',
      label: 'Pending',
      variant: 'info'
    }, {
      id: 'ready',
      label: 'Ready',
      variant: 'success'
    }, {
      id: 'retrying',
      label: 'Retrying',
      variant: 'warning'
    }], []);
    return <div className="flex flex-col gap-2">
        <FilterComponent {...args}>
          <FilterComponent.BadgeMultiSelect label="Status" options={options} onApply={onApplyBadge} />

          <FilterComponent.TextMultiSelect label="Category" options={categoryOptions} onApply={onApplyText} />

          <FilterComponent.DateFilterDropdown label="Created" onApply={onApplyDate} />

          <FilterComponent.DateRangeFilterDropdown label="Date Range" onApply={onApplyDateRange} />

          <FilterComponent.ResetButton disabled={!date && !dateRange && selectedStatus.length === 0 && selectedCategory.length === 0} />
        </FilterComponent>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const te=["Dark"];export{o as Dark,te as __namedExportsOrder,ee as default};
