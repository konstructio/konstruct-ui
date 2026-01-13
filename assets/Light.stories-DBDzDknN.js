import{r as n,j as e}from"./iframe-Dv_ed3hk.js";import{F as t}from"./Filter-CJ8N3SXw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn42e07n.js";import"./Badge-BGwcnpM5.js";import"./loader-D8K9OvPO.js";import"./index-D5MN6fTV.js";import"./index-CqmYFDcc.js";import"./x-DEiZbMkp.js";import"./createLucideIcon-8Yd3Po8i.js";import"./Button-Bm3wzKyX.js";import"./Checkbox-cTohBMFv.js";import"./index-DRKh_P65.js";import"./index-Bvbp85qh.js";import"./index-Db6OKbb2.js";import"./index-znX8omPX.js";import"./index-Cdz7ryRP.js";import"./index-41MzeGWi.js";import"./useToggle-QqWvE8dJ.js";import"./check-DEK-IAcd.js";import"./index-DcATTN8n.js";import"./chevron-down-BzZnPnW8.js";import"./DatePicker-DDTcd3-v.js";import"./chevron-right-DfE5EvRW.js";const k={title:"In Review/Filter/Light",component:t},a={render:function(r){const[o,l]=n.useState([]),[s,p]=n.useState(),d=i=>p(i),c=i=>{l(i)},m=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...r,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:m,onApply:c}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const q=["Light"];export{a as Light,q as __namedExportsOrder,k as default};
