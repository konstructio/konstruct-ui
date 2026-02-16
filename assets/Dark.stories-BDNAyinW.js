import{r as n,j as e}from"./iframe-FWjw8CEY.js";import{F as t}from"./Filter-OGU0AjDs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIgQ6y5l.js";import"./Badge-B84eFWSC.js";import"./Loader-HKxCUlsE.js";import"./index-CoQBgGxf.js";import"./index-BORiBlUN.js";import"./x-Bup6JAsl.js";import"./createLucideIcon-D6mAEPwf.js";import"./Button-9dTOoGn5.js";import"./Checkbox-DNL899se.js";import"./index-BLJyuHGw.js";import"./index-D2v9uLFe.js";import"./index-Bz4JE3I3.js";import"./index-BV1MJXup.js";import"./index-CyMeT1py.js";import"./index-Dz82K46Y.js";import"./useToggle-DMje99RI.js";import"./check-LE2LboH6.js";import"./index-BNMQzE2O.js";import"./TimePicker-D_fnQ_Jf.js";import"./Typography-D57O5X4j.js";import"./DatePicker-BLTqXRC0.js";import"./style-CRywLndf.js";import"./chevron-right-APqxDRGJ.js";import"./isObject-CWqFL_Qo.js";import"./DateRangePicker-C_SKAbTu.js";import"./RadioGroup-dgJZX6xY.js";import"./Radio-C2COIXuo.js";import"./Input-BJ3cF_pQ.js";import"./Warning-i2SfFYo1.js";import"./proxy-BhTAT2jO.js";const X={title:"In Review/Filter/Dark",component:t},r={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[p,s]=n.useState(),[d,m]=n.useState(),g=a=>m(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:g}),e.jsx(t.ResetButton,{disabled:!p&&!d&&o.length===0})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
