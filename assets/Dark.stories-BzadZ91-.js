import{r as n,j as e}from"./iframe-BXO_EhpM.js";import{F as t}from"./Filter-CCTTkMED.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIgQ6y5l.js";import"./Badge-Bi8xE0_V.js";import"./Loader-Bu_oHQo7.js";import"./index-CxlmtjIK.js";import"./index-D_E6ICQ7.js";import"./x-ht38r2Si.js";import"./createLucideIcon-BvIK0-7g.js";import"./Button-BR0-snVO.js";import"./Checkbox-DKg1EpNg.js";import"./index-CcJZc0wx.js";import"./index-vvKf7FSZ.js";import"./index-CUjo4IK2.js";import"./index-Bn_ZaH7x.js";import"./index-dPD-S0LF.js";import"./index-DyYn48wP.js";import"./useToggle-BldnEv0p.js";import"./check-DSFAKICc.js";import"./index-jSjLyp38.js";import"./TimePicker-UIyAM6wF.js";import"./Typography-Bc3KsAQu.js";import"./DatePicker-DfQccgoi.js";import"./style-BBFTxbZY.js";import"./chevron-right-BbFQLuUX.js";import"./isObject-nsYsjzPG.js";import"./DateRangePicker-C_Nolzgq.js";import"./RadioGroup-BbQfmraC.js";import"./Radio-C7_Aj0ZM.js";import"./Input-DOIuvlYX.js";import"./Warning-BMg_Tjff.js";import"./proxy-ClNoopVP.js";const X={title:"In Review/Filter/Dark",component:t},r={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[p,s]=n.useState(),[d,m]=n.useState(),g=a=>m(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:g}),e.jsx(t.ResetButton,{disabled:!p&&!d&&o.length===0})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
