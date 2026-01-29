import{r as n,j as e}from"./iframe-RzY5nVzv.js";import{F as t}from"./Filter-DcH-KnFa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-B25W7jPg.js";import"./Loader-DX0jl9Ct.js";import"./index-CmRggxv1.js";import"./index-D4GvNxec.js";import"./x-KTCTrxag.js";import"./createLucideIcon-DCEbnp4V.js";import"./Button-DSvTanwd.js";import"./Checkbox-DmAgRJkf.js";import"./index-4EHyxKTR.js";import"./index-G0SWjWY6.js";import"./index-rjmpviWI.js";import"./index-CAOwILyZ.js";import"./index-BJGDGsmh.js";import"./index-BvSz_DmO.js";import"./useToggle-3Wg310Sm.js";import"./check-CSUtuK8R.js";import"./index-BYWd0px6.js";import"./TimePicker-D4eI7h2F.js";import"./Typography-D8nXtpye.js";import"./DatePicker-DrZjRtuD.js";import"./style-CUnW5gH3.js";import"./chevron-right-BGsVfReT.js";import"./isObject-DhRVUKqe.js";import"./DateRangePicker-MoOhAg1p.js";import"./RadioGroup-nKK3Yeii.js";import"./Radio-DY2WhrAT.js";import"./Input-CIqsZfaw.js";import"./Warning-DIjv9pwl.js";const V={title:"In Review/Filter/Light",component:t},i={render:function(o){const[r,l]=n.useState([]),[p,s]=n.useState(),[d,g]=n.useState(),m=a=>g(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...o,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:m}),e.jsx(t.ResetButton,{disabled:!d&&!p&&r.length===0})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function FilterStory(args) {
    const [selectedStatus, setSelectedStatus] = useState<Option[]>([]);
    const [date, setDate] = useState<Date | undefined>();
    const [dateRange, setDateRange] = useState<DateRangeWithTime | undefined>();
    const onApplyDateRange = (range?: DateRangeWithTime) => setDateRange(range);
    const onApplyDate = (date?: Date) => setDate(date);
    const onApplyBadge = (selectedOptions: Option[]) => {
      setSelectedStatus(selectedOptions);
    };
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

          <FilterComponent.DateFilterDropdown label="Created" onApply={onApplyDate} />

          <FilterComponent.DateRangeFilterDropdown label="Date Range" onApply={onApplyDateRange} />

          <FilterComponent.ResetButton disabled={!dateRange && !date && selectedStatus.length === 0} />
        </FilterComponent>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const X=["Light"];export{i as Light,X as __namedExportsOrder,V as default};
