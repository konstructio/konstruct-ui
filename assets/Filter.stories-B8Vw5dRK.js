import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-vxWk8FGT.js";import{F as t}from"./Filter-nPjFxxYy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn42e07n.js";import"./Badge-CPuCMVWz.js";import"./loader-D8deDtwz.js";import"./index-B_NMQek5.js";import"./index-BkGIZr08.js";import"./createLucideIcon-DaK-lSoJ.js";import"./Button-cXIQZ-87.js";import"./Checkbox-GL8nXfJK.js";import"./index-Cr4JdZed.js";import"./index-BgHtQDMC.js";import"./index-CzQ24BDP.js";import"./index-B9JH2LrI.js";import"./index-BbUO2mgS.js";import"./index-Ch4mq7eY.js";import"./useToggle-C2trC-FN.js";import"./check-BcUn6zpa.js";import"./index-ClBws3XH.js";import"./chevron-down-BmiURt6P.js";import"./DatePicker-D8sQ1D6S.js";const $={title:"In Review/Filter",component:t},a={render:function(r){const[o,l]=n.useState([]),[s,p]=n.useState(),d=i=>p(i),c=i=>{l(i)},m=n.useMemo(()=>[{id:"creating",label:"Creating",variant:"warning"},{id:"deleting",label:"Deleting",variant:"danger"},{id:"failed",label:"Failed",variant:"danger"},{id:"pending",label:"Pending",variant:"info"},{id:"ready",label:"Ready",variant:"success"},{id:"retrying",label:"Retrying",variant:"warning"}],[]);return e.jsx("div",{className:"max-w-[350px] flex flex-col gap-2",children:e.jsxs(t,{...r,children:[e.jsx(t.BadgeMultiSelect,{label:"Status",options:m,onApply:c}),e.jsx(t.DateFilterDropdown,{label:"Created",onApply:d}),e.jsx(t.ResetButton,{disabled:!s&&o.length===0})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
