import{r as n,j as e}from"./iframe-DzqcIqyR.js";import{F as t}from"./Filter-B6wb9G1j.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGPp45Jz.js";import"./Badge-Dux8j1r7.js";import"./Loader-BObM8lmG.js";import"./index-BeGbFKQs.js";import"./index-OJi8xCWq.js";import"./x-DMb9O_Hn.js";import"./createLucideIcon-va641UPV.js";import"./Button-CzXoaHXK.js";import"./Checkbox-S4nDa27r.js";import"./index-C4DQ2ouy.js";import"./index-DH9Ltsjp.js";import"./index-ClGMKl8Z.js";import"./index-Be2LMdCn.js";import"./index-B2sNscpS.js";import"./index-QMtm4YCj.js";import"./useToggle-CoCjW6GV.js";import"./check-CmBhLzNn.js";import"./index-Bc1wOnN3.js";import"./TimePicker-DyAoiBJW.js";import"./Typography-A9RCCnP7.js";import"./DatePicker-B3jrh6if.js";import"./style-Db9eJAfs.js";import"./chevron-right-BVkJw_-A.js";import"./isObject-Ba4KqRG3.js";import"./DateRangePicker-D0dfpumh.js";import"./RadioGroup-j1B1VJKY.js";import"./Radio-BOHyZF0L.js";import"./Input-krVlyctV.js";import"./Warning-DbY5aqkH.js";import"./proxy-Debh4QnL.js";const X={title:"In Review/Filter/Dark",component:t},r={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[p,s]=n.useState(),[d,m]=n.useState(),g=a=>m(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:g}),e.jsx(t.ResetButton,{disabled:!p&&!d&&o.length===0})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
