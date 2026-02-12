import{r as n,j as e}from"./iframe-C4Xa0_Vd.js";import{F as t}from"./Filter-BDmOPyqK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-D6QwgEZp.js";import"./Loader-DqLmO1af.js";import"./index-BtEsH0n3.js";import"./index-DM4VC6Ap.js";import"./x-D1G5HUtI.js";import"./createLucideIcon-ChkDDb4c.js";import"./Button-ig9r9gr0.js";import"./Checkbox-iCIK6vEg.js";import"./index-BJDKFPOK.js";import"./index-dUMkqO8b.js";import"./index-CZr_3e1j.js";import"./index-D-0IbQBT.js";import"./index-C7u63nZO.js";import"./index-DEv7qGBh.js";import"./useToggle-BKnIhpFG.js";import"./check-DhgfHBvo.js";import"./index-umurZPFM.js";import"./TimePicker-BGBBY3U_.js";import"./Typography-DyPNlEqN.js";import"./DatePicker-ByxNQaCU.js";import"./style-CP2iUml1.js";import"./chevron-right-C8zNOe3m.js";import"./isObject-Clb_RJ6u.js";import"./DateRangePicker-Cv05N4ZQ.js";import"./RadioGroup-DduWf0e7.js";import"./Radio-D5-f5rXC.js";import"./Input-px-cJEF8.js";import"./Warning-C-DcmHhB.js";import"./proxy-Cev7oucJ.js";const X={title:"In Review/Filter/Light",component:t},i={render:function(o){const[r,l]=n.useState([]),[p,s]=n.useState(),[d,g]=n.useState(),m=a=>g(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...o,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:m}),e.jsx(t.ResetButton,{disabled:!d&&!p&&r.length===0})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
