import{r as n,j as e}from"./iframe-BP6xk-sd.js";import{F as t}from"./Filter-DRm3rXLk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-BYeJ0N0p.js";import"./loader-CGryCB2D.js";import"./index-0zgbZz4U.js";import"./index-CL5I2TJl.js";import"./x-DoM9r-Ep.js";import"./createLucideIcon-BvJQt3eP.js";import"./Button-66KUfeYz.js";import"./Checkbox-1PzDT9ji.js";import"./index-B8ykCEHl.js";import"./index-CNmNVVh_.js";import"./index-NUtwVNq_.js";import"./index-BFNe1SIl.js";import"./index-37Tcys3K.js";import"./index-DuM2WOkk.js";import"./useToggle-B9QzNAUl.js";import"./check-UpI97qn4.js";import"./index-BD8_zldL.js";import"./chevron-down-CXMmdtVv.js";import"./DatePicker-Bo9ENp8b.js";import"./chevron-right-BQMJ7Tjx.js";const q={title:"In Review/Filter/Dark",component:t},a={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[s,p]=n.useState(),d=r=>p(r),m=r=>{l(r)},c=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:c,onApply:m}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    theme: 'dark'
  },
  render: function FilterStory(args) {
    const [selectedStatus, setSelectedStatus] = useState<Option[]>([]);
    const [date, setDate] = useState<Date | undefined>();
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

          <FilterComponent.ResetButton disabled={!date && selectedStatus.length === 0} />
        </FilterComponent>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const z=["Dark"];export{a as Dark,z as __namedExportsOrder,q as default};
