import{r as n,j as t}from"./iframe-C9BKWzDJ.js";import{F as a}from"./Filter-D_67l2A1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGPp45Jz.js";import"./Badge-DCHUPER-.js";import"./Loader-DURDrt8B.js";import"./index-Df-vjiGr.js";import"./index-Bpyo7kJQ.js";import"./x-CPOWiWSk.js";import"./createLucideIcon-iXb1qCA9.js";import"./Button-D7PtIdYK.js";import"./Checkbox-tMYtFlrt.js";import"./index-DSajD14I.js";import"./index-Djxxrjvv.js";import"./index-CxHgSRhb.js";import"./index-DNnLzc-n.js";import"./index-BsrSTvnG.js";import"./index-CGcBcZw7.js";import"./useToggle-DoXOUzlQ.js";import"./check-Dn4_Af1V.js";import"./index-DC4_f3fh.js";import"./TimePicker-Dk35FpMp.js";import"./Typography-DB78lGzo.js";import"./DatePicker-B15I3_80.js";import"./style-6DP2EV20.js";import"./chevron-right-DCaqjuuF.js";import"./isObject-CMeswo3O.js";import"./DateRangePicker-CxFvrkJY.js";import"./RadioGroup-CADR4oPn.js";import"./Radio-B6irywho.js";import"./Input-jHdWUpAQ.js";import"./Warning-5TQH2Ugh.js";import"./proxy-DyCg3bmp.js";const ee={title:"In Review/Filter/Dark",component:a},o={parameters:{theme:"dark"},render:function(r){const[i,l]=n.useState([]),[s,p]=n.useState([]),[d,c]=n.useState(),[g,m]=n.useState(),u=e=>m(e),y=e=>c(e),D=e=>{l(e)},S=e=>{p(e)},b=n.useMemo(()=>[{id:"infrastructure",label:"Infrastructure"},{id:"networking",label:"Networking"},{id:"security",label:"Security"},{id:"monitoring",label:"Monitoring"}],[]),R=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return t.jsx("div",{className:"flex flex-col gap-2",children:t.jsxs(a,{...r,children:[t.jsx(a.BadgeMultiSelect,{label:"Status",options:R,onApply:D}),t.jsx(a.TextMultiSelect,{label:"Category",options:b,onApply:S}),t.jsx(a.DateFilterDropdown,{label:"Created",onApply:y}),t.jsx(a.DateRangeFilterDropdown,{label:"Date Range",onApply:u}),t.jsx(a.ResetButton,{disabled:!d&&!g&&i.length===0&&s.length===0})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
