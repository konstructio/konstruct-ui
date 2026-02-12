import{r as n,j as e}from"./iframe-CrqmAXTA.js";import{F as t}from"./Filter-DsDGjJI2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-BuoByz5r.js";import"./Loader-lQzAda50.js";import"./index-0erROcmX.js";import"./index-dDb3DRV8.js";import"./x-CumYoLIr.js";import"./createLucideIcon-Bi5YGLB_.js";import"./Button-D7geNf_l.js";import"./Checkbox-cLAh6F0p.js";import"./index-D2FXlIu5.js";import"./index-CyquALdv.js";import"./index-jd1h53s9.js";import"./index-7_z9_GLB.js";import"./index-By5EJtZL.js";import"./index-Bha9iUFT.js";import"./useToggle-CPzM05rt.js";import"./check-CAZyqhlx.js";import"./index-DoZvAR3P.js";import"./TimePicker-DwiVg59S.js";import"./Typography-CSTWAyVB.js";import"./DatePicker-BKmBmmXG.js";import"./style-BUq82bvi.js";import"./chevron-right-tyddMeK9.js";import"./isObject-DFaFbEwj.js";import"./DateRangePicker-DV-YQg2v.js";import"./RadioGroup-BbDOkTVQ.js";import"./Radio-CcuTWOyG.js";import"./Input-AtgvYN56.js";import"./Warning-Cg0C8SdD.js";import"./proxy-Dq547Jbg.js";const X={title:"In Review/Filter/Light",component:t},i={render:function(o){const[r,l]=n.useState([]),[p,s]=n.useState(),[d,g]=n.useState(),m=a=>g(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...o,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:m}),e.jsx(t.ResetButton,{disabled:!d&&!p&&r.length===0})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
