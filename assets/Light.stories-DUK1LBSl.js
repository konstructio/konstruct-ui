import{r as a,j as t}from"./iframe-BqDUESjj.js";import{F as n}from"./Filter-CA2EK918.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CwGTy2we.js";import"./Badge-Cm8rs6J3.js";import"./Loader-dX6fHU3p.js";import"./index-Clwcr3i0.js";import"./index-ClNUCkto.js";import"./x-DPODMCaD.js";import"./createLucideIcon-CnfXAJ7b.js";import"./Button-CUsrcIMq.js";import"./Checkbox-DahX-wTq.js";import"./index-DTFuTgw7.js";import"./index-CZxOgfB1.js";import"./index-BpZRdOjl.js";import"./index-TbGdI40g.js";import"./index-BQPd2Ts2.js";import"./index-gWRwoktd.js";import"./useToggle-BVkvD4AP.js";import"./check-4t3isiVj.js";import"./index-BEE3l006.js";import"./TimePicker-BzoF-8Ip.js";import"./Typography-1Jbn6Fq-.js";import"./DatePicker-CF-Alc-x.js";import"./style-CLXP_zjB.js";import"./chevron-right-B7O30Lxj.js";import"./isObject-BNmRxkNU.js";import"./DateRangePicker-BZGmRL80.js";import"./RadioGroup-NhirYwcX.js";import"./Radio-6mMPeT4y.js";import"./Input-Bog0nTKt.js";import"./Warning-BD504426.js";import"./proxy-CzwUqGHV.js";const ee={title:"In Review/Filter/Light",component:n},o={render:function(i){const[r,l]=a.useState([]),[s,p]=a.useState([]),[d,g]=a.useState(),[c,m]=a.useState(),u=e=>m(e),y=e=>g(e),S=e=>{l(e)},b=e=>{p(e)},D=a.useMemo(()=>[{id:"infrastructure",label:"Infrastructure"},{id:"networking",label:"Networking"},{id:"security",label:"Security"},{id:"monitoring",label:"Monitoring"}],[]),R=a.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return t.jsx("div",{className:"flex flex-col gap-2",children:t.jsxs(n,{...i,children:[t.jsx(n.BadgeMultiSelect,{label:"Status",options:R,onApply:S}),t.jsx(n.TextMultiSelect,{label:"Category",options:D,onApply:b}),t.jsx(n.DateFilterDropdown,{label:"Created",onApply:y}),t.jsx(n.DateRangeFilterDropdown,{label:"Date Range",onApply:u}),t.jsx(n.ResetButton,{disabled:!c&&!d&&r.length===0&&s.length===0})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

          <FilterComponent.ResetButton disabled={!dateRange && !date && selectedStatus.length === 0 && selectedCategory.length === 0} />
        </FilterComponent>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const te=["Light"];export{o as Light,te as __namedExportsOrder,ee as default};
