import{r as n,j as e}from"./iframe-iNNCIJQj.js";import{F as t}from"./Filter-ChOeIzUY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-krFppCIo.js";import"./Loader-Bduvubyc.js";import"./index-NdrXZRaE.js";import"./index-DagSfKua.js";import"./x-9EaDShcD.js";import"./createLucideIcon-DbS3piOA.js";import"./Button-CKoXbYwt.js";import"./Checkbox-Cnu8U_9X.js";import"./index-C15mSjXQ.js";import"./index-D6fsOiNw.js";import"./index-D1dj3KAc.js";import"./index-D8SnJIXI.js";import"./index-DXZvAefG.js";import"./index-DGwC3VtK.js";import"./useToggle-CeG64uXO.js";import"./check-D4epgwKC.js";import"./index-D6M8j4DE.js";import"./TimePicker-BmqosNu2.js";import"./Typography-DlFeNCA4.js";import"./DatePicker-D9giE7PV.js";import"./style-Bm4Bw-S_.js";import"./chevron-right-tRhJ_ab3.js";import"./isObject-CVt-J4g6.js";import"./DateRangePicker-BS25sdyQ.js";import"./RadioGroup-7u5eGJag.js";import"./Radio-DZbStY9b.js";import"./Input-1ueRMzqc.js";import"./Warning-DkivU1LE.js";import"./proxy-E0CwWsvw.js";const X={title:"In Review/Filter/Dark",component:t},r={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[p,s]=n.useState(),[d,m]=n.useState(),g=a=>m(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:g}),e.jsx(t.ResetButton,{disabled:!p&&!d&&o.length===0})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
