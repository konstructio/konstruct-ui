import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-CPAdfmkW.js";import{F as t}from"./Filter-DY3WV3-N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn42e07n.js";import"./Badge-B5hhKbVQ.js";import"./index-Cqu8WUbq.js";import"./index-BVXJ1bDm.js";import"./createLucideIcon-DZ5yy3em.js";import"./Button-ByC-SVYm.js";import"./Checkbox-CSnZz5o6.js";import"./index-MEYe9NrG.js";import"./index-BoiKu0vs.js";import"./index-CjgPh0w-.js";import"./index-CDXkd6Ph.js";import"./index-Dx3NjfAg.js";import"./index-CuC4zjgn.js";import"./useToggle-CH2fS-AW.js";import"./check-Cl4QDYT1.js";import"./index-csDfGvUF.js";import"./chevron-down-BXtuXqaq.js";import"./DatePicker-CADVpbyC.js";const I={title:"In Review/Filter",component:t},a={render:function(r){const[o,l]=i.useState([]),[s,p]=i.useState(),d=n=>p(n),c=n=>{l(n)},m=i.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:e.jsxs(t,{...r,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:m,onApply:c}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const $=["Filter"];export{a as Filter,$ as __namedExportsOrder,I as default};
