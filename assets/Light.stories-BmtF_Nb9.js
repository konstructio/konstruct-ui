import{r as n,j as e}from"./iframe-CYvr-DNT.js";import{F as t}from"./Filter-Bw68uwZU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-C4Vqes0j.js";import"./Loader-UK7JRX3A.js";import"./index-Cs63iYK6.js";import"./index-Bk2x6q9r.js";import"./x-DkY44w4V.js";import"./createLucideIcon-Bg_aPHFQ.js";import"./Button-BscITthV.js";import"./Checkbox-BL93BWoI.js";import"./index-BJuqEouu.js";import"./index-BzdkCSAX.js";import"./index-DL4nLMzl.js";import"./index-C8qjT7c-.js";import"./index-Ca1YmGZ8.js";import"./index-D8kkWhKd.js";import"./useToggle-BFMWtIuo.js";import"./check-lmVysPvF.js";import"./index-Ch8ux4gY.js";import"./TimePicker-BvYqVpvz.js";import"./Typography-DGsQkGV-.js";import"./DatePicker-Bu2Z5dXU.js";import"./style-DhfiSkjW.js";import"./chevron-right-Hz6mjwkA.js";import"./isObject-D7YZ1v_L.js";import"./DateRangePicker-DhSbxznz.js";import"./RadioGroup-TgVEDs1m.js";import"./Radio-CX4U3jyB.js";import"./Input-pC8_2qEP.js";import"./Warning-BMsvqDn2.js";const V={title:"In Review/Filter/Light",component:t},i={render:function(o){const[r,l]=n.useState([]),[p,s]=n.useState(),[d,g]=n.useState(),m=a=>g(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...o,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:m}),e.jsx(t.ResetButton,{disabled:!d&&!p&&r.length===0})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
