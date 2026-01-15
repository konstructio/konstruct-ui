import{r as n,j as e}from"./iframe-6u9WOm73.js";import{F as t}from"./Filter-D7Vabd-X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-7A89sm.js";import"./Badge-BGwAXeXW.js";import"./loader-BG98Twri.js";import"./index-Cspk0_eg.js";import"./index-CQcYP0zm.js";import"./x-B5-vbpoB.js";import"./createLucideIcon-CMEBpuiv.js";import"./Button-ujT85EUB.js";import"./Checkbox-83Ul8MqY.js";import"./index-ctvKEr8z.js";import"./index-ClYehXzk.js";import"./index-Bz5XYtw7.js";import"./index-C_3LLnZ7.js";import"./index-B5F8cXZ3.js";import"./index-BKesjogn.js";import"./useToggle-BvjTvfej.js";import"./check-C1jLJTAl.js";import"./index-Dy0v-Vbr.js";import"./chevron-down-DhGn4dOT.js";import"./DatePicker-CUWqru5V.js";import"./chevron-right-CUQbLB1z.js";const q={title:"In Review/Filter/Dark",component:t},a={parameters:{theme:"dark"},render:function(i){const[o,l]=n.useState([]),[s,p]=n.useState(),d=r=>p(r),m=r=>{l(r)},c=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(t,{...i,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:c,onApply:m}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
