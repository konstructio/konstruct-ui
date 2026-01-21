import{r as n,j as e}from"./iframe-BV61N9iv.js";import{F as t}from"./Filter-DZf_E4YZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-kK8ZFl5p.js";import"./loader-DH19ZKWn.js";import"./index-DvOec0CH.js";import"./index-qNDKP_kg.js";import"./x-DPOtP9lw.js";import"./createLucideIcon-BtJATfwv.js";import"./Button-DUbqm3K1.js";import"./Checkbox-G3lZSsbL.js";import"./index-BZ1GtygF.js";import"./index-Dt9fwwpA.js";import"./index-C9jgRrj1.js";import"./index-DRI_qBtl.js";import"./index-BR0NHxlJ.js";import"./index-SkMhvFgw.js";import"./useToggle-YfRRhnBG.js";import"./check-1jZG20uI.js";import"./index-DbSf99dR.js";import"./chevron-down-CGu3EDW7.js";import"./DatePicker-8SkJ06q3.js";import"./chevron-right-BswWVBfq.js";const q={title:"In Review/Filter/Dark",component:t},a={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[s,p]=n.useState(),d=r=>p(r),m=r=>{l(r)},c=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:c,onApply:m}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
