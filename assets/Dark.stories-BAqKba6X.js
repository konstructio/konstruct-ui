import{r as n,j as e}from"./iframe-DM-U7zlc.js";import{F as t}from"./Filter-GrnGjZew.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn42e07n.js";import"./Badge-DkIbCw9Y.js";import"./loader-D_xeEEKU.js";import"./index-26-tmQnE.js";import"./index-Jx0j8AOA.js";import"./x-C2dnpU5P.js";import"./createLucideIcon-DDCKOj0e.js";import"./Button-BeuM06A6.js";import"./Checkbox-DBj1RUuT.js";import"./index-D-bG0I7Z.js";import"./index-loobOMh0.js";import"./index-BW5l5oxW.js";import"./index-wCxUJ3Cv.js";import"./index-D14QYf6-.js";import"./index-CR-evOue.js";import"./useToggle-BmHF8z6i.js";import"./check-C17cDZIE.js";import"./index-BkpwSWGq.js";import"./chevron-down-BM03cgtr.js";import"./DatePicker-Bn25erUx.js";import"./chevron-right-BnDxS5gm.js";const q={title:"In Review/Filter/Dark",component:t},a={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[s,p]=n.useState(),d=r=>p(r),m=r=>{l(r)},c=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:c,onApply:m}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
