import{r as n,j as e}from"./iframe-B_Kp4Ap4.js";import{F as t}from"./Filter-BZhKgQQS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-BeuhbNn6.js";import"./Loader-CjzNjzvA.js";import"./index-Gt69yDDL.js";import"./index-Dq5HNQJt.js";import"./x-BZGkHnKG.js";import"./createLucideIcon-Z2_koSRZ.js";import"./Button-DBgZE1v4.js";import"./Checkbox-BeJngfqo.js";import"./index-DBmMIMDF.js";import"./index-DLg1SWzL.js";import"./index-EIxyvsFR.js";import"./index-C852JY1J.js";import"./index-Cgecp2gB.js";import"./index-Cfrt2bhd.js";import"./useToggle-DGxVddpi.js";import"./check-qa0rA4si.js";import"./index-DPkhaaqA.js";import"./TimePicker-CQArIB-Y.js";import"./Typography-DYYI0ttp.js";import"./DatePicker-BI-zrmtL.js";import"./style-Bq2fsrBO.js";import"./chevron-right-Q681D7E2.js";import"./isObject-3K_iVN1l.js";import"./DateRangePicker-DufcP-fe.js";import"./RadioGroup-DbXPFN_X.js";import"./Radio-InsB1H9O.js";import"./Input-CHHNmYFc.js";import"./Warning-BLxve8-C.js";import"./proxy-CcuVY7tU.js";const X={title:"In Review/Filter/Light",component:t},i={render:function(o){const[r,l]=n.useState([]),[p,s]=n.useState(),[d,g]=n.useState(),m=a=>g(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...o,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:m}),e.jsx(t.ResetButton,{disabled:!d&&!p&&r.length===0})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Y=["Light"];export{i as Light,Y as __namedExportsOrder,X as default};
