import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-BMXKAMB9.js";import{F as t}from"./Filter-CG3zrD7G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn42e07n.js";import"./Badge-XKQK8Vwq.js";import"./index-CoCdh8rt.js";import"./index-BFzgEiTr.js";import"./createLucideIcon-HYzQZxWR.js";import"./Button-DKVlLj91.js";import"./Checkbox-C3c8cdsi.js";import"./index-DFOQBwoU.js";import"./index-DfXB-iMf.js";import"./index-Dos7AJl6.js";import"./index-CVXawrhH.js";import"./index-COJpI-KJ.js";import"./useToggle-13SMj6hu.js";import"./check-Bi25ZJUB.js";import"./index-DCPe9Z67.js";import"./chevron-down-Cv3JbVzx.js";import"./DatePicker-Pf7hqv8F.js";const _={title:"In Review/Filter",component:t},a={render:function(r){const[o,l]=i.useState([]),[s,p]=i.useState(),d=n=>p(n),c=n=>{l(n)},m=i.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:e.jsxs(t,{...r,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:m,onApply:c}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
