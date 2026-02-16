import{r as n,j as e}from"./iframe-CoBiGKUL.js";import{F as t}from"./Filter-ZA8wAkAd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIgQ6y5l.js";import"./Badge-pTIsiS5x.js";import"./Loader-nXKv-31G.js";import"./index-rYlKWwxV.js";import"./index-D1HSvG2h.js";import"./x-O0Fh6HXg.js";import"./createLucideIcon-DWMHVhJV.js";import"./Button-DRA6bUAj.js";import"./Checkbox-DaEw14lv.js";import"./index-Dt2jClfr.js";import"./index-Buesxbiu.js";import"./index-BG4t6Fzh.js";import"./index-Box-pd3H.js";import"./index-CVV1FKaE.js";import"./index-a_w-usLh.js";import"./useToggle-BupquSd5.js";import"./check-bmaZLFnB.js";import"./index-B_je-Zjp.js";import"./TimePicker-C-rQapg5.js";import"./Typography-DZ3by0j3.js";import"./DatePicker-D32x7pyU.js";import"./style-DITGJKDw.js";import"./chevron-right-CDqPYBeL.js";import"./isObject-CPGU-old.js";import"./DateRangePicker-FkihzFD1.js";import"./RadioGroup-DFxqiudA.js";import"./Radio-oTNe0I8O.js";import"./Input-BRGpjGHx.js";import"./Warning-CbxHBKjb.js";import"./proxy-RPIFmCCN.js";const X={title:"In Review/Filter/Light",component:t},i={render:function(o){const[r,l]=n.useState([]),[p,s]=n.useState(),[d,g]=n.useState(),m=a=>g(a),c=a=>s(a),u=a=>{l(a)},D=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...o,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:D,onApply:u}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:c}),e.jsx(t.DateRangeFilterDropdown,{label:"Date Range",onApply:m}),e.jsx(t.ResetButton,{disabled:!d&&!p&&r.length===0})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
