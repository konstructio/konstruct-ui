import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-CzfYjoy5.js";import{F as t}from"./Filter-CBublF8Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn42e07n.js";import"./Badge-D8mI-KhQ.js";import"./index-D7PY-SFX.js";import"./index-ClRzyIzX.js";import"./createLucideIcon-Dnu-crZp.js";import"./Button-D1orZqQu.js";import"./Checkbox-Ci0XajaP.js";import"./index-48vO_EMB.js";import"./index-6PwgYQni.js";import"./index-AsnFBT1T.js";import"./index-4U-7P0bh.js";import"./index-BsB_GBdC.js";import"./useToggle-DpfiFSOR.js";import"./check-7s7ewUDs.js";import"./index-D75L5d-J.js";import"./chevron-down-968akryy.js";import"./DatePicker-DpVx30I-.js";const _={title:"In Review/Filter",component:t},a={render:function(r){const[o,l]=i.useState([]),[s,p]=i.useState(),d=n=>p(n),c=n=>{l(n)},m=i.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:e.jsxs(t,{...r,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:m,onApply:c}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    return <div className="max-w-[350px] flex flex-col gap-2">
        <FilterComponent {...args}>
          <FilterComponent.BadgeMultiSelect label="Status" options={options} onApply={onApplyBadge} />
          <FilterComponent.DateFilterDropdown label="Created" onApply={onApplyDate} />
          <FilterComponent.ResetButton disabled={!date && selectedStatus.length === 0} />
        </FilterComponent>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const I=["Filter"];export{a as Filter,I as __namedExportsOrder,_ as default};
