import{r as n,j as e}from"./iframe-EKlspOXE.js";import{F as t}from"./Filter-BzmFZjc3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGPp45Jz.js";import"./Badge-ByE2YvGb.js";import"./Loader-CADIXEW-.js";import"./index-BgnT3NcS.js";import"./index-LRDd8SaH.js";import"./x-BA_z5U2O.js";import"./createLucideIcon-CTL94aUM.js";import"./Button-CjSgC-yr.js";import"./Checkbox-UdofJySr.js";import"./index-dn_oqIz6.js";import"./index-DWuHUHPO.js";import"./index-BYbv0st9.js";import"./index-N8I-yP48.js";import"./index-vbP5H9Rx.js";import"./index-Cnlk_c_u.js";import"./useToggle-hX6R4AY9.js";import"./check-C8l0DhS0.js";import"./index-CJjFNGCP.js";import"./TimePicker-BKy5Xfug.js";import"./Typography-CcyQF4iQ.js";import"./DatePicker-ISI1Wtf9.js";import"./style-Desyewzp.js";import"./chevron-right-Hx6KidVH.js";import"./isObject-CVFOIpBL.js";import"./DateRangePicker-BISSUf62.js";import"./RadioGroup-D91xtugi.js";import"./Radio-C60tUPKR.js";import"./Input-Cy5e3zWb.js";import"./Warning-BHnrB8ZJ.js";import"./proxy-BDQopCpw.js";const X={title:"In Review/Filter/Dark",component:t},r={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[p,s]=n.useState(),[d,m]=n.useState(),g=a=>m(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:g}),e.jsx(t.ResetButton,{disabled:!p&&!d&&o.length===0})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
