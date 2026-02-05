import{r as n,j as e}from"./iframe-CQUPapgb.js";import{F as t}from"./Filter-DoXGdSAX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-bXL91DXz.js";import"./Loader-D7b4Zrsx.js";import"./index-F5ZrBm5H.js";import"./index-15YaTtXl.js";import"./x-RfUGb2iM.js";import"./createLucideIcon-DUXeN8v5.js";import"./Button-LAv4szbU.js";import"./Checkbox-BFpPgTb_.js";import"./index-BLd5dFhW.js";import"./index-CGA3Cy4x.js";import"./index-Cj_TF1lr.js";import"./index-BIvasb16.js";import"./index-Deo0v7Fy.js";import"./index-BHnE5gDL.js";import"./useToggle-BYwGmJKb.js";import"./check-hVNxjiVS.js";import"./index-B1MlFbps.js";import"./TimePicker-BYMZOI90.js";import"./Typography-BOqb3Y-Y.js";import"./DatePicker-CqYO2GUy.js";import"./style-YlcGMhbL.js";import"./chevron-right-CUsG7SWz.js";import"./isObject-wjgffT1R.js";import"./DateRangePicker-8Vea2TTi.js";import"./RadioGroup-B_q0I00x.js";import"./Radio-BSKSbOlY.js";import"./Input-BcLZm2U2.js";import"./Warning-B3nu_ID6.js";import"./proxy-CaVz0OYc.js";const X={title:"In Review/Filter/Light",component:t},i={render:function(o){const[r,l]=n.useState([]),[p,s]=n.useState(),[d,g]=n.useState(),m=a=>g(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...o,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:m}),e.jsx(t.ResetButton,{disabled:!d&&!p&&r.length===0})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
