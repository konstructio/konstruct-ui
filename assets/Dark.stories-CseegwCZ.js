import{r as n,j as e}from"./iframe-DlVqEhCt.js";import{F as t}from"./Filter-BsPj60kw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-i37ZWDAx.js";import"./Loader-CZ865eyf.js";import"./index-CnrSnJ2t.js";import"./index-DN_v6qfC.js";import"./x-BNuddwpr.js";import"./createLucideIcon-CBrmlE83.js";import"./Button-BldIOW-C.js";import"./Checkbox-DQfeGzFU.js";import"./index-i31ywhDG.js";import"./index-DbPt2bPd.js";import"./index-BbJuXmv1.js";import"./index-Dxe5SwYG.js";import"./index-CX4qTnUE.js";import"./index-DgAl0syX.js";import"./useToggle-DsTKiI8Q.js";import"./check-BZ3HgaQQ.js";import"./index-Y6EkoYN_.js";import"./TimePicker-DSH22CA7.js";import"./Typography-NWAg16e1.js";import"./DatePicker-DfxWcvi1.js";import"./style-6AU5bakS.js";import"./chevron-right-BZWr-BlR.js";import"./isObject-R6UYj1CV.js";import"./DateRangePicker-7D8ChwXq.js";import"./RadioGroup-8brX_hSo.js";import"./Radio-szztcxmH.js";import"./Input-CqZjL_7y.js";import"./Warning-DSYKGbUd.js";import"./proxy-Cc-7SqhQ.js";const X={title:"In Review/Filter/Dark",component:t},r={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[p,s]=n.useState(),[d,m]=n.useState(),g=a=>m(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:g}),e.jsx(t.ResetButton,{disabled:!p&&!d&&o.length===0})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
