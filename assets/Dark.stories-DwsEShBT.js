import{r as n,j as e}from"./iframe-B0ykOvC4.js";import{F as t}from"./Filter-CoEQJJze.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIgQ6y5l.js";import"./Badge-pP4g0MtT.js";import"./Loader-DHgAVRtX.js";import"./index-Dt_7K3_P.js";import"./index-Qi49gsqp.js";import"./x-nQBw8omO.js";import"./createLucideIcon-DTaVOwjc.js";import"./Button-DKwRI_Ni.js";import"./Checkbox-Xn4qFmdp.js";import"./index-4GeOFifu.js";import"./index-BvXeOUv6.js";import"./index-CBUw3gf_.js";import"./index-ClOyIQu9.js";import"./index-DglKKbRM.js";import"./index-BW2IeJSN.js";import"./useToggle-DoGEYRn2.js";import"./check-wrDHast8.js";import"./index-DWDo_day.js";import"./TimePicker-7OjFUYpG.js";import"./Typography-B12U-GCI.js";import"./DatePicker-Cp1629e0.js";import"./style-DaYB41-P.js";import"./chevron-right-d40jRypO.js";import"./isObject-CLmpobET.js";import"./DateRangePicker-CqUznJq0.js";import"./RadioGroup-EQBCpc8O.js";import"./Radio-DC9Bb5qu.js";import"./Input-c3fuW2sE.js";import"./Warning-D74Ptsuc.js";import"./proxy-DOkuszPo.js";const X={title:"In Review/Filter/Dark",component:t},r={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[p,s]=n.useState(),[d,m]=n.useState(),g=a=>m(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:g}),e.jsx(t.ResetButton,{disabled:!p&&!d&&o.length===0})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
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

          <FilterComponent.ResetButton disabled={!date && !dateRange && selectedStatus.length === 0} />
        </FilterComponent>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const Y=["Dark"];export{r as Dark,Y as __namedExportsOrder,X as default};
