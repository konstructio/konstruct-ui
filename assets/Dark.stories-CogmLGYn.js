import{r as n,j as e}from"./iframe-CXfe2m7b.js";import{F as t}from"./Filter-iHX-vxXP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-CWlqdd1_.js";import"./Loader-BK45g57-.js";import"./index-CT5XcF7v.js";import"./index-HWT8ds2M.js";import"./x-D8JCEUqZ.js";import"./createLucideIcon-DP3qgoNS.js";import"./Button-C-iR94TL.js";import"./Checkbox-CPz-UUAn.js";import"./index-CTPiofXa.js";import"./index-B0Yk7S0c.js";import"./index-CATosLJL.js";import"./index-1zbkfSG9.js";import"./index-2k6Os8Nw.js";import"./index--vbQmb1t.js";import"./useToggle-BQQfcmhV.js";import"./check-GGgQh86i.js";import"./index-DpMUpOLZ.js";import"./TimePicker-JYTxX5uM.js";import"./Typography-CXZPBEcx.js";import"./DatePicker-CLdAPsgA.js";import"./style-B03omc7W.js";import"./chevron-right-Bx83USUn.js";import"./isObject-B7Tw1xv1.js";import"./DateRangePicker-CL5MH0jq.js";import"./RadioGroup-Biyp_fZL.js";import"./Radio-CG3JwMVx.js";import"./Input-Vd5ZMRBq.js";import"./Warning-QrQhKoqr.js";import"./proxy-DDpiuYQ4.js";const X={title:"In Review/Filter/Dark",component:t},r={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[p,s]=n.useState(),[d,m]=n.useState(),g=a=>m(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:g}),e.jsx(t.ResetButton,{disabled:!p&&!d&&o.length===0})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
