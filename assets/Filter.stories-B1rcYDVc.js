import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-dm7ZunXY.js";import{F as t}from"./Filter-Dom2CAKw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn42e07n.js";import"./Badge-BWmYDCew.js";import"./loader-Cm9xtSy8.js";import"./index-BJYrpXI4.js";import"./index-Df60jC5Z.js";import"./createLucideIcon-D4xCyUzk.js";import"./Button-BOFkpHOA.js";import"./Checkbox-BKSEjOjH.js";import"./index-CjLumNyZ.js";import"./index-Bn809UG5.js";import"./index-Ck6kQNWE.js";import"./index-A3yGqmfB.js";import"./index-j7xBw2Vg.js";import"./index-C_9u_Lbw.js";import"./useToggle-BXM7CMM6.js";import"./check-cpeZTxG1.js";import"./index-zNsdyAP6.js";import"./chevron-down-BTA10pQ8.js";import"./DatePicker-iUG75x1p.js";const $={title:"In Review/Filter",component:t},a={render:function(r){const[o,l]=n.useState([]),[s,p]=n.useState(),d=i=>p(i),c=i=>{l(i)},m=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:e.jsxs(t,{...r,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:m,onApply:c}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const k=["Filter"];export{a as Filter,k as __namedExportsOrder,$ as default};
