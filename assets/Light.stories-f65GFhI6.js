import{r as n,j as e}from"./iframe-CyFn_Qhx.js";import{F as t}from"./Filter-CH5xGZVf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIgQ6y5l.js";import"./Badge-D2fYr5gX.js";import"./Loader-CbnHvqZg.js";import"./index-DhmxNnKf.js";import"./index-B3EGCS26.js";import"./x-CmGmrN9T.js";import"./createLucideIcon-HlI3zuae.js";import"./Button-CWxRp1ae.js";import"./Checkbox-qX7vx926.js";import"./index-DbkhKSB9.js";import"./index-Cll_EaMR.js";import"./index-7WZiwmbk.js";import"./index-CkEnChaw.js";import"./index-C39ePfpB.js";import"./index-C8cOalJx.js";import"./useToggle-DsKf2gm8.js";import"./check-BVYe35_B.js";import"./index-Cu9JQmlv.js";import"./TimePicker-XrLjbM77.js";import"./Typography-Bxe8aBKv.js";import"./DatePicker-NBerZoiB.js";import"./style-hT0dLx4H.js";import"./chevron-right-DsTyX_8j.js";import"./isObject-_yShL5Qg.js";import"./DateRangePicker-D9MwtM12.js";import"./RadioGroup-DeU9NL8z.js";import"./Radio-DR-9wiv-.js";import"./Input-zDCUXe_T.js";import"./Warning-D0OtOMmk.js";import"./proxy-DT40K5MH.js";const X={title:"In Review/Filter/Light",component:t},i={render:function(o){const[r,l]=n.useState([]),[p,s]=n.useState(),[d,g]=n.useState(),m=a=>g(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...o,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:m}),e.jsx(t.ResetButton,{disabled:!d&&!p&&r.length===0})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
