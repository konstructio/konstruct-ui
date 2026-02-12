import{r as n,j as e}from"./iframe-DndQCF3t.js";import{F as t}from"./Filter-CdhkG4Ie.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-CDqlIWeG.js";import"./Loader-D2RDIc_s.js";import"./index-CIaql4E1.js";import"./index-M_mSbx14.js";import"./x-DHY2jeMD.js";import"./createLucideIcon-Cg7vweCw.js";import"./Button-2Bc-zS9R.js";import"./Checkbox-Cocz2-HZ.js";import"./index-DdxD677p.js";import"./index-CrDzBoOS.js";import"./index-Dbi1uxf3.js";import"./index-DTRH6T4G.js";import"./index-DjwI9hJ8.js";import"./index-BLXex9hD.js";import"./useToggle-DIbuxTaU.js";import"./check-C6kldBH7.js";import"./index-DZ4gQ9XF.js";import"./TimePicker-_TDEXUlp.js";import"./Typography-FWqmQoqE.js";import"./DatePicker-B08rtTgf.js";import"./style-CGELM8Wd.js";import"./chevron-right-CjNdAP8v.js";import"./isObject-CyJ5fAbV.js";import"./DateRangePicker-Cyxgb5CR.js";import"./RadioGroup-BRI8Rl94.js";import"./Radio-B9o2k51j.js";import"./Input-BrOI9fCe.js";import"./Warning-fOTtNiTV.js";import"./proxy-UIheRg-f.js";const X={title:"In Review/Filter/Dark",component:t},r={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[p,s]=n.useState(),[d,m]=n.useState(),g=a=>m(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:g}),e.jsx(t.ResetButton,{disabled:!p&&!d&&o.length===0})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
