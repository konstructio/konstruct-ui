import{r as n,j as t}from"./iframe-BqDUESjj.js";import{F as a}from"./Filter-CA2EK918.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CwGTy2we.js";import"./Badge-Cm8rs6J3.js";import"./Loader-dX6fHU3p.js";import"./index-Clwcr3i0.js";import"./index-ClNUCkto.js";import"./x-DPODMCaD.js";import"./createLucideIcon-CnfXAJ7b.js";import"./Button-CUsrcIMq.js";import"./Checkbox-DahX-wTq.js";import"./index-DTFuTgw7.js";import"./index-CZxOgfB1.js";import"./index-BpZRdOjl.js";import"./index-TbGdI40g.js";import"./index-BQPd2Ts2.js";import"./index-gWRwoktd.js";import"./useToggle-BVkvD4AP.js";import"./check-4t3isiVj.js";import"./index-BEE3l006.js";import"./TimePicker-BzoF-8Ip.js";import"./Typography-1Jbn6Fq-.js";import"./DatePicker-CF-Alc-x.js";import"./style-CLXP_zjB.js";import"./chevron-right-B7O30Lxj.js";import"./isObject-BNmRxkNU.js";import"./DateRangePicker-BZGmRL80.js";import"./RadioGroup-NhirYwcX.js";import"./Radio-6mMPeT4y.js";import"./Input-Bog0nTKt.js";import"./Warning-BD504426.js";import"./proxy-CzwUqGHV.js";const ee={title:"In Review/Filter/Dark",component:a},o={parameters:{theme:"dark"},render:function(r){const[i,l]=n.useState([]),[s,p]=n.useState([]),[d,c]=n.useState(),[g,m]=n.useState(),u=e=>m(e),y=e=>c(e),D=e=>{l(e)},S=e=>{p(e)},b=n.useMemo(()=>[{id:"infrastructure",label:"Infrastructure"},{id:"networking",label:"Networking"},{id:"security",label:"Security"},{id:"monitoring",label:"Monitoring"}],[]),R=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return t.jsx("div",{className:"flex flex-col gap-2",children:t.jsxs(a,{...r,children:[t.jsx(a.BadgeMultiSelect,{label:"Status",options:R,onApply:D}),t.jsx(a.TextMultiSelect,{label:"Category",options:b,onApply:S}),t.jsx(a.DateFilterDropdown,{label:"Created",onApply:y}),t.jsx(a.DateRangeFilterDropdown,{label:"Date Range",onApply:u}),t.jsx(a.ResetButton,{disabled:!d&&!g&&i.length===0&&s.length===0})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
