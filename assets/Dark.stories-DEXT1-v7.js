import{r as n,j as e}from"./iframe-DP5wXfBg.js";import{F as t}from"./Filter-CxNLciso.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGPp45Jz.js";import"./Badge-Di-Le1dc.js";import"./Loader-SOVlA4jS.js";import"./index-D_cTyuvQ.js";import"./index-B7vETLGW.js";import"./x-CsnoKfqV.js";import"./createLucideIcon-DQdecM9J.js";import"./Button-D4jZpTmn.js";import"./Checkbox-BApOCLu0.js";import"./index-HbSwMvcj.js";import"./index-DlxHLVJT.js";import"./index-Bk2Wchse.js";import"./index-L9rt3ipC.js";import"./index-Dek48HPk.js";import"./index-a__fjLKU.js";import"./useToggle-zk4BF_uM.js";import"./check-Bs7RcU-6.js";import"./index-CSg-Iqp3.js";import"./TimePicker-Co4MW8ms.js";import"./Typography-C1F4y8i5.js";import"./DatePicker-DDwHJz3D.js";import"./style-B2RaE2qd.js";import"./chevron-right-BiNAA8-O.js";import"./isObject-CBcTU6Tz.js";import"./DateRangePicker-CMY7ltDZ.js";import"./RadioGroup-CfDb2wJw.js";import"./Radio-DxgLVXPI.js";import"./Input-BCbH0ois.js";import"./Warning-WUy0snsE.js";import"./proxy-CUedc4FP.js";const X={title:"In Review/Filter/Dark",component:t},r={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[p,s]=n.useState(),[d,m]=n.useState(),g=a=>m(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:g}),e.jsx(t.ResetButton,{disabled:!p&&!d&&o.length===0})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
