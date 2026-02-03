import{r as n,j as e}from"./iframe-Bp60l9al.js";import{F as t}from"./Filter-BV20pkcp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-BY88OgKn.js";import"./Loader-BEaIynbA.js";import"./index-DnqQ_iXf.js";import"./index-BTTMSvRg.js";import"./x-DGsy2Izm.js";import"./createLucideIcon-CjYg5P9h.js";import"./Button-D4_1USlM.js";import"./Checkbox-D3MYeZlh.js";import"./index-BcGdR1C3.js";import"./index-JTgYP6w4.js";import"./index-CRUFEqe3.js";import"./index-DpDBQaEL.js";import"./index-fpGmZfFV.js";import"./index-DCo0TcAb.js";import"./useToggle-Blrvcrxi.js";import"./check-Ct62zp67.js";import"./index-9yVhKgGp.js";import"./TimePicker-BXFc5LeO.js";import"./Typography-B_faiLY2.js";import"./DatePicker-ZyJtLPZq.js";import"./style-Hh_7SsqZ.js";import"./chevron-right-B-u6upoD.js";import"./isObject-JCTm3-12.js";import"./DateRangePicker-BbIDBEOD.js";import"./RadioGroup-DF-lgy18.js";import"./Radio-n_13Aj-w.js";import"./Input-B_Z3rurd.js";import"./Warning-D36SD_1T.js";import"./proxy-BLtEY24W.js";const X={title:"In Review/Filter/Dark",component:t},r={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[p,s]=n.useState(),[d,m]=n.useState(),g=a=>m(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:g}),e.jsx(t.ResetButton,{disabled:!p&&!d&&o.length===0})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
