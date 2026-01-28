import{r as n,j as e}from"./iframe-BlTjg9l_.js";import{F as t}from"./Filter-DTYj9uzm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-4LzILe4G.js";import"./Loader-CyxEOiCx.js";import"./index-Bu_ar9tm.js";import"./index-zjOL5SK6.js";import"./x-CAYV4wUM.js";import"./createLucideIcon-JNXvXrMe.js";import"./Button-Q-OcSZck.js";import"./Checkbox-CmgSl4w4.js";import"./index-DZr5dUIJ.js";import"./index-C60Vqh1Z.js";import"./index-CvSbo2GN.js";import"./index-CUDLw0TM.js";import"./index-zOELT93s.js";import"./index-hqQBJ1db.js";import"./useToggle-B3Yv3tMQ.js";import"./check-DM4YPK7m.js";import"./index-BTMMiShY.js";import"./TimePicker-Cd7KzgpI.js";import"./Typography-NrHqQDsO.js";import"./DatePicker-D1crwtOW.js";import"./style-DP4D6DNq.js";import"./chevron-right-V2LLFm2v.js";import"./isObject-DZ7lQ7xH.js";import"./DateRangePicker-CBp8RUdk.js";import"./RadioGroup-CtpiYhrz.js";import"./Radio-BIJZW4yh.js";import"./Input-qwyf_9fR.js";import"./Warning-CjdaddJg.js";const V={title:"In Review/Filter/Light",component:t},i={render:function(o){const[r,l]=n.useState([]),[p,s]=n.useState(),[d,g]=n.useState(),m=a=>g(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...o,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:m}),e.jsx(t.ResetButton,{disabled:!d&&!p&&r.length===0})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
