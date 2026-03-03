import{r as n,j as e}from"./iframe-CssV7JZu.js";import{F as t}from"./Filter-SpJu4GWY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGPp45Jz.js";import"./Badge-owhEqyir.js";import"./Loader-c5voPfCx.js";import"./index-yAfA1QZT.js";import"./index-TeGc_hon.js";import"./x-UOh0OWSc.js";import"./createLucideIcon-XfZyPLiz.js";import"./Button-apk4umXX.js";import"./Checkbox-Dsdti6Te.js";import"./index-CEoRzofj.js";import"./index-DZGTwPZs.js";import"./index-DUF8VvX7.js";import"./index-C4I0eWcx.js";import"./index-BMyYsFzy.js";import"./index-BMjKlocg.js";import"./useToggle-SNx89UJr.js";import"./check-CS9p8RHz.js";import"./index-NIzNdihP.js";import"./TimePicker-CK1pYjVr.js";import"./Typography-CEu00F3Q.js";import"./DatePicker-D6bLBTjL.js";import"./style-ZIThleI_.js";import"./chevron-right-C2iT4n4C.js";import"./isObject-CK0-rR5Q.js";import"./DateRangePicker-Due5F9uv.js";import"./RadioGroup-CR6Kx6UF.js";import"./Radio-U91_fZY2.js";import"./Input-C_8y-m9s.js";import"./Warning-BUoECZOo.js";import"./proxy-BKFOMweW.js";const X={title:"In Review/Filter/Light",component:t},i={render:function(o){const[r,l]=n.useState([]),[p,s]=n.useState(),[d,g]=n.useState(),m=a=>g(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...o,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:m}),e.jsx(t.ResetButton,{disabled:!d&&!p&&r.length===0})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
