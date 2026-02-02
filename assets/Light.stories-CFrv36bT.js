import{r as n,j as e}from"./iframe-Bn_zYVkQ.js";import{F as t}from"./Filter-D0O_uCi5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-DnRIwH3a.js";import"./Loader-WLi4rQ97.js";import"./index-C3wFPQlr.js";import"./index-aQzbjv51.js";import"./x-xtuj1Vio.js";import"./createLucideIcon-Nq0w9UEh.js";import"./Button-1qVSaAO5.js";import"./Checkbox-9G0rq1R8.js";import"./index-FCfS518D.js";import"./index-BPquQhIf.js";import"./index-BZrJoUPC.js";import"./index-D6mTTpc1.js";import"./index-BSgp__eO.js";import"./index-B44331KA.js";import"./useToggle-B6ckmTa_.js";import"./check-BHxD8Znu.js";import"./index-DWQB616r.js";import"./TimePicker-Bbj5jBVe.js";import"./Typography-BK75nqwC.js";import"./DatePicker-BcmYM5CW.js";import"./style-1YjHF4jU.js";import"./chevron-right-BEKQEKzs.js";import"./isObject-BmMORa2_.js";import"./DateRangePicker-DYhwpKCo.js";import"./RadioGroup-D5XVccgy.js";import"./Radio-BcSOuRyW.js";import"./Input-DOuHIFSP.js";import"./Warning-Cf3Crh7q.js";const V={title:"In Review/Filter/Light",component:t},i={render:function(o){const[r,l]=n.useState([]),[p,s]=n.useState(),[d,g]=n.useState(),m=a=>g(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...o,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:m}),e.jsx(t.ResetButton,{disabled:!d&&!p&&r.length===0})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const X=["Light"];export{i as Light,X as __namedExportsOrder,V as default};
