import{r as n,j as e}from"./iframe-DzCElVTB.js";import{F as t}from"./Filter-Cfl9llV9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-BMYHd2kY.js";import"./Loader-D_TQ7JsG.js";import"./index-unz-5YXc.js";import"./index-CXkHpK-W.js";import"./x-B-Ry5TE4.js";import"./createLucideIcon-FeJNRDec.js";import"./Button-Br17MK3Z.js";import"./Checkbox-BH-NsAHk.js";import"./index-5OG6_H79.js";import"./index-dLz-iE5X.js";import"./index-p9Urk4BB.js";import"./index-t-8QDIlA.js";import"./index-CrB-aR97.js";import"./index-CwpEPN4N.js";import"./useToggle-Bxw-okYn.js";import"./check-C7pl-f2P.js";import"./index-C3RmFIX1.js";import"./TimePicker-CGdULp3p.js";import"./Typography-CJxmGzaW.js";import"./DatePicker-CTOhZHyj.js";import"./style-CdqNEZoF.js";import"./chevron-right-DK1p8Dv2.js";import"./isObject-vujFCL-4.js";import"./DateRangePicker-_HU2_7Qn.js";import"./RadioGroup-t8tlJ1KU.js";import"./Radio-BpDeeVw6.js";import"./Input-DEKZfzx_.js";import"./Warning-B7zpCILh.js";const V={title:"In Review/Filter/Light",component:t},i={render:function(o){const[r,l]=n.useState([]),[p,s]=n.useState(),[d,g]=n.useState(),m=a=>g(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...o,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:m}),e.jsx(t.ResetButton,{disabled:!d&&!p&&r.length===0})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
